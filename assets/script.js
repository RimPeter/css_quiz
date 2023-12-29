// console.log('hi')

// for (let i = 0; i < 20; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }


// question list
let table = {
    "cat":4,
    "centipede":100,
    "chicken":2,
    "fish":0
}

// variable for question and answer
let animals = Object.keys(table)
let legs = Object.values(table)
console.log(animals[1])
console.log(legs[2])

let question = document.getElementById('question').innerText;

console.log(question)

questionNew = document.getElementById('question').textContent = "hi"

randomNum = Math.floor(Math.random()*4)
console.log(randomNum)
document.getElementById('question').textContent = animals[randomNum]
let answer = legs[randomNum]
console.log(answer)
// eventlistener fo input field
document.addEventListener("DOMContentLoaded", function() {    
    let form = document.querySelector('.form-box');
    form.onsubmit = function(event) {        
        event.preventDefault();      
        var inputValue = document.querySelector('.form-box input[type="text"]').value;
        console.log("Input Value: " + inputValue);
    };
});