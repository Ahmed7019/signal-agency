import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 px-8 py-4 bg-white/60 backdrop-blur-md flex items-center justify-between z-50 transition-all duration-300">
      <div className="flex justify-between items-center w-full">
        <Link href={"#home"} className="hover:opacity-80 transition-opacity">
          <Image
            src={"/signal-logo.png"}
            alt="signal logo"
            width={50}
            height={50}
            className="object-contain"
            style={{ height: "auto" }}
          />
        </Link>
        <button className="text-primary font-dmSans font-semibold hover:text-electric transition-colors cursor-pointer px-4 py-2 bg-neutral-100 hover:bg-neutral-200/80 rounded-full text-xs tracking-wider uppercase">
          Menu
        </button>
      </div>
    </nav>
  );
}
