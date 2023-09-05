var shoopingCart = document.querySelectorAll(".buy-icon");
var products = [];
var link = document.querySelector("#bagShopping")
let isListenerTriggered = false;
var queryString ;

shoopingCart.forEach((selectProducts, index) => {
    selectProducts.addEventListener("click", function(event) {
        event.preventDefault(); 
        isListenerTriggered = true;

        var productQuantitySpan = this.closest(".product-cart").querySelector(".product-section .product-cart .parent-quantity span").getAttribute("data-value");
        var pricecart = this.closest(".product-cart").querySelector(".product-section .product-cart .price").getAttribute("data-value");
        var tshirtName = this.closest(".product-cart").querySelector(".product-section .product-cart .TshirtName").textContent
        var imgSrc = this.closest(".product-cart").querySelector(".product-section .product-cart img").getAttribute("src")
        const adjustedImgSrc = "../" + imgSrc;

        var product = {
            productQuantitySpan,
            pricecart,
            tshirtName,
            adjustedImgSrc
        }
        products[index] = product; 
        queryString = products.map((product, productIndex) => `quantityValue${productIndex}=${encodeURIComponent(product.productQuantitySpan)}&price${productIndex}=${encodeURIComponent(product.pricecart)}&tshirt${productIndex}=${encodeURIComponent(product.tshirtName)}&img${productIndex}=${encodeURIComponent(product.adjustedImgSrc)}`).join('&');
   console.log(queryString);
    });
});


link.addEventListener("click", (event) => {
    if (isListenerTriggered) {
        console.log('Event listener is triggered.');
        link.href = '../cart/cart.html?' + queryString;
        link.setAttribute("href", `../cart/cart.html?${queryString}`);
    } else {
        console.log('Event listener is not triggered yet.');
        event.preventDefault();
    }

    return false; // Prevent default behavior and event propagation
});

