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
nextButton.addEventListener("click", () =>  {
    currentQuestionIndex++
    setNextQuestion()
})

//if you hit start button
btn.addEventListener("click", function () {
    questionContainerElement.classList.add("question");
    // showQuestions(que_count);
    // queCounter(que_numb);
    

})

function updateTime ()  {
    timeValue--;
    timerEl.textContent=timeValue
    if (timeValue <= 0)  {
         endQuiz()
     }
}

function endQuiz()  {
    clearInterval(timerId);
}



function startGame()  {
    console.log("Started")
    startButton.classList.add("hidden")
    shuffledQuestions = questions.sort(() =>Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hidden")
    timerId = setInterval(updateTime, 1000)
    timerEl.textContent=timeValue
   
   
    setNextQuestion() 
}



function setNextQuestion()  {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function questionClick ()  {
    if (this.value !== questions[currentQuestionIndex].answers.correct) {
        timeValue -= 10
        timerEl.textContent = timeValue}
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>  {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        button.onclick = questionClick

        if (answer.correct)  {
            button.dataset.correct = answer.correct
            
        }

        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState()  {
    nextButton.classList.add("hidden")
    while (answerButtonsElement.firstChild)  {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e)  {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>  {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1)  {
        nextButton.classList.remove("hidden")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hidden")
    }
}   

function setStatusClass(element, correct)  {
    clearStatusClass(element)
    if  (correct)  {
        element.classList.add("correct")
        console.log ("correct")
    } else  {
        timeValue - 10
        timerEl.textContent = timeValue
        element.classList.add("wrong")
    }
}

function clearStatusClass(element)  {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {  text: "Hyper Test Processing", correct: false  },
            {  text:  "Hyper Text Markup Language", correct: true},
            {  text:  "Hyper Text Multiple Language", correct:  false},
            {  text:  "Hyper Tool Multi Language", correct: false}
        ]
    },

    {
        
        question: "Choose the correct HTML element for the largest heading:",
        answers:  [
            {  text:  "head", correct:  false  },
            {  text: "heading", correct: false  },
            {  text: "h1",  correct:  true  },
            {  text: "h5", correct:  false  }
        ]
    },

    {
        
        question: "What does CSS stand for?",
        answers:  [ 
            {  text:"Colorful Stylesheet", correct: false  },
            {  text:"Computing Stylesheet", correct: false  },
            {  text:"Cascading Stylesheet", correct:  true  },
            {  text:"Common Stylesheet", correct:  false  }
        ]
    },

    {
        
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        answers: [
            {  text:"script name='xxx.js'", correct: false  },
            {  text:"script href='xxx.js'", correct:  false  },
            {  text:"script 'xxx.js'",  correct:  false  },
            {  text:"script src='xxx.js'", correct: true }
        ]
    },

    {
        
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
            {  text:"At the end of the document", correct: false },
            {  text:"In the body section", correct: false },
            {  text:"In the head section", correct: true  },
            {  text:"At the very top", correct:  false  }
        ]
    },

    {
        
        question: "Which is the correct CSS syntax?",
        answers: [
            {  text:"{body:color=black;}", correct: false  },
            {  text:"body:color=black", correct:  true },
            {  text:"{body:color:black}",correct:  false  },
            {  text:"body (color:black)", correct: false }
        ]
    },

    {
        
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {  text:"alert('Hello World')", correct: true },
            {  text:"alertBox('Hello World')",correct: false  },
            {  text:"msg('Hello World')",correct: false  },
            {  text:"msgBox('Hello World')", correct: false  }
        ]
    },

    {
        
        question: "How do you add a background color for all <h1> elements?",
        answers: [
            {  text:"all.h1  {background-color:#fffff;}",correct: false  },
            {  text:"h1.all {background-color:#fffff;}",correct: false  },
            {  text:"h1 (background:#fffff)",correct: false  },
            {  text:"h1 {background-color:#fffff;}",correct: true  }
        ]
    },
];


       
    




