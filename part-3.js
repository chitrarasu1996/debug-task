GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

1.Fix the code to get the largest of three.

Code:

aa = (f,s,t) => {
    f,s,t; //removed declaration
   if(f>s &&f>t){
   console.log(f)
  }
   else if(s>f && s>t){
   console.log(s)}
   else{
   console.log(t)}
  }
  aa(1,2,3);

  2.Fix the code to Sum of the digits present in the number

  Code:
  
  let n = 123;
  console.log(add(n));
  function add(n)
  {
n=n.toString().split("")//split the number after converted into string
console.log(n)
  let sum = 10;
  for(var i=0;i<n.length;i++){
   sum+=parseFloat(n[i])
   }
   return sum;
  }
  

  3.Fix the code to Sum of all numbers using IIFE function

  Code:
  
  const arr = [9,8,5,6,4,3,2,1];
  (function() {
      
   let sum = 0;
   for (var i = 0; i < arr.length; i++){
    // removed semicolon ; after the for loop declaration.
   sum += arr[i];
   }
   console.log(sum);
   return sum;
  })();
  

4.Fix the code to gen Title caps.

Code:

var arr = ["guvi","geek", "zen", "fullstack"]
 let ano=function(arr) {
 for (var i = 0; i < arr.length; i++) {
//given names correctly
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
}
ano(arr);//passed value arr

5.Fix the code to return the Prime numbers

Code:

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Not a prime number
    }
  }
  return num !== 1; // Prime number
});
console.log(myPrime);

6.Fix the code to sum the number in that array

Code:

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
let sum = (a, b) => a + b;
//declared let keyword
sum = num.reduce(sum)
console.log(sum);

7.Fix the code to rotate an array by k times and return rotated array using IIFE function

Code:

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
let out=arr.slice(k+1,arr.length).concat(arr.slice(0,k+1))
console.log(out)
})();

8.print all odd numbers in an array using IIFE function

Code:

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
  // when the remainder after division by 2 is not equal to 0
 console.log(arr[i]);
 }}
})();
9.Fix the code to reverse.

Code:

(function(str){
  //declare the keyword
  let  str1 = str.split("").reverse().join("")
   console.log(str1); 
  })("abcd")

  10.Fix the code to remove duplicates.

  Code:
  
  var res = function(arr){
  
    let newArr=[];
    for(let i=0;i<arr.length;i++){
  if(newArr.indexOf(arr[i])===-1){
    //compare is equal to one
     newArr.push(arr[i])
  
  }
    }
    console.log(newArr)
     }
     res(["guvi","geek","guvi","duplicate","geeK"])

     11.[
      {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
      {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
      ]
      
      Code:
      var final=[]
      var array =[
          [["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
      
      
          [["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]
      ];
      
      while(array.length!==0){
        
          let outer_remove=array.shift();
          let obj={};
      //create object
          while(outer_remove.length!==0){
               inner_remove=outer_remove.shift();
              let key=inner_remove[0];
              let value=inner_remove[1];
              obj[key]=value
          }
          final.push(obj)
          
      }
      console.log(final)
      
      12.Sum of odd numbers in an array

      Code:
      
      var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function(a, c) {
  if (c % 2 != 0) {
    return a + c; // Add odd numbers to the accumulator
  }
  return a; // Keep the accumulator unchanged for even numbers
}, 0);
console.log(s)

12.Fix the code to give the below output:

Swap the odd and even digits

Code:

aa = data => {
  var a = data;
  var l = '';
  for (i = 0; i < a.length - 1; i++) {
    var s = a[i + 1];
    var b = a[i];
    l += s;
    l += b;
    i = i + 1;
  }
  if ((a.length % 2) !== 0) {
    l += a[a.length - 1];
  }
  console.log(l);
};

aa("1234");

