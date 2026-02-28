"use client";

import { useState } from "react";

type Props = {
  sizeStock?: Array<{
    size?: string;
    stock?: "in_stock" | "out_of_stock";
    _key: string;
  }>;
};

const SizeStock = ({ sizeStock = [] }: Props) => {
  //  if (!sizeStock.length) return null;
  const [selectedSize, setSelectedSize] = useState(sizeStock?.[0]);

  console.log(sizeStock?.[0]);
  

  return (
    <div className="my-10 flex flex-col gap-8">
      <div className="flex gap-4">
        {sizeStock?.map((item) => (
          <label key={item?._key} className="cursor-pointer">
            <input
              type="radio"
              name="size"
              value={item?.size}
              onChange={() => setSelectedSize(item)}
              className="hidden"
            />
            <span
              className={`px-4 py-1.5 md:px-6 md:py-2.5 uppercase font-medium rounded-xs text-darkColor border border-darkColor/30 hover:border-darkColor/90 transition-colors ${selectedSize === item ? "bg-darkColor text-white" : "bg-transparent"}`}
            >
              {item?.size}
            </span>
          </label>
        ))}
      </div>

      {selectedSize && (
        <p
          className={`w-40 py-2.5 text-sm text-center font-semibold rounded ${selectedSize?.stock === "in_stock" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
        >
          {selectedSize?.stock === "in_stock" ? "In Stock" : "Out of Stock"}
        </p>
      )}
    </div>
  );
};

export default SizeStock;
