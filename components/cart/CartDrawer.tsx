"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartStore";
import { ShoppingCart, Trash, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import EmptyCart from "./EmptyCart";
import { urlFor } from "@/sanity/lib/image";
import { AnimatePresence, motion } from "motion/react";

const CartDrawer = () => {
  const router = useRouter();
  const { getGroupedItems, deleteCartProduct, getTotalPrice } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  const cartProducts = getGroupedItems();
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <ShoppingCart className="w-5 h-5" />
      </button>

      {isOpen &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-100"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.div
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {/* drawer */}
              <motion.div
                className="w-96 h-full ml-auto relative flex flex-col bg-white"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                {/* header */}
                <div className="py-3 px-5 flex items-center justify-between border-b">
                  <h2 className="font-semibold text-darkColor uppercase flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="pt-0.5">
                      Cart{" "}
                      {`(${cartProducts?.length ? cartProducts?.length : 0})`}
                    </span>
                  </h2>
                  <X
                    onClick={() => setIsOpen(false)}
                    className="w-9 h-8 p-1.5 text-darkColor border hover:border-darkColor/70 transition-colors rounded-xs cursor-pointer"
                  />
                </div>
                {/*cart items */}
                <div className="flex-1 p-3 space-y-3 bg-gray-200 overflow-y-scroll cart-scroll">
                  {cartProducts?.length ? (
                    cartProducts?.map(({ product, quantity, size }) => {
                      return (
                        <div
                          key={`${product._id}-${size}`}
                          className="px-3 py-3 border-b last:border-b-0 flex flex-col bg-white text-sm"
                        >
                          {/* name image */}
                          <div className="flex justify-between gap-3">
                            {product?.name && (
                              <Link
                                href={`/product/${product?.slug?.current}`}
                                onClick={() => setIsOpen(false)}
                                className="flex-1 hover:underline"
                              >
                                {product?.name}
                              </Link>
                            )}
                            {/* image */}
                            {product?.images && (
                              <Link
                                href={`/product/${product?.slug?.current}`}
                                onClick={() => setIsOpen(false)}
                                className="rounded-xs overflow-hidden"
                              >
                                <Image
                                  src={urlFor(product?.images[0]).url()}
                                  alt="product-image"
                                  width={100}
                                  height={100}
                                  loading="lazy"
                                  className="w-24 h-24 object-cover"
                                />
                              </Link>
                            )}
                          </div>
                          {/* price quantity */}
                          <div className="space-y-1 tracking-wide">
                            {product?.price && (
                              <p className="flex">
                                <span className="w-18">Price</span>:{" "}
                                <span className="pl-2 uppercase">
                                  TK. {product?.price}
                                </span>
                              </p>
                            )}
                            {size && (
                              <p className="flex">
                                <span className="w-18">Size</span>:{" "}
                                <span className="pl-2 uppercase">{size}</span>
                              </p>
                            )}
                            {quantity && (
                              <p className="flex">
                                <span className="w-18">Quantity</span>:{" "}
                                <span className="pl-2 uppercase">
                                  {quantity}
                                </span>
                              </p>
                            )}
                            {product?.price && (
                              <p className="flex">
                                <span className="w-18">Subtotal</span>:{" "}
                                <span className="pl-2 uppercase">
                                  TK. {(product?.price ?? 0) * quantity}
                                </span>
                              </p>
                            )}
                          </div>
                          {/* action */}
                          <div className="flex justify-between">
                            <p></p>
                            <button
                              onClick={() =>
                                deleteCartProduct(product?._id, size)
                              }
                              className="p-1.5 text-red-500 hover:text-red-600 bg-red-100 hover:bg-red-200 rounded-xs"
                            >
                              <Trash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <EmptyCart />
                  )}
                </div>

                {/* footer */}
                {cartProducts?.length > 0 && (
                  <div className="w-full p-5 border-t space-y-3.5 text-lg font-semibold shadow-[0_-6px_16px_rgba(0,0,0,0.06)]">
                    <div className="flex justify-between">
                      <p className="">Total</p>
                      {totalPrice && <p>TK. {totalPrice}</p>}
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full h-10 text-base text-white border bg-green-600 hover:bg-green-700 tracking-wide rounded-xs transition-colors"
                    >
                      Checkout {">"}
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default CartDrawer;
