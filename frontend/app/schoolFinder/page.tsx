"use client"; // Ensures hooks like useState work in Next.js

import { useState } from "react";
import Navbar from "../components/NavBar";

export default function SearchForm() {
  const [distance, setDistance] = useState(50);
  const [tuition, setTuition] = useState(30000);
  const [noLimitDistance, setNoLimitDistance] = useState(false);
  const [noLimitTuition, setNoLimitTuition] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4E8C1] text-[#2D2A32] font-mono">
      <Navbar />
      <div className="flex items-center justify-center py-12">
        <form className="p-8 bg-[#FFF5E1] shadow-2xl rounded-xl max-w-md mx-auto border-4 border-[#5A189A]">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#5A189A]">
            Find Your School
          </h2>

          {/* Area of Study */}
          <label className="block text-lg font-semibold text-[#5A189A] mb-2">
            Area of Study
          </label>
          <select className="w-full p-3 border border-[#5A189A] rounded-lg bg-white text-[#2D2A32]">
            <option value="">Select an area</option>
            <option value="computer-science">Computer Science</option>
            <option value="business">Business</option>
            <option value="engineering">Engineering</option>
            <option value="health">Health Sciences</option>
            <option value="arts">Arts & Humanities</option>
          </select>

          {/* Distance Slider */}
          <div className="mt-6">
            <label className="block text-lg font-semibold text-[#5A189A] mb-2">
              Distance (miles)
            </label>
            <input
              type="range"
              min="1"
              max="500"
              value={noLimitDistance ? 500 : distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full accent-[#9C1D64]"
              disabled={noLimitDistance}
            />
            <div className="flex justify-between text-sm text-[#5A189A]">
              <span>1 mile</span>
              <span>{noLimitDistance ? "No Limit" : `${distance} miles`}</span>
            </div>
            <label className="flex items-center mt-2 text-[#5A189A]">
              <input
                type="checkbox"
                checked={noLimitDistance}
                onChange={() => setNoLimitDistance(!noLimitDistance)}
                className="mr-2 accent-[#9C1D64]"
              />
              No Limit
            </label>
          </div>

          {/* Tuition Cost Slider */}
          <div className="mt-6">
            <label className="block text-lg font-semibold text-[#5A189A] mb-2">
              Tuition Cost
            </label>
            <input
              type="range"
              min="5000"
              max="100000"
              value={noLimitTuition ? 100000 : tuition}
              onChange={(e) => setTuition(Number(e.target.value))}
              className="w-full accent-[#9C1D64]"
              disabled={noLimitTuition}
            />
            <div className="flex justify-between text-sm text-[#5A189A]">
              <span>$5K</span>
              <span>
                {noLimitTuition ? "No Limit" : `$${tuition.toLocaleString()}`}
              </span>
            </div>
            <label className="flex items-center mt-2 text-[#5A189A]">
              <input
                type="checkbox"
                checked={noLimitTuition}
                onChange={() => setNoLimitTuition(!noLimitTuition)}
                className="mr-2 accent-[#9C1D64]"
              />
              No Limit
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#9C1D64] text-white py-3 mt-8 rounded-lg hover:bg-[#7E1553] shadow-lg">
            Search Schools
          </button>
        </form>
      </div>
    </div>
  );
}
