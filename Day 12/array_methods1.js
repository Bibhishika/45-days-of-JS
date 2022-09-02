//Array Methods

let num = [1, 2, 3, 45, 6]
let b = num.toString() //b is now a string
console.log(b)

let c = num.join("_")
console.log(c, typeof c)

let r = num.pop() //pop returns the popped element
console.log(num,r)

let e = num.push(34) //push returns the new array length
console.log(num,e)

let n = num.shift()//removes an element from the start of an array
console.log(n,num)

let m = num.unshift(10)
console.log(m,num)

