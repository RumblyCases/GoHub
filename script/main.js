function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('btn-burger-menu');
  let links = menu.find('burger-menu-line');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu-active');
    /* if (menu.hasClass('burger-menu-active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    } */
  }
}

burgerMenu('.burger-menu');