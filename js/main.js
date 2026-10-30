/**
 * CHARLOTTE AUBERT - OSTÉOPATHE PARIS 16
 * Script principal (Navigation mobile, accordéons FAQ, accessibilité)
 * Zéro dépendance - Ultra-léger (<2 Ko)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile (Burger Toggle)
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (burgerBtn && mobileNav) {
    const toggleMenu = () => {
      const isOpen = burgerBtn.classList.toggle('open');
      mobileNav.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    burgerBtn.addEventListener('click', toggleMenu);

    // Fermer le menu lors du clic sur un lien du menu mobile
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileNav.classList.contains('open')) {
          toggleMenu();
        }
      });
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        toggleMenu();
      }
    });
  }

  // 2. Accordéons FAQ interactifs
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optionnel : fermer les autres accordéons
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Basculer l'accordéon actuel
        item.classList.toggle('active');
        questionBtn.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
      });
    }
  });

  // 3. Mise à jour automatique de l'année dans le pied de page
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
