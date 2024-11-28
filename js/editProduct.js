import { getProduct } from "./utils/utils.js"
import { editProduct } from "./utils/admin.js"

const productTitle = document.getElementById("title");
const productDescription = document.getElementById("description");
const productPrice = document.getElementById("price");
const productCategory = document.getElementById("category");
const productImageOne = document.getElementById("imageInputOne")
const productImageTwo = document.getElementById("imageInputTwo")
const productImageThree = document.getElementById("imageInputThree")
const editProductBtn = document.getElementById("editProductBtn");


// Get productId through GET parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('productId');

// Get product properties
const product = getProduct(productId);

// Form should show current values
productTitle.value = product.title;
productDescription.value = product.description;
productPrice.value = product.price;
productCategory.value = product.category;

productImageOne.src = product.imageOne;
productImageTwo.src = product.imageTwo;
productImageThree.src = product.imageThree;

editProductBtn.addEventListener("click", () => {
    product.title = productTitle.value;
    product.description = productDescription.value;
    product.price = productPrice.value;
    product.category = productCategory.value;
    const relativePath = "./images/createProducts/";

    if (productImageOne != null) {
        product.imageOne = productImageOne.value.replace(/C:\\fakepath\\/, relativePath);
    }

    if (productImageTwo != null) {
        product.imageTwo = productImageTwo.value.replace(/C:\\fakepath\\/, relativePath);
    }

    if (productImageThree != null) {
        product.imageThree = productImageThree.value.replace(/C:\\fakepath\\/, relativePath);
    }

    editProduct(product, productId);
    location.href="added_products.html";
})