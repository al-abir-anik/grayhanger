import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
import { client } from "../lib/client";

// all products query
export const getAllProducts = async () => {
  const ALL_PRODUCT_QUERY = defineQuery(`*[_type == "product"]`);

  try {
    const products = await sanityFetch({
      query: ALL_PRODUCT_QUERY,
    });

    return products?.data || [];
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};

// single product query
export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type == 'product' && slug.current == $slug][0]`,
  );

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: { slug },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching single product by slug:", error);
  }
};

// all category query
// export const getAllCategories = async () => {
//   const CATEGORIES_QUERY = defineQuery(
//     `*[_type=="category" && isActive == true] | order(name asc)`,
//   );
//   try {
//     const categories = await sanityFetch({
//       query: CATEGORIES_QUERY,
//     });
//     return categories.data || [];
//   } catch (error) {
//     console.error("Error fetching all categories:", error);
//     return [];
//   }
// };

// products by category
// export const getProductsbyCategory = async (category?: string) => {
//   const query = category
//     ? `*[_type == "product" && category->slug.current == $category]`
//     : `*[_type == "product"]`;

//   const products = await sanityFetch({
//     query,
//     params: { category },
//   });

//   return products?.data || [];
// };

export const getCategoriesWithSub = async () => {
  return client.fetch(`
    *[_type == "category"] | order(name asc){
      _id,
      name,
      "slug": slug.current,

      "subCategories": *[
        _type == "subCategory" &&
        category._ref == ^._id
      ] | order(name asc){
        name,
        "slug": slug.current
      }
    }
  `);
};

export const getProducts = async (category?: string, sub?: string) => {
  return client.fetch(
    `*[_type=="product" && isActive == true
      && (!defined($category) || category->slug.current == $category)
      && (!defined($sub) || subCategory->slug.current == $sub)
    ]{
      _id,
      name,
      price,
      images,
      "slug": slug.current
    }`,
    {
      category: category ?? null,
      sub: sub ?? null,
    },
  );
};
