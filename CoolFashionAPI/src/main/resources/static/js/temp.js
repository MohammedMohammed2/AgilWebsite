export async function createCategoryPage(event, mainContentContainer) {
    const category = event.target.textContent;

    mainContentContainer.innerHTML = "";
    const newContainer = document.createElement("div")
    newContainer.classList.add("featured-products")

    const title = document.createElement("h2");
    title.textContent = category;
    newContainer.append(title);
    mainContentContainer.insertBefore(newContainer, null);
    const productGrid = document.createElement("div")
    productGrid.classList.add("product-grid")

    getProductsInCategory(category)
    .then((productsList) => {
        for (const key in productsList) {
            const product = productsList[key];
            console.log(product);
            
            const productItem = document.createElement("div")
            const productImg = document.createElement("img");
            const productTitle = document.createElement("p");
            const productSize = document.createElement("p");
            const productPrice = document.createElement("p");
            const productAmount = document.createElement("p");
            const wishlistButton = document.createElement('button');

            productItem.classList.add("product-item")
            productImg.src = "" + product.imageOne;
            productImg.alt = "product " + key;
            productTitle.innerText = product.name;
            productSize.innerText = "size: " + product.size;
            productPrice.innerText = "price:" + product.price + " kr";

            wishlistButton.classList.add('wishlist-button');
            wishlistButton.textContent = 'Add to Wishlist';
            wishlistButton.onclick = () => addToWishlist(product.id);
            
            // Show out of stock if amount is 0, else show amount
            product.amount > 0 ? productAmount.innerText = "amount: " + product.amount  : productAmount.innerText = "out of stock";

            productItem.append(productImg, productTitle, productSize, productPrice, productAmount, wishlistButton);
            productGrid.append(productItem);
        }
        mainContentContainer.append(productGrid);
    })
}