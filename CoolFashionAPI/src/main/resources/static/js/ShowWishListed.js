document.addEventListener('DOMContentLoaded', () => {
    const wishlistLink = document.getElementById('wishlist-link');

    // Add click event to the "Wishlisted" dropdown link
    wishlistLink.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent default navigation
        try {
            // Fetch wishlisted products from the backend
            const response = await fetch('/getWishListed'); // Replace with the actual user ID
            if (!response.ok) {
                throw new Error(`Failed to fetch wishlist: ${response.statusText}`);
            }

            const wishlistedProducts = await response.json();
            console.log(wishlistedProducts); // For debugging

            // Fetch images for the products from the backend
            const productsWithImages = await fetchProductImages(wishlistedProducts);

            // Rebuild the body with the wishlisted products
            rebuildBodyWithWishlist(productsWithImages);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            alert('Failed to load wishlisted products. Please try again.');
        }
    });

    /**
     * Fetch product images from the backend (using the productId to fetch images)
     * @param {Array} products - Array of wishlisted products
     * @returns {Array} - Products with images
     */
    async function fetchProductImages(products) {
        try {
            // Fetch images for each product and attach them to the product object
            const productsWithImages = await Promise.all(products.map(async (product) => {
                const imageResponse = await fetch(`/products/${product.id}/images`);
                if (!imageResponse.ok) {
                    throw new Error(`Failed to fetch images for product ID: ${product.id}`);
                }
                const imagesData = await imageResponse.json();

                // Attach the images array to the product object
                product.images = imagesData.map(image => image.imageUrl);  // Assuming each image has `imageUrl`
                return product;
            }));

            return productsWithImages;
        } catch (error) {
            console.error('Error fetching product images:', error);
            alert('There was an issue fetching product images.');
            return products;  // Return products without images if the fetch fails
        }
    }

    /**
     * Rebuilds the body to display wishlisted products
     * @param {Array} products - Array of wishlisted products
     */
    function rebuildBodyWithWishlist(products) {
        const bodyContent = `
            <header class="header">
                ${document.querySelector('.header').innerHTML} <!-- Keep the header intact -->
            </header>
            <body>
            <div class="main-content" id="main-content">
                <section class="featured-products">
                    <h2>Your Wishlisted Products</h2>
                    <div class="product-grid">
                        ${products.map(product => `
                            <div class="product-item" data-id="${product.id}" data-images="${product.images.join(',')}">
                                <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                                <h3>${product.name}</h3>
                                <p>Price: $${product.price}</p>
                                <p>Size: ${product.size}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
            </body>
            <footer class="footer">
                ${document.querySelector('.footer') ? document.querySelector('.footer').innerHTML : ''} <!-- Keep footer intact -->
            </footer>
        `;

        // Replace the entire body content
        document.body.innerHTML = bodyContent;

        // Attach click event listeners for lightbox functionality
        const productItems = document.querySelectorAll('.product-item');
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
    }

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const close = document.querySelector('.close');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const thumbnailContainer = document.getElementById('thumbnail-container');

    let currentImages = [];
    let currentIndex = 0;

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
});
