import { getProducts, } from "@/sanity/helpers/queries";
import ProductCard from "./ProductCard";
import NoProductFound from "../ui/NoProductFound";
import { Product } from "@/sanity.types";

const ShopProducts = async ({
  category,
  sub,
}: {
  category?: string;
  sub?: string;
}) => {
  const products = await getProducts(category, sub);

  if (!products?.length) {
    return <NoProductFound />;
  }

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {products.map((product : Product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ShopProducts;
