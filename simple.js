var quiz = [
    {
        question : "What does CSS stand for?",
        options : ['Cascading Script Style','Cascading Style Sheets', 'Computer Style Sheets','Creative Styling Solutions',],
        answer : 'Cascading Style Sheets'
    },
    {
        question : "How is CSS typically used in web development?",
        options : ['To define the structure and content of a web page','To add interactivity and functionality to a web page', 'To describe the presentation and style of a web page','To manage server-side operations of a web page',],
        answer : 'To describe the presentation and style of a web page'
    },
    {
        question : "Which HTML attribute is used to apply CSS styles directly to an HTML element?",
        options : ['style','css', 'class','id',],
        answer : 'style'
    },
    {
        question : "Which CSS property is used to control the size and layout of boxes in CSS?",
        options : ['color','font-family', 'width','background-color',],
        answer : 'width'
    },
    {
        question : "What is the correct CSS syntax to select an element with a specific class?",
        options : ['.class','#class', '.class-name','class:',],
        answer : '.class'
    }

];
var question = document.getElementById('question');
var answerbutton = document.getElementById('options');
var nextbutton = document.getElementById('next-btn');
// var option0 = document.getElementById('option0');
// var option1 = document.getElementById('option1');
// var option2 = document.getElementById('option2');
// var option3 = document.getElementById('option3');
// var option4 = document.getElementById('option4');


var currentQuestionIndex = 0;
var score = 0;

function startquiz() {
    score = 0;
    currentQuestionIndex = 0;
    nextbutton.innerHTML = 'Next'
    showQuiz();

}

function showQuiz() {
    let currentQuestion = quiz[currentQuestionIndex];
    let questionnum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionnum + ". " + currentQuestion.question;

        optionsElement.innerHTML = "";

    currentQuestion.answer.forEach(answer => {
        var button = document.createElement('options');
        button.innerHTML = answer.option;
        button.classList.add('btn');
        buttons.appendChild(button);
    });
}

startquiz();