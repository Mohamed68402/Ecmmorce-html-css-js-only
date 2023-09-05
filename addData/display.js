document.addEventListener("DOMContentLoaded", function () {
    const displayedProductsContainer = document.getElementById("displayedProducts");

    // Parse query parameters to retrieve product data array
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const products = JSON.parse(urlParams.get("products"));

    // Loop through products and create product elements
    products.forEach(product => {

        const productElement = document.createElement("div");
        productElement.className = "product-cart";
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="product image" /> <!-- Use the provided image URL -->
            <span>adidas</span>
            <h4>${product.productName}</h4>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h4 class="price">${product.price}</h4>
        `;

        displayedProductsContainer.appendChild(productElement);
    });
});
