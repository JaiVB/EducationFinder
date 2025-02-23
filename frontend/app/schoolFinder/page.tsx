"use client";

import { useState } from "react";
import Select from "react-select";
import Navbar from "../components/NavBar"; // Ensure this matches the actual filename

const statesOptions = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const schoolTypes = [
  { value: "public", label: "Public" },
  { value: "private", label: "Private" },
  { value: "for-profit", label: "For-Profit" },
];

export default function SearchForm() {
  const [selectedStates, setSelectedStates] = useState([]);
  const [satScore, setSatScore] = useState(1200);
  const [studentFacultyRatio, setStudentFacultyRatio] = useState(15);
  const [tuition, setTuition] = useState(30000);
  const [selectedSchoolType, setSelectedSchoolType] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#1E3A8A] to-[#9333EA] text-white">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Centering the form */}
      <div className="flex-grow flex items-center justify-center p-4">
        <form className="p-6 bg-white shadow-xl rounded-lg max-w-md w-full border-4 border-gray-300 font-sans">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#9333EA]">
            Find Your School
          </h2>

          <label className="block text-lg font-semibold text-gray-800 mb-2">
            Select States
          </label>
          <Select
            options={statesOptions}
            isMulti
            className="mb-4 text-black"
            onChange={(selected) => setSelectedStates(selected)}
          />

          <label className="block text-lg font-semibold text-gray-800 mb-2">
            School Type
          </label>
          <Select
            options={schoolTypes}
            className="mb-4 text-black"
            onChange={(selected) => setSelectedSchoolType(selected)}
          />

          <label className="block text-lg font-semibold text-gray-800 mb-2">
            SAT Score Range
          </label>
          <input
            type="range"
            min="400"
            max="1600"
            value={satScore}
            onChange={(e) => setSatScore(Number(e.target.value))}
            className="w-full accent-[#9333EA]"
          />
          <p className="text-center text-gray-800">{satScore}</p>

          <label className="block text-lg font-semibold text-gray-800 mt-4 mb-2">
            Student-Faculty Ratio
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={studentFacultyRatio}
            onChange={(e) => setStudentFacultyRatio(Number(e.target.value))}
            className="w-full accent-[#9333EA]"
          />
          <p className="text-center text-gray-800">{studentFacultyRatio}:1</p>

          <label className="block text-lg font-semibold text-gray-800 mt-4 mb-2">
            Tuition (In-State)
          </label>
          <input
            type="range"
            min="5000"
            max="100000"
            value={tuition}
            onChange={(e) => setTuition(Number(e.target.value))}
            className="w-full accent-[#9333EA]"
          />
          <p className="text-center text-gray-800">
            ${tuition.toLocaleString()}
          </p>

          <button className="w-full bg-[#9333EA] text-white py-2 mt-6 rounded-lg hover:bg-[#7B2CBF] shadow-md font-sans">
            Search Schools
          </button>
        </form>
      </div>
    </div>
  );
}
