import React from 'react';
import glamorous from 'glamorous';

import Row from './Row';

const BoardContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  marginTop: 20,
});

const numberOfRowsAndCells = 8;

const Board = () => {
  const rows = [];

  for (let rowNumber = 0; rowNumber < numberOfRowsAndCells; rowNumber += 1) {
    rows.push(<Row
      key={`r-${rowNumber}`}
      row={rowNumber}
      numOfCells={numberOfRowsAndCells}
    />);
  }

  return <BoardContainer>{rows}</BoardContainer>;
};

export default Board;
