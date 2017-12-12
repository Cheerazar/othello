export default (numberOfRowsAndCells) => {
  const board = [];

  for (let outerIdx = 0; outerIdx < numberOfRowsAndCells; outerIdx += 1) {
    board.push([]);
    for (let innerIdx = 0; innerIdx < numberOfRowsAndCells; innerIdx += 1) {
      if ((outerIdx === 3 && innerIdx === 3) || (outerIdx === 4 && innerIdx === 4)) {
        board[outerIdx][innerIdx] = 'red';
      } else if ((outerIdx === 3 && innerIdx === 4) || (outerIdx === 4 && innerIdx === 3)) {
        board[outerIdx][innerIdx] = 'blue';
      } else {
        board[outerIdx][innerIdx] = '';
      }
    }
  }

  return board;
};
