document.addEventListener("DOMContentLoaded", function () {
    const gameBoard = document.getElementById("game-board");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    function createMole() {
        const mole = document.createElement("div");
        mole.classList.add("mole");
        mole.addEventListener("click", whack);
        gameBoard.appendChild(mole);

        setTimeout(() => {
            mole.classList.add("hidden");
            mole.removeEventListener("click", whack);
            mole.remove();
        }, 2000);
    }

    function whack() {
        score++;
        scoreDisplay.textContent = score;
        this.classList.add("hidden");
        this.removeEventListener("click", whack);
        this.remove();
    }

    function startGame() {
        setInterval(createMole, 1000);
    }

    startGame();
});
