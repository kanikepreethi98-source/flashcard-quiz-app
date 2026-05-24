let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
    {
        question: "What is Java?",
        answer: "Java is an object-oriented programming language."
    },
    {
        question: "What is Python?",
        answer: "Python is a high-level programming language."
    },
    {
        question: "What is CSS used for?",
        answer: "CSS is used for styling web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript adds interactivity to websites."
    },
    {
        question: "What is React?",
        answer: "React is a JavaScript library for UI development."
    },
    {
        question: "What is an Array?",
        answer: "An array stores multiple values in a single variable."
    },
    {
        question: "What is a Function?",
        answer: "A function is a reusable block of code."
    },
    {
        question: "What is HTML?",
        answer: "HTML is used to structure web pages."
    },
    {
        question: "What is a Variable?",
        answer: "A variable stores data values."
    },
    {
        question: "What does CPU stand for?",
        answer: "Central Processing Unit."
    },
    {
        question: "What is RAM?",
        answer: "RAM is temporary memory used by a computer."
    },
    {
        question: "What is DBMS?",
        answer: "Database Management System."
    },
    {
        question: "What is SQL?",
        answer: "SQL is used to manage databases."
    },
    {
        question: "What is an Operating System?",
        answer: "It manages computer hardware and software."
    },
    {
        question: "What is Cloud Computing?",
        answer: "Delivery of computing services over the internet."
    }
];
let currentCard = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");

const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const newQuestion = document.getElementById("newQuestion");
const newAnswer = document.getElementById("newAnswer");

function displayCard() {

    if(flashcards.length === 0) {
        questionEl.textContent = "No Flashcards Available";
        answerEl.textContent = "";
        return;
    }

    questionEl.textContent = flashcards[currentCard].question;
    answerEl.textContent = flashcards[currentCard].answer;

    answerEl.classList.add("hidden");
}

function saveFlashcards() {
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
}

showBtn.addEventListener("click", () => {
    answerEl.classList.toggle("hidden");
});

nextBtn.addEventListener("click", () => {

    if(flashcards.length === 0) return;

    currentCard++;

    if(currentCard >= flashcards.length) {
        currentCard = 0;
    }

    displayCard();
});

prevBtn.addEventListener("click", () => {

    if(flashcards.length === 0) return;

    currentCard--;

    if(currentCard < 0) {
        currentCard = flashcards.length - 1;
    }

    displayCard();
});

addBtn.addEventListener("click", () => {

    const question = newQuestion.value.trim();
    const answer = newAnswer.value.trim();

    if(question && answer) {

        flashcards.push({
            question: question,
            answer: answer
        });

        saveFlashcards();

        newQuestion.value = "";
        newAnswer.value = "";

        alert("Flashcard Added!");
    }
});

editBtn.addEventListener("click", () => {

    if(flashcards.length === 0) return;

    const updatedQuestion = prompt(
        "Edit Question",
        flashcards[currentCard].question
    );

    const updatedAnswer = prompt(
        "Edit Answer",
        flashcards[currentCard].answer
    );

    if(updatedQuestion && updatedAnswer) {

        flashcards[currentCard].question = updatedQuestion;
        flashcards[currentCard].answer = updatedAnswer;

        saveFlashcards();

        displayCard();
    }
});

deleteBtn.addEventListener("click", () => {

    if(flashcards.length === 0) return;

    flashcards.splice(currentCard, 1);

    if(currentCard >= flashcards.length) {
        currentCard = 0;
    }

    saveFlashcards();

    displayCard();
});

displayCard();