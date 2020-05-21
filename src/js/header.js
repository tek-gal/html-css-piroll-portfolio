const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
  // if (menu.style.visibility === 'visible') {
  //   burger.style.position = 'fixed';
  //   burger.style.right = '7.2vw';
  // } else {
  //   burger.style.position = 'relative';
  //   burger.style.right = '0';
  // }
});
