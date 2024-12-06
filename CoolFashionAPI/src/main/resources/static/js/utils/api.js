
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
            throw new Error(`Failed to send POST. Status: ${response.status}`);
        }
        return await response.json(); // Return the created object
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Post request where endpoint users URL-parameters instead of body
export async function postRequestParams(endpoint) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to create product. Status: ${response.status}`);
        }
        return await response.json(); // Return the created object
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Endpoint represents the controller path
export async function getRequest(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
    });

    // In your function calling getRequest, use response.data[0] to read object properties (ask if you need help)
    return response;
}