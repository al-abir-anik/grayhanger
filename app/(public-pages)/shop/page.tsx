import Container from "@/components/layout/Container";
import ShopProducts from "@/components/product/ShopProducts";
import ProductGridSkeleton from "@/components/skeletons/ProductGridSkeleton";
import { getCategoriesWithSub } from "@/sanity/helpers/queries";
import Link from "next/link";
import { Suspense } from "react";

const ShopPage = async ({
  searchParams,
}: {
  searchParams: { category?: string; sub?: string };
}) => {
  const categories = await getCategoriesWithSub();
  const category = searchParams.category;
  const sub = searchParams.sub;

  return (
    <Container className="py-10 flex flex-col sm:flex-row items-start gap-4 xl:gap-8">
      {/* Left Side */}
      <div className="w-full sm:w-48 p-4 mt-10 flex flex-col shrink-0 border shadow rounded-sm sticky top-20">
        <h3 className="mb-4 text-lg font-semibold">Categories</h3>
        <ul className="flex flex-col gap-3">
          {/* All Products */}
          <li
            className={`py-2 px-4 text-sm font-semibold rounded-xs ${
              !category ? "bg-darkColor text-white" : "hover:bg-gray-200"
            }`}
          >
            <Link href="/shop">All Products</Link>
          </li>

          {categories.map((cat) => (
            <div key={cat._id}>
              {/* CATEGORY */}
              <li
                className={`py-2 px-4 text-sm font-semibold rounded-xs ${
                  category === cat.slug
                    ? "bg-darkColor text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                <Link href={`/shop?category=${cat.slug}`}>{cat.name}</Link>
              </li>

              {/* SUBCATEGORIES */}
              {category === cat.slug && cat.subCategories?.length > 0 && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  {cat.subCategories.map((subCat) => (
                    <li
                      key={subCat.slug}
                      className={`text-sm px-3 py-1 rounded ${
                        sub === subCat.slug
                          ? "bg-gray-300 font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Link
                        href={`/shop?category=${cat.slug}&sub=${subCat.slug}`}
                      >
                        {subCat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* Right Side */}
      <div className="w-full">
        {/* product count */}
        <div className="w-full pb-4 mb-6 flex flex-col sm:flex-row items-center justify-between border-b">
          <p>Showing 1 - 12 of 24 products for All Products</p>

          <select>
            <option>Latest</option>
            <option>Price: Low → High</option>
            <option>Price: High → Low</option>
          </select>
        </div>

        {/* Products */}
        <Suspense fallback={<ProductGridSkeleton />}>
          <ShopProducts category={category} sub={sub ?? undefined} />
        </Suspense>
      </div>
    </Container>
  );
};

export default ShopPage;
