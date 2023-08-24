GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript
1.Find the culprit
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>
 error:The opening and closing quotation marks around the string inside the alert function are not the standard double 
 quotation marks (") used in programming, but rather curved quotation marks (“ ”). This can lead to a syntax error in JavaScript.

 2.fix.html

 <!DOCTYPE html>
 <html>
 <body>
  <script src=”script.js”></script>
 </body>
 </html>
 scripts.js
 
 alert(“I’m invoked!”)

error: I've replaced the curly 
quotes with regular double quotation 
marks and also it had src names likes scripts.js instead of script.js

 solved code:

 <!DOCTYPE html>
 <html>
 <body>
  <script src="script.js"></script>
 </body>
 </html>
 script.js
 alert("I'm invoked!");

 3.Explain the below how it works

 explain.html
 
 <!DOCTYPE html>
 <html>
 <body>
  <script src=”script.js”></script>
 </body>
 </html>
 script.js
 
 alert("I'm JavaScript!");
 alert('Hello') // this line is not having semicolon
 alert(`Wor
  ld`)
 alert(3 +
 1
 + 2); // this is multiple line code and its working

 explanation:
 alert("I'm JavaScript!"); is a simple 
 example of using the alert() function in
  JavaScript to display a message in
  a popup dialog box within a web browser.

alert('Hello')-'Hello': This is a string literal enclosed within
   single quotation marks (').;: The semicolon at the end of the line is used to terminate the
    statement in JavaScript.when its missed it that satement it will add automaticatioccally at the end of the 
    code by javascript progaramming rule.
   
 alert(`Wor
 ld`)-Wor ld: This is a template literal enclosed within backticks (` `). The string contains two lines of text: "Wor" 
 on the first line and "ld" on the second line.When this line of code is executed, it instructs the web browser to display an alert box with the message "Wor ld". The template literal allows you to maintain the line breaks within the string, so the message displayed in the alert box will have a line 
 break between "Wor" and "ld".

 alert(3 +
    1
    + 2);  continuation characters are not commonly used because JavaScript is designed to handle certain line breaks automatically without requiring special characters for line continuation.
    that's they had calclulated without line breaks


    4.Fix the below to alert Guvi geek

    fix.html
    
    <!DOCTYPE html>
    <html>
    <body>
     <script src=”script.js”></script>
    </body>
    </html>
    script.js
    
    let admin=9, fname=10.5; 
    fname = "Guvi";
    lname = "geek"
    admin = fname+lname;
    alert( admin ); // "Guvi geek

    solved code:

    <html>
    <body>
     <script src="script.js"></script>
    </body>
    </html>
    
script.js

 let admin=9, fname=10.5; 
fname = "Guvi";
let lname = "geek"; // Add 'let' before lname declaration
admin = fname+" "+lname;// Concatenate the first and last name with a space
alert( admin );

5.Fix the below to alert hello Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

solved code:
<html>
<body>
 <script src="script.js"></script>
</body>
</html>


let fname=10.5; 
fname = "Guvi";
let lname = "geek" ;// Add 'let' before lname declaration
let name = fname+" "+lname;// Concatenate the first and last name with a space
alert( `hello ${name}` ); //use the backtick to use the template literals for show the out
 put with string

 6.Fix the below to alert sum of two numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

solved code:
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) +parseInt(b));//use parseInt for convert string to number

7.fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

solved code:

var a = parseInt("2") >parseInt("12");
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

explanation:
However, when comparing strings, 
JavaScript performs character-by-character comparison, and in this case, "2" is greater than "1" (because "2" comes after "1" in the character encoding), 
so the comparison a = "2" > "12" evaluates to true.
To diffuse the code and get "Diffused" as the output, you need to compare the numerical values of the strings rather than the strings themselves. You have to  converting the strings to 
numbers before performing the comparison.
 

 8.How to get the success in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

solved code:
let a = prompt("Enter a number?");

a=false //if we give false it will show only success in console
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

9.How to get the correct score in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
solved code:

let value = parseInt(prompt('How many runs you scored in this ball'));


value=parseInt(value) //you have to convert the string into number 

if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else{
      console.log(`you got scored ${value||0} in this ball`); //if value ===Nan that time it will take 0 which mean no score
}

10.Fix the code to welcome the Employee

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);


solved code:
let login = '';
let message = (login == 'Employee') ? "welcome"://you have to give the second condition
 when use the ternary operator

 (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :'';
console.log(message);

11.Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);

  fixed code:

  let message;
if (null || 2 || undefined )

{
  message = "welcome boss";//remove keyword let beacause already declared 
}
else
{
  message = "Go away";
}
  console.log(message)
 
  12.Fix the code to welcome the boss

  fix.html
  
  <!DOCTYPE html>
  <html>
  <body>
   <script src=”script.js”></script>
  </body>
  </html>
  script.js
  
  let message;
  let lock = 2;
  //Dont change any code below this 
  if (null || lock || undefined )
  {
    message = "Go away";
  }
  else
  {
   message = "welcome";
  }
    console.log(message);
    
    solved code:
    let message=
let lock = 2;

 //changed lock true to false for go to the next condition
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
  
  13.Fix the code to welcome the boss

  fix.html
  
  <!DOCTYPE html>
  <html>
  <body>
   <script src=”script.js”></script>
  </body>
  </html>
  script.js
  
  let message;
  let lock = 2;
  //Dont change any code below this
  if (lock && " " || undefined )
  {
    message = "Go away";
  }
  else
  {
   message = "welcome";
  }
  console.log(message);

  solved code:

  let message;
  let lock = 2;
  lock=false
   //changed lock true to false for go to the next condition
  if (lock && " " || undefined )
  {
    message = "Go away";
  }
  else
  {
   message = "welcome";
  }
  console.log(message);

  14.Change the code to print

  3
  
  2
  
  1
  
  fix.html
  
  <!DOCTYPE html>
  <html>
  <body>
   <script src=”script.js”></script>
  </body>
  </html>
  script.js
  
  //You can change only 2 characters
  let i = 3;
  while (i=3) {
    console.log( --i );
  }

  solved code:

  let i = 3; 
while (i>0) { //decrese the value till 1
  console.log( i--);
}


15.Change the code to print 1 to 10 in 4 lines

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

solved code:
for(i=1;i<=10;i++){
    console.log(i)
 }


 16.Change the code to print even numbers

 fix.html
 
 <!DOCTYPE html>
 <html>
 <body>
  <script src=”script.js”></script>
 </body>
 </html>
 script.js
 
 //You are allowed to modify only one character 
 for (let num = 2; num <= 20; num += 1) {
   console.log(num)
 }

 solved code:
 for (let num = 2; num <= 20; num += 2) {
    //change the increment comndition
    console.log(num)
  }

  17.Change the code to print all the gifts
  fix.html

  <!DOCTYPE html>
  <html>
  <body>
   <script src=”script.js”></script>
  </body>
  </html>
  script.js
  
  let gifts = ["teddy bear", "drone", "doll"];
  for (let i = 0; i < 3; i++) {
    console.log('Wrapped ${'gifts[i]'} and added a bow!');
  }
solved code:

let gifts = ["teddy bear", "drone", "doll"];
  for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);//use template literals operator
  }
  
  18.Fix the code to disarm the bomb.

  fix.html
  
  <!DOCTYPE html>
  <html>
  <body>
   <script src=”script.js”></script>
  </body>
  </html>
  script.js
  
  let countdown = 100;
  while (countdown > 0) {
    countdown--;
    if(countdown == 0)
    {
     console.log("bomb triggered");
    }
  }

  solved code:

  let countdown=100;

while(countdown>0){
    --countdown
    if(countdown===0){
        console.log("Bomb disarmed");
    }
}

19.Whats the msg printed and why?

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg +="hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);

ouput:
hi //because 0 is also false based on js programing method


