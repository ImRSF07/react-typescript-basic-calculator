import styles from '../css/ButtonContainers.module.css';

import Button from './Button';

import useCalculator from '../context/CalculatorContext';

const ButtonContainers = () => {
  const { inputValue, clearValues, calculateResult } = useCalculator();

  return (
    <div className={styles.main__wrapper}>
      <div className={styles.operator__wrapper}>
        <Button text='+' inputType='OPERATOR' onClick={() => inputValue('+')} />
        <Button text='-' inputType='OPERATOR' onClick={() => inputValue('-')} />
        <Button text='/' inputType='OPERATOR' onClick={() => inputValue('/')} />
        <Button text='*' inputType='OPERATOR' onClick={() => inputValue('*')} />
      </div>
      <div className={styles.button__group__wrapper}>
        <div className={styles.button__group__1}>
          <Button text='7' inputType='NUMBER' onClick={() => inputValue('7')} />
          <Button text='8' inputType='NUMBER' onClick={() => inputValue('8')} />
          <Button text='9' inputType='NUMBER' onClick={() => inputValue('9')} />
          <Button text='4' inputType='NUMBER' onClick={() => inputValue('4')} />
          <Button text='5' inputType='NUMBER' onClick={() => inputValue('5')} />
          <Button text='6' inputType='NUMBER' onClick={() => inputValue('6')} />
          <Button text='1' inputType='NUMBER' onClick={() => inputValue('1')} />
          <Button text='2' inputType='NUMBER' onClick={() => inputValue('2')} />
          <Button text='3' inputType='NUMBER' onClick={() => inputValue('3')} />
          <Button text='C' inputType='CLEAR' onClick={() => clearValues()} />
          <Button text='0' inputType='NUMBER' onClick={() => inputValue('0')} />
          <Button text='.' inputType='NUMBER' onClick={() => inputValue('.')} />
        </div>
        <Button text='=' inputType='EQUALS' onClick={() => calculateResult()} />
      </div>
    </div>
  );
};

export default ButtonContainers;
