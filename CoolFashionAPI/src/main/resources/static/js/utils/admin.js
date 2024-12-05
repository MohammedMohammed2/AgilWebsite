import { getProductsList, getProduct, getCategoriesList } from "./utils.js";
import { getRequest } from "./api.js";

const categorySelection = document.getElementById("category");

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
        let productSize = document.getElementById("size").value;
        let productPrice = document.getElementById("price").value;
        let productCategory = document.getElementById("category").value;

        let productsList = localStorage.getItem('products');
        productsList = productsList ? JSON.parse(productsList) : {}; // Parse existing or start with empty object      

        // Add new product to the object with proper key (using dynamic key)
        let nextProductId = Object.keys(productsList).length + 1; // Find next available key

        productsList[nextProductId] = { 
            title: productTitle,
            size: productSize,
            price: productPrice,
            category: productCategory,
            imageOne: fileNameOne,
            imageTwo: fileNameTwo,
            imageThree: fileNameThree
        };

        console.log(productsList);

        localStorage.setItem('products', JSON.stringify(productsList));
        saveToCategory(productCategory, productsList[nextProductId])

        form.reset();
    });
}

export function saveToCategory(category, product) {
    let categoryList = localStorage.getItem(category);
    categoryList = categoryList ? JSON.parse(categoryList) : {};
    let nextProductId = Object.keys(categoryList).length + 1;
    categoryList[nextProductId] = product;
    localStorage.setItem(category, JSON.stringify(categoryList));
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

async function getCategories(gender) {
    const response = await getRequest(`/categories?gender=${gender}`);
    const data = await response.json();
    return data[0];
}

// Category selection should show correct categories based on gender
export function populateCategorySelection(gender) {
    categorySelection.innerHTML = "";
    categorySelection.placeholder = "Choose gender first"

    const malePlaceholderCategories = ["Men Product#1", "Men Product#2", "Men Product#3"];
    const femalePlaceholderCategories = ["Women Product#1", "Women Product#2", "Women Product#3"]


    // Checks what gender is selected, finds categories by gender and displays them
    if (gender == "male") {
        getCategories("men")
        .then((categories) => {
            for (const category in categories) {
                const categoryName = categories[category].name;

                const categoryOption = document.createElement("option");
                categoryOption.value = categoryName;
                categoryOption.textContent = categoryName;
                categorySelection.append(categoryOption);
            }
        })
    } else if (gender == "female") {
        getCategories("women")
        .then((categories) => {
            for (const category in categories) {
                const categoryName = categories[category].name;
                const categoryOption = document.createElement("option");
                categoryOption.value = categoryName;
                categoryOption.textContent = categoryName;
                categorySelection.append(categoryOption);
            }
        })
    }

    /* if (gender == "male") {
        categories = JSON.parse(localStorage.getItem("menCategories"))
        palceholderCategories(malePlaceholderCategories);
    } else if (gender == "female") {
        categories = JSON.parse(localStorage.getItem("womenCategories"))
        palceholderCategories(femalePlaceholderCategories);
    } */

    /* for (const category in categories) {
        const categoryOption = document.createElement("option");
        categoryOption.value = categories[category];
        categoryOption.textContent = categories[category];
        categorySelection.append(categoryOption);
    } */
}

function palceholderCategories(catArray) {
    for (const category in catArray) {
        const categoryOption = document.createElement("option");
        categoryOption.value = catArray[category];
        categoryOption.textContent = catArray[category];
        categorySelection.append(categoryOption);
    }
}