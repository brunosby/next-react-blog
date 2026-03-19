import Header from "@/components/Header";
import SpinLoader from "@/components/SpinLoader";
import clsx from "clsx";

export default async function HomePage() {
  console.log("HOME");
  return (
    <div>
      <Header />
      <SpinLoader containerClasses={clsx("min-h-125")} />
    </div>
  );
}
