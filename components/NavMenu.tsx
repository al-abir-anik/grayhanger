"use client";

// import { CATEGORIES_QUERYResult, Category } from "@/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  // { categories }: { categories: CATEGORIES_QUERYResult }
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex items-center gap-5 text-sm font-semibold text-lightColor uppercase">
      <Link href={"/"} className="relative nav-hover-btn">
        Home
        {pathname === "/" && (
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 bg-darkColor transition-all duration-300 w-full`}
          />
        )}
      </Link>
      {/* {categories?.map((category: Category) => (
        <Link
          key={category?._id}
          href={`/category/${category?.slug?.current}`}
          className={`hover:text-darkColor hoverEffect relative group ${pathname === `/category/${category?.slug?.current}` && "text-darkColor"}`}
        >
          {category?.name}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
              pathname === `/category/${category?.slug?.current}` && "w-1/2"
            }`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
              pathname === `/category/${category?.slug?.current}` && "w-1/2"
            }`}
          />
        </Link>
      ))} */}
      <Link href={"/shop"} className="relative nav-hover-btn">
        Shop
        {pathname === "/shop" && (
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 bg-darkColor transition-all duration-300 w-full`}
          />
        )}
      </Link>
      <Link href={"/shop"} className="relative nav-hover-btn">
        Track Order
        {pathname === "/track-order" && (
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 bg-darkColor transition-all duration-300 w-full`}
          />
        )}
      </Link>
    </div>
  );
};

export default NavMenu;
