import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-3xl text-darkColor font-black tracking-wider uppercase",
          className,
        )}
      >
        Gray
        <span className="text-green group-hover:text-dark-green font-medium">
          Hanger
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
