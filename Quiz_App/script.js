// script.js
const questions = [
    {
      question: "What is the national flower of Pakistan?",
      options: [
        "Rose",
        "Lily",
        "Jasmine",
        "Tulip"
      ],
      correct: 2
    },
    {
      question: "Which mountain range is located in northern Pakistan and includes K2, the second-highest peak in the world?",
      options: [
        "Himalayas",
        "Andes",
        "Rocky Mountains",
        "Karakoram Range"
      ],
      correct: 3
    },
    {
      question: "Which river is the longest in Pakistan?",
      options: [
        "Indus River",
        "Jhelum River",
        "Chenab River",
        "Ravi River"
      ],
      correct: 0
    },
    {
      question: "Which city is known as the 'City of Gardens' in Pakistan?",
      options: [
        "Karachi",
        "Lahore",
        "Islamabad",
        "Rawalpindi"
      ],
      correct: 1
    },
    {
      question: "Which Pakistani scientist is known as the 'Father of the Atomic Bomb'?",
      options: [
        "Dr. Abdul Qadeer Khan",
        "Dr. Atta-ur-Rahman",
        "Dr. Pervez Hoodbhoy",
        "Dr. Samar Mubarakmand"
      ],
      correct: 0
    },
    {
      question: "Which historic site in Pakistan is often referred to as the 'Roof of the World'?",
      options: [
        "Badshahi Mosque",
        "Shalimar Gardens",
        "Mohenjo-daro",
        "Skardu"
      ],
      correct: 3
    },
    {
      question: "What is the national language of Pakistan?",
      options: [
        "Urdu",
        "English",
        "Punjabi",
        "Sindhi"
      ],
      correct: 0
    },
    {
      question: "Which Pakistani woman was the youngest-ever recipient of the Nobel Prize?",
      options: [
        "Malala Yousafzai",
        "Benazir Bhutto",
        "Asma Jahangir",
        "Hina Rabbani Khar"
      ],
      correct: 0
    },
    {
      question: "In which year did Pakistan gain independence from British rule?",
      options: [
        "1942",
        "1947",
        "1955",
        "1960"
      ],
      correct: 1
    },
    {
      question: "Which traditional Pakistani musical instrument is often associated with the Sufi culture of Sindh?",
      options: [
        "Tabla",
        "Sitar",
        "Rabab",
        "Sarangi"
      ],
      correct: 2
    }
  ]
  

let currentQuestionIndex = 0;
let score = 0;
let n = 1;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionNumber = document.getElementById("Q_no")
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function showQuestion(question) {
    questionNumber.innerHTML = n++;
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
    questionNumber.style.display = "none";
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
