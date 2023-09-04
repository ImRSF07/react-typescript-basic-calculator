import styles from './css/App.module.css';

import ButtonContainers from './components/ButtonContainers';
import Header from './components/Header';
import ResultField from './components/ResultField';
import PreviewResultField from './components/PreviewResultField';

import { CalculatorProvider } from './context/CalculatorContext';

function App() {
  return (
    <CalculatorProvider>
      <div className={styles['main-wrapper']}>
        <Header />
        <ResultField/>
        <PreviewResultField/>
        <ButtonContainers />
      </div>
    </CalculatorProvider>
  );
}

export default App;
