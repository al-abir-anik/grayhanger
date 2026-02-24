"use client";

import { FC } from "react";
import Logo from "../Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "@/constants/data";
import { usePathname } from "next/navigation";

interface SidemenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidemenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <div
      className={`w-full fixed inset-y-0 h-screen left-0 z-50 bg-black/50 text-white/80 shadow-xl hoverEffect ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="min-w-72 max-w-96 h-screen p-10 flex flex-col gap-6 bg-black border-r border-r-shop-green">
        {/* logo and close btn */}
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop-green hoverEffect"
          >
            <X />
          </button>
        </div>

        {/* mobile menu */}
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-shop-green hoverEffect ${pathname === item?.href && "text-shop-green"}`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
