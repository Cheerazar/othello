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

const Row = ({ rowNumber, row }) => (
  <RowContainer>
    {row.map((cellValue, cellNumber) => {
      const cellId = `r${rowNumber}-c${cellNumber}`;

      return (<Cell
        key={cellId}
        cellValue={cellValue}
        id={cellId}
      />);
    })}
  </RowContainer>
);

Row.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  row: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Row;
