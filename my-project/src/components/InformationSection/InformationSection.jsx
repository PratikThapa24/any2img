// src/components/JobInformationSection.js
import React from "react";
import JobInformationTable from "./JobInformationTable"; // Import the new component

function InformationSection() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-row bg-[#40513B]">
        {/* For the left information */}
        <div className="min-h-screen w-64 bg-[#9DC08B] rounded-2xl ml-6 mr-6 flex flex-col gap-6 p-4 shadow-lg">
          <div className="bg-[#609966] mx-4 mt-4 p-4 font-medium tracking-wide rounded-lg shadow-lg text-white transition transform hover:scale-105 hover:bg-[#495464] hover:shadow-2xl">
            <span>My Applications</span>
          </div>
          <div className="h-px bg-[#EDF1D6] mx-4"></div>
          <div className="bg-[#609966] mx-4 p-4 font-medium tracking-wide rounded-lg shadow-lg text-white transition transform hover:scale-105 hover:bg-[#495464] hover:shadow-2xl">
            <span>Find Jobs</span>
          </div>
          <div className="h-px bg-[#EDF1D6] mx-4"></div>
        </div>
        {/* For the right job information */}
        <div className="flex-grow bg-[#EDF1D6] p-6 rounded-2xl mr-6 shadow-lg">
          <div className="text-center text-[#40513B] font-bold text-2xl mb-4">
            Job Information
          </div>
          <JobInformationTable /> {/* Include the new component here */}
        </div>
      </div>
    </>
  );
}

export default InformationSection;
