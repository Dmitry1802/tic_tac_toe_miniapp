import React, { useState } from 'react';
import Board from './Board';
import './Game.css';
import { Button, Div, FixedLayout, Group } from '@vkontakte/vkui';

const Game: React.FC = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? 'X' : 'O';
    
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Победитель: ${winner}`;
  } else if (squares.every((square) => square !== '')) {
    status = 'Ничья!';
  } else {
    status = `Следующий игрок: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Group >
        <Div className='center'>
             <Board squares={squares} onClick={handleClick} />
        </Div>
        <FixedLayout filled vertical='bottom'>
            <Div className='center'>
                <Div>{status}</Div>
                <Button stretched size='l' onClick={resetGame}>Сброс</Button>
            </Div>
        </FixedLayout>
    </Group>
);
};

const calculateWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Game;
