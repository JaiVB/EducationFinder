"use client";

import Navbar from "../components/NavBar";
import Head from "next/head";

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Our Mission</title>
        <meta
          name="description"
          content="Learn more about our mission and values."
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] text-white p-8">
        <h1 className="text-5xl font-bold mb-6 text-[#FACC15]">Our Mission</h1>
        <p className="text-lg max-w-2xl text-center text-gray-200">
          Our mission is to empower individuals with the knowledge and resources
          they need to succeed. We believe in making education accessible,
          fostering innovation, and building a community that thrives on shared
          learning.
        </p>
      </div>
    </>
  );
}
