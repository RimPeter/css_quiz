


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
    document.getElementById("answer").innerText = numAnswer;
    console.log("the answer will be: " + numAnswer)
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
    let score = parseInt(document.getElementById("score").innerText, 10);
    let life = parseInt(document.getElementById("life").innerText, 10);
    if (document.getElementById("answer").innerText == inputValue) {
        console.log("numAnswer is: " + numAnswer);
        console.log("inputValue is: " + inputValue);
        console.log(true);
        score += 1; // Increment score
    } else {
        console.log(false);
        life -= 1
        
    }
    document.getElementById("score").innerText = score;
    document.getElementById("life").innerText = life;
    console.log("the score is: " + score);
    console.log("the life is: " + life);
});








