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

const Row = ({ handleCellClick, rowNumber, row }) => (
  <RowContainer>
    {row.map((cellValue, cellNumber) => {
      const cellId = `r${rowNumber}-c${cellNumber}`;

      return (
        <Cell
          key={cellId}
          cellValue={cellValue}
          id={cellId}
          handleCellClick={handleCellClick}
        />
      );
    })}
  </RowContainer>
);

Row.propTypes = {
  handleCellClick: PropTypes.func.isRequired,
  rowNumber: PropTypes.number.isRequired,
  row: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Row;
