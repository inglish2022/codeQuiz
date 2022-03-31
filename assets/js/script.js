const startButton = document.getElementById("start-btn")

const btn = document.querySelector(".start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")

const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex
let timeValue = 75
var timerId;

var timerEl = document.querySelector(".timer-sec")

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

//if you hit start button
btn.addEventListener("click", function () {
    questionContainerElement.classList.add("question");
    // showQuestions(que_count);
    // queCounter(que_numb);


})

function updateTime() {
    timeValue--;
    timerEl.textContent = timeValue
    if (timeValue <= 0) {
        endQuiz()
    }
}

function endQuiz() {
    clearInterval(timerId);
}



function startGame() {
    console.log("Started")
    startButton.classList.add("hidden")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hidden")
    timerId = setInterval(updateTime, 1000)
    timerEl.textContent = timeValue


    setNextQuestion()
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function questionClick() {
    if (
        this.textContent !== questions[currentQuestionIndex].correct
    ) {
        console.log("Minus time");
        timeValue -= 10;
        timerEl.textContent = timeValue
    }
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer
        button.classList.add("btn")
        button.onclick = questionClick

        button.setAttribute("data-correct", question.correct)


        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hidden")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    let correct = selectedButton.dataset.correct
    if (selectedButton.textContent === correct) {
        correct = true
    } else {
        correct = false
    }
    setStatusClass(selectedButton, correct)

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hidden")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hidden")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
        console.log("correct")
    } else {
        timeValue - 10
        timerEl.textContent = timeValue
        element.classList.add("wrong")

    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Test Processing",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ],
        correct: "Hyper Text Markup Language"
    },

    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: [
            "head",
            "heading",
            "h1",
            "h5",
        ],
        correct: "h1"
    },

    {
        question: "What does CSS stand for?",
        answers: [
            "Colorful Stylesheet",
            "Computing Stylesheet",
            "Cascading Stylesheet",
            "Common Stylesheet",
        ],
        correct: "Cascading Stylesheet"
    },

    {
        question:
            "What is the correct syntax for referring to an external script called xxx.js?",
        answers: [
            "script name='xxx.js'",
            "script href='xxx.js'",
            "script 'xxx.js'",
            "script src='xxx.js'",
        ],
        correct: "script src='xxx.js'"
    },

    {
        question:
            "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
            "At the end of the document",
            "In the body section",
            "In the head section",
            "At the very top",
        ],
        correct: "In the head section"
    },

    {
        question: "Which is the correct CSS syntax?",
        answers: [
            "{body:color=black;}",
            "body:color=black",
            "{body:color:black}",
            "body (color:black)",
        ],
        correct: "body:color=black"
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            "alert('Hello World')",
            "alertBox('Hello World')",
            "msg('Hello World')",
            "msgBox('Hello World')",
        ],
        correct: "alert('Hello World')"
    },

    {
        question: "How do you add a background color for all <h1> elements?",
        answers: [
            "all.h1  {background-color:#fffff;}",
            "h1.all {background-color:#fffff;}",
            "h1 (background:#fffff)",
            "h1 {background-color:#fffff;}"
        ],
        correct: "h1 {background-color:#fffff;}"
    },
];







