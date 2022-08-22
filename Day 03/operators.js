//operators in JS
console.log("Operators in JS")
//Arithmetic operators
let a = 15;
let b = 9;
console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a / b = ", a/b)
console.log("a * b = ", a*b)
console.log("a ** b = ", a**b) // a^b
console.log("a % b = ", a%b)
console.log("a++ = ", a++)
console.log("a-- = ", a--)
console.log("++a = ", ++a)

//Assignment operators
let c = 2;
c += 10 //same as c = c + 10
console.log(c)
c /= 4
console.log(c)
c *= 9
console.log(c)

//Comparision Operators
let comp1 = 9;
let comp2 = "9";
console.log("comp1 == comp2", comp1 == comp2)
console.log("comp1 != comp2", comp1 != comp2)
console.log("comp1 === comp2", comp1 === comp2)
console.log("comp1 !== comp2", comp1 !== comp2) //it compares the type of variable

//logical operators
let p = 5;
let q = 7;
console.log(p<q && p==5)
console.log(p>q || p==5)
console.log(!true)