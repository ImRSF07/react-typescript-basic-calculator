import styles from '../css/ResultField.module.css';

import useCalculator from '../context/CalculatorContext';

const ResultField = () => {
  const { state } = useCalculator();

  return <h2 className={styles.result_field}>{state.result || ' '}</h2>;
};

export default ResultField;
