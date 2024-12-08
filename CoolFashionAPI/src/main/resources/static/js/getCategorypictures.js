import { getRequest } from "./utils/api.js";

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

            productItem.append(productImg, productTitle, productSize, productPrice ,wishlistButton);
            productGrid.append(productItem);
        }
        mainContentContainer.append(productGrid);
    })
}

async function getProductsInCategory(category) {
    const response = await getRequest(`/categories/${category}/products`)
    const data = await response.json();

    return data;
}
// Function to handle adding the product to the wishlist
async function addToWishlist(productId) {
    try {

        // Send product ID and user ID to the backend to add to wishlist
        const response = await fetch('/addToWishList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_id: productId,
            }),
        });

        if (!response.ok) {
            throw new Error('Error adding to wishlist');
        }

        alert('Product has been added to your wishlist!');
    } catch (error) {
        console.error("Failed to add to wishlist:", error);
        alert("There was an error adding the product to your wishlist.");
    }
}

