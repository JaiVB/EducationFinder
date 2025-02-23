"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the Left */}
        <Link href="/">
          <Image
            src="/companyLogo.jpg"
            alt="Company Logo"
            width={50}
            height={50}
            className="cursor-pointer drop-shadow-lg"
          />
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-lg font-semibold">
            <li className="hover:underline transition duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline transition duration-300">
              <Link href="/mission">Mission</Link>
            </li>
            <li className="hover:underline transition duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline transition duration-300">
              <Link href="/schoolFinder">Find Your School</Link>
            </li>
          </ul>
        </div>

        {/* Login Button on the Right */}
        <div>
          <Link href="/login">
            <button className="px-4 py-2 bg-[#9333EA] text-white font-semibold rounded-lg hover:bg-[#7B2CBF] transition duration-300 shadow-md">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
