const dom = {
    cells: document.querySelectorAll('.cell'),
    resetBtn: document.querySelector('.reset'),
    currentTurn: document.querySelector('.current-turn'),
    player1Score: document.querySelector('.score1'),
    player2Score: document.querySelector('.score2'),
    draw: document.querySelector('.draw'),
    messageContent: document.querySelector('.content'),
    overlay: document.getElementById('overlay'),
    closeBtn: document.getElementById('close'),
};

export default dom;
