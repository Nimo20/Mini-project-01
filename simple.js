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


var currentQuestionIndex = 0;
var score = 0;
var currentQuestion= quiz[currentQuestionIndex];

// Function to display the current question
        function displayQuestion() {
        var currentQuestion= quiz[currentQuestionIndex];
        var questionnum = currentQuestionIndex + 1;

        questionElement.innerHTML = questionnum + quiz[currentQuestion].question;

        optionsElement.innerHTML = "";

        quiz[currentQuestion].options.forEach(option => {
            var button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", handleAnswer);
            optionsElement.appendChild(button);
        });
        }

        // Function to handle user's answer
        function handleAnswer(event) {
        var selectedOption = event.target.textContent;
        var correctAnswer = quiz[currentQuestion].answer;

        if (selectedOption === correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quiz.length) {
            displayQuestion();
        } else {
            displayScore();
        }
        }

        // Function to display the final score
        function displayScore() {
        var scoreElement = document.getElementById("score");
        scoreElement.textContent = `Your score: ${score}/${quiz.length}`;
    }

    // Display the first question
    displayQuestion();