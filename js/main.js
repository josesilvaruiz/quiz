import "../components/quiz/quiz.js";
import { questions } from "./data/questions.js";

/**
 * Entry point of the application
 * Responsible for:
 *  - Registering components (via import)
 *  - Providing data to the quiz component
 */

document.addEventListener("DOMContentLoaded", () => {
    const quizElement = document.querySelector("quiz-app");

    if (!quizElement) {
        throw new Error("quiz-app component not found in DOM.");
    }

    quizElement.setQuestions(questions);
});