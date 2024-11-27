export function getProductsList() {
    return JSON.parse(localStorage.getItem('products'));
}

// Loops through products list and creates html elements for them
export function showAddedProducts() {
    const productsList = getProductsList();
    console.log(productsList);
    const productGrid = document.getElementsByClassName("product-grid")[0]; // getElementsByClassName returns array, user first result
    
    for (const product in productsList) {
        console.log(productsList[product]);

        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");

        const productTitle = document.createElement("p");
        productTitle.textContent = productsList[product].title;

        const productPrice = document.createElement("p");
        productPrice.textContent = productsList[product].price;

        const proudctImage = document.createElement("img");
        proudctImage.src = productsList[product].image;
        proudctImage.alt = productsList[product].title;

        productDiv.append(proudctImage);
        productDiv.append(productTitle);
        productGrid.prepend(productDiv);
    }
}