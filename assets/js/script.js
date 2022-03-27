//required
const btn = document.querySelector(".btn button");

const quit = document.querySelector(".buttons .quit");
const restart = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//if you hit start button
btn.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box

}

