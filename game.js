const question =document.getElementById("question");
const choices = Array.from(document,getElementsByClassName(("choice-texg")));
let currentQuestion = {};
let acceptingAnswer =true;
let score = 0;
let questionCounter = [];

let questions = [
{
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "js",
    choice4: "scripting>",
    answer:1
},
{
    question: "What is the correct syntax for referring to an external script called 'xxx.js'? ",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name = 'xxx.js'>",
    choice3: "script src ='xxx.js'",
    choice4: "script file='xxx.js'>",
    answer:3 
},
{question: "How do you write 'Hello world' in an alert box?",
choice1: "msg('Hello World');",
choice2: "alertBox('Hello World');",
choice3: "msg('Hello World')",
choice4: "alert('Hello World');",
answer:4
}
];
//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame =() => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};
getNewQuestion = () => {
    questionCounter++;
}

startGame();

