let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

////////////////////////////////////////////////////////////
var allProducts = document.querySelectorAll(".product-perant .product");
var content = document.querySelector("#listbag");
var btn = document.querySelector("#total");
var totalPrice = 0;
var order = document.getElementById("Order")

allProducts.forEach(function (item){
    item.onclick = function (){
       totalPrice += +(item.getAttribute("price")); 
       let cardTitle = item.querySelector(".card-title").textContent;
       let cardText = item.querySelector(".card-text").textContent;
       content.innerHTML += `<p style="background-color:#ce9b00e3; text-align: right; width: 100%; font-weight: bold;
        font-size: 20px; border-radius: 5px; line-height: 3; padding-right: 15px;">`
                + cardTitle + ' - ' + cardText + '</p>';
       let quantitySpan = document.querySelector(".quantity");
       let currentQuantity = parseInt(quantitySpan.textContent); 
       quantitySpan.textContent = currentQuantity + 1; 
    }
  });

btn.onclick = function() {
    document.getElementById("total").innerHTML = "Total: LE " + totalPrice.toFixed(2);
};

function code1(){
    order.innerHTML =  "Order is On His Way..." + confirm("Order is On His Way..."); 

}

order.onclick= code1
