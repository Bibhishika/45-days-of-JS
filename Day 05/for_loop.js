const ps = require("prompt-sync");
const prompt = ps();

//for loop
let sum=0;
let n = prompt("Enter the value of n : ")
n = Number.parseInt(n)
for(let i=0; i<n;i++){
    sum += (i+1);
}
console.log("Sum of first " + n + " natural number is " + sum);


//for in loop
let obj = {
    apple: 80,
    grape: 78,
    orange:45,
    kiwi: 200
}
for (let a in obj){
    console.log("Price of " + a + " is Rs. " + obj[a])
}


//for of loop 
for(let b of "Strawberry")
{
    console.log(b)
}
