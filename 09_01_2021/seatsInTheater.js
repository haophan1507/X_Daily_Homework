function seatsInTheater(nCols, nRows, col, row) {
    const peopleBehindInColumn = nCols - col + 1;
    const peoplebehindInRow = nRows - row;
    console.log(peopleBehindInColumn * peoplebehindInRow);
}
seatsInTheater(16, 11, 5, 3);