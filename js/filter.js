var firstFilter = document.getElementById('fil-1');
var SecondFilter = document.querySelectorAll(".types");
var thirdFilter = document.getElementById("Budget");
var fourthFilter = document.querySelectorAll(".gender");

function updateDisplay() {
    var types = document.querySelectorAll(".product-section .product-cart .color");
    var quantity = document.querySelectorAll(".product-section .product-cart .parent-quantity span");
    var prices = document.querySelectorAll(".product-section .product-cart .price");
    var genderType = document.querySelectorAll(".product-section .product-cart .gender-type");

    types.forEach((type, index) => {
        var dataValue = type.getAttribute("data-value");
        var displayStyle = "flex";
        // console.log(budgets);

        var quantityCondition = quantity[index].getAttribute("data-value");
        var budgets = prices[index].getAttribute("data-value");
        var budgeCondtion = thirdFilter.value
        var isFirstFilterChecked = firstFilter.checked;
        var isVectoionChecked = SecondFilter[0].checked;
        var isClassicChecked = SecondFilter[1].checked;
        var isMaleChecked = fourthFilter[0].checked;
        var isFemaleChecked = fourthFilter[1].checked;
        var genderData = genderType[index].getAttribute("data-value");

        if(budgets>budgeCondtion){
            displayStyle = "none";
        }

        if (isFirstFilterChecked) {
            if (quantityCondition < 10) {
                displayStyle = "none";
            }
        }

        if (isVectoionChecked && dataValue === "vectoion") {
            displayStyle = "none";
        }

        if (isClassicChecked && dataValue === "classic") {
            displayStyle = "none";
        }
        if (isMaleChecked && genderData === "female") {
            displayStyle = "none";
        }
        if (isFemaleChecked && genderData === "male") {
            displayStyle = "none";
        }

        type.parentElement.style.display = displayStyle;
    });
}

firstFilter.addEventListener('change', updateDisplay);

SecondFilter.forEach((value) => {
    value.addEventListener('change', updateDisplay);
});

thirdFilter.addEventListener('change', updateDisplay);

fourthFilter.forEach((value) => {
    value.addEventListener('change', updateDisplay);
});