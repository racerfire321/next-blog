"use client";

import Link from "next/link";
import React from "react";
import DarkModeToggle from './DarkModelToggle';
import { signOut, useSession } from 'next-auth/client';


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div class=" h-20 flex justify-between items-center ">
      <Link href="/" class="font-bold text-xl  ">
        lamamia
      </Link>
      <div class="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} >
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button class=" px-3 py-1 bg-green-500 text-white rounded"onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;