function checkAnswer (){
let correctAnswer = "4";
let feedback = document.getElementById("feedback");
let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

if (userAnswer === correctAnswer){
    feedback.textContent = "Correct! Well done.";
}
else {
    feedback.textContent = "That's incorrect. Try again!";
}
}

const submit = document.getElementById("submit-answer");
submit.addEventListener ("click", checkAnswer)
