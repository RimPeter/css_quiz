


// question list
let table = {
    "dog":4,
    "centipede":100,
    "chicken":2,
    "fish":0
}

// // generate random number for the question
// let randomNum = Math.floor(Math.random()*4)
// console.log("The random number generated is " + randomNum)


// // variable for question and answer
// let animals = Object.keys(table)
// let legs = Object.values(table)
// console.log("The question is: " + animals[randomNum])
// console.log("The answer is: " + legs[randomNum])


// // replace new question
// document.getElementById('question').textContent = animals[randomNum]
// var inputValue = document.getElementById('userInput').value;
// eventlistener to input field



document.querySelector('.form-box').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
     // Get the value of the input field
    console.log("Input Value is : " + inputValue);
        if (inputValue == legs[randomNum]) {
            console.log(true + "; the input and the answer are the same")
            return inputValue
        } else {
            console.log(false + "; the input and the answer are NOT thesame")
        }
});

// //event listener for the "NEXT QUESTION" button
// const questionButton = document.getElementById('questionButton');

// // Add an event listener to the button
// questionButton.addEventListener('click', function() {
//     // Set the variable to true when the button is clicked
//     randomNum = Math.floor(Math.random()*4)
//     document.getElementById('question').textContent = animals[randomNum]
// console.log("The random number generated is " + randomNum)

//     // You can add additional actions here if needed
//     console.log("Button was clicked, random number is:", randomNum);
// });

// let rightAnswer = legs[randomNum];
// console.log(rightAnswer)

// function compare(A, B) {
//     if (inputValue == rightAnswer) {
//         console.log('it is true')
//     } else {
//         console.log('it is NOT true')
//     }

// }

// let theResult = compare(inputValue, rightAnswer)

let randomNum = Math.floor(Math.random()*4)
    let animals = Object.keys(table)
    let legs = Object.values(table)

let nextQuestion = document.getElementById("questionButton");
function buttonClick() {

    console.log("next question clicked")
    console.log("The random number generated is " + randomNum)
    console.log("The question is: " + animals[randomNum])
    console.log("The answer is: " + legs[randomNum])
    return legs[randomNum]
};

nextQuestion.addEventListener("click", buttonClick);


buttonClick()
let theAnswer = legs[randomNum]

console.log(theAnswer)








