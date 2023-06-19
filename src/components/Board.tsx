import React from 'react';
import Square from './Square';
import { Div } from '@vkontakte/vkui/dist/components/Div/Div';

type BoardProps = {
  squares: string[];
  onClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (index: number) => {
    return <Square value={squares[index]} onClick={() => onClick(index)} />;
  };

  return (
    <Div>
      <Div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Div>
      <Div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Div>
      <Div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Div>
    </Div>
  );
};

export default Board;