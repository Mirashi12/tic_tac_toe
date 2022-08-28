// Create a module pattern for the gameboard

const gameBoard = (() => {

    const board = Array.from(Array(9).keys());

    const build_board = () => {
        const board_container = document.querySelector('.game_board'); 
        board.forEach(tile => {
            const board_tile = document.createElement('div');
            board_tile.classList.add('board_tile');
            board_tile.setAttribute('id', board.indexOf(tile));
            board_tile.addEventListener('click', function () {
                if (gameLogic.display_counter() % 2 != 0) {
                    this.textContent = 'X';
                    board[tile] = 'X';
                    gameLogic.check_victory();
                    gameLogic.increase_counter();
                } else if (gameLogic.display_counter() % 2 == 0) {
                    this.textContent = 'O';
                    board[tile] = 'O';
                    gameLogic.check_victory();
                    gameLogic.increase_counter();
                }
            });
        board_container.append(board_tile);
    })}

    return {
        build_board,
        board
    };
})();



const gameLogic = (() =>{
    let move_counter = 0;
    const display_counter = () => {
        return move_counter;
    }
    const increase_counter = () => {
        move_counter += 1;
    };

    const check_victory = () => {
        const horizontal_1 = gameBoard.board.slice(0, 3);
        const horizontal_2 = gameBoard.board.slice(3,6);
        const horizontal_3 = gameBoard.board.slice(6,9);
        const vertical_1 = [gameBoard.board.at(0), gameBoard.board.at(3), gameBoard.board.at(6)];
        const vertical_2 = [gameBoard.board.at(1), gameBoard.board.at(4), gameBoard.board.at(7)];
        const vertical_3 = [gameBoard.board.at(2), gameBoard.board.at(5), gameBoard.board.at(8)];
        const diagonal_1 = [gameBoard.board.at(0), gameBoard.board.at(4), gameBoard.board.at(8)];
        const diagonal_2 = [gameBoard.board.at(2), gameBoard.board.at(4), gameBoard.board.at(6)];

        const is_all_x = (current_tile) => current_tile == 'X';
        const is_all_o = (current_tile) => current_tile == 'O';
        
        if (horizontal_1.every(is_all_o) == true || horizontal_1.every(is_all_x) == true) {
            console.log('win');
        } else if (horizontal_2.every(is_all_o) == true || horizontal_2.every(is_all_x) == true) {
            console.log('win');
        } else if (horizontal_3.every(is_all_o) == true || horizontal_3.every(is_all_x) == true) {
            console.log('win');
        } else if (vertical_1.every(is_all_o) == true || vertical_1.every(is_all_x) == true) {
            console.log('win');
        } else if (vertical_2.every(is_all_o) == true || vertical_2.every(is_all_x) == true) {
            console.log('win');
        } else if (vertical_3.every(is_all_o) == true || vertical_3.every(is_all_x) == true) {
            console.log('win');
        } else if (diagonal_1.every(is_all_o) == true || diagonal_1.every(is_all_x) == true) {
            console.log('win');
        } else if (diagonal_2.every(is_all_o) == true || diagonal_2.every(is_all_x) == true) {
            console.log('win');
        }

    };

    return {
        display_counter,
        increase_counter,
        check_victory
    }
})();

gameBoard.build_board();
gameLogic.check_victory();