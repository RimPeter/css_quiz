


// question list
let table = {
    "cat":4,
    "centipede":100,
    "chicken":2,
    "fish":0
}

//generate random number for the question
randomNum = Math.floor(Math.random()*4)
console.log("The random number generated is " + randomNum)

// variable for question and answer
let animals = Object.keys(table)
let legs = Object.values(table)
console.log("The question is: " + animals[randomNum])
console.log("The answer is: " + legs[randomNum])


// replace new question
document.getElementById('question').textContent = animals[randomNum]

// eventlistener to input field
document.querySelector('.form-box').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var inputValue = document.getElementById('userInput').value; // Get the value of the input field
    console.log("Input Value is : " + inputValue);
        if (inputValue == legs[randomNum]) {
            console.log(true + "; the input and the answer are the same")
            
        } else {
            console.log(false + "; the input and the answer are NOT thesame")
        }
});








