// Sticky Navbar

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

nav.classList.toggle("scrolled",window.scrollY>40);

});

// Mobile Menu

const menu=document.querySelector(".menu");

const navLinks=document.querySelector("nav ul");

menu.onclick=()=>{

navLinks.classList.toggle("active");

};
