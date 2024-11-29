document.addEventListener('DOMContentLoaded', () => {
    // Sample product data
    const products = [
        { name: 'Mens T-shirt 1', category: 'mens-tshirt', image: 'mens-tshirt-1.jpg', price: '$20' },
        { name: 'Mens T-shirt 2', category: 'mens-tshirt', image: 'mens-tshirt-2.jpg', price: '$25' },
        { name: 'Womens Top 1', category: 'womens-top', image: 'womens-top-1.jpg', price: '$30' },
        { name: 'Womens Top 2', category: 'womens-top', image: 'womens-top-2.jpg', price: '$35' },
        { name: 'Womens Jacket 1', category: 'womens-jacket', image: 'womens-jacket-1.jpg', price: '$100' },
        { name: 'Womens Jacket 2', category: 'womens-jacket', image: 'womens-jacket-2.jpg', price: '$120' }
    ];

    // Handle category clicks
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            remakeBodyWithCategoryProducts(category, products);
        });
    });

    // Rebuild the body with products of the selected category
    function remakeBodyWithCategoryProducts(category, products) {
        const filteredProducts = products.filter(product => product.category === category);

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
                                            <li><a href="#" class="dropdown-item">men Product#3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="WomenDropdown-toggle">Women</a>
                                        <ul class="dropdown-menu" id="women-menu">
                                            <li><a href="#" class="dropdown-item">Women Product#1</a></li>
                                            <li><a href="#" class="dropdown-item">Women Product#2</a></li>
                                            <li><a href="#" class="dropdown-item">women Product#3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="login-button"><a href="/login.html">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <body>
             <div class="main-content" id="main-content">
                <section class="featured-products">
                    <h2>Products in ${capitalizeFirstLetter(category.replace('-', ' '))}</h2>
                    <div class="product-grid">
                        ${filteredProducts.map(product => `
                            <div class="product-item">
                                <img src="${product.image}" alt="${product.name}">
                                <p>${product.name}</p>
                                <p>${product.price}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
            </body>
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

        // Replace the body content with the new HTML
        document.body.innerHTML = bodyContent;
    }

    // Capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});

