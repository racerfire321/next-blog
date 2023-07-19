import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 class=" text-lg mb-20 align-text-center">Let's Keep in Touch</h1>
      <div class="flex items-center gap-25">
        <div class="flex-1  h-250 relative">
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            class="object-contain "
          />
        </div>
        <form class="flex-1 flex flex-col gap-5">
          <input type="text" placeholder="name" class="p-5  bg-transparent  outline-none text-#bbb border-3 border-solid border-gray-300 text-lg  font-bold "/>
          <input type="text" placeholder="email" class="p-5  bg-transparent outline-none text-#bbb border-3 border-solid border-gray-300 text-lg  font-bold " />
          <textarea
            class="p-5  bg-transparent outline-none text-#bbb border-3 border-solid border-gray-300 text-lg  font-bold "
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;