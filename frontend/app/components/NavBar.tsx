import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-4 bg-[#2A6478] text-white">
      <div className="container mx-auto flex items-center relative">
        {/* Logo on the Left */}
        <div className="absolute left-0">
          <Image
            src="/companyLogo.jpg"
            alt="Company Logo"
            width={50}
            height={50}
          />
        </div>

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
              <Link href="/testimony">Bacon</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="/foodFinder">Find Your School</Link>
            </li>
            <li className="hover:underline">
              <Link href="/calorieCalculator">Top Schools -temp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
