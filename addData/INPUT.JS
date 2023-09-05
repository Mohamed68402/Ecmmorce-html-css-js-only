const products = [];

document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    const addProductBtn = document.getElementById("addProductBtn");
    const displayProductsBtn = document.getElementById("displayProductsBtn");

    addProductBtn.addEventListener("click", function () {
        const productName = document.getElementById("productName").value;
        const price = parseFloat(document.getElementById("price").value);
        const imageInput = document.getElementById("image");


        if (productName.trim() !== "" && !isNaN(price)) {
            const imageUrl = URL.createObjectURL(imageInput.files[0]);

               // Data URL of the selected image
                products.push({ productName, price, imageUrl });
                console.log("Product added:", products[products.length - 1]);
                clearFormFields();
            products.push({ productName, price,imageUrl });
            console.log("Product added:", products[products.length - 1]);
            clearFormFields();
        }
    });
    
     
    
    displayProductsBtn.addEventListener("click", function () {
        console.log(products);

        const queryString = new URLSearchParams({
            products: JSON.stringify(products)
        }).toString();
        window.location.href = `../index.html?${queryString}`;
    });

    function clearFormFields() {
        document.getElementById("productName").value = "";
        document.getElementById("price").value = "";
    }
});
