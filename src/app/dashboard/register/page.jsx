"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div class=" flex flex-col gap-5 align-center justify-cebter">
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} class="w-60 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Username"
          required
          class="p-5 bg-transparent border-2 border-solid border-#bbb font-#bbb border-r-5 text-lg font-bold"
        />
        <input
          type="text"
          placeholder="Email"
          required
          class="p-5 bg-transparent border-2 border-solid border-#bbb font-#bbb border-r-5 text-lg font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          class="p-5 bg-transparent border-2 border-solid border-#bbb font-#bbb border-r-5 text-lg font-bold"
        />
        <button class="w-60 p-5 cursor-pointer bg-#53c28b border-none border-r-5 color-#eee font-bold">Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;