import Image from "next/image";

import { SignUpForm } from "@/components/auth-form/signup-form";
import Link from "next/link";
export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="w-full max-w-md space-y-12">
        <h3 className="w-full font-bold text-3xl text-center ">
          Create Your Account
        </h3>
        <SignUpForm />

        <p>
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-[#D23434] font-semibold">
            Login
          </Link>
        </p>

        <p className="text-sm text-neutral-500">
          By clicking &apos;Continue&apos;, you acknowledge that you have read
          and accept the{" "}
          <Link
            href="/auth/terms-of-service"
            className="text-[#D23434] font-semibold"
          >
            Terms of Service
          </Link>{" "}
          and
          <Link
            href="/auth/privacy-policy"
            className="text-[#D23434] font-semibold"
          >
            {" "}
            Privacy Policy.
          </Link>
        </p>
      </div>
    </div>
  );
}
