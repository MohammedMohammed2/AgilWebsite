export function getCategoryProductsJson(productsCategory) {
    return localStorage.getItem(productsCategory);
}
export function createCategoryPage(Event, mainContentContainer) {
    mainContentContainer.innerHTML = "";
    const newContainer = document.createElement("div")
    newContainer.classList.add("featured-products")

    console.log(Event);
    const target = Event.target.innerText;
    const title = document.createElement("h2");
    title.textContent = "" + target;
    newContainer.append(title);
    console.log(target);

    mainContentContainer.insertBefore(newContainer, null);

    const json = getCategoryProductsJson(title);
    const productGrid = document.createElement("div")
    productGrid.classList.add("product-grid")
    if (json === null) {
        createFakePorducts(productGrid, mainContentContainer)
    }
}
function createFakePorducts(productGrid, mainContentContainer) {
    for (let i = 0; i < 5; i++) {
        const productItem = document.createElement("div")
        const productImg = document.createElement("img");
        const productTitle = document.createElement("p");
        const productSize = document.createElement("p");
        const productPrize = document.createElement("p");

        productTitle.innerText = "product " + i;
        productSize.innerText = "size:"
        productPrize.innerText = "price:"
        productImg.src = "product" + i;
        productImg.alt = "product" + i;
        productItem.append()
    }
}
