import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 px-2">
      <ul className="flex justify-between items-center">
        <li>
          <Link href={"#home"}>
            <Image
              src={"/signal-logo.png"}
              alt="signal logo"
              width={100}
              height={100}
              className="object-cover w-auto h-auto"
            />
          </Link>
        </li>
        <li>
          <button>Menu</button>
        </li>
      </ul>
    </nav>
  );
}
