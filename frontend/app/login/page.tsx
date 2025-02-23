"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/NavBar";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User logged in:", formData);
    // Handle login logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 border-4 border-gray-300">
          <h2 className="text-3xl font-bold text-center text-[#9333EA] mb-6">
            Log In
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-[#800]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#9333EA] focus:border-[#9333EA]"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-[#800]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#9333EA] focus:border-[#9333EA]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#9333EA] text-white py-2 rounded-lg hover:bg-[#7B2CBF] shadow-md"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#9333EA] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
