import { createCategoryPage } from "./getCategorypictures.js";
import { lessThenTwoUnitsPage } from "./lessThenTwoPage.js";
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
const mainContent = document.getElementById('main-content');  // The section where products are displayed

// Variable to keep track of last query
let lastQuery = '';

// Event listener for search button
searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) {
        alert("Please enter a product name!");
        return;
    }

    // Avoid search repetition (if the query is the same as last one)
    if (query === lastQuery) {
        alert("You've already searched for this product.");
        return;
    }

    lastQuery = query;  // Update the last query with the current one

    try {
        // Fetch product data from the backend based on the search query
        const response = await fetch(`/getProduct/${query}`);
        if (!response.ok) {
            throw new Error(`Error fetching product: ${response.statusText}`);
        }

        // Parse the response data (Assuming backend returns JSON)
        const productData = await response.json();

        if (productData.length === 0) {
            renderNoResults();  // Show no results if no products found
        } else {
            renderSearchResults(productData);  // Render products
        }

    } catch (error) {
        console.error("Failed to fetch product:", error);
        alert("Product not found or an error occurred!");
    }
});

// Function to render search results
function renderSearchResults(products) {
    // Clear any existing content in the main content area
    mainContent.innerHTML = '';

    // Loop through each product and create its HTML structure
    products.forEach(product => {
        // Create a div to hold the product information
        const productItem = document.createElement('div');
        const productGrid = document.createElement('div');
        productGrid.classList.add('product-grid');
        productItem.classList.add('product-item');
        productItem.setAttribute('data-id', product.id); // Add unique identifier to avoid duplicates

        const productImage = document.createElement('img');
        productImage.src = product.imageUrl;
        productImage.alt = product.name;
        productImage.classList.add('product-image');

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        const productSize = document.createElement('p');
        productSize.textContent = `Size: ${product.size}`;

        const productAmount = document.createElement('p');
        productAmount.textContent = `Amount: ${product.amount}`;

        const wishlistButton = document.createElement('button');
        wishlistButton.classList.add('wishlist-button');
        wishlistButton.textContent = 'Add to Wishlist';
        wishlistButton.onclick = () => addToWishlist(product.id);

        // Append elements to the product item
        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productSize);
        productItem.appendChild(productAmount);
        productItem.appendChild(wishlistButton);


        // Append the product item to the main content area
        productGrid.appendChild(productItem);
        mainContent.appendChild(productGrid);
    });
}

// Function to render a "No Results" message if no products are found
function renderNoResults() {
    mainContent.innerHTML = `<p>No products found for your search.</p>`;
}

// Function to handle adding the product to the wishlist
async function addToWishlist(productId) {
    try {
        const response = await fetch('/addToWishList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }) // Send the productId in the request body
        });

        // Parse the response as JSON
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to add product to wishlist');
        }

        // Display success message
        alert(result.message);  
    } catch (error) {
        console.error("Failed to add to wishlist:", error);
        alert(error.message);  // Display error message from the backend
    }
}





