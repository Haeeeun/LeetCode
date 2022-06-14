/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let answer = [];
  let board = Array.from(new Array(n), () => new Array(n).fill('.'));

  const nQueen = (i, j, board) => {
    //같은 줄에 Q 가 있다면 지우기
    for (let m = 0; m < board[i].length; m++) {
      board[i][m] = ".";
    }

    //체스 놓을 수 있다면
    if (isChess(i, j, n, board)) {
      board[i][j] = "Q";

      if (i === n - 1) {
        const nQueenBoard = board.map((element) => element.join(""));
        answer.push(nQueenBoard);
      } else {
        nQueen(i + 1, 0, board);
      }
    }

    if (j !== n - 1) {
      nQueen(i, j + 1, board);
    }
  };

  nQueen(0, 0, board);
  return answer;
};

const isChess = (i, j, n, board) => {
  let check = true;
  let row = i;
  let col = j;

  while (row--) {
    if (board[row][j] === "Q") {
      check = false;
      break;
    }
  }

  while (col--) {
    if (board[i][col] === "Q") {
      check = false;
      break;
    }
  }

  row = i;
  col = j;

  while (row-- && col--) {
    if (board[row][col] === "Q") {
      check = false;
      break;
    }
  }

  row = i;
  col = j;

  while (row-- && col++ !== n - 1) {
    if (board[row][col] === "Q") {
      check = false;
      break;
    }
  }

  return check;
};
