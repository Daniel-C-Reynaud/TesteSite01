const dropdownButtons = document.querySelectorAll('.drop-down');
const submenus = document.querySelectorAll('.sub-menu');


dropdownButtons.forEach((button, index) => {
   button.addEventListener('click', () => {
      submenus[index].classList.toggle('show');
   });
});

