import { getProductsList, getProduct } from "./utils.js";


// Creates product based on form input, saves product in local storage
export function createProduct() {
    const imageInputOne = document.getElementById('imageInputOne');
    const imageInputTwo = document.getElementById('imageInputTwo');
    const imageInputThree = document.getElementById('imageInputThree');
    const addProductBtn = document.getElementById("addProductBtn");

    // Change relativePath 
    const relativePath = "./images/createProducts/";
    let fileNameOne = null;
    let fileNameTwo = null;
    let fileNameThree = null;

    imageInputOne.addEventListener('change', () => {
        fileNameOne = document.getElementById("imageInputOne").value;
        fileNameOne = fileNameOne.replace(/C:\\fakepath\\/, relativePath);
    })    

    imageInputTwo.addEventListener('change', () => {
        fileNameTwo = document.getElementById("imageInputTwo").value;
        fileNameTwo = fileNameTwo.replace(/C:\\fakepath\\/, relativePath);
    })

    imageInputThree.addEventListener('change', () => {
        fileNameThree = document.getElementById("imageInputThree").value;
        fileNameThree = fileNameThree.replace(/C:\\fakepath\\/, relativePath);
    })

    addProductBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let productTitle = document.getElementById("title").value;
        let productDescription = document.getElementById("description").value;
        let productPrice = document.getElementById("price").value;
        let productCategory = document.getElementById("category").value;

        let productsList = localStorage.getItem('products');
        productsList = productsList ? JSON.parse(productsList) : {}; // Parse existing or start with empty object

        if (productsList != null) {
            // Läs productsList
        } else {
            // Skapa ett objekt som heter productsList
        }        

        // Add new product to the object with proper key (using dynamic key)
        let nextProductId = Object.keys(productsList).length + 1; // Find next available key

        productsList[nextProductId] = { 
            title: productTitle,
            description: productDescription,
            price: productPrice,
            category: productCategory,
            imageOne: fileNameOne,
            imageTwo: fileNameTwo,
            imageThree: fileNameThree
        };

         localStorage.setItem('products', JSON.stringify(productsList));
    });
}

// Change product information to edited information
export function editProduct(product, productId) {
    let editedProduct = getProduct(productId);
    
    editedProduct.title = product.title;
    editedProduct.description = product.description;
    editedProduct.price = product.price;
    editedProduct.category = product.category;

    if (product.imageOne != "") {
        editedProduct.imageOne = product.imageOne;
    }

    if (product.imageTwo != "") {
        editedProduct.imageTwo = product.imageTwo;
    }

    if (product.imageThree != "") {
        editedProduct.imageThree = product.imageThree;
    }

    let productsList = getProductsList();
    productsList[productId] = editedProduct;
    localStorage.setItem('products', JSON.stringify(productsList));
}