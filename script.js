/* ==========================================================
   EZEE VISION CHAMPUA
   AI NOTES GENERATOR
   LEVEL 2 — SMART FILE UPLOAD
========================================================== */

"use strict";


/* ==========================================================
   ELEMENTS
========================================================== */

const uploadButton =
    document.getElementById("uploadButton");

const fileInput =
    document.getElementById("fileInput");

const uploadCard =
    document.getElementById("uploadCard");

const uploadIcon =
    document.getElementById("uploadIcon");

const uploadTitle =
    document.getElementById("uploadTitle");

const uploadDescription =
    document.getElementById("uploadDescription");

const dropMessage =
    document.getElementById("dropMessage");

const selectedFile =
    document.getElementById("selectedFile");

const fileName =
    document.getElementById("fileName");

const fileSize =
    document.getElementById("fileSize");

const fileTypeIcon =
    document.getElementById("fileTypeIcon");

const removeFile =
    document.getElementById("removeFile");

const uploadStatus =
    document.getElementById("uploadStatus");


/* ==========================================================
   SETTINGS
========================================================== */

const MAX_FILE_SIZE =
    20 * 1024 * 1024;


/* ==========================================================
   ALLOWED FILE TYPES
========================================================== */

const allowedExtensions = [

    "pdf",
    "doc",
    "docx",
    "ppt",
    "pptx",
    "jpg",
    "jpeg",
    "png"

];


/* ==========================================================
   CURRENT FILE
========================================================== */

let currentFile = null;


/* ==========================================================
   OPEN FILE PICKER
========================================================== */

uploadButton.addEventListener("click", () => {

    fileInput.click();

});


/* ==========================================================
   FILE INPUT CHANGE
========================================================== */

fileInput.addEventListener("change", () => {

    const file =
        fileInput.files[0];

    if (!file) {

        return;

    }

    handleFile(file);

});


/* ==========================================================
   HANDLE FILE
========================================================== */

function handleFile(file) {

    const extension =
        getFileExtension(file.name);


    /* FILE TYPE CHECK */

    if (
        !allowedExtensions.includes(
            extension
        )
    ) {

        showError(
            "This file type is not supported."
        );

        resetFileInput();

        return;

    }


    /* FILE SIZE CHECK */

    if (
        file.size > MAX_FILE_SIZE
    ) {

        showError(
            "File size must be 20 MB or less."
        );

        resetFileInput();

        return;

    }


    /* SAVE CURRENT FILE */

    currentFile = file;


    /* UPDATE UI */

    showSelectedFile(file);

}


/* ==========================================================
   GET EXTENSION
========================================================== */

function getFileExtension(fileName) {

    const parts =
        fileName
            .toLowerCase()
            .split(".");

    return parts.length > 1
        ? parts.pop()
        : "";

}


/* ==========================================================
   SHOW SELECTED FILE
========================================================== */

function showSelectedFile(file) {

    const extension =
        getFileExtension(file.name);


    fileName.textContent =
        file.name;


    fileSize.textContent =
        formatFileSize(file.size);


    fileTypeIcon.textContent =
        getFileIcon(extension);


    selectedFile.hidden =
        false;


    dropMessage.hidden =
        true;


    uploadButton.textContent =
        "Replace File";


    uploadIcon.textContent =
        "✓";


    uploadTitle.textContent =
        "File Ready";


    uploadDescription.textContent =
        "Your study material is ready";


    uploadStatus.textContent =
        "File selected successfully";


    uploadStatus.className =
        "upload-status success";

}


/* ==========================================================
   FILE ICON
========================================================== */

function getFileIcon(extension) {

    switch (extension) {

        case "pdf":
            return "📕";

        case "doc":
        case "docx":
            return "📘";

        case "ppt":
        case "pptx":
            return "📙";

        case "jpg":
        case "jpeg":
        case "png":
            return "🖼️";

        default:
            return "📄";

    }

}


/* ==========================================================
   FILE SIZE
========================================================== */

function formatFileSize(bytes) {

    if (bytes < 1024) {

        return bytes + " B";

    }

    if (bytes < 1024 * 1024) {

        return (
            (bytes / 1024).toFixed(1)
            + " KB"
        );

    }

    return (
        (bytes / (1024 * 1024)).toFixed(2)
        + " MB"
    );

}


/* ==========================================================
   REMOVE FILE
========================================================== */

removeFile.addEventListener(
    "click",
    () => {

        clearSelectedFile();

    }
);


/* ==========================================================
   CLEAR FILE
========================================================== */

function clearSelectedFile() {

    currentFile = null;

    resetFileInput();

    selectedFile.hidden =
        true;

    dropMessage.hidden =
        false;

    uploadButton.textContent =
        "Choose File";

    uploadIcon.textContent =
        "↑";

    uploadTitle.textContent =
        "Upload Your Study Material";

    uploadDescription.textContent =
        "PDF, DOCX, PPT or image files";

    uploadStatus.textContent =
        "No file selected";

    uploadStatus.className =
        "upload-status";

}


/* ==========================================================
   RESET INPUT
========================================================== */

function resetFileInput() {

    fileInput.value = "";

}


/* ==========================================================
   ERROR
========================================================== */

function showError(message) {

    uploadStatus.textContent =
        message;

    uploadStatus.className =
        "upload-status error";

}


/* ==========================================================
   DRAG ENTER
========================================================== */

uploadCard.addEventListener(
    "dragenter",
    event => {

        event.preventDefault();

        uploadCard.classList.add(
            "drag-active"
        );

    }
);


/* ==========================================================
   DRAG OVER
========================================================== */

uploadCard.addEventListener(
    "dragover",
    event => {

        event.preventDefault();

        uploadCard.classList.add(
            "drag-active"
        );

    }
);


/* ==========================================================
   DRAG LEAVE
========================================================== */

uploadCard.addEventListener(
    "dragleave",
    event => {

        event.preventDefault();

        uploadCard.classList.remove(
            "drag-active"
        );

    }
);


/* ==========================================================
   DROP
========================================================== */

uploadCard.addEventListener(
    "drop",
    event => {

        event.preventDefault();

        uploadCard.classList.remove(
            "drag-active"
        );


        const file =
            event.dataTransfer.files[0];


        if (!file) {

            return;

        }


        handleFile(file);

    }
);


/* ==========================================================
   CONTENT TYPE SELECTION
========================================================== */

const contentCards =
    document.querySelectorAll(
        ".content-card"
    );


contentCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            contentCards.forEach(item => {

                item.classList.remove(
                    "selected"
                );

            });


            card.classList.add(
                "selected"
            );


            const type =
                card.dataset.type;


            console.log(
                "Selected content type:",
                type
            );

        }
    );

});


/* ==========================================================
   LEVEL 2 COMPLETE
========================================================== */
