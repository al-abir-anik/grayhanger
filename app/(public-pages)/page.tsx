import HomeBanner from "@/components/home/HomeBanner";
import HomeCategories from "@/components/home/HomeCategories";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/product/ProductGrid";
import { getCategories } from "@/sanity/queries";

const HomePage = async () => {
  // const categories = await getCategories(6);

  return (
    <div className="">
      <Container>
        <HomeBanner />
        <ProductGrid />
        {/* <HomeCategories categories={categories} /> */}
      </Container>
    </div>
  );
};

export default HomePage;
