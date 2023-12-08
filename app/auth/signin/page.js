import { SignInFrom } from "@/components/auth-form/signin-form";
import Link from "next/link";
const SigninPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full max-w-md space-y-12">
        <h3 className="w-full font-bold text-3xl text-center ">Welcome Back</h3>
        <SignInFrom />
        <p>
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-[#D23434] font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
