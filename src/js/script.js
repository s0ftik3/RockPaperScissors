// Buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Score
const human_score = document.querySelector('#human');
const bot_score = document.querySelector('#bot');

// Results and footer that will be shown after first step
const results = document.querySelector('.results');
const hint = document.querySelector('.hint');
const footer = document.querySelector('.footer');

// Turn that client has chosen
let human_turn;

// Variables for score
let h_score = 0;
let b_score = 0;

rock.addEventListener('click', () => {

    results.style.opacity = '100%';
    footer.style.opacity = '100%';
    hint.style.display = 'none';

    const game = new RockPaperScissors();
    let bot = game.createBotTurn();
    let human = game.processHumanTurn(0);
    let result = game.defineWinner(human, bot);

    (result === 0) ? game.draw(human, bot) : (result === 1) ? game.lose(human, bot) : game.win(human, bot);

});

paper.addEventListener('click', () => {

    results.style.opacity = '100%';
    footer.style.opacity = '100%';
    hint.style.display = 'none';

    const game = new RockPaperScissors();
    let bot = game.createBotTurn();
    let human = game.processHumanTurn(1);
    let result = game.defineWinner(human, bot);

    (result === 0) ? game.draw(human, bot) : (result === 1) ? game.lose(human, bot) : game.win(human, bot);

});

scissors.addEventListener('click', () => {
    
    results.style.opacity = '100%';
    footer.style.opacity = '100%';
    hint.style.display = 'none';

    const game = new RockPaperScissors();
    let bot = game.createBotTurn();
    let human = game.processHumanTurn(2);
    let result = game.defineWinner(human, bot);

    (result === 0) ? game.draw(human, bot) : (result === 1) ? game.lose(human, bot) : game.win(human, bot);
    
});