class I18n {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || 'en';
    this.init();
  }

  getStoredLanguage() {
    return localStorage.getItem('bingo-language');
  }

  setStoredLanguage(lang) {
    localStorage.setItem('bingo-language', lang);
  }

  init() {
    this.updateContent();
    this.createLanguageSelector();
  }

  changeLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      this.setStoredLanguage(lang);
      this.updateContent();
      this.updateLanguageSelector();
      document.documentElement.lang = lang;
    }
  }

  t(key) {
    return translations[this.currentLanguage]?.[key] || translations['en'][key] || key;
  }

  updateContent() {
    // Update document title
    document.title = this.t('title');
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (element.tagName === 'IMG') {
        element.alt = this.t(key);
        // Handle store badges
        if (element.classList.contains('app-store-badge')) {
          this.updateAppStoreBadge(element);
        } else if (element.classList.contains('google-play-badge')) {
          this.updateGooglePlayBadge(element);
        }
      } else {
        element.textContent = this.t(key);
      }
    });
  }

  updateAppStoreBadge(element) {
    const badgeUrls = {
      'en': 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1570838400',
      'es': 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-es?size=250x83&amp;releaseDate=1570838400',
      'fr': 'https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83&amp;releaseDate=1570838400'
    };
    element.src = badgeUrls[this.currentLanguage] || badgeUrls['en'];
  }

  updateGooglePlayBadge(element) {
    const badgeUrls = {
      'en': 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
      'es': 'https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png', 
      'fr': 'https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png'
    };
    element.src = badgeUrls[this.currentLanguage] || badgeUrls['en'];
  }

  createLanguageSelector() {
    const header = document.querySelector('header .container');
    if (!header) return;

    const languageSelector = document.createElement('div');
    languageSelector.className = 'language-selector fixed top-4 right-4 z-50';
    languageSelector.innerHTML = `
      <div class="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
        <button class="lang-btn px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors" data-lang="en">EN</button>
        <button class="lang-btn px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors" data-lang="es">ES</button>
        <button class="lang-btn px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors" data-lang="fr">FR</button>
      </div>
    `;

    document.body.appendChild(languageSelector);

    // Add event listeners
    const buttons = languageSelector.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        this.changeLanguage(lang);
      });
    });

    this.updateLanguageSelector();
  }

  updateLanguageSelector() {
    const buttons = document.querySelectorAll('.lang-btn, .language-btn');
    buttons.forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === this.currentLanguage) {
        btn.classList.add('bg-bingo-purple', 'text-white');
        btn.classList.remove('hover:bg-gray-100', 'text-gray-600', 'hover:text-bingo-purple');
      } else {
        btn.classList.remove('bg-bingo-purple', 'text-white');
        btn.classList.add('hover:bg-gray-100', 'text-gray-600', 'hover:text-bingo-purple');
      }
    });
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});