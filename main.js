

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.containermain');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});


// **************NAV********************


const home = document.querySelector(".containermain");
const finViz = document.getElementById("containerfv");
const webDev = document.getElementById("containerwd");
const aboutMe = document.getElementById("containeram");
const contactMe = document.getElementById("containerco");

//HOME BUTTON!!!!!!!!!!!!!!!!!!!!!

function goHome() {
  finViz.classList.add("animated", "fadeOut");
  webDev.classList.add("animated", "fadeOut");
  aboutMe.classList.add("animated", "fadeOut");
  contactMe.classList.add("animated", "fadeOut");
    setTimeout(showHome, 1600);
  }

function showHome(){
  home.classList.add("animated", "fadeIn");
  finViz.style.display == "none";  
  webDev.style.display == "none";
  aboutMe.style.display == "none";
  contactMe.style.display == "none";
  home.classList.remove("animated", "fadeOut");
  home.style.display = "block";
}


// FINVIZ START!!!!!!!!!!!!!!!!!!!!!!!!!

const item11 = document.getElementById("item11");
const item12 = document.getElementById("item12");

function startFinViz(){
  home.classList.remove("animated", "fadeIn");
  webDev.classList.remove("animated", "fadeIn");
  aboutMe.classList.remove("animated", "fadeIn");
  contactMe.classList.remove("animated", "fadeIn");
  home.classList.add("animated", "fadeOut");
  webDev.classList.add("animated", "fadeOut");
  aboutMe.classList.add("animated", "fadeOut");
  contactMe.classList.add("animated", "fadeOut");
    setTimeout(showFinViz, 1400);
  }

function showFinViz(){
  home.style.display = "none";
  webDev.style.display = "none";
  aboutMe.style.display = "none";
  contactMe.style.display = "none";
  finViz.style.display = "grid";
  finViz.classList.add("animated", "fadeIn");
  finViz.classList.remove("animated", "fadeOut");
  setTimeout(showItem11, 800);
}

function showItem11(){
  item11.classList.add("animated", "fadeIn");
  item11.style.display = "block";
  setTimeout(showItem12, 800);
}

function showItem12(){
  item12.classList.add("animated", "fadeIn");
  item12.style.display = "block";
  // setTimeout(showItem13, 800);
}

 
// WEBDEV START!!!!!!!!!!!!!!!!!!!!!!!!!

const item21 = document.getElementById("item21");
const item22 = document.getElementById("item22");
const item23 = document.getElementById("item23");


function startWebDev() {
  home.classList.remove("animated", "fadeIn");
  finViz.classList.remove("animated", "fadeIn");
  aboutMe.classList.remove("animated", "fadeIn");
  contactMe.classList.remove("animated", "fadeIn");
  home.classList.add("animated", "fadeOut");
  finViz.classList.add("animated", "fadeOut");
  aboutMe.classList.add("animated", "fadeOut");
  contactMe.classList.add("animated", "fadeOut");
  setTimeout(showWebDev, 1400);

  }

  function showWebDev(){
    home.style.display = "none";
    finViz.style.display = "none";
    aboutMe.style.display = "none";
    contactMe.style.display = "none";
    webDev.style.display = "grid";
    webDev.classList.add("animated", "fadeIn");
    webDev.classList.remove("animated", "fadeOut");
    $('[data-fancybox="group1"]').fancybox({
      loop : true
    });
  setTimeout(showItem21, 500);
  }
  function showItem21(){
    item21.classList.add("animated", "fadeIn");
    item21.style.display = "block";
    setTimeout(showItem22, 500);
  }
  
  function showItem22(){
    item22.classList.add("animated", "fadeIn");
    item22.style.display = "block";
    setTimeout(showItem23, 500);
  }
  function showItem23(){
    item23.classList.add("animated", "fadeIn");
    item23.style.display = "block";
    setTimeout(showItem24, 500);
  }
  function showItem24(){
    item24.classList.add("animated", "fadeIn");
    item24.style.display = "block";
    setTimeout(showItem25, 500);
  }
  function showItem25(){
    item25.classList.add("animated", "fadeIn");
    item25.style.display = "block";
    setTimeout(showItem26, 500);
  }
  function showItem26(){
    item26.classList.add("animated", "fadeIn");
    item26.style.display = "block";
    setTimeout(showItem27, 500);
  }
  function showItem27(){
    item27.classList.add("animated", "fadeIn");
    item27.style.display = "block";
    setTimeout(showItem28, 500);
  }
  function showItem28(){
    item28.classList.add("animated", "fadeIn");
    item28.style.display = "block";
    setTimeout(showItem29, 500);
  }
  function showItem29(){
    item29.classList.add("animated", "fadeIn");
    item29.style.display = "block";
    setTimeout(showItem210, 500);
  }
  function showItem210(){
    item210.classList.add("animated", "fadeIn");
    item210.style.display = "block";
    setTimeout(showItem211, 500);
  }
  function showItem211(){
    item211.classList.add("animated", "fadeIn");
    item211.style.display = "block";
    setTimeout(showItem212, 500);
  }
  function showItem212(){
    item212.classList.add("animated", "fadeIn");
    item212.style.display = "block";
    // setTimeout(showItem28, 500);
  }

function startAboutMe(){
  home.classList.remove("animated", "fadeIn");
  finViz.classList.remove("animated", "fadeIn");
  webDev.classList.remove("animated", "fadeIn");
  contactMe.classList.remove("animated", "fadeIn");
  home.classList.add("animated", "fadeOut");
  finViz.classList.add("animated", "fadeOut");
  webDev.classList.add("animated", "fadeOut");
  contactMe.classList.add("animated", "fadeOut");
  setTimeout(showAboutMe, 1000);

  }

  function showAboutMe(){
    home.style.display = "none";
    finViz.style.display = "none";
    webDev.style.display = "none";
    contactMe.style.display = "none";
    aboutMe.style.display = "grid";
    aboutMe.classList.add("animated", "fadeIn");
    aboutMe.classList.remove("animated", "fadeOut");
    setTimeout(showItem31, 500);
  }
  function showItem31(){
    item31.classList.add("animated", "fadeIn");
    item31.style.display = "block";
    setTimeout(showItem32, 500);
  }
  
  function showItem32(){
    item32.classList.add("animated", "fadeIn");
    item32.style.display = "block";

  }

  function startContact(){
    console.log('contact clicked...');
    home.classList.remove("animated", "fadeIn");
    finViz.classList.remove("animated", "fadeIn");
    webDev.classList.remove("animated", "fadeIn");
    aboutMe.classList.remove("animated", "fadeIn");
    home.classList.add("animated", "fadeOut");
    finViz.classList.add("animated", "fadeOut");
    webDev.classList.add("animated", "fadeOut");
    aboutMe.classList.add("animated", "fadeOut");
    setTimeout(showContact, 1200);
  
    }
  
    function showContact(){
      console.log('contact clicked...');
      home.style.display = "none";
      finViz.style.display = "none";
      webDev.style.display = "none";
      aboutMe.style.display = "none";
      contactMe.style.display = "block";
      contactMe.classList.add("animated", "fadeIn");
      contactMe.classList.remove("animated", "fadeOut");
    
    }