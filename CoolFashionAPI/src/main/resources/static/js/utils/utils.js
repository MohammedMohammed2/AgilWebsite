import { getRequest } from "./api.js";

export async function getProductsList() {
    const response = await getRequest("/getProducts")
    const data = await response.json();

    // Returns all messages from DB
    return data[0];
}

export function getCategoriesList(category) {
    return JSON.parse(localStorage.getItem(category));
}

export function getProduct(productId) {
    const productList = getProductsList();
    return productList[productId];
}

// Loops through products list and creates html elements for them
export function showAddedProducts() {
    const productGrid = document.getElementsByClassName("product-grid")[0]; // getElementsByClassName returns array, user first result
    
   getProductsList()
   .then((productsList) => {
        for (const product in productsList) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");

            const productTitle = document.createElement("p");
            productTitle.textContent = productsList[product].title;

            const productSize = document.createElement("p");
            productSize.textContent = productsList[product].size;
            
            const productPrice = document.createElement("p");
            productPrice.textContent = productsList[product].price + ":-";

            const productAmountInStorage = document.createElement("p");
            productAmountInStorage.textContent = productsList[product].amount + " in storage"

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.setAttribute("value", product)

            productDiv.append(productTitle);
            productDiv.append(productSize)
            productDiv.append(productPrice);
            productDiv.append(productAmountInStorage);
            productDiv.append(editBtn);

            productGrid.prepend(productDiv);
        }

        

        /* for (const product in productsList) {
            console.log(productsList[product]);

            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");

            const productTitle = document.createElement("p");
            productTitle.textContent = productsList[product].title;

            const productPrice = document.createElement("p");
            productPrice.textContent = productsList[product].price + ":-";

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.setAttribute("value", product)

            if (productsList[product].imageOne != null) {
                const proudctImage = document.createElement("img");
                proudctImage.src = productsList[product].imageOne;
                proudctImage.alt = productsList[product].title;

                productDiv.append(proudctImage);
            }

            if (productsList[product].imageTwo != null) {
                const proudctImage = document.createElement("img");
                proudctImage.src = productsList[product].imageTwo;
                proudctImage.alt = productsList[product].title;

                productDiv.append(proudctImage);
            }

            if (productsList[product].imageThree != null) {
                const proudctImage = document.createElement("img");
                proudctImage.src = productsList[product].imageThree;
                proudctImage.alt = productsList[product].title;

                productDiv.append(proudctImage);
            }

            productDiv.append(productTitle);
            productDiv.append(productPrice);
            productDiv.append(editBtn);
            productGrid.prepend(productDiv);

            editBtn.addEventListener("click", () => {
                location.href = "edit_product.html?productId=" + product;
            })
        } */
   })
}
//html
const menCategoryList = document.getElementsByClassName("dropdown-item");
