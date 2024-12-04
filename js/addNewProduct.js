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

// Event listener for form submission
document.getElementById("addProductBtn").addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form reload

    // Gather product data from form fields
    const product = {
        title: document.getElementById("title").value,
        price: parseInt(document.getElementById("price").value),
        amount: parseInt(document.getElementById("amount").value),
        size: document.getElementById("size").value,
    };

    // Call function to create product
    const createdProduct = await createProduct(product);

    // Show success message
    if (createdProduct) {
        alert("Created Product: " + JSON.stringify(createdProduct));
    } else {
        alert("Failed to create product");
    }
});


