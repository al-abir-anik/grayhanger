import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";

interface Props {
  product?: Product;
  className?: string;
}

const WishlistBtn = ({ product, className }: Props) => {
  return (
    <div
      className={cn(
        "absolute top-2 right-2 z-10 hidden group-hover:inline",
        className,
      )}
    >
      <button
        className={`p-2.5 rounded-full bg-white hover:bg-dark-green hover:text-white `}
      >
        <Heart size={15} />
      </button>
    </div>
  );
};

export default WishlistBtn;
