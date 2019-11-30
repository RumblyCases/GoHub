const btnToggleMenu = document.querySelector('.btn-toggle-menu');
const dropDownMenu = document.querySelector('.dropdown-menu');

btnToggleMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  dropDownMenu.classList.toggle('show');
});