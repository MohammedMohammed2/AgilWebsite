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
        .then(async (productsList) => {
            for (const key in productsList) {
                console.log(productsList);
                const product = productsList[key];
                console.log("product")
                console.log(product.imageOne);


                const productItem = document.createElement("div")
                const productImg = document.createElement("img");
                const productTitle = document.createElement("p");
                const productSize = document.createElement("p");
                const productPrice = document.createElement("p");
                const productAmount = document.createElement("p");
                const imageDiv = document.createElement("div");
                const wishlistButton = document.createElement('button');

                productItem.classList.add("product-item")
                // imageDiv.setAttribute("data-images")

                wishlistButton.classList.add('wishlist-button');
                wishlistButton.textContent = 'Add to Wishlist';
                wishlistButton.onclick = () => addToWishlist(product.id);


                // Show out of stock if amount is 0, else show amount
                product.amount > 0 ? productAmount.innerText = "amount: " + product.amount : productAmount.innerText = "out of stock";
                productTitle.innerText = product.name;
                productSize.innerText = "size: " + product.size;
                productPrice.innerText = "price:" + product.price + " kr";

                // Get a list of images, loop through and add elements for each image
                let imageAttribute = "";
                const imageList = getImages(product.id)
                    .then((imageList) => {
                        for (const key in imageList) {
                            const imageObject = imageList[key];
                            imageAttribute += imageObject.imageUrl + ",";
                            if (imageObject.isPrimary) {
                                productImg.src = imageObject.imageUrl
                                productImg.setAttribute("id", "primaryImage")
                            }
                            else {
                                const productImage = document.createElement("img");
                                productImage.src = imageObject.imageUrl
                                imageDiv.append(productImage);
                            }

                        }
                        console.log(imageAttribute)
                        productItem.setAttribute("data-images", imageAttribute);
                        productItem.append(imageDiv);
                    });


                //changeLightboxPictures(imageList);




                wishlistButton.classList.add('wishlist-button');
                wishlistButton.textContent = 'Add to Wishlist';
                wishlistButton.onclick = () => addToWishlist(product.id);

                // Show out of stock if amount is 0, else show amount
                product.amount > 0 ? productAmount.innerText = "amount: " + product.amount : productAmount.innerText = "out of stock";

                productItem.append(productImg, productTitle, productSize, productPrice, productAmount, wishlistButton);
                productGrid.append(productItem);
            }
            mainContentContainer.append(productGrid);
        })
}


// Function to handle adding the product to the wishlist
async function addToWishlist(productId) {
    try {
        const response = await fetch('/addToWishList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }) // Send the productId in the request body
        });

        // Parse the response as JSON
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to add product to wishlist');
        }

        // Display success message
        alert(result.message);
    } catch (error) {
        console.error("Failed to add to wishlist:", error);
        alert(error.message);  // Display error message from the backend
    }
}


function changeLightboxPictures(imageList) {
    const thumbnailContainer = document.getElementById("thumbnail-container");
    thumbnailContainer.innerHTML = "";

    for (const key in imageList) {
        const imageObject = imageList[key];
        const img = document.createElement("img");
        img.src = imageObject.imageUrl;
        if (imageObject.isPrimary) {
            img.classList = "thumbnail active";
        }
        else {
            img.className = "thumbnail"
        }

        thumbnailContainer.append(img);
    }
}

async function getProductsInCategory(category) {
    const response = await getRequest(`/categories/${category}/products`)
    const data = await response.json();

    return data;
}

async function getImages(productId) {
    const response = await getRequest(`/products/${productId}/images`);
    const data = await response.json();

    return data;
}