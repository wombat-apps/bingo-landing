/**
 * Shared FAQ accordion functionality.
 */

export function initFaqAccordion(): void {
  const faqButtons = document.querySelectorAll('.faq-button');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const faqNumber = button.getAttribute('data-faq');
      const content = document.getElementById(`faq-content-${faqNumber}`);
      const icon = button.querySelector('.faq-icon svg');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      faqButtons.forEach(otherButton => {
        if (otherButton !== button) {
          const otherNumber = otherButton.getAttribute('data-faq');
          const otherContent = document.getElementById(`faq-content-${otherNumber}`);
          const otherIcon = otherButton.querySelector('.faq-icon svg');
          if (otherContent && otherIcon) {
            otherContent.classList.add('hidden');
            otherIcon.classList.remove('rotate-180');
            otherButton.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Toggle current FAQ
      if (content && icon) {
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
        button.setAttribute('aria-expanded', (!isExpanded).toString());
      }
    });
  });
}
