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

/** @type {Language} */
let currentLanguage = DEFAULT_LANGUAGE;

/**
 * Get the stored language from localStorage
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
  return DEFAULT_LANGUAGE;
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

    button.addEventListener('click', function () {
      const faqContent = this.parentElement?.querySelector('.faq-content');
      const faqIcon = this.querySelector('.faq-icon svg');
      const isOpen = !faqContent?.classList.contains('hidden');

      // Update ARIA
      this.setAttribute('aria-expanded', String(!isOpen));

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
    });
  });
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
  const totalReviews = 5;

  function getCarouselSettings() {
    if (window.innerWidth >= 1024) {
      return { reviewsPerSlide: 3, totalSlides: Math.ceil(totalReviews / 3) };
    }
    if (window.innerWidth >= 768) {
      return { reviewsPerSlide: 2, totalSlides: Math.ceil(totalReviews / 2) };
    }
    return { reviewsPerSlide: 1, totalSlides: totalReviews };
  }

  function updateCarousel() {
    const settings = getCarouselSettings();
    const translateX = -(currentSlide * (100 / settings.reviewsPerSlide));
    carousel.style.transform = `translateX(${translateX}%)`;

    dots.forEach((dot, index) => {
      if (index < settings.totalSlides) {
        /** @type {HTMLElement} */ (dot).style.display = 'block';
        dot.setAttribute('aria-current', index === currentSlide ? 'true' : 'false');
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

  nextButton.addEventListener('click', () => {
    const settings = getCarouselSettings();
    currentSlide = (currentSlide + 1) % settings.totalSlides;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    const settings = getCarouselSettings();
    currentSlide = (currentSlide - 1 + settings.totalSlides) % settings.totalSlides;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const settings = getCarouselSettings();
      if (index < settings.totalSlides) {
        currentSlide = index;
        updateCarousel();
      }
    });
  });

  // Auto-play carousel
  let autoPlayInterval = setInterval(() => {
    const settings = getCarouselSettings();
    currentSlide = (currentSlide + 1) % settings.totalSlides;
    updateCarousel();
  }, 5000);

  // Handle window resize
  window.addEventListener('resize', () => {
    currentSlide = 0;
    updateCarousel();
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      const settings = getCarouselSettings();
      currentSlide = (currentSlide + 1) % settings.totalSlides;
      updateCarousel();
    }, 5000);
  });

  updateCarousel();
}

/**
 * Initialize smooth scrolling navigation
 */
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href');
      if (!href) return;

      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const nav = document.querySelector('nav');
        const navHeight = nav?.offsetHeight || 0;
        const targetPosition = targetSection.offsetTop - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        updateActiveNavLink(/** @type {HTMLElement} */ (this));
      }
    });
  });

  window.addEventListener('scroll', updateActiveNavLinkOnScroll);
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
 * Update active nav link based on scroll position
 */
function updateActiveNavLinkOnScroll() {
  const sections = ['apps', 'advantages', 'qr-tutorial', 'reviews', 'faq', 'team'];
  const nav = document.querySelector('nav');
  const navHeight = nav?.offsetHeight || 0;
  const scrollPosition = window.scrollY + navHeight + 100;

  let activeSection = '';

  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection = sectionId;
      }
    }
  });

  if (activeSection) {
    const activeLink = document.querySelector(`.nav-link[href="#${activeSection}"]`);
    if (activeLink) {
      updateActiveNavLink(/** @type {HTMLElement} */ (activeLink));
    }
  }
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

  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', String(isHidden));
  });

  // Close mobile menu when clicking on a nav link
  const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
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
