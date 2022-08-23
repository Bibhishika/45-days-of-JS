const ps = require("prompt-sync");
const prompt = ps();

// conditional statement
let a = prompt("Hey what's your age?");
a = Number.parseInt(a);
if(a<0)
{
    console.log("This is an invalid age");
}
else if(a<9)
{
    console.log("You are a kid and you cannot drive");
}
else if(a<18 && a>=9)
{
    console.log("You are a kid and you can think of driving after 18");
}

else{
    console.log("You can now drive");
}

//switch statement
let age=prompt("What,s your age?");
switch(age){
    case 5:
        console.log("Your age is 5");
        break;
    case 10:
        console.log("Your age is 10");
        break;
    case 15:
        console.log("Your age is 15");
        break;
    case 20:
        console.log("Your age is 20");
        break;
    default:
    console.log("Your age is not special");
}

//ternary operator
console.log("You can", a<18? "not drive" : "drive");

