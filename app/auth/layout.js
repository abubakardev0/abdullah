import Image from "next/image";
import AuthScreenImage from "@/assets/images/auth-screen-image.png";
export default function AuthLayout({ children }) {
  return (
    <section className="flex flex-row  gap-0  w-full h-screen overflow-hidden relative">
      <aside className="w-full h-full relative">
        <div className=" w-full h-full">
          <Image
            src={AuthScreenImage}
            alt="Auth Screen Image"
            // width={850}
            // height={1050}
            fill
          />
        </div>

        <div className="relative top-[50%] bg-yellow-800 left-[50%] w-full h-full text-2xl text-white z-30">
          <div>
            <h1 className="text-4xl font-bold text-center text-white">
              Welcome to
            </h1>
            <h1 className="text-4xl font-bold text-center text-white">
              The Next Generation
            </h1>
            <h1 className="text-4xl font-bold text-center text-white">of</h1>
            <h1 className="text-4xl font-bold text-center text-white">
              Social Media
            </h1>
          </div>
        </div>
      </aside>
      <main className="container flex flex-col justify-center items-center w-full h-full bg-green-900 ">
        {children}
      </main>
    </section>
  );
}
