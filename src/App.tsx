import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Calculator from './components/Calculator';

import { CalculatorProvider } from './context/CalculatorContext';

function App() {
  return (
    <CalculatorProvider>
      <>
        <ToastContainer />
        <Calculator />
      </>
    </CalculatorProvider>
  );
}

export default App;
