import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button class="container p-20 cursor-pointer bg-green-500 rounded-5 text-white">{text}</button>
    </Link>
  );
};

export default Button;