import Image from "next/image";
import LogoWhite from "@/assets/images/logo-white.png";
export default function AuthLayout({ children }) {
  return (
    <main className="grid grid-cols-12 w-full h-screen overflow-hidden">
      <section className="col-start-1 col-end-5 col-span-5 flex flex-col space-y-24  justify-center items-center w-full h-full auth_image ">
        <div className="">
          <Image src={LogoWhite} alt="logo" />
        </div>

        <div className=" flex flex-col items-center  text-center space-y-6">
          <h2 className="text-4xl font-medium text-white">We Were There...</h2>

          <p className="text-white text-lg w-1/2">
            Canadian Rentals Inc. Was Happy To Provide Services To Performers &
            Staff at Craven Country Jamboree 2017, 2018 & 2019!! Watch for us in
            the VIP section at the Queen City Ex too.
          </p>
        </div>
      </section>

      <section className="col-start-7 col-span-7 col-end-13 flex items-center justify-center w-full h-full ">
        {children}
      </section>
    </main>
  );
}
