import Link from "next/link";
import Title from "../ui/Title";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="w-full py-16 md:py-0 flex items-center justify-between bg-shop-light-pink rounded-lg">
      {/* left */}
      {/* <div className="space-y-5">
        <Title>
          Grab upto 50% off on <br />
          Winter Products
        </Title>
        <Link
          href={"/shop"}
          className="px-5 py-2 text-sm font-semibold text-white bg-shop-btn-dark-green rounded-md hover:opacity-90 hoverEffect"
        >
          Shop Now
        </Link>
      </div> */}

      <Image
        src="/images/banner/home_banner.avif"
        alt="banner"
        loading="lazy"
        width={1200}
        height={200}
        className="w-full max-h-146 object-cover rounded hidden md:inline-flex"
      />
    </div>
  );
};

export default HomeBanner;
