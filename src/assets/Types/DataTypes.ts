
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }

  export interface ProductListProps{
   product:Product[] ;
  //  onAddToCart: (product: Product) => void;
  }

  export interface CartItem extends Product {
    quantity: number;
  }
  

  // const cartItem: CartItem = {
  //   id: 1,
  //   name: "Wireless Headphones",
  //   price: 2499,
  //   image: "https://placehold.co/300x200?text=Headphones",
  //   quantity: 2,
  // };