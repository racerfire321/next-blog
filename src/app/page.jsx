import Image from "next/image";

import Hero from "public/hero.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div class="flex items-center gap-25">
      <div class="flex-1 flex flex-col gap-13">
        <h1 class=" text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-700 to-blue-300">
          Better design for your digital products.
        </h1>
        <p class="text-lg font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div class="flex-1 flex flex-col gap-13">
        <Image src={Hero} alt="" class="w-96 h-60 object-contain animate-bounce" />
      </div>
    </div>
  );
}