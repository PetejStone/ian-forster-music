const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementsByTagName('nav')[0];
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  navMenu.classList.toggle("changeNav");
  navMenu.previousElementSibling.classList.toggle("changeSubheading");
  navMenu.previousElementSibling.previousElementSibling.classList.toggle("changeHeading");
  console.log('change');
});
