"use client";
import clsx from "clsx";

export default function Header() {
  console.log("HEADER");
  return (
    <h1
      className={clsx(
        "text-6xl font-bold",
        "text-blue-500",
        "hover:text-blue-50",
        "hover:bg-blue-500",
        "transition",
        "duration-300",
      )}
      onClick={() => console.log("teste")}
    >
      Texto no h1
    </h1>
  );
}
