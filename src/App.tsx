import styles from './css/App.module.css';

import ButtonContainers from './components/ButtonContainers';
import Header from './components/Header';
import ResultField from './components/ResultField';

import { CalculatorProvider } from './context/CalculatorContext';

function App() {
  return (
    <CalculatorProvider>
      <div className={styles['main-wrapper']}>
        <Header />
        <ResultField />
        <ButtonContainers />
      </div>
    </CalculatorProvider>
  );
}

export default App;
