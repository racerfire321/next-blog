import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}


export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div class="flex ">
        <div class="flex-1 flex flex-col justify-between">
          <h1 class=" text-40">{data.title}</h1>
          <p class="text-18 font-light">
            {data.desc}
          </p>
          <div class="flex items-center space-x-2">
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              class="w-10 h-10 rounded-full"
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div class="flex-1 h-300 relative">
          <Image
            src={data.img}
            alt=""
            fill={true}
            class="object-cover"
          />
        </div>
      </div>
      <div class="mt-50 text-20 font-light text-gray-500 text-justify">
        <p className={styles.text}>
         {data.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;