
const BASE_URL = "http://localhost:8080";

// Object should represent the model class in Spring Boot and endpoint the controller path 
export async function postRequest(endpoint, object) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
        });

        if (!response.ok) {
            throw new Error(`Failed to create product. Status: ${response.status}`);
        }
        return await response.json(); // Return the created product
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Endpoint represents the controller path
export async function getRequest(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
    });

    return response;
}