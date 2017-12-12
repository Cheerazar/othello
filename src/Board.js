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

const Board = ({ board }) => (
  <BoardContainer>
    {board.map((row, rowNumber) => (<Row
      key={`r-${rowNumber}`}
      row={row}
      rowNumber={rowNumber}
    />))}
  </BoardContainer>
);

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired).isRequired,
};

export default Board;
