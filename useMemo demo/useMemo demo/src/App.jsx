import './App.css';
import { useState, useMemo } from 'react';
import { Button } from './components/Button/Button';
import { Counter } from './components/Counter/Counter';
import { printInput } from './utils/printText';

function App() {

  const [count, setCount] = useState(0);
  const [textToPrint, setTextToPrint] = useState('');

  const handleCount = () => {
    setCount((c) => c + 1);
  }

  const updateText = () => {
    setTextToPrint('Updated text')
  }

  useMemo(() => {
    printInput('called by useMemo');
  }, [textToPrint])

  printInput('printing something');

  return (
    <>
      <Button
        callback={handleCount}>
        Increase counter
      </Button>
      <Counter count={count} />

      <Button
        callback={updateText}
      >
        Update text
      </Button>
    </>
  )
}

export default App
