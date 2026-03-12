"use client";

import { useState } from "react";
import { Product } from "@/sanity.types";
import { SizeItem } from "../product/ProductAction";
import useCartStore from "@/store/cartStore";
import toast from "react-hot-toast";

const AddToCart = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState<SizeItem | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const { addItem } = useCartStore();

  const handleAddtocart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }
    if (selectedSize.stock !== "in_stock") {
      toast.error("Selected size is stock out.");
      return;
    }
    addItem(product, selectedSize.size!);
    toast.success(`${product?.name?.substring(0, 12)}...added successfully.`);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* size */}
      <h3 className="font-semibold">Choose Size :</h3>
      <div className="flex gap-3">
        {product?.sizeStock?.map((item) => (
          <label key={item?._key} className="cursor-pointer">
            <input
              type="radio"
              name="size"
              value={item?.size}
              onChange={() => {
                setSelectedSize(item);
                setShowSizeError(false);
              }}
              className="hidden"
            />
            <span
              className={`px-4 py-1.5 md:px-5 md:py-2.5 uppercase font-medium rounded-xs text-darkColor border border-darkColor/30 hover:border-darkColor/90 transition-colors ${selectedSize?._key === item._key ? "bg-darkColor text-white" : "bg-transparent"}`}
            >
              {item?.size}
            </span>
          </label>
        ))}
      </div>
      {showSizeError && <p className="text-red-600">Please select a size.</p>}
      {/* stock */}
      {selectedSize && (
        <p
          className={`w-40 py-2.5 mt-2 text-sm text-center font-semibold rounded ${selectedSize?.stock === "in_stock" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
        >
          {selectedSize?.stock === "in_stock" ? "In Stock" : "Out of Stock"}
        </p>
      )}

      {/* cart button */}
      <button
        onClick={handleAddtocart}
        className="w-full h-11 mt-4 font-semibold text-white bg-darkColor/85 hover:bg-darkColor tracking-wide rounded-xs transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
