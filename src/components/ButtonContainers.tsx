import Button from './Button';

import styles from '../css/ButtonContainers.module.css';

const ButtonContainers = () => {
  const test = () => alert(1);
  return (
    <div className={styles.wrapper}>
      <Button text='1' inputType='number' onClick={test} />
      <Button text='2' inputType='number' onClick={test} />
      <Button text='3' inputType='number' onClick={test} />
      <Button text='4' inputType='number' onClick={test} />
      <Button text='5' inputType='number' onClick={test} />
      <Button text='6' inputType='number' onClick={test} />
      <Button text='7' inputType='number' onClick={test} />
      <Button text='8' inputType='number' onClick={test} />
      <Button text='9' inputType='number' onClick={test} />
      <Button text='0' inputType='number' onClick={test} />
      <Button text='+' inputType='operator' onClick={test} />
      <Button text='-' inputType='operator' onClick={test} />
      <Button text='*' inputType='operator' onClick={test} />
      <Button text='/' inputType='operator' onClick={test} />
      <Button text='=' inputType='operator' onClick={test} />
      <Button text='C' inputType='clear' onClick={test} />
    </div>
  );
};

export default ButtonContainers;
