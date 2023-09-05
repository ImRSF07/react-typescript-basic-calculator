import styles from '../css/ButtonContainers.module.css';

import Button from './Button';

import useCalculator from '../context/CalculatorContext';

type CalculatorFields = {
  display: string;
  inputType: 'number' | 'operator';
  click: (value: string) => void;
}[];

const ButtonContainers = () => {
  const { inputValue, clearValues } = useCalculator();

  const calculatorFields: CalculatorFields = [
    { display: '1', inputType: 'number', click: inputValue },
    { display: '2', inputType: 'number', click: inputValue },
    { display: '3', inputType: 'number', click: inputValue },
    { display: '4', inputType: 'number', click: inputValue },
    { display: '5', inputType: 'number', click: inputValue },
    { display: '6', inputType: 'number', click: inputValue },
    { display: '7', inputType: 'number', click: inputValue },
    { display: '8', inputType: 'number', click: inputValue },
    { display: '9', inputType: 'number', click: inputValue },
    { display: '0', inputType: 'number', click: inputValue },
    { display: '+', inputType: 'number', click: inputValue },
    { display: '-', inputType: 'number', click: inputValue },
    { display: '*', inputType: 'number', click: inputValue },
    { display: '/', inputType: 'number', click: inputValue },
    { display: '=', inputType: 'number', click: inputValue },
    { display: 'C', inputType: 'number', click: clearValues },
  ];

  return (
    <div className={styles.wrapper}>
      {calculatorFields.map((field) => {
        return (
          <Button
            text={field.display}
            inputType={field.inputType}
            onClick={() => {
              field.click(field.display);
            }}
          />
        );
      })}
    </div>
  );
};

export default ButtonContainers;
