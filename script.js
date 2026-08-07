/* ==========================================================
   EZEE VISION CHAMPUA
   AI NOTES GENERATOR
   LEVEL 1 — BASIC INTERACTION
========================================================== */

"use strict";


/* ==========================================================
   FILE UPLOAD
========================================================== */

const uploadButton =
    document.getElementById("uploadButton");

const fileInput =
    document.getElementById("fileInput");

const uploadStatus =
    document.getElementById("uploadStatus");


uploadButton.addEventListener("click", () => {

    fileInput.click();

});


fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];

    if (!file) {

        uploadStatus.textContent =
            "No file selected";

        return;

    }

    uploadStatus.textContent =
        `Selected: ${file.name}`;

});


/* ==========================================================
   CONTENT TYPE SELECTION
========================================================== */

const contentCards =
    document.querySelectorAll(".content-card");


contentCards.forEach(card => {

    card.addEventListener("click", () => {

        contentCards.forEach(item => {

            item.classList.remove("selected");

        });

        card.classList.add("selected");

        const type =
            card.dataset.type;

        console.log(
            "Selected content type:",
            type
        );

    });

});
