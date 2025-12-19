// @ts-check
import {
  translations,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  APP_STORE_BADGE_URLS,
  GOOGLE_PLAY_BADGE_URLS
} from './translations.js';

/**
 * @typedef {import('./translations.js').Language} Language
 */

const STORAGE_KEY = 'bingo-language';

// Performance constants
const CAROUSEL_INTERVAL_MS = 5000;
const RESIZE_DEBOUNCE_MS = 250;
const SCROLL_OFFSET_PX = 20;
const TOTAL_REVIEWS = 5;

/** @type {Language} */
let currentLanguage = DEFAULT_LANGUAGE;

// Module-level state for cleanup
/** @type {number | undefined} */
let autoPlayInterval;
/** @type {(() => void) | undefined} */
let debouncedResizeHandler;
/** @type {{ reviewsPerSlide: number, totalSlides: number } | null} */
let cachedCarouselSettings = null;
/** @type {(() => void) | undefined} */
let visibilityHandler;

// Cleanup registry for event listeners
/** @type {Array<() => void>} */
let cleanupFunctions = [];

/**
 * Creates a debounced version of a function
 * @template {(...args: any[]) => void} T
 * @param {T} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {T} Debounced function
 */
function debounce(fn, delay) {
  /** @type {number | undefined} */
  let timeoutId;
  return /** @type {T} */ ((...args) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => fn(...args), delay);
  });
}

/**
 * Get the browser's preferred language
 * @returns {Language | null}
 */
function getBrowserLanguage() {
  const browserLang = navigator.language?.split('-')[0];
  if (browserLang && SUPPORTED_LANGUAGES.includes(/** @type {Language} */ (browserLang))) {
    return /** @type {Language} */ (browserLang);
  }
  return null;
}

/**
 * Get the stored language from localStorage, falling back to browser language
 * @returns {Language}
 */
function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(/** @type {Language} */ (stored))) {
      return /** @type {Language} */ (stored);
    }
  } catch (error) {
    console.warn('localStorage not available:', error);
  }

  // Fallback to browser language detection
  return getBrowserLanguage() || DEFAULT_LANGUAGE;
}

/**
 * Store the language preference in localStorage
 * @param {Language} lang
 */
function setStoredLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (error) {
    console.warn('Could not save language preference:', error);
  }
}

/**
 * Get translation for a key
 * @param {string} key
 * @returns {string}
 */
export function t(key) {
  return translations[currentLanguage]?.[key] || translations[DEFAULT_LANGUAGE][key] || key;
}

/**
 * Get current language
 * @returns {Language}
 */
export function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Update App Store badge URL based on current language
 * @param {HTMLImageElement} element
 */
function updateAppStoreBadge(element) {
  const url = APP_STORE_BADGE_URLS[currentLanguage] || APP_STORE_BADGE_URLS[DEFAULT_LANGUAGE];
  element.src = url;
}

/**
 * Update Google Play badge URL based on current language
 * @param {HTMLImageElement} element
 */
function updateGooglePlayBadge(element) {
  const url = GOOGLE_PLAY_BADGE_URLS[currentLanguage] || GOOGLE_PLAY_BADGE_URLS[DEFAULT_LANGUAGE];
  element.src = url;
}

/**
 * Update all translatable content in the DOM
 */
function updateContent() {
  // Update document title
  document.title = t('title');

  // Update document lang attribute
  document.documentElement.lang = currentLanguage;

  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (!key) return;

    if (element instanceof HTMLImageElement) {
      element.alt = t(key);
      // Handle store badges
      if (element.classList.contains('app-store-badge')) {
        updateAppStoreBadge(element);
      } else if (element.classList.contains('google-play-badge')) {
        updateGooglePlayBadge(element);
      }
    } else {
      element.textContent = t(key);
    }
  });
}

/**
 * Update language selector button states
 */
function updateLanguageSelector() {
  const buttons = document.querySelectorAll('.lang-btn, .language-btn');
  buttons.forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === currentLanguage) {
      btn.classList.add('bg-white/40', 'text-white', 'font-semibold');
      btn.classList.remove('hover:bg-white/30', 'hover:text-white', 'text-white/90');
    } else {
      btn.classList.remove('bg-white/40', 'text-white', 'font-semibold');
      btn.classList.add('hover:bg-white/30', 'hover:text-white', 'text-white/90');
    }
  });
}

/**
 * Change the current language
 * @param {string} lang
 */
export function changeLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(/** @type {Language} */ (lang))) {
    console.warn(`Unsupported language: ${lang}`);
    return;
  }

  currentLanguage = /** @type {Language} */ (lang);
  setStoredLanguage(currentLanguage);
  updateContent();
  updateLanguageSelector();
}

/**
 * Create language selector and append to header
 */
function createLanguageSelector() {
  // Check if language selector already exists
  if (document.querySelector('.language-selector')) return;

  const header = document.querySelector('header');
  if (!header) return;

  const languageSelector = document.createElement('div');
  languageSelector.className = 'language-selector absolute top-4 right-4 z-20';
  languageSelector.setAttribute('role', 'navigation');
  languageSelector.setAttribute('aria-label', t('toggle_menu'));

  languageSelector.innerHTML = `
    <div class="bg-white/20 backdrop-blur-sm rounded-lg p-1 flex space-x-1 border border-white/30">
      <button class="lang-btn px-2 py-1 rounded text-xs font-medium text-white/90 hover:bg-white/30 hover:text-white transition-colors" data-lang="en" aria-label="English">EN</button>
      <button class="lang-btn px-2 py-1 rounded text-xs font-medium text-white/90 hover:bg-white/30 hover:text-white transition-colors" data-lang="es" aria-label="Español">ES</button>
      <button class="lang-btn px-2 py-1 rounded text-xs font-medium text-white/90 hover:bg-white/30 hover:text-white transition-colors" data-lang="fr" aria-label="Français">FR</button>
    </div>
  `;

  header.appendChild(languageSelector);

  // Add event listeners using event delegation
  languageSelector.addEventListener('click', (e) => {
    const target = /** @type {HTMLElement} */ (e.target);
    if (target.classList.contains('lang-btn')) {
      const lang = target.getAttribute('data-lang');
      if (lang) {
        changeLanguage(lang);
      }
    }
  });

  updateLanguageSelector();
}

/**
 * Initialize FAQ accordion functionality
 */
function initializeFAQ() {
  const faqButtons = document.querySelectorAll('.faq-button');

  faqButtons.forEach((button, index) => {
    const faqId = `faq-content-${index + 1}`;
    const content = button.parentElement?.querySelector('.faq-content');

    // Add ARIA attributes
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', faqId);
    button.id = `faq-btn-${index + 1}`;

    if (content) {
      content.id = faqId;
      content.setAttribute('role', 'region');
      content.setAttribute('aria-labelledby', `faq-btn-${index + 1}`);
    }

    // Named handler for cleanup
    const handleClick = () => {
      const faqContent = button.parentElement?.querySelector('.faq-content');
      const faqIcon = button.querySelector('.faq-icon svg');
      const isOpen = !faqContent?.classList.contains('hidden');

      // Update ARIA
      button.setAttribute('aria-expanded', String(!isOpen));

      // Toggle content visibility
      if (isOpen) {
        faqContent?.classList.add('hidden');
        if (faqIcon instanceof HTMLElement) {
          faqIcon.style.transform = 'rotate(0deg)';
        }
      } else {
        faqContent?.classList.remove('hidden');
        if (faqIcon instanceof HTMLElement) {
          faqIcon.style.transform = 'rotate(180deg)';
        }
      }
    };

    button.addEventListener('click', handleClick);

    // Register cleanup
    cleanupFunctions.push(() => {
      button.removeEventListener('click', handleClick);
    });
  });
}

/**
 * Get carousel settings based on viewport width (cached)
 * @returns {{ reviewsPerSlide: number, totalSlides: number }}
 */
function getCarouselSettings() {
  if (window.innerWidth >= 1024) {
    return { reviewsPerSlide: 3, totalSlides: Math.ceil(TOTAL_REVIEWS / 3) };
  }
  if (window.innerWidth >= 768) {
    return { reviewsPerSlide: 2, totalSlides: Math.ceil(TOTAL_REVIEWS / 2) };
  }
  return { reviewsPerSlide: 1, totalSlides: TOTAL_REVIEWS };
}

/**
 * Update cached carousel settings
 */
function updateCachedCarouselSettings() {
  cachedCarouselSettings = getCarouselSettings();
}

/**
 * Get cached carousel settings (or compute if not cached)
 * @returns {{ reviewsPerSlide: number, totalSlides: number }}
 */
function getCachedCarouselSettings() {
  if (!cachedCarouselSettings) {
    updateCachedCarouselSettings();
  }
  return /** @type {{ reviewsPerSlide: number, totalSlides: number }} */ (cachedCarouselSettings);
}

/**
 * Initialize reviews carousel
 */
function initializeReviewsCarousel() {
  const carousel = document.getElementById('reviewsCarousel');
  const prevButton = document.getElementById('prevReview');
  const nextButton = document.getElementById('nextReview');
  const dots = document.querySelectorAll('.carousel-dot');

  if (!carousel || !prevButton || !nextButton) return;

  // Add ARIA attributes
  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-label', t('customer_reviews'));
  carousel.setAttribute('aria-live', 'polite');
  prevButton.setAttribute('aria-label', t('previous_review'));
  nextButton.setAttribute('aria-label', t('next_review'));

  let currentSlide = 0;

  // Initialize cached settings
  updateCachedCarouselSettings();

  function updateCarousel() {
    const settings = getCachedCarouselSettings();
    const translateX = -(currentSlide * (100 / settings.reviewsPerSlide));
    if (carousel) carousel.style.transform = `translateX(${translateX}%)`;

    dots.forEach((dot, index) => {
      if (index < settings.totalSlides) {
        /** @type {HTMLElement} */ (dot).style.display = 'block';
        dot.setAttribute('aria-selected', index === currentSlide ? 'true' : 'false');
        dot.setAttribute('tabindex', index === currentSlide ? '0' : '-1');
        if (index === currentSlide) {
          dot.classList.remove('bg-gray-300');
          dot.classList.add('bg-bingo-purple');
        } else {
          dot.classList.remove('bg-bingo-purple');
          dot.classList.add('bg-gray-300');
        }
      } else {
        /** @type {HTMLElement} */ (dot).style.display = 'none';
      }
    });
  }

  function advanceSlide() {
    const settings = getCachedCarouselSettings();
    currentSlide = (currentSlide + 1) % settings.totalSlides;
    updateCarousel();
  }

  function startAutoPlay() {
    // Clear any existing interval first
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
    }
    autoPlayInterval = window.setInterval(advanceSlide, CAROUSEL_INTERVAL_MS);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = undefined;
    }
  }

  // Named handlers for cleanup
  const handleNextClick = () => {
    const settings = getCachedCarouselSettings();
    currentSlide = (currentSlide + 1) % settings.totalSlides;
    updateCarousel();
  };

  const handlePrevClick = () => {
    const settings = getCachedCarouselSettings();
    currentSlide = (currentSlide - 1 + settings.totalSlides) % settings.totalSlides;
    updateCarousel();
  };

  nextButton.addEventListener('click', handleNextClick);
  prevButton.addEventListener('click', handlePrevClick);

  // Store dot handlers for cleanup
  /** @type {Array<{ dot: Element, handler: () => void }>} */
  const dotHandlers = [];

  dots.forEach((dot, index) => {
    const handler = () => {
      const settings = getCachedCarouselSettings();
      if (index < settings.totalSlides) {
        currentSlide = index;
        updateCarousel();
      }
    };
    dot.addEventListener('click', handler);
    dotHandlers.push({ dot, handler });
  });

  // Handle window resize with debounce
  function handleResize() {
    currentSlide = 0;
    updateCachedCarouselSettings();
    updateCarousel();
    startAutoPlay();
  }

  debouncedResizeHandler = debounce(handleResize, RESIZE_DEBOUNCE_MS);
  window.addEventListener('resize', debouncedResizeHandler);

  // Page Visibility API: pause/resume auto-play when tab is inactive/active
  visibilityHandler = () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  };
  document.addEventListener('visibilitychange', visibilityHandler);

  // Register cleanup
  cleanupFunctions.push(() => {
    nextButton.removeEventListener('click', handleNextClick);
    prevButton.removeEventListener('click', handlePrevClick);
    dotHandlers.forEach(({ dot, handler }) => {
      dot.removeEventListener('click', handler);
    });
  });

  // Start auto-play
  startAutoPlay();
  updateCarousel();
}

/**
 * Initialize smooth scrolling navigation with Intersection Observer
 */
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');

  // Store handlers for cleanup
  /** @type {Array<{ link: Element, handler: (e: Event) => void }>} */
  const linkHandlers = [];

  navLinks.forEach(link => {
    const handler = (/** @type {Event} */ e) => {
      e.preventDefault();

      const href = link.getAttribute('href');
      if (!href) return;

      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const nav = document.querySelector('nav');
        const navHeight = nav?.offsetHeight || 0;
        const targetPosition = targetSection.offsetTop - navHeight - SCROLL_OFFSET_PX;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        updateActiveNavLink(/** @type {HTMLElement} */ (link));
      }
    };
    link.addEventListener('click', handler);
    linkHandlers.push({ link, handler });
  });

  // Use Intersection Observer for better performance instead of scroll events
  const sectionIds = ['apps', 'advantages', 'qr-tutorial', 'reviews', 'faq', 'team'];
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter((/** @type {HTMLElement | null} */ el) => el !== null);

  /** @type {IntersectionObserver | null} */
  let sectionObserver = null;

  if (sections.length > 0) {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (activeLink) {
              updateActiveNavLink(/** @type {HTMLElement} */ (activeLink));
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach(section => {
      if (section) sectionObserver?.observe(section);
    });
  }

  // Register cleanup
  cleanupFunctions.push(() => {
    linkHandlers.forEach(({ link, handler }) => {
      link.removeEventListener('click', handler);
    });
    if (sectionObserver) {
      sectionObserver.disconnect();
    }
  });
}

/**
 * Update active navigation link
 * @param {HTMLElement} activeLink
 */
function updateActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('text-bingo-purple', 'bg-purple-50');
    link.classList.add('text-gray-700');
  });

  activeLink.classList.remove('text-gray-700');
  activeLink.classList.add('text-bingo-purple', 'bg-purple-50');
}

/**
 * Initialize mobile menu
 */
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!mobileMenuBtn || !mobileMenu) return;

  // Add ARIA attributes
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
  mobileMenuBtn.setAttribute('aria-controls', 'mobileMenu');
  mobileMenuBtn.setAttribute('aria-label', t('toggle_menu'));

  // Named handler for cleanup
  const handleMenuToggle = () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', String(isHidden));
  };

  mobileMenuBtn.addEventListener('click', handleMenuToggle);

  // Store handlers for cleanup
  /** @type {Array<{ link: Element, handler: () => void }>} */
  const linkHandlers = [];

  // Close mobile menu when clicking on a nav link
  const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');
  mobileNavLinks.forEach(link => {
    const handler = () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    };
    link.addEventListener('click', handler);
    linkHandlers.push({ link, handler });
  });

  // Register cleanup
  cleanupFunctions.push(() => {
    mobileMenuBtn.removeEventListener('click', handleMenuToggle);
    linkHandlers.forEach(({ link, handler }) => {
      link.removeEventListener('click', handler);
    });
  });
}

/**
 * Initialize all i18n functionality
 */
export function initI18n() {
  currentLanguage = getStoredLanguage();
  updateContent();
  createLanguageSelector();
  initializeFAQ();
  initializeReviewsCarousel();
  initializeSmoothScrolling();
  initializeMobileMenu();
}

/**
 * Cleanup all i18n functionality (for hot reload or SPA navigation)
 * Removes event listeners and clears intervals to prevent memory leaks
 */
export function destroyI18n() {
  // Clear carousel auto-play interval
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = undefined;
  }

  // Remove resize listener
  if (debouncedResizeHandler) {
    window.removeEventListener('resize', debouncedResizeHandler);
    debouncedResizeHandler = undefined;
  }

  // Remove visibility change listener
  if (visibilityHandler) {
    document.removeEventListener('visibilitychange', visibilityHandler);
    visibilityHandler = undefined;
  }

  // Execute all registered cleanup functions
  cleanupFunctions.forEach(cleanup => cleanup());
  cleanupFunctions = [];

  // Remove language selector element from DOM
  const languageSelector = document.querySelector('.language-selector');
  if (languageSelector) {
    languageSelector.remove();
  }

  // Clear cached settings
  cachedCarouselSettings = null;
}
