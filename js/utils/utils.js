export function getProductsList() {
    return JSON.parse(localStorage.getItem('products'));
}

export function getProduct(productId) {
    const productList = getProductsList();
    return productList[productId];
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
    }
}
//html
const menCategoryList = document.getElementsByClassName("dropdown-item");
