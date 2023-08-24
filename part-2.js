GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops


1.Write a code to print the numbers in the array

// Output: 1234567891011

//code
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arrNums="";
for(let i=0;i<numsArr.length;i++){
    arrNums+=numsArr[i]
}
console.log(arrNums)

2.Write a code to print the numbers in the array

// Output: 1,2,3,4,5,6,7,8,9,10,11
//code
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let nums="";
for(let i=0;i<numsArr.length;i++){
    
    nums+=numsArr[i]+(i!==numsArr.length-1?",":null)
};

console.log(nums)

3.Write a code to print from last to first with
 spaces (Make sure there is no space after the last element 1)

//  Output: 11 10 9 8 7 6 5 4 3 2 1
// code:
let nums="";

for(let i=11;i>0;i--){
    nums+=i+" "
}
console.log(nums)

4.Write a code to replace the array value — If the number is even, replace it with ‘even’.

// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
// code:
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 === 0) {
     numsArr[i]="even"
    }
}

console.log(numsArr)


5.Write a code to replace the array value — If the index is even, replace it with ‘even’.

// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

// code:
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < numsArr.length; i++) {
 if(i % 2 === 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);


6.Write a code to add all the numbers in the array

// Output: 66

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum=0;

for(let i=0;i<numsArr.length;i++){
sum+=numsArr[i]
}
console.log(sum);

7.Write a code to add the even numbers only
// Output: 30

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// code:
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let evenSum=0;

for(let i=0;i<numsArr.length;i++){
    if(numsArr[i]%2===0){
        evenSum+=numsArr[i]
    }
};
console.log(evenSum)
8.Write a code to add the even numbers and subract the odd numbers
// Output: 94

// code:
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum=100;

for(let i=0;i<numsArr.length;i++){
if(numsArr[i]%2===0){
    sum+=numsArr[i]
}else{
    sum-=numsArr[i]
}
};
console.log(sum);

9.Write a code to print inner arrays
// Output

Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]

//code

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (let i = 0; i < numsArr.length; i++) {
console.log(numsArr[i])
}

10.Write a code to print elements in the inner arrays
Output: 1234567891011

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

//code
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]].join(",").split(",")
let sum="";
for(let i=0;i<numsArr.length;i++){
    sum+=numsArr[i]
 
}
console.log(sum)

// 11.Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

//code
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];

for(let i=0;i<numsArr.length;i++){
    let first=numsArr[i];
    for(let j=0;j<first.length;j++){
        if(j%2===0){
            first[j]="even"
        
        }
    }
}
console.log(numsArr)


11.Write a code to print elements in the inner arrays in reverse
Output: 11 10 9 8 7 6 5 4 3 2 1

// code
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]].join(",").split(",");
console.log(numsArr.reverse().join(" "))//join with space

12.Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]].join(",").split(",");

let add=0;
let even=0;

for(let i=0;i<numsArr.length;i++){
    if(numsArr[i]%2===0){
       even+= parseInt(numsArr[i])
    }else{
        add+=parseInt(numsArr[i])
    }
}
console.log(add,even)


