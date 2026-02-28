"use client";

import { Product } from "@/sanity.types";
import QuantityButton from "./QuantityButton";

const AddToCartButton = ({ product }: { product: Product }) => {
  const handleAddtoCart = () => {};
  const itemCount = 0;
  console.log(product.price);

  return (
    <div className="w-full">
      {itemCount ? (
        <div className="w-full text-sm">
          <div>
            <span className="text-sm">Quantity</span>
            <QuantityButton product={product} />
          </div>
          <div className="pt-1 flex items-center justify-between border-t">
            <span className="text-sm font-semibold">Subtotal</span>
            <span>{product?.price && product?.price * itemCount}</span>
          </div>
        </div>
      ) : (
        <button
          onClick={handleAddtoCart}
          className="w-full h-10 font-semibold text-white bg-darkColor/85 hover:bg-darkColor tracking-wide rounded-xs transition-colors"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
