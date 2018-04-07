const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementsByTagName('nav')[0];
const mainContent = document.getElementsByTagName('main')[0].children;
const closeButton = document.getElementsByClassName('close')
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  navMenu.classList.toggle("changeNav");
  navMenu.previousElementSibling.classList.toggle("changeSubheading");
  

  for (let i=0; i < mainContent.length; i++) {
    mainContent[i].classList.toggle('show');
  }

  for (let i=0; i < navMenu.children.length; i++) {
    navMenu.children[i].addEventListener('click', ()=> {
      mainContent[i].classList.toggle('slideIn');
      console.log([i]);
    });
  }

  for (let i=0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', ()=> {
      mainContent[i].classList.toggle('slideIn');
    });
  }
});
