var queryString = window.location.search.substring(1);
var params = new URLSearchParams(queryString);


var cartProducts = [];
params.forEach((value, key) => {
    if (key.startsWith("quantityValue")) {
      var index = key.replace("quantityValue","");
      if (!cartProducts[index]) cartProducts[index] = {}; 
      cartProducts[index].quantityValue = value;
    } else if (key.startsWith("price")) {
      var index = key.replace("price", "");
      if (!cartProducts[index]) cartProducts[index] = {};
      cartProducts[index].price = value;
    } else if (key.startsWith("tshirt")) {
      var index = key.replace("tshirt", "");
      if (!cartProducts[index]) cartProducts[index] = {};
      cartProducts[index].tshirt = value;
    } else if (key.startsWith("img")) {
      var index = key.replace("img", "");
      if (!cartProducts[index]) cartProducts[index] = {};
      cartProducts[index].img = value;
    }
  });


cartProducts.forEach((product,index)=>{
  const productElement = document.createElement("div");
  productElement.className = "shopBags";
  productElement.innerHTML = `

  <div class="allData">
      <img src="${product.img}" alt="product image" /> 
      <h4>${product.tshirt}</h4>
<input type="number" id="quantity-input[${index}]"  class="quantity-input" value="1" min="1" max="${product.quantityValue}">
  
      <h4 id="price" value="${product.price}" class="price">${product.price}</h4>
</div>
  `;
  document.body.appendChild(productElement)

})
addEventListener("DOMContentLoaded", (event) => {

    var quantityInput = document.querySelectorAll(".quantity-input")
    var prices=document.querySelectorAll(".price")
    quantityInput.forEach((data,index)=>{
      data.addEventListener("change", (event)=>{
        prices[index].innerHTML = (data.value * prices[index].getAttribute("value")).toFixed(2);

      })
    })
   

    

});


