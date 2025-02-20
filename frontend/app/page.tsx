/*
Key Words for Searching
Title
Background Color

*/

import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/dropdowns";

export default function Home() {
  return (
    // {/* Background Color*/}
    <div className="min-h-screen bg-[#FFA559] text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#FFA559]">
        <Image
          src="/companyLogo.jpg" // Replace with your company logo
          alt="Company Logo"
          width={50}
          height={50}
        />

        <ul className="flex gap-8 text-lg font-semibold text-[#FFFFFF]">
          <li className="hover:underline">
            {/* These are the Pieces for the Navigation Bar */}
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

        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#5CB8B2] text-[#1D1D1D] px-4 py-2 rounded">
                Login
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#FDE8E7]">
              <DropdownMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-[#1D1D1D]">
                      Client
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#FFFFFF]">
                    <DropdownMenuItem>
                      <Link href="/clogin">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/csignup">Signup</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-[#1D1D1D]">
                      Trainer
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#FFFFFF]">
                    <DropdownMenuItem>
                      <Link href="/tlogin">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/tsignup">Signup</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      {/* Hero Section */}
      <header
        id="home"
        className="flex flex-col items-center justify-center text-center py-20"
      >
        <Image
          src="/companyLogo.jpg" // Replace with your company logo
          alt="Company Logo"
          width={150}
          height={150}
          className="mb-6"
        />
        {/* Title */}
        <h1 className="text-6xl font-bold mb-4 text-[#5CB8B2]">EduFinder</h1>
        <p className="text-xl font-medium text-[#FDE8E7]">
          Find the College For You {/* Replace with your slogan */}
        </p>
      </header>
      {/* Call to Action */}
      <main className="flex justify-center mt-10">
        <Button
          className="px-8 py-4 text-lg font-semibold"
          style={{ backgroundColor: "#5CB8B2", color: "#1D1D1D" }}
        >
          Get Started
        </Button>
      </main>
      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-[#FDE8E7]">
        <p>© {new Date().getFullYear()} EduForYou. All rights reserved.</p>
      </footer>
    </div>
  );
}
