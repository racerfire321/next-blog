"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div class="flex align-center flex-col gap-5">
      <h1 class="text-#bbb">{success ? success : "Welcome Back"}</h1>
      <h2 class=" text-lg mb-7 text-gray-300 ">Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} class="w-60 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Email"
          required
          class="p-5 bg-transparent border-1 border-gray border-r-5 outline-none font-md font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          class="p-4 bg-transparent border-2 border-solid border-r-5 outline-none font-#bbb text-lg font-bold"
        />
        <button class=" w-60 p-5 cursor-pointer bg-color-#53c28b border-none boredr-r-5 font-#eee font-bold">Login</button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
       
      >
        Login with Google
      </button>
      <span class="color-#bbb">- OR -</span>
      <Link class=" underline font-#7d7c7c" href="/dashboard/register">
        Create new account
      </Link>
      
    </div>
  );
};

export default Login;