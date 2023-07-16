import { useState,useEffect } from 'react';
import './App.css'
import { Square } from './components/Square';
import { WinerModal } from './components/ModalWinner';
import confetti from 'canvas-confetti';
import { TURNS, WINNER_COMBOS } from './constants';
import { saveGameToStorage, clearGameToStorage } from './logic/storage';

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board');
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn');
    return turnFromLocalStorage 
      ? JSON.parse(localStorage.getItem('turn'))
      : TURNS.X;
  });
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  const checkWinner = (newBoard, newTurn) => {
    for (const combos of WINNER_COMBOS) {
      const comboWinSelected = combos.every(combo => newBoard[combo] == newTurn);
      if (comboWinSelected) {
        return true; 
      }
    }
    return null;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    clearGameToStorage();
  }

  const checkTie = (newBoard) => {
    return newBoard.every(board => board != null);
  }

  const updateBoard = (index) => {
    if (board[index]) return;

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newBoard = [...board];
    newBoard[index] = newTurn;

    setBoard(newBoard);
    const newWinner = checkWinner(newBoard, newTurn);

    if (newWinner) {
      setWinner(newTurn);
      confetti();
    } else if (checkTie(newBoard)) {
      setWinner(false);
      setTie(true);
      resetGame();
    }
  }

  useEffect(() => {
    console.log('use effect');
    saveGameToStorage(board, turn);

  },[turn, board]);

  return (
    <>
      <main className='board'>
        <div style={{ marginBottom: '1rem' }}>
          <h1>Tic Tac toe</h1>
          <button onClick={resetGame}>Empezar otra vez</button>
        </div>
        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.O}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.X}>{TURNS.O}</Square>
          <div style={{ margin: '1rem' }}>
            temportizador
          </div>
        </section>

        {
          winner !== null && (
            <WinerModal resetGame={resetGame} winner={winner} />
          )
        }
      </main>
    </>
  )
}

export default App