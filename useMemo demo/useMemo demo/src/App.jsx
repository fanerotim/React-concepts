import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { Button } from './components/Button/Button';
import { Counter } from './components/Counter/Counter';
import { List } from './components/List/List';
import { generateItems } from './components/utils/generateItems';

function App() {

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  }

  // EXAMPLE OF USE MEMO
  const [numberOfItems, setNumberOfItems] = useState(2);
  // calls generateItems each time the count state changes; rerenders each time
  const itemsToRender = generateItems(numberOfItems);

  // does not call generateItems on each counter change
  // ONLY calls generateItems if numberOfItems changes
  // const itemsToRender = useMemo(() => {
  //     return generateItems(numberOfItems);
  // }, [numberOfItems])

  return (
    <>
      <Button
        callback={handleCount}>
        Click me to increase counter
      </Button>

      <Counter
        count={count}
      />

      <List
        itemsToRender={itemsToRender}
      />
    </>
  )
}

export default App
