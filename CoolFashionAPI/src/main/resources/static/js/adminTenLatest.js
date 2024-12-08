import { getRequest } from "./utils/api.js";

const productGrid = document.getElementsByClassName("product-grid")[0];

getAllProducts()
    .then(products => {
        const tenLatest = products.slice(-10);
        
        for (const product in tenLatest) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");

            const productTitle = document.createElement("p");
            productTitle.textContent = tenLatest[product].name;

            const productSize = document.createElement("p");
            productSize.textContent = tenLatest[product].size;

            const productPrice = document.createElement("p");
            productPrice.textContent = tenLatest[product].price + ":-";

            const productAmountInStorage = document.createElement("p");
            productAmountInStorage.textContent = tenLatest[product].amount + " in storage"

            productDiv.append(productTitle);
            productDiv.append(productSize)
            productDiv.append(productPrice);
            productDiv.append(productAmountInStorage);

            productGrid.prepend(productDiv);
        }

    })

async function getAllProducts() {
    const response = await getRequest("/getProducts")
    const data = await response.json();

    return data;
}