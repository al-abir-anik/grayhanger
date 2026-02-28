"use client";

import { Product } from "@/sanity.types";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartModalButton = ({ product, className }: Props) => {
  const handleAddtoCart = () => {};

  return (
    <button
      onClick={handleAddtoCart}
      className="w-full h-11 font-semibold text-darkColor hover:text-white border border-darkColor/30 bg-transparent hover:bg-darkColor tracking-wide rounded transition-colors"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartModalButton;
