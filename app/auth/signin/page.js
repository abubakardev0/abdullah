import { SignInFrom } from "@/components/auth-form/signin-form";
import Link from "next/link";
const SigninPage = () => {
  return (
    <div>
      <div className="w-full space-y-12 max-w-[400px]">
        <h2 className="font-bold text-3xl text-center ">Welcome Back</h2>
        <SignInFrom />
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-[#D23434] font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
