"use client";

import Navbar from "./components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] text-gray-900">
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
        <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-md">
          EduFinder
        </h1>
        <p className="text-2xl font-medium text-gray-200 max-w-2xl leading-relaxed">
          Find the perfect school for your future. Let us guide you to success.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <Button
            className="px-10 py-4 text-xl font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#9333EA", color: "#FFFFFF" }}
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-white py-4 bg-[#1E3A8A]">
        <p>© {new Date().getFullYear()} EduForYou. All rights reserved.</p>
      </footer>
    </div>
  );
}
