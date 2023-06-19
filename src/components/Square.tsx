import { Button } from '@vkontakte/vkui/dist/components/Button/Button';
import { Div } from '@vkontakte/vkui/dist/components/Div/Div';
import React from 'react';
import './Square.css';

type SquareProps = {
  value: string;
  onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <Button onClick={onClick}  className='square-size'>
      <Div className='square-div'>{value}</Div>
    </Button>
  );
};

export default Square;