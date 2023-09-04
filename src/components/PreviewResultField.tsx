import styles from '../css/ResultField.module.css';

import useCalculator from '../context/CalculatorContext';

const PreviewResultField = () => {
  const { state } = useCalculator();

  return <input className={styles.result_field} type='text' value={state.previewResult} />;
};

export default PreviewResultField;
