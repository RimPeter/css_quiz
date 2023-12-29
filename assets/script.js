// console.log('hi')

// for (let i = 0; i < 20; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

let table = {
    "cat":4,
    "centipede":100,
    "chicken":2,
    "fish":0
}

let animals = Object.keys(table)
let legs = Object.values(table)
console.log(animals[1])
console.log(legs[2])

let question = document.getElementById('question').innerText;

console.log(question)

questionNew = document.getElementById('question').textContent = "hi"


