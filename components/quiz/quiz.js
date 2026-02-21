import "../score-board/score-board.js";
import { questions as defaultQuestions } from "../../js/data/questions.js";

const template = document.createElement("template");

template.innerHTML = `
    <style>
        .question {
            font-size: 20px;
            margin-bottom: 20px;
        }
        .answers button {
            display: block;
            width: 100%;
            margin: 8px 0;
            padding: 12px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
            background: #fff;
            color: #333;
        }
        .answers button:hover:not(:disabled) {
            background: #00c6ff;
            color: white;
        }
        .answers button:disabled {
            cursor: not-allowed;
            opacity: 0.8;
        }
        .correct {
            background: #2ecc71 !important;
            color: white !important;
        }
        .incorrect {
            background: #e74c3c !important;
            color: white !important;
        }
    </style>

    <score-board></score-board>
    <div id="quiz"></div>
    <button id="nextBtn" style="display:none;">Next</button>
    <button id="restartBtn" style="display:none;">Restart</button>
`;

class QuizApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.currentQuestionIndex = 0;
        this.questions = defaultQuestions;
    }

    setQuestions(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        if (this.scoreBoard) {
            this.scoreBoard.init(this.questions.length);
            this.loadQuestion();
        }
    }

    connectedCallback() {
        this.cacheElements();
        this.bindEvents();

        this.scoreBoard.init(this.questions.length);
        this.loadQuestion();
    }

    cacheElements() {
        this.quizElement = this.shadowRoot.getElementById("quiz");
        this.nextButton = this.shadowRoot.getElementById("nextBtn");
        this.restartButton = this.shadowRoot.getElementById("restartBtn");
        this.scoreBoard = this.shadowRoot.querySelector("score-board");
    }

    bindEvents() {
        this.nextButton.addEventListener("click", () => this.nextQuestion());
        this.restartButton.addEventListener("click", () => this.restart());
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        this.quizElement.innerHTML = `
            <div class="question">${question.question}</div>
            <div class="answers">
                ${question.answers.map((a, i) =>
                    `<button data-index="${i}">${a}</button>`
                ).join("")}
            </div>
        `;

        this.quizElement.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", e => {
                const index = parseInt(e.target.dataset.index);
                this.selectAnswer(index);
            });
        });
    }

    selectAnswer(index) {
        const correct = this.questions[this.currentQuestionIndex].correct;
        const buttons = this.quizElement.querySelectorAll("button");

        buttons.forEach((btn, i) => {
            btn.disabled = true;
            if (i === correct) btn.classList.add("correct");
            if (i === index && i !== correct) btn.classList.add("incorrect");
        });

        if (index === correct) {
            this.scoreBoard.increment();
        }

        this.nextButton.style.display = "inline-block";
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.nextButton.style.display = "none";

        if (this.currentQuestionIndex < this.questions.length) {
            this.scoreBoard.nextQuestion();
            this.loadQuestion();
        } else {
            this.quizElement.innerHTML = "<h2>Quiz Finished</h2>";
            this.restartButton.style.display = "inline-block";
        }
    }

    restart() {
        this.currentQuestionIndex = 0;
        this.scoreBoard.reset();
        this.restartButton.style.display = "none";
        this.nextButton.style.display = "none";
        this.loadQuestion();
    }
}

customElements.define("quiz-app", QuizApp);