"use client"

import React, { useContext } from "react";
import { ThemeContext } from '@/context/ThemeContext';

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div class="h-42 h-24 boredr-1.5 border-solid border-green-500 rounded-30 flex items-center justify-between p-2 relative cursor-pointer " onClick={toggle}>
      <div class="text-12">🌙</div>
      <div class="text-12">🔆</div>
      <div
        class="ball w-15 h-15 bg-green-500 rounded-full absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;