


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

//generate random number
    let randomNum = Math.floor(Math.random()*8)
    let numAnswer = Object.values(table)[randomNum]
    let numQuestion = Object.keys(table)[randomNum]

//function for 'next question' button
function nextQuestion() {
    let randomNum = Math.floor(Math.random()*8)
    let numAnswer = Object.values(table)[randomNum]
    let numQuestion = Object.keys(table)[randomNum]
    // console.log(numAnswer)
    // console.log(numQuestion)
    document.getElementById("question").innerText = numQuestion
    return numAnswer
}
document.getElementById('next').addEventListener('click', nextQuestion);
numAnswer = nextQuestion()
console.log("the right answer is: " + numAnswer);
//function for the form section

 // Variable to store the input value

document.querySelector('.form-box').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let inputValue = document.getElementById('userInput').value;
    console.log("the input value is " + inputValue);   
    let score = document.getElementById("score").innerText
    console.log("the score is: " + score)
    if (numAnswer == inputValue) {
        console.log(true)

    } else {
        console.log(false)
    }
});









