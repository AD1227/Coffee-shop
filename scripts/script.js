//jQuery for hero image to consume the header window space
$(document).ready(function(){
    $('.hero').height($(window).height());
    $('.hero-contact').height($(window).height());
});

//this function is to show and hide rewards on slide bar in gallery

const btn = getElementById("btn-rewards");

function showRewards100(){
    
    document.getElementById("rewards-100").style.display = "flex";
    document.getElementById("rewards-200").style.display = "none";
   document.getElementById("rewards-300").style.display = "none";
    document.getElementById("rewards-400").style.display = "none";
    document.getElementById("rewards-500").style.display = "none";


}
function showRewards200(){
   
    document.getElementById("rewards-100").style.display = "none";
    document.getElementById("rewards-200").style.display = "flex";
    document.getElementById("rewards-300").style.display = "none";
    document.getElementById("rewards-400").style.display = "none";
    document.getElementById("rewards-500").style.display = "none";


}
function showRewards300(){
    document.getElementById("rewards-100").style.display = "none";
    document.getElementById("rewards-200").style.display = "none";
    document.getElementById("rewards-300").style.display = "flex";
   document.getElementById("rewards-400").style.display = "none";
    document.getElementById("rewards-500").style.display = "none";


}
function showRewards400(){
    document.getElementById("rewards-100").style.display = "none";
    document.getElementById("rewards-200").style.display = "none";
    document.getElementById("rewards-300").style.display = "none";
   document.getElementById("rewards-400").style.display = "flex";
   document.getElementById("rewards-500").style.display = "none";


}
function showRewards500(){
    document.getElementById("rewards-100").style.display = "none";
    document.getElementById("rewards-200").style.display = "none";
    document.getElementById("rewards-300").style.display = "none";
    document.getElementById("rewards-400").style.display = "none";
    document.getElementById("rewards-500").style.display = "flex";


}


const itemPrices ={
      //"Coffee  
        "coffee":9.00,	
        "espresso":9.00,
        "americano":9.00,
        "latte":9.00,
        "cappuccino":9.00,
        "mocha":9.00,	
        //teas
        "lemon-tea":	9.00,
        "green-tea":	9.00,
        "jasmine-tea":	9.00,
        "earl-grey":	9.00,
        "raspberry-tea":	9.00,
       // fresh drinks	
        "hot-chocolate":	9.00,
        "milkshake":	9.00,
        "smoothie":	9.00,
        "lemonade":	9.00,
        "vanilla-milkshake":	9.00,
       // desserts	
        "chocolate-cake":	9.00,
        "carrot-cake":	9.00,
        "cheesecake":	9.00,
        "pumpkin-pie":	9.00,
        "pecan-pie":	9.00,
        //frappe	
        "caramel-frappe":	9.00,
        "mocha-frappe":	9.00,
        "mocha-cookie-frappe":	9.00,
        "caramel-ribbon-crunch-frappe":	9.00,
        "coffee-frappe":	9.00,
        //snacks	
        "french-fries":	9.00,
        "buffalo-wings":	9.00,
        "beef-sliders":	9.00,
        "spaghetti-carbonara":	9.00,
        "pizza":	9.00,



};
let formCount = 0;

function addItemForm() {
    formCount++;
    const formContainer = document.getElementById("form-container");

    const itemDiv = document.createElement("div");
    itemDiv.className = "item-form";

    const selectId=`itemName${formCount}`;
    const quantityId=`quantity${formCount}`;
    const priceId=`price${formCount}`;
    const totalId=`total${formCount}`;
    itemDiv.innerHTML = `
        <h3>${formCount}</h3>
        <label for="${selectId}">Item Name:</label>
        <select name="itemName" id="${selectId}" class="form-control col-md-6" size="1">
            <option value=""> --Select an Item-- </option>
            <optgroup label="Coffee">
            <option value="espresso">Espresso</option>
            <option value="americano">Americano</option>
            <option value="latte">Latte</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="mocha">Mocha</option>
            </optgroup>
            <optgroup label="Teas">
                <option value="lemon-tea">Lemon Tea</option>
                <option value="green-tea">Green Tea</option>
                <option value="jasmine-tea">Jasmine Tea</option>
                <option value="earl-grey">Earl Grey</option>
                <option value="raspberry-tea">Raspberry Tea</option>
            </optgroup>
            <optgroup label="Fresh Drinks">
                <option value="hot-chocolate">Hot Chocolate</option>
                <option value="milkshake">Milkshake</option>
                <option value="smoothie">Smoothie</option>
                <option value="vanilla-milkshake">Vanilla Milkshake</option>
            </optgroup>
            <optgroup label="Dessert">
                <option value="chocolate-cake">Chocolate Cake</option>
                <option value="carrot-cake">Carrot Cake</option>
                <option value="cheesecake">Cheesecake</option>
                <option value="pumpkin-pie">Pumpkin Pie</option>
                <option value="pecan-pie">Pecan Pie</option>
            </optgroup>
            <optgroup label="Frappé">
                <option value="caramel-frappe">Caramel Frappé</option>
                <option value="caramel-ribbon-crunch-frappe">Caramel Ribbon crunch Frappé</option>
                <option value="mocha-frappe">Mocha Frappé</option>
                <option value="mocha-cookie-frappe">Mocha Cookie Frappé</option>
                <option value="coffee-frappe">Coffee Frappé</option>
            </optgroup>
            <optgroup label="Snacks">
                <option value="french-fries">French Fries</option>
                <option value="buffalo-wings">Buffalo Wings</option>
                <option value="beef-sliders">Beef Sliders</option>
                <option value="spaghetti-carbonara">Spaghetti Carbonara</option>
                <option value="pizza">Pizza</option>
            </optgroup>
             
        </select>
        <br>
        <label for="${quantityId}">Quantity:</label>
        <input type="number" name="quantity" id="${quantityId}" class="form-control col-md-1" min="1" required /><br>

        <label for="${priceId}">Price:</label>
        <input type="number" name="price" id="${priceId}" step="0.01" class="form-control col-md-1" min="0" readonly /><br>

        <label for="${totalId}">Total:</label>
        <input type="number" name="total" id="${totalId}" step="0.01" class="form-control col-md-3" min="0" readonly /><br>

        <button type="button" class="remove-btn btn lg-btn btn-outline-danger">Remove item</button>

     
    `;

    formContainer.appendChild(itemDiv);

    //eventlistener for remove item button
    itemDiv.querySelector(".remove-btn").addEventListener("click",function(){
        itemDiv.remove();
        updateGrandtotal();
    });

    const selectElement= document.getElementById(selectId);
    const priceInput = document.getElementById(priceId);
    const quantityInput = document.getElementById(quantityId);
    const totalInput = document.getElementById(totalId);

    //function to update the total

    function updateTotal(){
        const price = parseFloat(priceInput.value) ||0;
        const quantity = parseInt(quantityInput.value)||0;
        const total = price * quantity;
        totalInput.value = total ? total.toFixed(2):"";
        updateGrandtotal();
    }

   selectElement.addEventListener('change',function(){
        const selectedItem = this.value;
        if(itemPrices[selectedItem]){
            priceInput.value = itemPrices[selectedItem].toFixed(2);
        }else{
            priceInput.value ="";
        }
        updateTotal();

    });

    //Update the total when the quantity is change
    quantityInput.addEventListener('input',updateTotal);

    function updateGrandtotal(){
        const totalFields = document.querySelectorAll('input[name="total"]');
        let grandTotal = 0;
        totalFields.forEach(field=>{
            const value = parseFloat(field.value);
            if(!isNaN(value)){
                grandTotal += value;
            }
        });
        document.getElementById("grand-total").textContent = grandTotal.toFixed(2);
    }

    updateGrandtotal();
}



function showLogin(){
    document.getElementById("loginForm").style.display ="block";
    document.getElementById("signupForm").style.display="none";
}

function showSignup(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault(); //Prevent default from submission

    const username = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if(username && password){
        //All fields are filled in
        window.location.href ="index.html";
    } else {
        alert("Please fill in all fields.")
    }
});

document.getElementById("signupForm").addEventListener("submit",function(event){
    event.preventDefault(); //Prevent default from submission

    const username = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const firstName = document.getElementById("fname").value.trim();
    const lastname = document.getElementById("lname").value.trim();

    if(username && password && firstName && lastname){
        //All fields are filled in
        window.location.href ="log-in-page.html";
    } else {
        alert("Please fill in all fields.")
    }
});

//function to get url parameters
function getQueryParam(param){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

//Show signup if URL has ?show=signup

window.onload = function(){
    const show = getQueryParam("show");
    if(show === "signupForm"){
         document.getElementById("loginForm").style.display = "none";
         document.getElementById("signupForm").style.display = "block";
    }
}





