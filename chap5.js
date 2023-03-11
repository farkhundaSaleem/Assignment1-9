///////////////////// QUESTION 1 //////////////////








 var num1 =prompt("Enter 1st number");
  var num2 =prompt("Enter 2nd number");
  var sum = Number(num1) + Number(num2);

document.writeln("Sum of " + num1 +" and  " + num2 +" is " + sum);



///////////////////// QUESTION 2 //////////////////









// SUBTRACTION

var num1 =prompt("Enter 1st number");
var num2 =prompt("Enter 2nd number");
var sub = Number(num1) - Number(num2);

document.writeln("Subtraction of " + num1 +" and  " + num2 +" is " + sub);


// MULTIPLICATION

 var num1 =prompt("Enter 1st number");
  var num2 =prompt("Enter 2nd number");
  var mul = Number(num1) * Number(num2);

document.writeln("Multiplicatin of " + num1 +" and  " + num2 +" is " + mul);


// DIVISION

 var num1 =prompt("Enter 1st number");
  var num2 =prompt("Enter 2nd number");
  var div = Number(num1) / Number(num2);

document.writeln("Division of " + num1 +" by " + num2 +" is " + div);


// MODULUS

 var num1 =prompt("Enter 1st number");
  var num2 =prompt("Enter 2nd number");
  var mod = Number(num1) % Number(num2);

document.writeln("Modulus of " + num1 +" and  " + num2 +" is " + mod);









///////////////////// QUESTION 3 //////////////////


// // a
var myVariable;


// // b
document.write("<br>Value after variable declaration is: " + myVariable);


// // c
var myVariable = 5;


// // d
document.write("<br>Initial Value: " + myVariable);


// //   e
myVariable++;


// // f
document.write("<br>Value after increment: " + myVariable);

// // g
myVariable = myVariable + 7;


// // h
 document.write("<br>Value after addition is: " + myVariable);

// //  i
myVariable--;

// // j
document.write("<br>Value after decrement is: " + myVariable);

// // k
myVariable = myVariable%3 ;

// // l
document.write("<br>The remainder  is: " + myVariable )








///////////////////// QUESTION 4 //////////////////
var ticketRs = 600;
var total = ticketRs*5;
document.writeln("<br>Total cost to buy 5 tickets to a movie is "+ total+"PKR");






///////////////////// QUESTION 5 //////////////////



var tableOf = prompt("Enter a number");
document.writeln("<h1><br>TABLE OF  "+ tableOf + "</h1>");



for(var num = 1; num <=10 ; num++)
{
    var tableOf ;
    document.writeln( "<br>"+tableOf +" * " + num + " = " + tableOf*num );
}











///////////////////// QUESTION 6 //////////////////


var  celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
document.writeln(`<br>${celsiusTemp}°C is ${fahrenheitTemp}°F.`);

var fahrenheitTemp2 = 70;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;
document.writeln(`<br>${fahrenheitTemp2}°F is ${celsiusTemp2}°C.`);





///////////////////// QUESTION 7 //////////////////

var item1Price = prompt("Enter Item1 Price : ");
var item2Price = prompt("Enter Item2 Price : ");
var item1Quantity = prompt("Enter Item1 Quantity : ");
var item2Quantity = prompt("Enter Item2 Quantity : ");
var shippingCharges = prompt("Enter Charges :");
var totalCost = Number(item1Price * item1Quantity) + Number(item2Price * item2Quantity) + Number(shippingCharges);

document.write("<h1>Receipt</h1>");
document.write("<p>Item 1 Price: $" + item1Price + "</p>");
document.write("<p>Item 2 Price: $" + item2Price + "</p>");
document.write("<p>Item 1 Quantity: " + item1Quantity + "</p>");
document.write("<p>Item 2 Quantity: " + item2Quantity + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h5>Total Cost of your order is: $" + totalCost + "</h5>");







///////////////////// QUESTION  8 //////////////////




var totalMarks = prompt("Total Marks: ");
var marksObtained = prompt("Marks Obtained : ");
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h1>Mark Sheet</h1>");
document.write("Total Marks : " + totalMarks +"<br>");
document.write("Marks Obtained: " + marksObtained+"<br>"); 
document.write("Percentage: " + percentage +"%"); 









///////////////////// QUESTION  9 //////////////////


var totalInPakistaniRupees = (10 * 104.80) + (25 * 28);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR : " + totalInPakistaniRupees+"<br>");




///////////////////// QUESTION  10 //////////////////

var numm = 7; 


var result = ((numm + 5) * 10) / 2;
document.write(result); 



///////////////////// QUESTION  11 //////////////////
var currentYr = 2023;
var birthYr = prompt("Enter your Birth Year");

var age1 = currentYr - birthYr;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year = " + currentYr +"<br>");
document.write("Birth Year = " + birthYr +"<br>");
document.write( "Your age = "+ age1);





///////////////////// QUESTION  12 //////////////////
var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle is " + radius +"<br>");
document.write("The circumference is :" + circumference +"<br>");
document.write("The area is : " + area);






///////////////////// QUESTION  13 //////////////////

document.write("<h1>The Lifetime Supply Calculator</h1>");

var favoriteSnack = "chocolate"; 

var currentAgee = 30; 
var maxAgee = 80;
var amountPerDay = 2; 
var totalAmount = daysRemaining * amountPerDay; 
var yearsRemaining = maxAgee - currentAgee;
var daysRemaining = yearsRemaining * 365;
document.write("Favourite Snack : " + favoriteSnack +"<br>");
document.write("Current Age : " + currentAgee +"<br>");
document.write("Estimated Maximun Age : " + maxAgee +"<br>");
document.write("Amount of snacks per day : " + amountPerDay +"<br>");
document.write("You will need "+totalAmount +" "+favoriteSnack+ " to last you until the ripe old age of " + maxAgee);






