import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App  name="Mark"/>
//   </React.StrictMode>
// );
function Square(props) {
  return (
    <button 
    className="square" 
    onClick = {props.onClick} >
{props.value}

</button>
  )
}
// class Square extends React.Component {
//   render() {
//     return (
//       // <button 
//       //       className="square" 
//       //       onClick={()=>{this.setState({value:'X'})}} >
//       //   {this.state.value}

//       // </button>
//         <button 
//             className="square" 
//             onClick={()=>{this.props.onClick()}} >
//         {this.props.value}

//       </button>
//     );
//   }
// }

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
                    onClick = {()=>this.handleCLick(i)}
    />;
  }

  handleCLick(i) {
    const square = this.state.squares.slice();
    square[i] = this.state.xIsNext ? 'X': '0' ;
    this.setState({squares: square,
                    xIsNext: !this.state.xIsNext});
    console.log(this.state.squares);
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X': '0');

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

root.render(
  <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';

// function Hello(props) {

//   return <h1>Hello World!</h1>;
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));