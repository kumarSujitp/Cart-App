
import './App.css'
import './assets/Css/main.css'
import ProductList from './components/ProductList'
import { products } from './assets/constants/constants'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Shopping Store</h1> 
        {/* <div className="cart-count">Cart ({totalItems})</div> */}
        {/* {/* <div className="cart-count">Cart</div> */}
      </header>

      <h2>Products</h2>

      <ProductList
        product={products}
      // onAddToCart={addToCart}
      />
    </>
  )
}

export default App
