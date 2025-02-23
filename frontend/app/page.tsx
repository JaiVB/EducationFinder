"use client";

import Navbar from "./components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFB07C] to-[#FDE8E7] text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header
        id="home"
        className="flex flex-col items-center justify-center text-center py-24 px-6"
      >
        {/* Company Logo */}
        <Link href="/">
          <Image
            src="/companyLogo.jpg"
            alt="Company Logo"
            width={180}
            height={180}
            className="mb-6 drop-shadow-lg cursor-pointer"
          />
        </Link>

        {/* Title */}
        <h1 className="text-7xl font-bold mb-6 text-[#5CB8B2] drop-shadow-md">
          EduFinder
        </h1>
        <p className="text-2xl font-medium text-[#5A189A] max-w-2xl leading-relaxed">
          Find the perfect school for your future. Let us guide you to success.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <Button
            className="px-10 py-4 text-xl font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#5CB8B2", color: "#1D1D1D" }}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-[#5A189A] py-4 bg-[#FDE8E7]">
        <p>© {new Date().getFullYear()} EduForYou. All rights reserved.</p>
      </footer>
    </div>
  );
}
