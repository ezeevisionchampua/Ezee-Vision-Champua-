let allResources = [];
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
/* Floating Button */

document.getElementById("fabBtn")?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* Chips */

document.querySelectorAll(".chip").forEach(chip=>{

chip.onclick=()=>{

document.querySelector(".chip.active")?.classList.remove("active");

chip.classList.add("active");

};

});
async function loadResources() {

    const params = new URLSearchParams(window.location.search);

    const currentSubject = params.get("subject") || "maths";

    const subjectTitle = document.getElementById("subjectTitle");

    const names = {

        maths: "Mathematics",

        science: "Science",

        sst: "Social Science",

        english: "English"

    };

    if(subjectTitle){

        subjectTitle.textContent = names[currentSubject];

    }

    const response = await fetch("data/resources.json");

    const resources = await response.json();

    const container = document.getElementById("resourceList");

    if(!container) return;

    container.innerHTML = "";

    const filtered = resources.filter(item => item.subject === currentSubject);

    if(filtered.length===0){

        container.innerHTML = `

        <div class="empty-state">

            <h3>No Resources Found</h3>

            <p>Resources will be added soon.</p>

        </div>

        `;

        return;

    }

    filtered.forEach(item=>{

        container.innerHTML += `

        <div class="resource-item">

            <div>

                <h3>${item.title}</h3>

                <p>${item.description}</p>

            </div>

            <div class="resource-actions">

                <a href="${item.view}" target="_blank" class="view-btn">

                View

                </a>

                <a href="${item.download}" target="_blank" class="download-btn">

                Download

                </a>

            </div>

        </div>

        `;

    });

}

loadResources();
