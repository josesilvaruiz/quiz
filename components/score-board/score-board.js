class ScoreBoard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.score = 0;
        this.totalQuestions = 0;
        this.currentQuestion = 1;
    }

    async connectedCallback() {
        await this.loadTemplate();
        this.render();
    }

    async loadTemplate() {
        // 🔥 Ruta correcta basada en la ubicación REAL del JS
        const htmlUrl = new URL("./score-board.html", import.meta.url);
        const cssUrl = new URL("./score-board.css", import.meta.url);

        const [html, css] = await Promise.all([
            fetch(htmlUrl).then(res => {
                if (!res.ok) throw new Error("score-board.html not found");
                return res.text();
            }),
            fetch(cssUrl).then(res => {
                if (!res.ok) throw new Error("score-board.css not found");
                return res.text();
            })
        ]);

        this.shadowRoot.innerHTML = `
            <style>${css}</style>
            ${html}
        `;
    }

    init(totalQuestions) {
        this.totalQuestions = totalQuestions;
        this.score = 0;
        this.currentQuestion = 1;
        this.render();
    }

    increment() {
        this.score++;
        this.render();
    }

    nextQuestion() {
        this.currentQuestion++;
        this.render();
    }

    reset() {
        this.score = 0;
        this.currentQuestion = 1;
        this.render();
    }

    render() {
        if (!this.shadowRoot.getElementById("score")) return;

        const percentage = this.totalQuestions > 0
            ? Math.round((this.score / this.totalQuestions) * 100)
            : 0;

        this.shadowRoot.getElementById("score").textContent = this.score;
        this.shadowRoot.getElementById("current").textContent = this.currentQuestion;
        this.shadowRoot.getElementById("total").textContent = this.totalQuestions;
        this.shadowRoot.getElementById("percentage").textContent = percentage;
    }
}

customElements.define("score-board", ScoreBoard);

export default ScoreBoard;