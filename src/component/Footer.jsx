import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <div class="h-16 text-sm flex items-center justify-between">
      <div>©2023 Lamamia. All rights reserved.</div>
      <div class="flex items-center gap-2">
        <Image src="/1.png" width={15} height={15} class="opacity-60 cursor-pointer" alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} class="opacity-60 cursor-pointer" alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} class="opacity-60 cursor-pointer"alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} class="opacity-60 cursor-pointer"alt="Lama Dev" />
      </div>
    </div>
  );
};

export default Footer;