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
    // if (timeValue <= 0)  {
        // endQuiz()
    // }
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


       
    




// //if you hit start button
// btn.addEventListener("click", function () {
//     quiz_box.classList.add("activeQuiz");
//     showQuestions(que_count);
//     queCounter(que_numb);
//     startTimer(timeValue);

// })



// const restart_quiz = document.querySelector(".buttons .restart");
// const quit_quiz = document.querySelector(".buttons .quit");

// restart_quiz.onclick = () => {
//     quiz_box.classList.add("activeQuiz");
//     timeValue = 75;
//     que_count = 0;
//     que_numb = 1;
//     userScore = 0;
//     widthValue = 0;
//     showQuetions(que_count);
//     queCounter(que_numb);
//     clearInterval(counter);
//     startTimer(timeValue);
//     timeText.textContent = "Time Left";
//     next_btn.classList.remove("show");
// }

// quit_quiz.onclick = () => {
//     window.location.reload();
// }

// const next_btn = document.querySelector("footer .next_btn");
// const bottom_ques_counter = document.querySelector("footer .total_que");


// next_btn.onclick = () => {
//     if (que_count < questions.length - 1) {
//         que_count++;
//         que_numb++;
//         showQuestions(que_count);
//         console.log("Que count:", que_count)
//         queCounter(que_numb);
//         timeText.textContent = "Time Left";
//         next_btn.classList.remove("show");
//     } else {
//         clearInterval(counter);
//         showResult();
//     }
// }


// function showQuestions(index) {
//     const que_text = document.querySelector(".que_text");


//     let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
//     let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
//         + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
//         + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
//         + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
//     console.log("option tag", option_tag)
//     console.log("Index: ", index);
//     que_text.innerHTML = que_tag;
//     option_list.innerHTML = option_tag;

//     const option = option_list.querySelectorAll(".option");


//     for (i = 0; i < option.length; i++) {
//         option[i].setAttribute("onclick", "optionSelected(this)");
//     }
// }

// let tickIconTag = '<div class="icon tick"><i class="✔"></i></div>';
// let crossIconTag = '<div class="icon cross"><i class="❌"></i></div>';


// function optionSelected(answer) {
    
//     let userAns = answer.textContent; 
//     let correctAns = questions[que_count].answer;
//     const allOptions = option_list.children.length;

//     if (userAns == correctAns) { 
//         userScore += 1;
//         answer.classList.add("correct"); 
//         answer.insertAdjacentHTML("beforeend", tickIconTag); 
//         console.log("Correct Answer");
//         console.log("Your correct answers = " + userScore);
//     } else {
//         answer.classList.add("incorrect"); 
//         answer.insertAdjacentHTML("beforeend", crossIconTag); 
//         console.log("Wrong Answer");
//         clearInterval(counter)
//         timeValue -= 20;
//         startTimer(timeValue);
//         for (i = 0; i < allOptions; i++) {
//             if (option_list.children[i].textContent == correctAns) { //if there is an option which is matched to an array answer 
//                 option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                 option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                 console.log("Auto selected correct answer.");
//             }
//         }
//     }
//     for (i = 0; i < allOptions; i++) {
//         option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//     }
//     next_btn.classList.add("show"); //show the next button if user selected any option
// }

// function showResult() {
//     // info_box.classList.remove("activeInfo"); //hide info box
//     quiz_box.classList.remove("activeQuiz"); //hide quiz box
//     result_box.classList.add("activeResult"); //show result box
//     const scoreText = result_box.querySelector(".score_text");
//     if (userScore > 3) { // if user scored more than 3
//         //creating a new span tag and passing the user score number and total question number
//         let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
//         scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
//     }
//     else if (userScore > 1) { // if user scored more than 1
//         let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
//         scoreText.innerHTML = scoreTag;
//     }
//     else { // if user scored less than 1
//         let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
//         scoreText.innerHTML = scoreTag;
//     }
// }

//   function startTimer(time) {
//     counter = setInterval(timer, 1000);
//     function timer() {
//         timeCount.textContent = time; //changing the value of timeCount with time value
//         time--; //decrement the time value
//         if (time < 9) { //if timer is less than 9
//             let addZero = timeCount.textContent;
//             timeCount.textContent = "0" + addZero; //add a 0 before time value
//         }
//         if (time < 0) { //if timer is less than 0
//             clearInterval(counter); //clear counter
//             timeText.textContent = "Time Off"; //change the time text to time off
//             const allOptions = option_list.children.length; //getting all option items
//             let correctAns = questions[que_count].answer; //getting correct answer from array
//             for (i = 0; i < allOptions; i++) {
//                 if (option_list.children[i].textContent == correctAns) { //if there is an option which is matched to an array answer
//                     option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//                     console.log("Time Off: Auto selected correct answer.");
//                 }
//             }
//             for (i = 0; i < allOptions; i++) {
//                 option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//             }
//             next_btn.classList.add("show"); //show the next button if user selected any option
//         }
//     
// }



// function queCounter(index) {
//     //creating a new span tag and passing the question number and total question
//     let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
//     bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
// }

// 
// 