import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="bg-black min-h-screen text-[#e7e9ea]
    max-w-[1400px] mx-auto"
    >
      <Sidebar />
      {/*<Postsfeed/>*/}
      {/* {<Trending/>} */}
    </div>
  );
}
