const calculateNewBoard = ({
  startRow, startCell, board, currentPlayer,
}) => {
  const directionsWithRowAndCell = {
    north: [],
    south: [],
    east: [],
    west: [],
    northEast: [],
    southWest: [],
    northWest: [],
    southEast: [],
  };

  // const north = startRow - 1; // same cell in each row
  for (let northIdx = startRow - 1; board[northIdx] !== undefined; northIdx -= 1) {
    directionsWithRowAndCell.north.push([northIdx, startCell]);
  }

  // const south = startRow + 1; // same cell in each row
  for (let southIdx = startRow + 1; board[southIdx] !== undefined; southIdx += 1) {
    directionsWithRowAndCell.south.push([southIdx, startCell]);
  }

  // const east = startCell + 1; // same row
  for (
    let eastIdx = startCell + 1;
    board[startRow] && board[startRow][eastIdx] !== undefined;
    eastIdx += 1
  ) {
    directionsWithRowAndCell.east.push([startRow, eastIdx]);
  }

  // const west = startCell - 1; // same row
  for (
    let westIdx = startCell - 1;
    board[startRow] && board[startRow][westIdx] !== undefined;
    westIdx -= 1
  ) {
    directionsWithRowAndCell.west.push([startRow, westIdx]);
  }

  // const northEast = startRow - 1 && startCell + 1;
  for (
    let northIdx = startRow - 1, eastIdx = startCell + 1;
    board[northIdx] && board[northIdx][eastIdx] !== undefined;

  ) {
    directionsWithRowAndCell.northEast.push([northIdx, eastIdx]);
    northIdx -= 1;
    eastIdx += 1;
  }

  // const southWest = startRow + 1 && startCell - 1;
  for (
    let southIdx = startRow + 1, westIdx = startCell - 1;
    board[southIdx] && board[southIdx][westIdx] !== undefined;

  ) {
    directionsWithRowAndCell.southWest.push([southIdx, westIdx]);
    southIdx += 1;
    westIdx -= 1;
  }

  // const northWest = startRow  - 1 && startCell - 1;
  for (
    let northIdx = startRow - 1, westIdx = startCell - 1;
    board[northIdx] && board[northIdx][westIdx] !== undefined;

  ) {
    directionsWithRowAndCell.northWest.push([northIdx, westIdx]);
    northIdx -= 1;
    westIdx -= 1;
  }

  // const southEast = startRow + 1 && startCell + 1;
  for (
    let southIdx = startRow + 1, eastIdx = startCell + 1;
    board[southIdx] && board[southIdx][eastIdx] !== undefined;

  ) {
    directionsWithRowAndCell.southEast.push([southIdx, eastIdx]);
    southIdx += 1;
    eastIdx += 1;
  }

  const cellsToUpdate = Object.entries(directionsWithRowAndCell).reduce(
    (vectors, [direction, indices]) => {
      let stopIndex = 0;

      for (let idx = 0; idx < indices.length; idx += 1) {
        const [row, cell] = indices[idx];

        if (board[row][cell] === '') {
          break;
        } else if (board[row][cell] === currentPlayer) {
          stopIndex = idx;
          break;
        }
      }

      vectors[direction] = indices.slice(0, stopIndex);

      return vectors;
    },
    {},
  );

  const newBoard = Object.values(cellsToUpdate)
    .filter(row => row.length > 0)
    .reduce((tempBoard, indices) => {
      indices.forEach(([row, cell]) => {
        tempBoard[row][cell] = currentPlayer;
      });

      return tempBoard;
    }, board);

  // add in piece for latest play
  newBoard[startRow][startCell] = currentPlayer;

  return newBoard;
};

export default calculateNewBoard;
