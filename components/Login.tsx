"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#12a37d] text-center">
      <Image
        src="https://links.papareact.com/2i6"
        height={300}
        width={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="animate-pulse text-2xl font-semibold text-white"
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
