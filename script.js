// Mobile - Opening Menu //


const menuBtn = document.getElementById("menu-btn");
const dropMenuClassList = document.getElementsByClassName("mobile-drop-menu");
const dropMenu = dropMenuClassList[0];
const main = document.querySelector("main");
const heroImageArray = document.getElementsByClassName("hero-images");
const heroImages = heroImageArray[0];
let menuOpen = false;


function handleBtnOpen(){
    if (!menuOpen){
        menuBtn.classList.add("open");
        dropMenu.classList.add("open");
        main.classList.add("open");
        heroImages.classList.add("open");
        
        menuOpen = true;
    }else{
        menuBtn.classList.remove("open");
        dropMenu.classList.remove("open");
        main.classList.remove("open");
        heroImages.classList.remove("open");
        menuOpen = false;
    }
};

menuBtn.addEventListener("click", handleBtnOpen);

