import styles from '../css/ButtonContainers.module.css';

import Button from './Button';

import useCalculator from '../context/CalculatorContext';

import { InputTypes } from '../types/types';

type CalculatorFields = {
  display: string;
  inputType: keyof InputTypes;
  click: (value: string) => void;
}[];

const ButtonContainers = () => {
  const { inputValue, clearValues, calculateResult } = useCalculator();

  const calculatorFields: CalculatorFields = [
    { display: '+', inputType: 'OPERATOR', click: inputValue },
    { display: '-', inputType: 'OPERATOR', click: inputValue },
    { display: '*', inputType: 'OPERATOR', click: inputValue },
    { display: '/', inputType: 'OPERATOR', click: inputValue },
    { display: '7', inputType: 'NUMBER', click: inputValue },
    { display: '8', inputType: 'NUMBER', click: inputValue },
    { display: '9', inputType: 'NUMBER', click: inputValue },
    { display: ' ', inputType: 'NUMBER', click: inputValue },
    { display: '4', inputType: 'NUMBER', click: inputValue },
    { display: '5', inputType: 'NUMBER', click: inputValue },
    { display: '6', inputType: 'NUMBER', click: inputValue },
    { display: ' ', inputType: 'NUMBER', click: inputValue },
    { display: '1', inputType: 'NUMBER', click: inputValue },
    { display: '2', inputType: 'NUMBER', click: inputValue },
    { display: '3', inputType: 'NUMBER', click: inputValue },
    { display: ' ', inputType: 'CLEAR', click: clearValues },
    { display: 'C', inputType: 'CLEAR', click: clearValues },
  
    { display: '.', inputType: 'NUMBER', click: inputValue },
    { display: '0', inputType: 'NUMBER', click: inputValue },
    { display: '=', inputType: 'EQUALS', click: calculateResult },
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
