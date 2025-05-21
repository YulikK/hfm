import './styles.scss';

const MOBILE_MENU_VIEW = 1020;

document.addEventListener('DOMContentLoaded', () => {
  const { body } = document;
  const burgerButton = body.querySelector('#burger');
  const mobileMenu = body.querySelector('#mobile-menu');
  const closeButton = body.querySelector('#close');
  const overlay = document.querySelector('.mobile-menu-overlay');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    overlay.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  };

  const handleResize = () => {
    if (
      window.innerWidth > MOBILE_MENU_VIEW &&
      mobileMenu.classList.contains('is-open')
    ) {
      closeMenu();
    }
  };

  burgerButton.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  window.addEventListener('resize', handleResize);
});
