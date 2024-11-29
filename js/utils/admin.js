import { getProductsList, getProduct } from "./utils.js";


// Creates product based on form input, saves product in local storage
export function createProduct() {
    const form = document.getElementById('productForm');
    const imageInputOne = document.getElementById('imageInputOne');
    const imageInputTwo = document.getElementById('imageInputTwo');
    const imageInputThree = document.getElementById('imageInputThree');
    const addProductBtn = document.getElementById("addProductBtn");

    const maleOption = document.getElementById("male");
    const femaleOption = document.getElementById("female");

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

    // Male is selected by default
    populateCategorySelection("male");

    // Change gender categories on click
    maleOption.addEventListener('click', () => {
        populateCategorySelection("male");
    })
    femaleOption.addEventListener('click', () => {
        populateCategorySelection("female");
    })

    addProductBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let productTitle = document.getElementById("title").value;
        let productDescription = document.getElementById("description").value;
        let productPrice = document.getElementById("price").value;
        let productCategory = document.getElementById("category").value;

        let productsList = localStorage.getItem('products');
        productsList = productsList ? JSON.parse(productsList) : {}; // Parse existing or start with empty object      

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
        form.reset();
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

// Category selection should show correct categories based on gender
export function populateCategorySelection(gender) {
    const categorySelection = document.getElementById("category");
    categorySelection.innerHTML = "";
    categorySelection.placeholder = "Choose gender first"

    let categories;

    if (gender == "male") {
        categories = JSON.parse(localStorage.getItem("menCategories"))
    } else if (gender == "female") {
        categories = JSON.parse(localStorage.getItem("womenCategories"))
    }

    for (const category in categories) {
        const categoryOption = document.createElement("option");
        categoryOption.value = categories[category];
        categoryOption.textContent = categories[category];
        categorySelection.append(categoryOption);
    }
}

// Add product to correct category
export function addCategory() {
    
}