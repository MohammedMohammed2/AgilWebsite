import { getProductsList } from "./utils.js";


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

        console.log(fileNameOne);
    })    

    imageInputTwo.addEventListener('change', () => {
        fileNameTwo = document.getElementById("imageInputTwo").value;
        fileNameTwo = fileNameTwo.replace(/C:\\fakepath\\/, relativePath);
        
        console.log(fileNameTwo);
    })

    imageInputThree.addEventListener('change', () => {
        fileNameThree = document.getElementById("imageInputThree").value;
        fileNameThree = fileNameThree.replace(/C:\\fakepath\\/, relativePath);

        console.log(fileNameTwo);
    })

    addProductBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let productTitle = document.getElementById("title").value;
        let productDescription = document.getElementById("description").value;
        let productPrice = document.getElementById("price").value;
        let productCategory = document.getElementById("category").value;

        console.log(productCategory);
        

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
    });
}