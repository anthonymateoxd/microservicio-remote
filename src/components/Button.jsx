import './Button.css';
import { useState } from 'react';

export const Button = () => {
  const { count, increment } = useState(0);
  return (
    <div>
      <button
        id='click-btn'
        className='shared-btn'
        onClick={increment}
      >
        hello world: {count}
      </button>
    </div>
  );
};

export default Button;
