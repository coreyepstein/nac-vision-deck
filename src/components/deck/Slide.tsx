"use client";

import { type ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  isActive: boolean;
  variant?: "light" | "dark";
}

export function Slide({ children, isActive, variant = "dark" }: SlideProps) {
  const bg = variant === "light" ? "bg-offwhite" : "bg-black";

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${bg} ${
        isActive ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  );
}
