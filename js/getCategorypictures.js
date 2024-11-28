//clears the page,adds the category title to the page and shows products for the category if there is any
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

    let productsList = localStorage.getItem(target);
    console.log(target);
    productsList = productsList ? JSON.parse(productsList) : {};
    console.log("productlist " + productsList)
    const productGrid = document.createElement("div")
    productGrid.classList.add("product-grid")
    //saveProductTestingPurpose(productsList);
    if (Object.keys(productsList).length == 0) {
        console.log("hello?");
        createFakePorducts(productGrid, mainContentContainer)
    }
    else {
        console.log(productsList);
        for (const key in productsList) {
            console.log(key);
            const product = productsList[key];

            const productItem = document.createElement("div")
            const productImg = document.createElement("img");
            const productTitle = document.createElement("p");
            const productSize = document.createElement("p");
            const productPrice = document.createElement("p");

            productItem.classList.add("product-item")
            productImg.src = product.img;
            productImg.alt = "product " + key;
            productTitle.innerText = product.title;
            productSize.innerText = "size: " + product.size;
            productPrice.innerText = "price:" + product.price;

            productItem.append(productImg, productTitle, productSize, productPrice);
            productGrid.append(productItem);
        }
        mainContentContainer.append(productGrid);

    }
}
//Testing if there is a product saved
function saveProductTestingPurpose(productsList) {
    let nextProductId = Object.keys(productsList).length + 1;
    productsList[nextProductId] = {
        title: "Sam",
        price: "10",
        size: "M",
        img: "sam.jpg"
    }
    localStorage.setItem("Men Product#1", JSON.stringify(productsList));
}
//creates fake products, and shows them
function createFakePorducts(productGrid, mainContentContainer) {
    for (let i = 0; i < 5; i++) {
        const productItem = document.createElement("div")
        const productImg = document.createElement("img");
        const productTitle = document.createElement("p");
        const productSize = document.createElement("p");
        const productPrice = document.createElement("p");

        productItem.classList.add("product-item")
        productTitle.innerText = "product " + i;
        productSize.innerText = "size:"
        productPrice.innerText = "price:"
        productImg.src = "product" + i;
        productImg.alt = "product" + i;
        productItem.append(productImg, productTitle, productSize, productPrice);
        productGrid.append(productItem);
        mainContentContainer.append(productGrid);
    }
}
