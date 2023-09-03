import buttonStyles from '../css/Button.module.css';

type PropsType = {
  text: string;
  inputType: 'number' | 'operator' | 'clear';
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
