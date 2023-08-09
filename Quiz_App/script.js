// script.js
const questions = [
    {
        question: "What is the capital of Pakistan?",
        options: ["Islamabad", "Karachi", "Lahore", "Rawalpindi"],
        correct: 0
    },
    {
        question: "Which river is known as the 'Sindhur'?",
        options: ["Indus River", "Jhelum River", "Chenab River", "Ravi River"],
        correct: 0
    },
    // Add more questions...
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function showQuestion(question) {
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    resultElement.textContent = `Your Score: ${score} / ${questions.length}`;
    if (score >= questions.length / 2) {
        resultElement.style.color = "green";
        resultElement.textContent += " - Passed";
    } else {
        resultElement.style.color = "red";
        resultElement.textContent += " - Failed";
    }
}

showQuestion(questions[currentQuestionIndex]);
