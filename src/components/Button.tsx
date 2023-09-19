import buttonStyles from '../css/Button.module.css';

import { InputTypes } from '../types/types';

type PropsType = {
  text: string;
  inputType: keyof InputTypes;
  onClick: () => void;
};

const Button = ({ text, inputType, onClick }: PropsType) => {
  return (
    <button className={buttonStyles[inputType]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
