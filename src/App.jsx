import Header from "./components/Header/Header"
import Item from "./components/Item/Item"
import Provider from "./context/Provide"
import Cart from "./components/Cart/Cart"

function App() {

  



  return (
    <>
      <Provider>
        <Header/>
        <Item/>
        <Cart/>
      </Provider>
    </>
  )
}

export default App
