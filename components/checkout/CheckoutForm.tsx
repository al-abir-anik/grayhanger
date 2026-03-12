"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import OrderSummary from "./OrderSummary";
import useCartStore from "@/store/cartStore";
import { deliveryAreas } from "@/constants/data";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const router = useRouter();
  const { getGroupedItems, getTotalPrice } = useCartStore();
  const cartProducts = getGroupedItems();
  const totalPrice = getTotalPrice();
  const orderIdRef = useRef(`ORD-${Date.now()}`);
  const orderId = orderIdRef.current;

  type CheckoutProps = {
    name: string;
    number: string;
    address: string;
    deliveryArea: "inside_dhaka" | "inside_gazipur" | "outside";
    orderNote?: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutProps>();

  const selectedDeliveryArea = watch("deliveryArea");
  const deliveryCharge =
    deliveryAreas.find((area) => area.value === selectedDeliveryArea)?.fee || 0;

  const onPlaceOrder = async (data: CheckoutProps) => {
    const newOrder = {
      _type: "order", // Sanity document
      orderId,
      customerName: data.name,
      phoneNumber: data.number,
      address: data.address,
      deliveryArea: data.deliveryArea,
      orderNote: data.orderNote,
      items: cartProducts.map((item) => ({
        _key: `${item.product._id}-${item.size}`,
        _type: "orderItem",
        productId: { _type: "reference", _ref: item.product._id },
        name: item.product.name,
        size: item.size,
        quantity: item.quantity,
        price: item.product.price,
      })),
      subtotal: totalPrice,
      shippingCharge: deliveryCharge,
      total: totalPrice + deliveryCharge,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(newOrder),
        headers: { "Content-Type": "application/json" },
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to place order");
      // Order created successfully
      router.push(`/success?orderId=${orderId}`);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      console.error("Order error:", message);
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <div className="w-full flex gap-10">
      <form
        id="checkout-form"
        onSubmit={handleSubmit(onPlaceOrder)}
        className="w-full h-fit max-w-3xl px-6 pt-8 pb-10 border space-y-4 bg-white rounded-xs shadow"
      >
        <h2 className="w-full font-bold tracking-wide">Shipping Information</h2>
        <hr className="pb-2" />

        <div className="flex gap-3">
          {/* Name */}
          <div className="w-full">
            <label>Fullname*</label>
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              type="text"
              placeholder="Fullname"
              className="input-box"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* Phone */}
          <div className="w-full">
            <label>Phone Number*</label>

            <input
              {...register("number", {
                required: "Phone number is required",
                pattern: {
                  value: /^01[3-9]\d{8}$/,
                  message: "Enter a valid Bangladeshi number",
                },
              })}
              type="text"
              placeholder="01XXXXXXXXX"
              className="input-box"
            />
            {errors.number && (
              <p className="text-sm text-red-500 mt-1">
                {errors.number.message}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="w-full">
          <label>Address*</label>
          <textarea
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters",
              },
            })}
            placeholder="House, Road, Area, Upozila, District"
            rows={2}
            className="input-box resize-none block"
          />
          {errors.address && (
            <p className="text-sm text-red-500 mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* delivery area */}
        <div className="">
          <p className="font-medium">Delivery Area*</p>
          <div className="flex gap-3 flex-wrap">
            {deliveryAreas.map((area) => (
              <label
                key={area.value}
                className={`w-fit py-2 pl-3 pr-6 flex items-center gap-2 border hover:border-darkColor/30 rounded-xs cursor-pointer`}
              >
                <input
                  type="radio"
                  value={area.value}
                  {...register("deliveryArea", {
                    required: "Select a delivery area",
                  })}
                />
                {area.label}
              </label>
            ))}
          </div>
          {errors.deliveryArea && (
            <p className="text-sm text-red-500">
              {errors.deliveryArea.message}
            </p>
          )}
        </div>

        {/* Note */}
        <div>
          <label>Order Note (optional)</label>
          <input
            {...register("orderNote")}
            type="text"
            placeholder="Anything you want to add..."
            className="input-box"
          />
        </div>

        {/* Payment Method Info */}
        <div className="border p-4 rounded-xs bg-gray-50">
          <p className="font-medium mb-1">Payment Method</p>
          <p>💵 Cash on Delivery</p>
          <p className="text-sm text-gray-500 mt-1">
            Pay when you receive your order. No advance payment required.
          </p>
        </div>
      </form>

      <OrderSummary
        deliveryCharge={deliveryCharge}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default CheckoutForm;
