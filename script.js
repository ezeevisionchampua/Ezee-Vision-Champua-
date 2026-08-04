console.log("EZEE VISION CHAMPUA Loaded");
const search = document.getElementById("searchInput");

search?.addEventListener("keyup", () => {
    console.log(search.value);
});
const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {

mobileMenu.classList.toggle("active");

};
const favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.toggle("active");

btn.textContent = btn.classList.contains("active") ? "⭐ Saved" : "⭐";

});

});
/* Back To Top */

const topBtn=document.getElementById("topBtn");

topBtn?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
const themeBtn=document.getElementById("themeBtn");

themeBtn?.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

});
