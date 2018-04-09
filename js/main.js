const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementsByTagName('nav')[0];
const mainContent = document.getElementsByTagName('main')[0].children;
const closeButton = document.getElementsByClassName('close');
const homeContent = document.querySelector('body');

//animates the navigation icon
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  navMenu.classList.toggle("changeNav");
  navMenu.previousElementSibling.classList.toggle("changeSubheading");

  //toggles the class of 'show' for the main content divs
  for (let i=0; i < mainContent.length; i++) {
    mainContent[i].classList.toggle('show');
  }

  //adds the class of 'slide in' when a nav item is clicked
  for (let i=0; i < navMenu.children.length; i++) {
    navMenu.children[i].addEventListener('click', ()=> {
      mainContent[i].classList.toggle('slideIn');
      homeContent.classList.toggle('stop-scrolling');
      console.log([i]);
    });
  }

  // slides the content out by toggling the class of 'slide in'
  for (let i=0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', ()=> {
      mainContent[i].classList.toggle('slideIn');
      homeContent.classList.toggle('stop-scrolling');
    });
  }
});
