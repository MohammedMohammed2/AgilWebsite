import { getProductsList } from "./utils.js";


// Creates product based on form input, saves product in local storage
export function createProduct() {
    const imageInput = document.getElementById('imageInput');
    const addProductBtn = document.getElementById("addProductBtn");

    // Change relativePath 
    const relativePath = "./images/";
    let fileName = "";

    imageInput.addEventListener('change', () => {
        fileName = document.getElementById("imageInput").value;
        fileName = fileName.replace(/C:\\fakepath\\/, relativePath);
    })

    addProductBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let productTitle = document.getElementById("title").value;
        let productDescription = document.getElementById("description").value;
        let productPrice = document.getElementById("price").value;

        let productsList = localStorage.getItem('products');
        productsList = productsList ? JSON.parse(productsList) : {}; // Parse existing or start with empty object

        // Add new product to the object with proper key (using dynamic key)
        let nextProductId = Object.keys(productsList).length + 1; // Find next available key

        productsList[nextProductId] = { 
            title: productTitle,
            description: productDescription,
            price: productPrice,
            image: fileName
        };

         localStorage.setItem('products', JSON.stringify(productsList));
    });
}