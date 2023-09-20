import { useEffect } from 'react';

import { toast } from 'react-toastify';

import styles from '../css/App.module.css';

import ButtonContainers from './ButtonContainers';
import Header from './Header';
import ResultField from './ResultField';
import PreviewResultField from './PreviewResultField';

import useCalculator from '../context/CalculatorContext';

const Calculator = () => {
  const { state, clearErrors } = useCalculator();

  useEffect(() => {
    if (state.error) {
      toast.error(state.error, { position: 'bottom-center' });
      clearErrors();
    }
  }, [state.error]);

  return (
    <div className={styles['main-wrapper']}>
      <Header />
      <section className={styles['results__container']}>
        <ResultField />
        <PreviewResultField />
      </section>
      <ButtonContainers />
    </div>
  );
};

export default Calculator;
