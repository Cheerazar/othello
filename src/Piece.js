import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const Piece = ({ cellValue, id }) => (
  <glamorous.Div
    css={{
      borderRadius: '50%',
      height: 40,
      width: 40,
      margin: 5,
      backgroundColor: cellValue === 'red' ? 'red' : 'blue',
    }}
    id={id}
  />
);

Piece.propTypes = {
  cellValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Piece;
