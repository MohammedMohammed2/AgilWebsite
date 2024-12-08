document.addEventListener('DOMContentLoaded', () => {
    // Handle category clicks
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', async () => {
            const category = item.getAttribute('data-category');
            try {
                const products = await fetchProductsByCategory(category); // Fetch from backend
                remakeBodyWithCategoryProducts(category, products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
                alert("Error fetching products for the selected category.");
            }
        });
    });

    // Function to fetch products from backend based on category
    async function fetchProductsByCategory(category) {
        const response = await fetch(`/categories/${category}/products`); // Adjust endpoint to match your API
        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        return await response.json(); // Assuming the response is a JSON array of products
    }

    // Rebuild the body with products of the selected category
    function remakeBodyWithCategoryProducts(category, products) {

        const bodyContent = `
            <header class="header">
                <div class="header-container">
                    <div class="logo">
                        <h1 class="coolFont">coolfashion</h1>
                    </div>
                    <nav class="dropdown">
                        <ul>
                            <li><a href="/index.html">Home</a></li>
                            <li><a href="/secondHand.html">Second Hand</a></li>
                            <li><a href="/contactUs.html">Contact</a></li>
                            <li><a href="#" class="ProductsDropdown-toggle">Products</a>
                                <ul class="dropdown">
                                    <li><a href="#" class="Mendropdown-toggle">Men</a>
                                        <ul class="dropdown-menu" id="men-menu">
                                            <li><a href="#" class="dropdown-item">Men Product#1</a></li>
                                            <li><a href="#" class="dropdown-item">Men Product#2</a></li>
                                            <li><a href="#" class="dropdown-item">Men Product#3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="WomenDropdown-toggle">Women</a>
                                        <ul class="dropdown-menu" id="women-menu">
                                            <li><a href="#" class="dropdown-item">Women Product#1</a></li>
                                            <li><a href="#" class="dropdown-item">Women Product#2</a></li>
                                            <li><a href="#" class="dropdown-item">Women Product#3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="login-button"><a href="/login.html">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="main-content" id="main-content">
                <section class="featured-products">
                    <h2>Products in ${capitalizeFirstLetter(category.replace('-', ' '))}</h2>
                    <div class="product-grid">
                        ${products.map(product => `
                            <div class="product-item">
                                <img src="${product.imageUrl}" alt="${product.name}">
                                <p>${product.name}</p>
                                <p>${product.price}</p>
                                <button class="wishlist-button" onclick="addToWishlist('${product._id}')">Add to Wishlist</button>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>About Us</h3>
                        <p>We specialize in providing high-quality products and services.</p>
                    </div>
                    <div class="footer-section">
                        <h3>Follow Us</h3>
                        <div class="social-links">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        `;

        //Replace the body content with the new HTML
        document.body.innerHTML = bodyContent;
    }

    // Capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Placeholder function to handle adding to wishlist
    function addToWishlist(productId) {
        alert(`Added product ${productId} to wishlist.`);
        // Add logic to handle wishlist actions here
    }
});
