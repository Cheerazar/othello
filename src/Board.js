import React, { Component } from 'react';
import glamorous from 'glamorous';

import Row from './Row';

const BoardContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  marginTop: 20,
});

const numberOfRowsAndCells = 8;

class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      board: new Array(numberOfRowsAndCells).fill(new Array(numberOfRowsAndCells).fill([])),
    };
  }

  render () {
    const { board } = this.state;

    return (
      <BoardContainer>
        {board.map((row, rowNumber) => (
          <Row
            key={`r-${rowNumber}`}
            row={row}
            rowNumber={rowNumber}
          />
        ))}
      </BoardContainer>
    );
  }
}

export default Board;
