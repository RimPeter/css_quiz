


// question list
let table = {
    "2+2":4,
    "50+50":100,
    "1+1":2,
    "1-1":0,
    "2+8":10,
    "50+150":200,
    "1+15":16,
    "10-1":9
}


let randomNum = Math.floor(Math.random()*4)
    let numQuestion = Object.keys(table)
    let numAnswer = Object.values(table)

let nextQuestion = document.getElementById("questionButton");
function buttonClick() {

    console.log("next question clicked")
    console.log("The random number generated is " + randomNum)
    console.log("The question is: " + numQuestion[randomNum])
    console.log("The answer is: " + numAnswer[randomNum])
    return numAnswer[randomNum]
};

nextQuestion.addEventListener("click", buttonClick);


buttonClick()
let theAnswer = numAnswer[randomNum]

console.log(theAnswer)

document.querySelector('.form-box').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
     // Get the value of the input field
    console.log("Input Value is : " + inputValue);
        if (inputValue == numAnswer[randomNum]) {
            console.log(true + "; the input and the answer are the same")
            return inputValue
        } else {
            console.log(false + "; the input and the answer are NOT thesame")
        }
});

document.getElementById('question').textContent = numQuestion[randomNum]
let inputValue = document.getElementById('userInput').value;





