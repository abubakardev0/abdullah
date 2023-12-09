import React from "react";
import Hamburger from "@/assets/icons/hamburger";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center container justify-between w-full py-4">
        <div>
          <Image src={Logo} alt="logo" />
        </div>

        <ul className="flex gap-x-`6 items-center space-x-20 text-[##0B0B0B] font-normal text-xl">
          <li>
            <Link href="/profile ">Home</Link>
          </li>
          <li>
            <Link href="/terms-conditions">Terms and Conditions</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Hamburger />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
