const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const close = document.querySelector('.close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const productItems = document.querySelectorAll('.product-item');
const thumbnailContainer = document.getElementById('thumbnail-container');

let currentImages = [];
let currentIndex = 0;

console.log("productItems")
console.log(productItems);

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
    updateActiveThumbnail();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    lightboxContent.src = currentImages[currentIndex];
    updateActiveThumbnail();
});

lightbox.addEventListener('click', (e) => {
    // Close the lightbox only if the background is clicked, not the image or controls
    if (e.target !== lightboxContent && !e.target.closest('.lightbox-controls') && e.target !== thumbnailContainer) {
        lightbox.style.display = 'none';
    }
});

function updateThumbnails(images) {
    thumbnailContainer.innerHTML = '';  // Clear existing thumbnails
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');

        // Add click event to update main image
        thumbnail.addEventListener('click', (e) => {
            e.stopPropagation();  // Prevent the click event from propagating to the parent lightbox
            currentIndex = index;
            lightboxContent.src = images[currentIndex];
            updateActiveThumbnail();
        });

        thumbnailContainer.appendChild(thumbnail);
    });

    updateActiveThumbnail();  // Highlight the first thumbnail initially
}

function updateActiveThumbnail() {
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Remove 'active' class from all thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    // Add 'active' class to the currently selected thumbnail
    thumbnails[currentIndex].classList.add('active');
}



