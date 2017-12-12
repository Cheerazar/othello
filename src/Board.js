import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Row from './Row';

const BoardContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  marginTop: 20,
});

const Board = ({ board, handleCellClick }) => (
  <BoardContainer>
    {board.map((row, rowNumber) => (
      <Row
        key={`r-${rowNumber}`}
        row={row}
        rowNumber={rowNumber}
        handleCellClick={handleCellClick}
      />
    ))}
  </BoardContainer>
);

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired).isRequired,
  handleCellClick: PropTypes.func.isRequired,
};

export default Board;
