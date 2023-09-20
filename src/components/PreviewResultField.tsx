import styles from '../css/PreviewResultField.module.css';

import useCalculator from '../context/CalculatorContext';

const PreviewResultField = () => {
  const { state } = useCalculator();

  // return <input className={styles.result_field} type='text' value={state.previewResult} />;
  return <h2 className={styles.preview__result__field}>{state.previewResult}</h2>;
};

export default PreviewResultField;
