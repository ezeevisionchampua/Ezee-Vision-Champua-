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
