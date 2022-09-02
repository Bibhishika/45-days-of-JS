// looping through arrays

let num = [10,20,30,40,50]
for(let i =0; i<num.length;i++){
    console.log(num[i])
}

//For Each loop
num.forEach((element)=>{
    console.log(element*element)
})

//Array.from
//it is used to make array from a string or HTML collection
let name = "Bibhishika"
let arr = Array.from(name)
console.log(arr)


//for...of
let num = [10,20,30,40,50]
for(let i of num){
    console.log(i)
}

//for...in
let num = [10,20,30,40,50]
for(let i in num){
    console.log(i)
    console.log(num[i])
}