import React, { Component } from 'react';
import glamorous from 'glamorous';

import Board from './Board';

import makeBoard from './utils/makeBoard';
import calculateNewBoard from './utils/calculateNewBoard';

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

  handleCellClick = (id) => {
    const row = parseInt(id[1], 10);
    const cell = parseInt(id[4], 10);
    const { board, currentPlayer } = this.state;

    const newBoard = calculateNewBoard({
      currentPlayer,
      startRow: row,
      startCell: cell,
      board: [...board],
    });

    this.setState({
      board: newBoard,
      currentPlayer: currentPlayer === 'red' ? 'blue' : 'red',
    });
  };

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
        <Board
          board={board}
          handleCellClick={this.handleCellClick}
        />
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
