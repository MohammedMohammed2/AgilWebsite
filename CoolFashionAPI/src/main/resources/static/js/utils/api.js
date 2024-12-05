
// Object should represent the model class in Spring Boot and endpoint the controller path 
export async function postRequest(endpoint, object) {
    const BASE_URL = "http://localhost:8080";
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
    });

    return response;
}

// Endpoint represents the controller path
export async function getRequest(endpoint) {
    const BASE_URL = "http://localhost:8080";
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    return response;
}