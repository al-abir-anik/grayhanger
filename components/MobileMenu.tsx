"use client";

import { AlignLeft } from "lucide-react";
import SideMenu from "./layout/SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSidemenuOpen(!isSidemenuOpen)}>
        <AlignLeft className="hover:text-shop-dark-color  md:hidden" />
      </button>

      <div className="md:hidden">
        <SideMenu
          isOpen={isSidemenuOpen}
          onClose={() => setIsSidemenuOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;