import React from "react";
import Hamburger from "@/assets/icons/hamburger";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between w-full px-10 py-4">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" />
        </div>

        <nav className="flex gap-16">
          <ul className="flex  items-center space-x-20 text-[##0B0B0B] font-normal text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/terms-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>

          <span className="cursor-pointer">
            <Hamburger />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
