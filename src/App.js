import React, { Component } from 'react';
import glamorous from 'glamorous';

import Board from './Board';

import makeBoard from './utils/makeBoard';

const AppContainer = glamorous.div({
  maxWidth: 1080,
  margin: 'auto',
});

const numberOfRowsAndCells = 8;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      board: makeBoard(numberOfRowsAndCells),
      currentPlayer: 'red',
    };
  }

  render () {
    const { board, currentPlayer } = this.state;

    return (
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
        <Board board={board} />
        <glamorous.Div
          css={{
            textAlign: 'center',
          }}
        >
          Current player:{' '}
          <glamorous.Span css={{ color: currentPlayer === 'red' ? 'red' : 'blue' }}>
            {currentPlayer.toUpperCase()}
          </glamorous.Span>
        </glamorous.Div>
      </AppContainer>
    );
  }
}

export default App;
