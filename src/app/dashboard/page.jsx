"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {

  
  const session = useSession();

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div class="flex gap-24">
        <div class="flex-1">
          {isLoading
            ? "loading"
            : data?.map((post) => (                <div class="flex items-center justify-between mt-13 mb-13"key={post._id}>
                  <div class="w-50 h-25 position-0">
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    class=" cursor-pointer text-red "
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form class="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" class=" p-3 bg-transparent border-2 border-solid border-r-3 text-#bbb text-xl font-bold" />
          <input type="text" placeholder="Desc"class=" p-3 bg-transparent border-2 border-solid border-r-3 text-#bbb text-xl font-bold" />
          <input type="text" placeholder="Image" class=" p-3 bg-transparent border-2 border-solid border-r-3 text-#bbb text-xl font-bold" />
          <textarea
            placeholder="Content"
            class=" p-3 bg-transparent border-2 border-solid border-r-3 text-#bbb text-xl font-bold"
            cols="30"
            rows="10"
          ></textarea>
          <button class="p-5 cursor-pointer bg-#53c28b border-none border-r-5 color-#eee font-bold">Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;