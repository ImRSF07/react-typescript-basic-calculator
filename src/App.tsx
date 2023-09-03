import styles from './css/App.module.css'

import ButtonContainers from './components/ButtonContainers';
import Header from './components/Header';
import ResultField from './components/ResultField';

function App() {
  return (
    <div className={styles["main-wrapper"]}>
      <Header />
      <ResultField />
      <ButtonContainers />
    </div>
  );
}

export default App;
