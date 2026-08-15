import ProductList from "./components/ProductList"
import { ColorModeButton, useColorMode } from "./components/ui/color-mode"

function App() {

  const {toggleColorMode} = useColorMode();

  return (
    <>
      <ColorModeButton onClick={toggleColorMode}/>
      <ProductList />
    </>
  )
}

export default App
