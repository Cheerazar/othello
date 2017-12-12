import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Piece from './Piece';

const Cell = ({ cellValue, id }) => (
  <glamorous.Div
    css={{
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
      width: 50,
      marginRight: 5,
    }}
  >
    {cellValue && <Piece
      cellValue={cellValue}
      id={id}
    />}
  </glamorous.Div>
);

Cell.propTypes = {
  cellValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Cell;
