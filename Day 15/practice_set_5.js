const ps = require("prompt-sync");
const prompt = ps();
//Practice set on Arrays
//Question 1

/*let arr = [10,20,30,40,50]
let a = prompt("Enter a number ")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)


//Question2
let arr = [2,7,98,3,54,1]
let a;
do{
    a = prompt("Enter a number ")
    a = Number.parseInt(a)
    arr.push(a)
}while(a != 0);
console.log(arr)


//Question 3
let arr = [100,1,64,4,30,55]
let n = arr.filter((x)=>{
    return x%10 == 0
})
console.log(n)


//Question 4
let arr = [3,6,88,43,5]
let n = arr.map((x)=>{
    return x*x
})
console.log(n)
*/
//Question 5
let arr = [90,65,34,12,10]
let n = arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)