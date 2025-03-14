const { ipcRenderer } = require('electron');

document.getElementById('rock').addEventListener('click', () => {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', () => {
    playGame('paper');
});

document.getElementById('scissors').addEventListener('click', () => {
    playGame('scissors');
});

function playGame(playerChoice) {
    const result = ipcRenderer.sendSync('play-game', playerChoice);
    document.getElementById('result').innerText = result;
}