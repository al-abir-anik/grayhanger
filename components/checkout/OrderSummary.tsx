"use client";

import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store/cartStore";
import Image from "next/image";

const OrderSummary = ({
  deliveryCharge,
  isSubmitting,
}: {
  deliveryCharge: number;
  isSubmitting: boolean;
}) => {
  const { getGroupedItems, getTotalPrice } = useCartStore();
  const cartProducts = getGroupedItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="flex-1 h-fit bg-white rounded-xs shadow">
      <div className="p-4 bg-gray-50 border">
        <h2 className="font-bold">Order Summary</h2>
      </div>

      <div className="min-h-56 max-h-72 px-5 py-3 bg-white border-b overflow-y-auto">
        {cartProducts?.length > 0 ? (
          cartProducts?.map(({ product, quantity, size }) => {
            return (
              <div
                key={`${product._id}-${size}`}
                className="py-2.5 border-b last:border-b-0 flex justify-between text-sm"
              >
                <div className="flex gap-3">
                  {/* image */}
                  {product?.images && (
                    <div className="w-16 h-16 rounded-xs overflow-hidden">
                      <Image
                        src={urlFor(product?.images?.[0]).url()}
                        alt="product-image"
                        width={60}
                        height={60}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {/* name */}
                  <div className="flex-1 space-y-1">
                    {product?.name && (
                      <p className="line-clamp-1 font-medium">
                        {product?.name}
                      </p>
                    )}
                    <div className="flex">
                      {size && (
                        <p>
                          Size: <span className="uppercase">{size}</span>
                        </p>
                      )}
                      <span className="px-2">|</span>
                      {quantity && <p className="">Qty: {quantity}</p>}
                    </div>
                  </div>
                </div>
                {/* price */}
                {product?.price && (
                  <p className="w-16 text-right font-semibold">
                    TK. {(product?.price ?? 0) * quantity}
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <p className="mt-10 text-lg font-medium text-center">
            No Items in Cart!
          </p>
        )}
      </div>

      {/* pricing */}
      <div className="px-5 py-3">
        <p className="mt-2 flex justify-between">
          <span className="">Subtotal</span>
          <span>TK. {totalPrice}</span>
        </p>

        <p className="mt-3 flex justify-between">
          <span className="text-sm">Shipping</span>
          <span>TK. {deliveryCharge}</span>
        </p>

        <p className="mt-3 pt-3 text-lg font-semibold flex justify-between border-t">
          <span className="">Total</span>
          <span>TK. {totalPrice + deliveryCharge}</span>
        </p>

        <button
          type="submit"
          form="checkout-form"
          disabled={cartProducts.length === 0 || isSubmitting}
          className={`w-full py-3 mt-6  text-white font-semibold rounded-xs disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? "bg-darkColor/90" : "bg-darkBlue"}`}
        >
          {isSubmitting ? "Placing Order..." : "Confirm Order"}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
