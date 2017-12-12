import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Cell from './Cell';

const RowContainer = glamorous.div({
  display: 'flex',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: 5,
});

const Row = ({ numOfCells, row }) => {
  const cells = [];

  for (let cellNumber = 0; cellNumber < numOfCells; cellNumber += 1) {
    const cellId = `r${row}-c${cellNumber}`;
    cells.push(<Cell
      key={cellId}
      id={cellId}
    />);
  }

  return <RowContainer>{cells}</RowContainer>;
};

Row.propTypes = {
  numOfCells: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
};

export default Row;
