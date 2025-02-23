"use client";

import Navbar from "../components/NavBar";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us and what we do" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] text-white p-8">
        <h1 className="text-5xl font-bold mb-4 text-[#FACC15]">About Us</h1>
        <p className="text-lg max-w-2xl text-center text-gray-200">
          About Us At EduFinder, we are dedicated to helping students and
          parents discover the best educational opportunities. Our mission is to
          simplify the search for schools, programs, and resources that align
          with individual goals. Whether you&apos;re looking for the right
          college, vocational training, or tutoring services, we provide the
          tools and guidance to make informed decisions. With a passion for
          education and accessibility, EduFinder empowers learners to take the
          next step toward a brighter future.
        </p>
      </div>
    </>
  );
}
