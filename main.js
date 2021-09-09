AOS.init();

const sandwich = document.querySelector('.sen');
const close = document.querySelector('.x');
const menu = document.querySelector('.nav');
const all = document.querySelectorAll('.homePage , .aboutMePage , .projectsPage , .profilePage , .footer');// 



//close menu by click anywhere 

all[0].addEventListener("click" , e => {
    document.querySelector('.sen').style.display = "flex";
    menu.style.width = "0vw";
});
all[1].addEventListener("click" , e => {
    document.querySelector('.sen').style.display = "flex";
    menu.style.width = "0vw";
});
all[2].addEventListener("click" , e => {
    document.querySelector('.sen').style.display = "flex";
    menu.style.width = "0vw";
});
all[3].addEventListener("click" , e => {
    document.querySelector('.sen').style.display = "flex";
    menu.style.width = "0vw";
});
all[4].addEventListener("click" , e => {
    document.querySelector('.sen').style.display = "flex";
    menu.style.width = "0vw";
    });

//sendwich menu

sandwich.addEventListener("click", function() {
   
    document.querySelector('.sen').style.display = "none";
    document.querySelector('.x').style.display = "flex";
    menu.style.width = "40vw"; 
    });

close.addEventListener("click", function() {
   
        document.querySelector('.x').style.display = "none";
        document.querySelector('.sen').style.display = "flex";
        menu.style.width = "0vw";
        
        });



//preloader

const rootElement = document.documentElement;

window.addEventListener('load', (e) => {
    document.querySelector(".container").style.display = "none"; 
    rootElement.style.overflowY = "scroll";
    
  });

  
