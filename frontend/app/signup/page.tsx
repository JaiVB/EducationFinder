"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/NavBar";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User signed up:", formData);
    // Handle sign-up logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-96">
          <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-800 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9333EA] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9333EA] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9333EA] focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#9333EA] text-white py-3 rounded-lg hover:bg-[#7B2CBF] shadow-md font-semibold transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-700 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#9333EA] hover:underline font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
