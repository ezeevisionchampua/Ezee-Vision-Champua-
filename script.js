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
/* Loader */

window.onload=function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},600);

},700);

}

/* Back To Top */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* Mouse Glow */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* Reveal Animation */

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(box=>{

const top=box.getBoundingClientRect().top;

if(top<window.innerHeight-100){

box.classList.add("active");

}

});

});
