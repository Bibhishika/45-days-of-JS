//practice set 4
//Question 1
let str="Bibh\"u"
console.log(str.length)

//Question 2
const sentence = 'A quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))



//Question 3
let name="BIBHISHIKA"
console.log(name.toLowerCase())


//Question 4
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice("Please give Rs".length))
console.log(amount)
console.log(typeof amount)

//Question 5
let friend = "Bibisha"
friend[3] = "A"
console.log(friend) //friend is not changed because string is immutable
