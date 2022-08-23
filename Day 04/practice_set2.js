const ps = require("prompt-sync");
const prompt = ps();
//practice set
//Question 1
let age = prompt("What is your age?");
if(age>10 && age<20)
{
    console.log("Your age lies between 10 and 20");
}
else
{
    console.log("Your age doesn't lie between 10 and 20");
}

//Question 2

let n = prompt("Enter any number ");
n = Number.parseInt(n);
if(n%2==0 && n%3==0)
{
    console.log("The given number is divisible by 2 and 3");
}
else{
    console.log("The given number is not divisible by 2 and 3");
}


//Question 3

let n = prompt("Enter any number ");
n = Number.parseInt(n);
if(n%2==0)
{
    console.log("The given number is divisible by 2");
}
else if(n%3==0){
    console.log("The given number is divisible by 3");
}
else
{
    console.log("The number is neither divisible by 2 nor by 3");
}


//Question 4
let age = 15;
let a=age>18?"You can drive": "You cannot drive";
console.log(a);