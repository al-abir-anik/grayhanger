// import useCartStore from "@/store";
import { Product } from "@/sanity.types";
import { Minus, Plus } from "lucide-react";

const QuantityButton = ({ product }: { product: Product }) => {
  //   const { addItem, removeItem, getItemCount } = useCartStore();
  //   const itemCount = getItemCount(product?._id);

  //   const handleRemoveProduct = () => {
  //     removeItem(product?._id);
  //     if (itemCount > 1) {
  //       toast.success("Quantity Decreased successfully!");
  //     } else {
  //       toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
  //     }
  //   };
  return (
    <div className="flex items-center gap-1 pb-1 text-base">
      <button 
    //   onClick={handleRemoveProduct}
       className="w-6 h-6"
      >
        <Minus />
      </button>
      <span className="w-8 font-semibold text-center text-darkColor">
        {/* {itemCount} */}
      </span>
      <button
        // onClick={() => {
        //   addItem(product);
        //   toast.success("Quantity increased successfully!");
        // }}
        className="w-6 h-6"
      >
        <Plus />
      </button>
    </div>
  );
};

export default QuantityButton;
