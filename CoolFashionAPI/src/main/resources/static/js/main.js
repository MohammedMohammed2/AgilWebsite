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
// Select search elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const body = document.body;  // The entire body of the page will be replaced

// Event listener for search button
searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) {
        alert("Please enter a product name!");
        return;
    }

    try {
        // Fetch product data from the backend based on the search query
        const response = await fetch(`/getProduct/${query}`);
        if (!response.ok) {
            throw new Error(`Error fetching product: ${response.statusText}`);
        }

        // Parse the response data (Assuming backend returns JSON)
        const productData = await response.json();
        const product = productData[0]; // Assume it's an array with a single product

        // Rebuild the entire body with the search result
        renderSearchResult(product);

    } catch (error) {
        console.error("Failed to fetch product:", error);
        alert("Product not found or an error occurred!");
    }
});

// Function to render search results and completely rebuild the body
function renderSearchResult(product) {
    if (!product) {
        body.innerHTML = "<p>No product found</p>";
        return;
    }

    // Rebuild the entire body content with the search result only
    body.innerHTML = `
    <header class="header">
    <div class="header-container">
        <div class="logo">
            <h1 class="coolFont">coolfashion</h1>
        </div>

        <div class="search-bar">
            <input id="search-input" class="search-input" type="text" placeholder="Search for a product">
            <button id="search-button" class="search-button">Search</button>
        </div>

        <nav class="dropdown">
            <ul>
                <li>
                    <a href="/index.html">Home</a>
                </li>
                <li><a href="/secondHand.html">Second Hand</a></li>
                <li><a href="/contactUs.html">Contact</a></li>
                <li>
                    <a href="#" class="ProductsDropdown-toggle">Products</a>
                    <ul class="dropdown">
                        <li>
                            <a href="#" class="Mendropdown-toggle">Men</a>
                            <ul class="dropdown-menu" id="men-menu">
                                <li><a href="#" class="dropdown-item">Men Product#1</a></li>
                                <li><a href="#" class="dropdown-item">Men Product#2</a></li>
                                <li><a href="#" class="dropdown-item">men Product#3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="WomenDropdown-toggle">Women</a>
                            <ul class="dropdown-menu" id="women-menu">
                                <li><a href="#" class="dropdown-item">Women Product#1</a></li>
                                <li><a href="#" class="dropdown-item">Women Product#2</a></li>
                                <li><a href="#" class="dropdown-item">women Product#3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="login-button">
                    <a href="/login.html">Login</a>
                </li>
            </ul>
        </nav>
    </div>
</header>
        <div class="main-content" id="main-content">
            <div class="product-item">
                <img src="${product.imageUrl}" alt="${product.title}" class="product-image" />
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Size: $${product.size}</p>
                <p>${product.amount}</p>
                <button class="wishlist-button" onclick="addToWishlist('${product._id}')">Add to Wishlist</button>
            </div>
        </div>

        <div id="lightbox">
            <span class="close">&times;</span>
            <img id="lightbox-content" src="" alt="Lightbox Image">
            <div class="lightbox-controls">
                <button id="prev">&laquo; Previous</button>
                <button id="next">Next &raquo;</button>
            </div>
            <div id="thumbnail-container"></div> <!-- Thumbnail container for smaller images -->
        </div>
        <footer class="footer">
    <div class="footer-container">
        <div class="footer-section">
            <h3>About Us</h3>
            <p>We are a company that specializes in providing high-quality products and services.</p>
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

    // Reinitialize lightbox and wishlist functionality after rebuilding body
    initializeLightbox();
}

// Function to initialize lightbox functionality
function initializeLightbox() {
    const lightboxImages = document.querySelectorAll('.product-image');
    lightboxImages.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });
}

// Function to open lightbox with the clicked image
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    lightbox.style.display = 'block';
    lightboxContent.src = src;
}

// Close lightbox when clicked on the close button
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

// Function to handle adding the product to the wishlist
async function addToWishlist(productId) {
    try {
        const userId = getUserId();  // Get logged-in user's ID

        // Send product ID and user ID to the backend to add to wishlist
        const response = await fetch('/addToWishList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: productId,
                userId: userId,
            }),
        });

        if (!response.ok) {
            throw new Error('Error adding to wishlist');
        }

        alert('Product has been added to your wishlist!');
    } catch (error) {
        console.error("Failed to add to wishlist:", error);
        alert("There was an error adding the product to your wishlist.");
    }
}

// Placeholder function to get logged-in user ID (replace with actual logic)
function getUserId() {
    return '12345';  // Replace with actual user ID logic
}




