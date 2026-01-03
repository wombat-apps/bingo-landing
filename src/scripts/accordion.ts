/**
 * Shared FAQ accordion functionality.
 */

export function initFaqAccordion(): void {
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling as HTMLElement;
      const icon = button.querySelector('.faq-icon');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      faqButtons.forEach(otherButton => {
        if (otherButton !== button) {
          const otherContent = otherButton.nextElementSibling as HTMLElement;
          const otherIcon = otherButton.querySelector('.faq-icon');
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
