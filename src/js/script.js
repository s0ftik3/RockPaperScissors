const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const human_score = document.querySelector('#human');
const bot_score = document.querySelector('#bot');

const results = document.querySelector('.results');
const footer = document.querySelector('.footer');

let human_turn;
let h_score = 0;
let b_score = 0;

class RockPaperScissors {
    createBotTurn() {
        // 0 - rock 1 - paper 2 - scissors
        return Math.floor(Math.random() * 3);
    }

    processHumanTurn(turn) {
        return (human_turn = turn);
    }

    // 0 - draw 1 - bot win 2 - human win
    defineWinner(h, b) {
        if (h === 0 && b === 0) {
            return 0;
        } else if (h === 0 && b === 1) {
            return 1;
        } else if (h === 0 && b === 2) {
            return 2;
        } else if (h === 1 && b === 0) {
            return 2;
        } else if (h === 1 && b === 1) {
            return 0;
        } else if (h === 1 && b === 2) {
            return 1;
        } else if (h === 2 && b === 0) {
            return 1;
        } else if (h === 2 && b === 1) {
            return 2;
        } else if (h === 2 && b === 2) {
            return 0;
        }
    }
}

rock.addEventListener('click', () => {
    results.style.opacity = '100%';
    footer.style.opacity = '100%';
    const game = new RockPaperScissors();
    let bot = game.createBotTurn();
    let human = game.processHumanTurn(0);
    let result = game.defineWinner(human, bot);

    if (result === 0) {
        h_score++;
        b_score++;
        human_score.innerHTML = h_score;
        bot_score.innerHTML = b_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection winner">
            ${
                human === 0
                    ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                    : human === 1
                    ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                    : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
            }
        </div>
        <div class="mb-3 result-selection winner"><i>Draw</i></div>
        <div class="mb-3 result-selection winner">
            ${
                bot === 0
                    ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                    : bot === 1
                    ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                    : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
            }
        </div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    } else if (result === 1) {
        b_score++;
        bot_score.innerHTML = b_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection">${
            human === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="50" height="50">'
                : human === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="50" height="50">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="50" height="50">'
        }</div>
        <div class="mb-3 result-selection winner"><i>You lost</i></div>
        <div class="mb-3 result-selection winner">${
            bot === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                : bot === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
        }</div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    } else if (result === 2) {
        h_score++;
        human_score.innerHTML = h_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection winner">${
            human === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                : human === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
        }</div>
        <div class="mb-3 result-selection winner"><i>You won</i></div>
        <div class="mb-3 result-selection">${
            bot === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="50" height="50">'
                : bot === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="50" height="50">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="50" height="50">'
        }</div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    }
});

paper.addEventListener('click', () => {
    results.style.opacity = '100%';
    footer.style.opacity = '100%';
    const game = new RockPaperScissors();
    let bot = game.createBotTurn();
    let human = game.processHumanTurn(1);
    let result = game.defineWinner(human, bot);

    if (result === 0) {
        h_score++;
        b_score++;
        human_score.innerHTML = h_score;
        bot_score.innerHTML = b_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection winner">
            ${
                human === 0
                    ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                    : human === 1
                    ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                    : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
            }
        </div>
        <div class="mb-3 result-selection winner"><i>Draw</i></div>
        <div class="mb-3 result-selection winner">
            ${
                bot === 0
                    ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                    : bot === 1
                    ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                    : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
            }
        </div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    } else if (result === 1) {
        b_score++;
        bot_score.innerHTML = b_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection">${
            human === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="50" height="50">'
                : human === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="50" height="50">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="50" height="50">'
        }</div>
        <div class="mb-3 result-selection winner"><i>You lost</i></div>
        <div class="mb-3 result-selection winner">${
            bot === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                : bot === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
        }</div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    } else if (result === 2) {
        h_score++;
        human_score.innerHTML = h_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection winner">${
            human === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                : human === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
        }</div>
        <div class="mb-3 result-selection winner"><i>You won</i></div>
        <div class="mb-3 result-selection">${
            bot === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="50" height="50">'
                : bot === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="50" height="50">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="50" height="50">'
        }</div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    }
});

scissors.addEventListener('click', () => {
    results.style.opacity = '100%';
    footer.style.opacity = '100%';
    const game = new RockPaperScissors();
    let bot = game.createBotTurn();
    let human = game.processHumanTurn(2);
    let result = game.defineWinner(human, bot);

    if (result === 0) {
        h_score++;
        b_score++;
        human_score.innerHTML = h_score;
        bot_score.innerHTML = b_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection winner">
            ${
                human === 0
                    ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                    : human === 1
                    ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                    : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
            }
        </div>
        <div class="mb-3 result-selection winner"><i>Draw</i></div>
        <div class="mb-3 result-selection winner">
            ${
                bot === 0
                    ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                    : bot === 1
                    ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                    : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
            }
        </div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    } else if (result === 1) {
        b_score++;
        bot_score.innerHTML = b_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection">${
            human === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="50" height="50">'
                : human === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="50" height="50">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="50" height="50">'
        }</div>
        <div class="mb-3 result-selection winner"><i>You lost</i></div>
        <div class="mb-3 result-selection winner">${
            bot === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                : bot === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
        }</div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    } else if (result === 2) {
        h_score++;
        human_score.innerHTML = h_score;

        let html = '';
        html += `
        <div class="mb-3 result-selection winner">${
            human === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="70" height="70">'
                : human === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="70" height="70">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="70" height="70">'
        }</div>
        <div class="mb-3 result-selection winner"><i>You won</i></div>
        <div class="mb-3 result-selection">${
            bot === 0
                ? '<img src="src/images/rock.svg" alt="rock" width="50" height="50">'
                : bot === 1
                ? '<img src="src/images/paper.svg" alt="paper" width="50" height="50">'
                : '<img src="src/images/scissors.svg" alt="scissors" width="50" height="50">'
        }</div>
        `;
        results.insertAdjacentHTML('beforeend', html);
    }
});