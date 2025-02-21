"use client"; // Ensures hooks like useState work in Next.js

import { useState } from "react";

export default function SearchForm() {
  const [distance, setDistance] = useState(50);
  const [tuition, setTuition] = useState(30000);
  const [noLimitDistance, setNoLimitDistance] = useState(false);
  const [noLimitTuition, setNoLimitTuition] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2E4057]">
      <form className="p-6 bg-[#2E4057] shadow-xl rounded-lg max-w-md mx-auto border-4 border-[#5A189A] font-mono">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#F4A261]">
          Find Your School
        </h2>

        {/* Area of Study */}
        <label className="block text-lg font-semibold text-[#F4A261] mb-2">
          Area of Study
        </label>
        <select className="w-full p-2 border border-[#F4A261] rounded-lg bg-white text-[#2E4057] font-mono">
          <option value="">Select an area</option>
          <option value="computer-science">Computer Science</option>
          <option value="business">Business</option>
          <option value="engineering">Engineering</option>
          <option value="health">Health Sciences</option>
          <option value="arts">Arts & Humanities</option>
        </select>

        {/* Distance Slider */}
        <div className="mt-4">
          <label className="block text-lg font-semibold text-[#F4A261] mb-2">
            Distance (miles)
          </label>
          <input
            type="range"
            min="1"
            max="500"
            value={noLimitDistance ? 500 : distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full accent-[#E76F51]"
            disabled={noLimitDistance}
          />
          <div className="flex justify-between text-sm text-[#F4A261]">
            <span>1 mile</span>
            <span>{noLimitDistance ? "No Limit" : `${distance} miles`}</span>
          </div>
          <label className="flex items-center mt-2 text-[#F4A261]">
            <input
              type="checkbox"
              checked={noLimitDistance}
              onChange={() => setNoLimitDistance(!noLimitDistance)}
              className="mr-2 accent-[#E76F51]"
            />
            No Limit
          </label>
        </div>

        {/* Tuition Cost Slider */}
        <div className="mt-4">
          <label className="block text-lg font-semibold text-[#F4A261] mb-2">
            Tuition Cost
          </label>
          <input
            type="range"
            min="5000"
            max="100000"
            value={noLimitTuition ? 100000 : tuition}
            onChange={(e) => setTuition(Number(e.target.value))}
            className="w-full accent-[#E76F51]"
            disabled={noLimitTuition}
          />
          <div className="flex justify-between text-sm text-[#F4A261]">
            <span>$5K</span>
            <span>
              {noLimitTuition ? "No Limit" : `$${tuition.toLocaleString()}`}
            </span>
          </div>
          <label className="flex items-center mt-2 text-[#F4A261]">
            <input
              type="checkbox"
              checked={noLimitTuition}
              onChange={() => setNoLimitTuition(!noLimitTuition)}
              className="mr-2 accent-[#E76F51]"
            />
            No Limit
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#E76F51] text-white py-2 mt-6 rounded-lg hover:bg-[#D15841] shadow-md font-mono">
          Search Schools
        </button>
      </form>
    </div>
  );
}
