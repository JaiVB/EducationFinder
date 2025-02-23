import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-4 bg-[#2A6478] text-white">
      <div className="container mx-auto flex items-center relative">
        {/* Logo on the Left */}
        <Link href="/">
          <Image
            src="/companyLogo.jpg"
            alt="Company Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-lg font-semibold">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/mission">Mission</Link>
            </li>

            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="/schoolFinder">Find Your School</Link>
            </li>
            {/* <li className="hover:underline">
              <Link href="/calorieCalculator">Top Schools</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
