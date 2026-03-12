import HomeBanner from "@/components/home/HomeBanner";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/product/ProductGrid";
import CategorySection from "@/components/home/CategorySection";
// import { getCategories } from "@/sanity/queries";

const HomePage = () => {
  return (
    <div className="">
      <Container>
        <HomeBanner />
        {/* <CategorySection /> */}
        <ProductGrid />
      </Container>
    </div>
  );
};

export default HomePage;
