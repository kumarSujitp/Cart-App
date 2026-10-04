
import ProductCard from "./ProductCard";
import type { ProductListProps } from "../assets/Types/DataTypes";

const ProductList=({ product }: ProductListProps)=> {
  return (
    <div className="container mt-4">
      <div className="row">
        {product?.map((item) => (
          <ProductCard key={item.id} product={item}  />
        ))}
      </div>
    </div>
  );
}

export default ProductList;