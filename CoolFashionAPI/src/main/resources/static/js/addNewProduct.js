import { postRequestParams, postRequest } from "./utils/api.js"

// Base URL of your Spring Boot server
const BASE_URL = "http://localhost:8080";

/**
 * Submit a new product to the server
 * @param {Object} product - The product data
 */
async function createProduct(product) {
    try {
        const response = await fetch(`${BASE_URL}/create_product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            throw new Error(`Failed to create product. Status: ${response.status}`);
        }

        return await response.json(); // Return the created product
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Creates relation between category and product
async function createCategoryRelation(productName, categoryValue) {
    const endpoint = `/categories/relation?category=${categoryValue}&product=${productName}`
    postRequestParams(endpoint);
}

async function createImageRelation(productName, imageId) {
    // Nedan är autogenererat, kolla så endpoint funkar
    const endpoint = `/products/images/relation?product-name=${productName}&image-id=${imageId}`
    console.log(endpoint);
    postRequestParams(endpoint);
}

// Event listener for form submission
document.getElementById("addProductBtn").addEventListener("click", async (event) => {

    const categoryValue = document.getElementById("category").value;

    // Path to images folder
    const relativePath = "./images/createProducts/";

    // Gather product data from form fields
    const product = {
        name: document.getElementById("title").value,
        price: parseInt(document.getElementById("price").value),
        amount: parseInt(document.getElementById("amount").value),
        size: document.getElementById("size").value,
    };

    // Create images object which contains data about five images
    const imagesObject = {
        imageOne: {
            imageUrl: document.getElementById("imageInputOne").value,
            isPrimary: document.getElementById("imageOne").checked,
        },
        imageTwo: {
            imageUrl: document.getElementById("imageInputTwo").value,
            isPrimary: document.getElementById("imageTwo").checked,
        },
        imageThree: {
            imageUrl: document.getElementById("imageInputThree").value,
            isPrimary: document.getElementById("imageThree").checked,
        },
        imageFour: {
            imageUrl: document.getElementById("imageInputFour").value,
            isPrimary: document.getElementById("imageFour").checked,
        },
        imageFive: {
            imageUrl: document.getElementById("imageInputFive").value,
            isPrimary: document.getElementById("imageFive").checked,
        },
    }

    // Store the ID's of created images in array, used to create relation between product and image
    let imageIDs = [];
   
    for (const image in imagesObject) {
        if (imagesObject[image].imageUrl != "") {

            // Remove /C:/fakepath from imageUrl and replace with path to images folder
            const imageUrl = imagesObject[image].imageUrl.replace(/C:\\fakepath\\/, relativePath);
            imagesObject[image].imageUrl = imageUrl;

            const createdImage = await postRequest("/create/image", imagesObject[image])
            imageIDs.push(createdImage.id);
        }
    }

    // Call function to create product
    const createdProduct = await createProduct(product);

    // Show success message
    if (createdProduct) {
        createCategoryRelation(product.name, categoryValue);

        // Use product.id and IDs in imageIDs to create relation between product and image
        for (const id in imageIDs) {
            console.log(imageIDs[id]);
            createImageRelation(product.name, imageIDs[id]);
        }

        alert("Created Product: " + JSON.stringify(createdProduct));
    } else {
        alert("Failed to create product");
    }
});