const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const close = document.querySelector('.close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const productItems = document.querySelectorAll('.product-item');
const thumbnailContainer = document.getElementById('thumbnail-container');

let currentImages = [];
let currentIndex = 0;

productItems.forEach(item => {
    item.addEventListener('click', () => {
        const images = item.getAttribute('data-images').split(',');
        currentImages = images;
        currentIndex = 0;
        lightboxContent.src = currentImages[currentIndex];
        updateThumbnails(currentImages);
        lightbox.style.display = 'flex';
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    lightboxContent.src = currentImages[currentIndex];
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    lightboxContent.src = currentImages[currentIndex];
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxContent && !e.target.closest('.lightbox-controls')) {
        lightbox.style.display = 'none';
    }
});

function updateThumbnails(images) {
    thumbnailContainer.innerHTML = '';
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            lightboxContent.src = images[currentIndex];
        });
        thumbnailContainer.appendChild(thumbnail);
    });
}
