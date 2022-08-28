// Create a module pattern for the gameboard

const gameBoard = (() => {
    let board = new Array(9);
    board = [1,2,3,4,5,6,7,8,9];
    const horizontal_1 = board.slice(0, 3);
    const horizontal_2 = board.slice(3,6);
    const horizontal_3 = board.slice(6,9);
    const vertical_1 = [board.at(0), board.at(3), board.at(6)];
    const vertical_2 = [board.at(1), board.at(4), board.at(7)];
    const vertical_3 = [board.at(2), board.at(5), board.at(8)];
    const diagonal_1 = [board.at(0), board.at(4), board.at(8)];
    const diagonal_2 = [board.at(2), board.at(4), board.at(6)];

    let board_container = document.querySelector('.game_board');

    board.forEach(tile => {
        let board_tile = document.createElement('div');
        board_tile.setAttribute('id', board.indexOf(tile));
        board_tile.classList.add('board_tile');
        board_tile.addEventListener('click', function () {
            this.textContent = 'clicked';
        });
        board_container.append(board_tile);
    })

    return {


    };
})();

