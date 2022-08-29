// Create a module pattern for the gameboard

const gameBoard = (() => {

    let board = Array.from(Array(9).keys());

    const build_board = () => {

        const board_container = document.querySelector('.game_board'); 
        board.forEach(tile => {
            const board_tile = document.createElement('div');
            board_tile.classList.add('board_tile');
            board_tile.setAttribute('id', board.indexOf(tile));
            board_tile.addEventListener('click', function clickTile () {
                if (gameLogic.display_counter() % 2 != 0) {
                    this.textContent = 'X';
                    board[tile] = 'X';
                    gameLogic.check_victory();
                    gameLogic.increase_counter();
                    board_tile.removeEventListener('click', clickTile);
                } else if (gameLogic.display_counter() % 2 == 0) {
                    this.textContent = 'O';
                    board[tile] = 'O';
                    gameLogic.check_victory();
                    gameLogic.increase_counter();
                    board_tile.removeEventListener('click', clickTile);
                }
            });
        board_container.append(board_tile);
    })}

    const getBoardState = () => {
        return board;
    }

    const reset_board = () => {
        const all_tiles = document.querySelectorAll('.board_tile');
        all_tiles.forEach( tile => document.querySelector('.game_board').removeChild(tile));
        board = Array.from(Array(9).keys());
    }

    return {
        build_board,
        reset_board,
        getBoardState
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

    const reset_counter = () => {
        counter = 0;
    };

    const is_all_x = (current_tile) => current_tile == 'X';
    const is_all_o = (current_tile) => current_tile == 'O';

    const check_victory = () => {
        checkHorizontal1();
        checkHorizontal2();
        checkHorizontal3();
        checkVertical1();
        checkVertical2();
        checkVertical3();
        checkDiagonal1();
        checkDiagonal2();
    }
        

    const checkHorizontal1 = () => {
        horizontal_1 = gameBoard.getBoardState().slice(0, 3);
        if (horizontal_1.every(is_all_o) == true || horizontal_1.every(is_all_x) == true) {
            if (horizontal_1.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (horizontal_1.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameLogic.reset_counter()
                gameBoard.build_board();
            }
        }
        return horizontal_1;
    }
        
    const checkHorizontal2 = () => {
        horizontal_2 = gameBoard.getBoardState().slice(3,6);
        if (horizontal_2.every(is_all_o) == true || horizontal_2.every(is_all_x) == true) {
            if (horizontal_2.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (horizontal_2.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            }
        }
        return horizontal_2;
    }
    
    const checkHorizontal3 = () => {
        horizontal_3 = gameBoard.getBoardState().slice(6,9);
        if (horizontal_3.every(is_all_o) == true || horizontal_3.every(is_all_x) == true) {
            if (horizontal_3.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (horizontal_3.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            }
        }
        return horizontal_3;
    }
    
    const checkVertical1 = () => {
        vertical_1 = [gameBoard.getBoardState().at(0), gameBoard.getBoardState().at(3), gameBoard.getBoardState().at(6)];
        if (vertical_1.every(is_all_o) == true || vertical_1.every(is_all_x) == true) {
            if (vertical_1.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (vertical_1.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            }
        }
        return vertical_1;
    }
    
    const checkVertical2 = () => {
        vertical_2 = [gameBoard.getBoardState().at(1), gameBoard.getBoardState().at(4), gameBoard.getBoardState().at(7)];
        if (vertical_2.every(is_all_o) == true || vertical_2.every(is_all_x) == true) {
            if (vertical_2.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (vertical_2.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            }
        }
        return vertical_2;
    }
    
    const checkVertical3 = () => {
        vertical_3 = [gameBoard.getBoardState().at(2), gameBoard.getBoardState().at(5), gameBoard.getBoardState().at(8)];
        if (vertical_3.every(is_all_o) == true || vertical_3.every(is_all_x) == true) {
            if (vertical_3.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (vertical_3.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            }
        }
        return vertical_3;
    }
    
    const checkDiagonal1 = () => {
        diagonal_1 = [gameBoard.getBoardState().at(0), gameBoard.getBoardState().at(4), gameBoard.getBoardState().at(8)];
        if (diagonal_1.every(is_all_o) == true || diagonal_1.every(is_all_x) == true) {
            if (diagonal_1.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (diagonal_1.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            }
        }
        return diagonal_1;
    }
            
    const checkDiagonal2 = () => {
        diagonal_2 = [gameBoard.getBoardState().at(2), gameBoard.getBoardState().at(4), gameBoard.getBoardState().at(6)];
        if (diagonal_2.every(is_all_o) == true || diagonal_2.every(is_all_x) == true) {
            if (diagonal_2.every(is_all_o) == true) {
                alert('Player 1 won');
                player1.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            } else if (diagonal_2.every(is_all_x) == true) {
                alert('Player 2 won');
                player2.increaseScore();
                gameBoard.reset_board();
                gameBoard.build_board();
            }
        }
        return diagonal_2;
    }


    return {
        display_counter,
        increase_counter,
        reset_counter,
        check_victory
    }
})();

const Player = (name) => {
    const getName = () => name;
    let score = 0;
    const getScore = () => score;
    const increaseScore = () => score+=1;

    return {getName, getScore, increaseScore}
}

const player1 = Player('Player1');
const player2 = Player('Player2');

gameBoard.build_board();