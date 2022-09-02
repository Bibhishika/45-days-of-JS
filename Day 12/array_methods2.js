//delete
let num = [10,20,30,40,50]
console.log(num.length)
delete num[0] //doesn't change the length of array
console.log(num.length)

//concat 
//concat does not change existing array
let n = [1,2,3,0]
let num_more = [9,8,7,6,5,4]
let n_n_more = [111,222,333,444,555]
let newArray = n.concat(num_more)
console.log(newArray)
let nA = n.concat(num_more,n_n_more)
console.log(nA);
console.log(n,num_more)

//sort method
//it modifies the original array
//it originally sorts in alphabetical order
let compare =  (a,b)=>{
    return a - b
}
let num = [88,55,77,2,1,50]
num.sort(compare)
console.log(num)

//reverse
let compare =  (a,b)=>{
    return a - b
}
let num = [88,55,77,2,1,50]
num.sort(compare)
num.reverse()
console.log(num)


//splice and slice
//splice
let num = [88,55,77,2,1,50]
num.splice(2,3,1021,1054,1003) //here 2 is index, 3 is the number of element we want to add
console.log(num)
let deletedValues = num.splice(2,3,1021,1054,1003)
console.log(typeof deletedValues)

//slice
//slice doesn,t modify the original array, it creates a new one
let num = [88,55,77,2,1,50,63,1,23,80]
let newNum= num.slice(3)
let newN= num.slice(3,6)
console.log(newNum)
console.log(newN)



