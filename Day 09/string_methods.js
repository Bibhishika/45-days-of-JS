let name = "Bibhu"

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log(name.replace("b","bb"))




//trim
let animal2 = "     Dog     "
console.log(animal2)
console.log(animal2.trim())

let animal2 = "     Dog     "
console.log(animal2)
console.log(animal2.trimStart())


let fruit = "Avocado"
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])


let a = "Penguin"
for (let i = 0; i<a.length; i++)
{
    console.log(a[i])
}

//concat

let text = "Hello".concat(" ", "World!");
console.log(text)


let fr = "John" + "Arnold"
console.log(fr)

let animal = "Panda"
console.log(name.concat("'s favourite animal is"),animal, "Ok")

let fruit = "Avocado" + "Grape" + "Kiwi"
console.log(fruit[0])
console.log(fruit[1])
console.log(fruit[2])
console.log(fruit[3])
console.log(fruit[4])
console.log(fruit[5])
console.log(fruit[6])
//fruit[2]="i" //this is not possible
console.log(fruit)

//replacing string content
let animal = "I love Panda"
let newanimal = animal.replace("Panda", "Horse")
console.log(newanimal)


//charcode
let text = "Bibhishika";
let char = text.charCodeAt(0);
console.log(char)