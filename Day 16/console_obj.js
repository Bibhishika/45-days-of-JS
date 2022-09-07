//console object methods

console.log("Hello Bibhu")
console.error("This is an error.")
console.assert(5>20)
console.clear()

obj = {a: 1, b: 2, c: 3}
console.table(obj)

console.warn("Do not drink soda")
console.info("Hey this is an important info")

console.time()
console.time("a")
console.timeEnd("a")

console.time("forLoop")
for(let i=0;i<5;i++){
    console.log(25)
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i = 0;
while(i < 5){
    console.log(87);
    i++;
}
console.timeEnd("whileLoop")