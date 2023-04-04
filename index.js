
//create question here
class Quiz {
    constructor(question) {
        this.score = 0;
        this.question = question;
        this.questionIndex = 0;
    }
    getQuestionByIndex() {
        return this.question[this.questionIndex];
    }
    checkOptionWithAnswer(answer) {

        if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded() {
        return this.questionIndex === this.question.length;
    }
}


class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let question = [
    new Question("Where is the correct place/section to insert a JavaScript?", ["head", "body", "Both", "None"], "Both"),
    new Question("Which of the following is the correct extention of the Python file?", [".python", ".pl", ".py", ".p"], ".py"),
    new Question("Javascript is a language?", ["Object-Oriented", "Object-Based", "Procedural", "None"], "Object-Oriented"),
    new Question("Which of the following methods can be used to display data in some form using Javascript", ["document.write()", "console.log()", "window.alert()", "All of the above"], "All of the above"),
    new Question("How can a datatype be declared to be a constant type?", ["const", "var", "let", "cosntant"], "const")
];

function loadQuestions() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionByIndex().text;

        //show options
        var choices = quiz.getQuestionByIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            var choice = document.getElementById("choice" + i);
            choice.innerHTML = choices[i];
            handleOptionButton("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function showScores() {
    var gameOverHtml = "<h1>Results</h1>";
    gameOverHtml += "<h2 id='score'> Your Scores:  " + quiz.score + " .  and Percentage is: " + (quiz.score / question.length * 100) + "%" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.question.length;
}

function handleOptionButton(id, choice) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }

}

//create Quiz
var quiz = new Quiz(question);

//LoadingQuestions
loadQuestions();