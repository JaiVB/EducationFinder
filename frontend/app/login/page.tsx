"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="min-h-screen flex items-center justify-center bg-[#2A6478]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-[#2A6478] mb-6">
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5A189A] text-white py-2 rounded-lg hover:bg-[#4A137A]"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#5A189A] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
