///////////////// QUESTION 1 ////////////////
 var numb = prompt("Enter Number");
 document.writeln("Result:"+"<br>");
 document.writeln("The Value of a is : " + numb +"<br>");
 document.writeln("............................................." +"<br>")


 document.writeln("The Value of ++a is : " + ++numb +"<br>");
 document.writeln(" Now the Value of a is : " + numb +"<br>");

 document.writeln("The Value of a++ is : " + numb++ +"<br>");
 document.writeln("Now the Value of a is : " + numb +"<br>");


 document.writeln("The Value of --a is : " + --numb +"<br>");
 document.writeln("Now the Value of a is : " + numb +"<br>");


 document.writeln("The Value of a-- is : " + numb-- +"<br>");
 document.writeln("Now the Value of a is : " + numb +"<br>");





 ///////////////// QUESTION 2 ////////////////

 var a = 2;
 var b = 1;
 


 document.writeln("a is : " + a +"<br>");
document.writeln("b is : " + b +"<br>");
document.writeln("Result is : " + 0 +"<br>");

 --a; // The value of a is decremented before its value is used. a now becomes 1.
--a - --b; // The value of a is decremented before its value is used. The value of b is also decremented before its value is used. a now becomes 0 and b becomes 0. The result is 0 - 0 = 0.
--a - --b + ++b; // The value of a is decremented before its value is used. The value of b is decremented before its value is used. The value of b is then incremented before its value is used. a now becomes -1, b becomes 1. The result is -1 - 0 + 1 = 0.
--a - --b + ++b + b--; // The value of a is decremented before its value is used. The value of b is decremented before its value is used. The value of b is then incremented before its value is used. The value of b is then used and decremented after its value is used. a now becomes -2, b becomes 0. The result is -2 - 0 + 1 + 1 = 0.

// Result:
// 1
// 0 - 0 = 0
// -1 - 0 + 1 = 0
// -2 - 0 + 1 + 1 = 0.




 ///////////////// QUESTION 3 ////////////////


var user = prompt("Enter Your Name : ");
document.writeln("Hey " + user +"!"+ "Welcome Here")





///////////////// QUESTION 5 ////////////////




var tableOf = prompt("Enter a number");


if(tableOf)
{
for(var num = 1; num <= 10 ; num++)
{
    var tableOf ;
    document.writeln( "<br>"+tableOf +" * " + num + " = " + tableOf*num );
}
}
else
{
    for(var num=1;num<=10;num++)
    {
        
        document.writeIn("5 x " + num + " = " + (5 * num) + "<br>");
    }
}



///////////////// QUESTION 6 ////////////////
var sub1 = prompt("Enter First Subject : ");
var sub2 = prompt("Enter Second Subject : ");
var sub3 = prompt("Enter Third Subject : ");
var totalMarks = 100;
var obtMarks1 = prompt("Obtained Marks In "+ sub1);
var obtMarks2 = prompt("Obtained Marks In "+ sub2);
var obtMarks3 = prompt("Obtained Marks In "+ sub3);
var totalObt = obtMarks1 + obtMarks2 + obtMarks3;
var percentage = (totalObt / (totalMarks * 3)) * 100;


document.write(`
    <table>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
        </tr>
        <tr>
            <td>${sub1}</td>
            <td>${totalMarks}</td>
            <td>${obtMarks1}</td>
        </tr>
        <tr>
            <td>${sub2}</td>
            <td>${totalMarks}</td>
            <td>${obtMarks2}</td>
        </tr>
        <tr>
            <td>${sub3}</td>
            <td>${totalMarks}</td>
            <td>${obtMarks3}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>${totalMarks * 3}</td>
            <td>${totalObt}</td>
        </tr>
        <tr>
            <td>Percentage</td>
            <td></td>
            <td>${percentage.toFixed(2)}%</td>
        </tr>
    </table>
`);

