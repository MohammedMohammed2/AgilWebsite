export async function createCategoryPage(event, mainContentContainer) {
    const category = event.target.textContent;

    mainContentContainer.innerHTML = "";
    const newContainer = document.createElement("div");
    newContainer.classList.add("featured-products");

    const title = document.createElement("h2");
    title.textContent = category;
    newContainer.append(title);
    mainContentContainer.insertBefore(newContainer, null);

    const productGrid = document.createElement("div");
    productGrid.classList.add("product-grid");

    getProductsInCategory(category)
        .then(async (productsList) => {
            for (const product of productsList) {
                const productItem = document.createElement("div");
                const productImg = document.createElement("img");
                const productTitle = document.createElement("p");
                const productSize = document.createElement("p");
                const productPrice = document.createElement("p");
                const productAmount = document.createElement("p");
                const wishlistButton = document.createElement("button");

                productItem.classList.add("product-item");

                wishlistButton.classList.add("wishlist-button");
                wishlistButton.textContent = "Add to Wishlist";
                wishlistButton.onclick = () => addToWishlist(product.id);

                // Show out of stock if amount is 0, else show amount
                product.amount > 0
                    ? (productAmount.innerText = `Amount: ${product.amount}`)
                    : (productAmount.innerText = "Out of stock");

                productTitle.innerText = product.name;
                productSize.innerText = `Size: ${product.size}`;
                productPrice.innerText = `Price: ${product.price} kr`;

                // Fetch and handle images
                const imageUrls = [];
                await getImages(product.id).then((imageList) => {
                    for (const image of imageList) {
                        if (image.isPrimary) {
                            productImg.src = image.imageUrl;
                            productImg.alt = product.name;
                        }
                        imageUrls.push(image.imageUrl);
                    }
                });

                productItem.setAttribute("data-images", imageUrls.join(","));

                // Attach event listener for opening the lightbox
                productItem.onclick = () => openLightbox(imageUrls);

                productItem.append(
                    productImg,
                    productTitle,
                    productSize,
                    productPrice,
                    productAmount,
                    wishlistButton
                );
                productGrid.append(productItem);
            }
            mainContentContainer.append(productGrid);
        });
}

// Function to handle the lightbox
function openLightbox(images) {
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");
    const thumbnailContainer = document.getElementById("thumbnail-container");

    let currentIndex = 0;

    // Clear existing thumbnails
    thumbnailContainer.innerHTML = "";

    // Populate lightbox with images
    images.forEach((url, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = url;
        thumbnail.className = "thumbnail";
        if (index === 0) {
            thumbnail.classList.add("active");
        }

        thumbnail.onclick = () => {
            currentIndex = index;
            updateLightboxContent();
        };

        thumbnailContainer.append(thumbnail);
    });

    const updateLightboxContent = () => {
        lightboxContent.src = images[currentIndex];
        document.querySelectorAll(".thumbnail").forEach((thumb, idx) => {
            thumb.classList.toggle("active", idx === currentIndex);
        });
    };

    document.getElementById("next").onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxContent();
    };

    document.getElementById("prev").onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxContent();
    };

    document.querySelector(".close").onclick = () => {
        lightbox.style.display = "none";
    };

    lightbox.style.display = "flex";
    updateLightboxContent();
}

// Function to handle adding the product to the wishlist
async function addToWishlist(productId) {
    try {
        const response = await fetch("/addToWishList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to add product to wishlist");
        }

        alert(result.message);
    } catch (error) {
        console.error("Failed to add to wishlist:", error);
        alert(error.message); // Display error message from the backend
    }
}

async function getProductsInCategory(category) {
    const response = await getRequest(`/categories/${category}/products`);
    return response.json();
}

async function getImages(productId) {
    const response = await getRequest(`/products/${productId}/images`);
    return response.json();
}
