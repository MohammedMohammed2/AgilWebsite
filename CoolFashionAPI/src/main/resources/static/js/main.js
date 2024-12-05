import { createCategoryPage } from "./getCategorypictures.js";
//html element
const menDropdown = document.getElementById("men-menu")
const womenDropdown = document.getElementById("women-menu")
const mainContentContainer = document.getElementById("main-content");

//empties the page, adds a title of the category in the page
menDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})
womenDropdown.addEventListener("click", (Event) => {
    populateCategory(Event);
})

function populateCategory(Event) {
    createCategoryPage(Event, mainContentContainer)
}

const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const close = document.querySelector('.close');
const images = document.querySelectorAll('.lightbox-image');

// Open Lightbox
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxContent.src = image.src;
    });
});

// Close Lightbox
close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close Lightbox by clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxContent) {
        lightbox.style.display = 'none';
    }
});
