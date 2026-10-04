
import './App.css'
import './assets/Css/main.css'
import ProductList from './components/ProductList'
import { products } from './assets/constants/constants'

function App() {
  return (
    <>
      <div className="container-fluid">
        {/* <header className="header">
          <h1>My Shopping Store</h1>
        </header> */}

        <header
          className="header"
          style={{
            display: 'block',
            backgroundColor: 'lightblue',
            padding: '20px',
            color: 'black',
          }}
        >
          <h1>My Shopping Store</h1>
        </header>

        <h2>Products</h2>

        <ProductList
          product={products}
        />
      </div>

    </>
  )
}

export default App
