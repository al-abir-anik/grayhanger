"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EmptyCart = () => {
  return (
    <div className="py-10 md:py-20 flex items-center justify-center p-4">
      <div className="rounded-2xl p-9 max-w-md w-full space-y-8">
        <div className="relative w-48 h-48 mx-auto">
          <Image
            src="/images/emptyCart.png"
            alt="Empty shopping cart"
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
          <motion.div
            animate={{
              x: [0, -10, 10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-2"
          >
            <ShoppingCart size={20} className="text-white" />
          </motion.div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold text-gray-800">
            Your cart is Empty!
          </h2>
          <p className="text-gray-600">
            Let&apos;s find some amazing products for you.
          </p>
        </div>

        {/* <div>
          <Link
            href="/"
            className="block bg-white border text-center py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-darkColor hover:text-white transition-colors"
          >
            Start Shopping {">"}
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default EmptyCart;
