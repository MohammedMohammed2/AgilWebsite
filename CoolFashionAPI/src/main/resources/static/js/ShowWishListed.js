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

            // Rebuild the body with the wishlisted products
            rebuildBodyWithWishlist(wishlistedProducts);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            alert('Failed to load wishlisted products. Please try again.');
        }
    });

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
                            <div class="product-item">
                                <img src="${product.imageUrl}" alt="${product.title}" class="product-image">
                                <h3>${product.title}</h3>
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
    }
});

