import React from 'react';
import glamorous from 'glamorous';

const Cell = () => (
  <glamorous.Div
    css={{
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
      width: 50,
      marginRight: 5,
    }}
  />
);

export default Cell;
