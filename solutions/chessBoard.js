function chessBoard(n) {
    let board = ''
    let row = ''
    for (let i = 0; i < n; i++ ) {
        row += '# '
    }

    row += '\n'
    for(let j = 0; j < n; j++) {
        board += row;
    }
    console.log(board)
}

chessBoard(8)

