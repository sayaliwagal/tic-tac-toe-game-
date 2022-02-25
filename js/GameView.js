export default class GameView {

    constructor() {
        console.log("init game view");
    }
    updateBoard(game) {
        this.updateTurn(game);
        const winningCombication = game.findWinningCombinations();
        console.log("This is a board within Gameview");
        console.log(game.board);
        for (let i = 0; i < game.board.length; i++)
        {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            // tile.textContent = game.board[i];

            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";
            tile.innerHTML = `<span class = "${tileType}"> ${game.board[i] ? game.board[i] : ""} </span>`
            tile.classList.remove("tile-winner");
            if(winningCombication && winningCombication.includes(i)){
            tile.classList.add("tile-winner");
        }
        }

    }
    updateTurn(game) {

        let playerx = document.querySelector(".player-x");
        let playero = document.querySelector(".player-o")
        console.log(playerx);
        console.log(playero);
        playerx.classList.remove("active");
        playero.classList.remove("active")

        if (game.turn == 'X')
        {
            playerx.classList.add('active');
        } else
        {
            playero.classList.add('active');
        }
    }
}
