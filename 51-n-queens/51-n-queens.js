/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let answer = [];
    let board = [];
    //1. 체스보드 생성
    for(let i=0; i<n; i++) {
        board[i] = [];
        for(let j=0; j<n; j++) {
            board[i][j] = '.'
        }
    }
    
    //2. nQueen
    const nQueen = (i, j, board) => {
        let currentBoard = [...board];

        //같은 줄에 Q 가 있다면 지우기 (TODO: 심플하게 변경)
        for(let m=0; m<currentBoard[i].length; m++) {
            currentBoard[i][m] ='.'
        }

        //체스 놓을 수 있다면
        if(isChess(i, j, n, currentBoard)) {
            currentBoard[i][j] = 'Q';
           
            if(i === n-1) {
                const nQueenBoard = currentBoard.map(element => element.join(''));
                console.log('nQueen 완성!!', nQueenBoard)
                answer.push(nQueenBoard);
            } else {
                nQueen(i+1, 0, currentBoard);   
            }
        }

        if(j !== n-1) {
            nQueen(i, j+1, currentBoard);
        } else {
            return;
        }
    }
    
    nQueen(0, 0, board);
    
    return answer;
};


const isChess = (i, j, n, board) => {
    let check = true;
    let row = i;
    let col = j;
    
    while(row--) {
        if(board[row][j] === 'Q') {
            check = false;
            break;
        }
    }
    
    while(col--) {
        if(board[i][col] === 'Q') {
            check = false;
            break;
        }
    }
    
    row = i;
    col = j;
    
    while(row-- && col--) {
        if(board[row][col] === 'Q'){
            check=false;
            break;
        }
    }
    
    row = i;
    col = j;
    
    while(row-- && col++ !== n-1) {
          if(board[row][col] === 'Q') {
            check = false;
            break;
        }
    }

    return check;
}