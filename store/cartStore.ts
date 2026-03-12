import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../sanity.types";

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}
interface CartState {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string) => void;
  deleteCartProduct: (productId: string, size?: string) => void;
  resetCart: () => void;
  getItemCount: (productId: string, size?: string) => number;
  getSubtotalPrice: () => number;
  getTotalPrice: () => number;
  getGroupedItems: () => CartItem[];
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      //   add product quantity to cart
      addItem: (product, size) =>
        set((state) => {
          const exitingItem = state.items.find(
            (item) => item.product._id === product._id && item.size === size,
          );
          if (exitingItem) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id && item.size === size
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          } else {
            return { items: [...state.items, { product, quantity: 1, size }] };
          }
        }),
      // remove product quantity from cart
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.product._id === productId) {
              if (item.quantity > 1) {
                acc.push({ ...item, quantity: item.quantity - 1 });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as CartItem[]),
        })),
      // delete product from cart
      deleteCartProduct: (productId, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product._id === productId && item.size === size),
          ),
        })),
      // reset user cart
      resetCart: () => set({ items: [] }),
      // get Item count
      getItemCount: (productId, size) => {
        const item = get().items.find(
          (item) => item.product._id === productId && item.size === size,
        );
        return item ? item.quantity : 0;
      },
      // get subtotal price of product
      getSubtotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.product.price ?? 0;
          // const regularPrice = ((item.product.regularPrice ?? 0) * price) / 100;
          return total + price * item.quantity;
        }, 0);
      },
      // get total price of all cart products
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + (item.product.price ?? 0) * item.quantity,
          0,
        );
      },
      // get grouped items
      getGroupedItems: () => get().items,
    }),

    { name: "cart-store" },
  ),
);

export default useCartStore;
