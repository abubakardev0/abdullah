import LogoWhite from "@/assets/images/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#D23434] h-96 ">
      <div className="container mx-auto h-full   px-6 py-3 flex justify-between items-center">
        <div className="flex flex-col space-y-12 items-center">
          <Link href="/">
            <Image src={LogoWhite} alt="logo" width={210} height={64} />
          </Link>

          <div className="flex items-center justify-center space-x-20 ml-6">
            <p className="text-white text-base font-normal ">Follow us on </p>

            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-gray-400">
                <Instagram size={24} />
              </Link>
              <Link href="#">
                <Facebook
                  className=" hover:text-gray-400 font-bold bg-white rounded-full p-1"
                  size={24}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-12">
          <ul className="flex  items-center space-x-20 text-white font-normal text-xl">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Rental Equipment</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
          <p className="text-sm text-neutral-300 font-normal mt-6">
            Copyrights reserved @ 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
