import React from 'react';
import glamorous from 'glamorous';

import Board from './Board';

const AppContainer = glamorous.div({
  maxWidth: 1080,
  margin: 'auto',
});

const App = () => (
  <AppContainer>
    <glamorous.Header
      css={{
        textAlign: 'center',
        fontSize: '1.5em',
        marginTop: 20,
      }}
    >
      Othello
    </glamorous.Header>
    <Board />
  </AppContainer>
);

export default App;
