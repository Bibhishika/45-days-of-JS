//array map method
//map creates a new array by performing some operation on each array elements 
//it doesn't change oriinal array
let arr = [12,55,43]
let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + 1
})
console.log(a,arr)

//array filter method
//it doesn't change oriinal array
let arr2 = [1,2,3,4,5,6,7,8,9]
let a2 = arr2.filter((a)=>{
    return a<5
})
console.log(a2,arr2)

//array reduce method
//returns value
let arr3 = [3,2,4,6,3,2]
let a3 = arr3.reduce((r1, r2)=>{
    return r1 + r2
})
console.log(a3,arr3)