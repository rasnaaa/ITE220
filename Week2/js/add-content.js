var price=[10,5,1];
// var quantity;
var total=0;
var d=0;
var products = ["Stamford T-Shirt","Stamford Notebook","Stamford Wristband"];
var productList = document.getElementById("productList");
var greetings= document.getElementById("greeting");
var names=document.getElementById("name");
names.textContent="Rasna";
var discounts = document.getElementById("discount");
discounts.textContent="20% OFF!"



var current=new Date().getHours();

if(current >=1 && current <=11){greetings.textContent="Good Morning"}
	else if (current >=12 && current <=18){greetings.textContent="Good Afternoon"}
	else {greetings.textContent="Good Evening"};

	


productList.innerHTML+="<li>"+products[0]+":$"+price[0]+"</li>";
productList.innerHTML+="<li>"+products[1]+":$"+price[1]+"</li>";
productList.innerHTML+="<li>"+products[2]+":$"+price[2]+"</li>";


total=price[0]+price[1]+price[2];
d=total*0.2;
total=total-d;

// price=5;
// quantity = 14;
// total = price * quantity;

//document.write("Total is " + total);
var totalPriceEle= document.getElementById("totalPrice");
totalPriceEle.textContent = "$"+ total;