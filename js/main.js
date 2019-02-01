const navIcon = document.getElementById("nav-icon");
const navMenu = document.getElementsByTagName('nav')[0];
const mainContent = document.getElementsByTagName('main')[0].children;
const closeButton = document.getElementsByClassName('close');
const homeContent = document.querySelector('.home-content');
const footer = document.querySelector('footer');

//animates the navigation icon
navIcon.addEventListener('click',()=> {
  navIcon.classList.toggle("change");
  navMenu.children[0].classList.toggle("changeNav");
  navMenu.previousElementSibling.classList.toggle("changeSubheading");

  //toggles the class of 'show' for the main content divs
  for (let i=0; i < mainContent.length; i++) {
    mainContent[i].classList.toggle('show');
  }

  //adds the class of 'slide in' when a nav item is clicked
  for (let i=0; i < navMenu.children[0].children.length; i++) {
    navMenu.children[0].children[i].addEventListener('touchmove', ()=> {

      mainContent[i].classList.toggle('slideIn');


      homeContent.style.position = 'fixed';
      footer.style.display = 'none';

      console.log([i]);
    });
  }

  for (let i=0; i < navMenu.children[0].children.length; i++) {
    navMenu.children[0].children[i].addEventListener('click', ()=> {

      mainContent[i].classList.toggle('slideIn');


      homeContent.style.position = 'fixed';
      footer.style.display = 'none';

      console.log([i]);
    });
  }









  // slides the content out by toggling the class of 'slide in' for touchscreens
  for (let i=0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('touchmove', ()=> {
      mainContent[i].classList.toggle('slideIn');

      homeContent.style.position = 'initial';
      footer.style.display = 'relative';

    });
  }
//slides the content out by clicking (desktop)
  for (let i=0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', ()=> {
      mainContent[i].classList.toggle('slideIn');

      homeContent.style.position = 'initial';
      footer.style.display = 'relative';

    });
  }

});



//video


  // 2. This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '400',
      width: '600',
      videoId: 'UjISkgBlJxc',
      playerVars: {
        controls: 1,
        showinfo: 0,
        color: 'white',

      }
    });


  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }
}
