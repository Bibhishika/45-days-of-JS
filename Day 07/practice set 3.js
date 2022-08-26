const ps = require("prompt-sync");
const prompt = ps();

// Question 1
let marks = {
    Ananya:89,
    Supriya:90,
    John:76,
    Karan:45
}
for(let i = 0; i<Object.keys(marks).length;i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}


//Question 2
let marks = {
    Ananya:89,
    Supriya:90,
    John:76,
    Karan:45
}
for(let key in marks ){
    console.log("The marks of " + key + " is " + marks[key])
}

//Question 3
let cn = 32
let i
while(i != cn){
i = prompt("Enter a number ")
}
console.log("You have entered a correct number.")


//Question 4
const mean=(a, b, c, d)=>{
    return(a + b + c + d)/4
}
console.log(mean(2,3,4,5))