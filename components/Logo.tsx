import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "w-fit text-2xl text-dark-green font-black tracking-wider hover:text-green  group",
          className,
        )}
      >
        Bongo
        <span className="text-green group-hover:text-dark-green ">
          Bazar
        </span>
      </h2>
    </Link>
  );
};

export default Logo;