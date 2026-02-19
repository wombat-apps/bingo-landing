const NAMESPACE = 'urn:x-cast:com.wombatapps.bingo';
const LETTERS_75 = ['B', 'I', 'N', 'G', 'O'];

const context = cast.framework.CastReceiverContext.getInstance();

context.addCustomMessageListener(NAMESPACE, function (event) {
    try {
        var state = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        handleGameState(state);
    } catch (e) {
        console.error('Failed to parse game state:', e);
    }
});

var options = new cast.framework.CastReceiverOptions();
options.disableIdleTimeout = true;
context.start(options);

function handleGameState(state) {
    var idleScreen = document.getElementById('idle-screen');
    var gameScreen = document.getElementById('game-screen');
    idleScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    if (state.isPaused) { gameScreen.classList.add('paused'); } else { gameScreen.classList.remove('paused'); }
    renderBoard(state);
    renderBall(state);
    renderCounter(state);
}

function letterForNumber(number) {
    if (number <= 15) return 'B';
    if (number <= 30) return 'I';
    if (number <= 45) return 'N';
    if (number <= 60) return 'G';
    return 'O';
}

function renderBoard(state) {
    var board = document.getElementById('board');
    board.innerHTML = '';
    if (state.mode === 75) { renderBoard75(board, state); } else { renderBoard90(board, state); }
}

function renderBoard75(board, state) {
    board.className = 'mode75';
    var calledSet = {};
    for (var i = 0; i < state.calledNumbers.length; i++) { calledSet[state.calledNumbers[i]] = true; }
    var lastNumber = state.calledNumbers.length > 0 ? state.calledNumbers[state.calledNumbers.length - 1] : -1;
    var recentSet = {};
    var recentStart = Math.max(0, state.calledNumbers.length - 5);
    for (var r = recentStart; r < state.calledNumbers.length; r++) { recentSet[state.calledNumbers[r]] = true; }
    for (var row = 0; row < 5; row++) {
        var headerCell = document.createElement('div');
        headerCell.className = 'board-cell header';
        headerCell.textContent = LETTERS_75[row];
        board.appendChild(headerCell);
        var startNum = row * 15 + 1;
        for (var col = 0; col < 15; col++) {
            var num = startNum + col;
            var cell = document.createElement('div');
            cell.textContent = num;
            if (num === lastNumber) { cell.className = 'board-cell last'; }
            else if (recentSet[num]) { cell.className = 'board-cell recent'; }
            else if (calledSet[num]) { cell.className = 'board-cell called'; }
            else { cell.className = 'board-cell pending'; }
            board.appendChild(cell);
        }
    }
}

function renderBoard90(board, state) {
    board.className = 'mode90';
    var calledSet = {};
    for (var i = 0; i < state.calledNumbers.length; i++) { calledSet[state.calledNumbers[i]] = true; }
    var lastNumber = state.calledNumbers.length > 0 ? state.calledNumbers[state.calledNumbers.length - 1] : -1;
    var recentSet = {};
    var recentStart = Math.max(0, state.calledNumbers.length - 5);
    for (var r = recentStart; r < state.calledNumbers.length; r++) { recentSet[state.calledNumbers[r]] = true; }
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 10; col++) {
            var num = row * 10 + col + 1;
            if (num > 90) break;
            var cell = document.createElement('div');
            cell.textContent = num;
            if (num === lastNumber) { cell.className = 'board-cell last'; }
            else if (recentSet[num]) { cell.className = 'board-cell recent'; }
            else if (calledSet[num]) { cell.className = 'board-cell called'; }
            else { cell.className = 'board-cell pending'; }
            board.appendChild(cell);
        }
    }
}

function renderBall(state) {
    var ballEl = document.getElementById('current-ball');
    var letterEl = document.getElementById('ball-letter');
    var numberEl = document.getElementById('ball-number');
    if (state.calledNumbers.length === 0) { letterEl.textContent = ''; numberEl.textContent = '-'; ballEl.classList.remove('active'); return; }
    var lastNum = state.calledNumbers[state.calledNumbers.length - 1];
    if (state.mode === 75) { letterEl.textContent = letterForNumber(lastNum); } else { letterEl.textContent = ''; }
    numberEl.textContent = lastNum;
    ballEl.classList.remove('active');
    void ballEl.offsetWidth;
    ballEl.classList.add('active');
}

function renderCounter(state) {
    var counterEl = document.getElementById('ball-counter');
    counterEl.textContent = state.calledNumbers.length + ' / ' + state.mode;
}