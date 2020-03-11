import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function compoinent simple - for compontents that only have a render and no state
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

  /* Passes in value as jsx a property to square Passing properties from parent to child is how react works!*/
  class Board extends React.Component {
    constructor(props) {
      super(props);
      // Sets states to an array of 9 nulls
      this.state = {squares: Array(9).fill(null)}
    }

    //Handles clicks on the board changes square at i to an x 
    handleClick(i) {
      // Creates copy of squares to modify allows keeping of previous states
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares:squares});
    }

    renderSquare(i) {
      return (
        <Square 
        // two props onclick -prop function that square calls
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
