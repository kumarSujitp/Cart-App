
import { useState } from "react";
import type { CartItem, Product } from "../assets/Types/DataTypes";

interface ProductCardProps {
  product: Product;
}



const ProductCard=({ product }: ProductCardProps)=> {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  console.log('wwwwwwwwwww',cartItems)

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div className="product-card">
        <img src={product.image} alt="" />

        <h3>{product.name}</h3>
        <p>₹{product.price.toLocaleString("en-IN")}</p>

        <button onClick={()=>addToCart(product)} className="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;