import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} class="flex align-center gap-20 mb-11" key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              class="object-cover"
            />
          </div>
          <div className={styles.content}>
            <h1 class="mb-1">{item.title}</h1>
            <p class="text-4 text-gray-500">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;