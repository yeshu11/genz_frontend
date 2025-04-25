"use client";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/components/DarkModeContext"; // Import Context


const ResumeTechwise = () => {
  const [jobResumes, setJobResumes] = useState({});
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [jobDetails, setJobDetails] = useState({});
  const { darkMode } = useDarkMode(); // Use Global Dark Mode State


  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch("http://localhost:3001/resumes");
        if (!response.ok) {
          throw new Error("Failed to fetch resumes");
        }
        const data = await response.json();

        const groupedData = data.reduce((acc, resume) => {
          const trimmedJobTitle = resume.job_title.trim();
          if (!acc[trimmedJobTitle]) {
            acc[trimmedJobTitle] = [];
          }
          acc[trimmedJobTitle].push(resume);
          return acc;
        }, {});
        setJobResumes(groupedData);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    };

    fetchResumes();
  }, []);

  const fetchJobDetails = async (jobTitle) => {
    try {
      const response = await fetch(`http://localhost:3001/jobs?title=${encodeURIComponent(jobTitle)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch job details");
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const matchedJob = data.find(job => job.title.trim() === jobTitle.trim());
        setJobDetails(matchedJob || data[0]); 
      } else {
        setJobDetails({});
      }
    } catch (error) {
      console.error("Error fetching job details:", error);
      alert(error.message);
    }
  };

  // Reset Read More when modal is closed
  useEffect(() => {
    if (!showModal) {
      setExpanded(false);
    }
  }, [showModal]);

  const openPdfInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No resume available");
    }
  };

  return (
    <div className="p-8 text-black">
      <h1 className={`text-3xl font-bold text-center mb-6 ${darkMode ? "text-white" : "text-black"}`}>
        Resume Techwise
      </h1>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-6">
        {Object.keys(jobResumes).map((jobTitle) => (
          <div
            key={jobTitle}
            className={`job-card ${darkMode ? "dark-mode" : ""}`}
            onClick={() => {
              setSelectedJob(jobTitle);
              setShowModal(true);
              fetchJobDetails(jobTitle);
            }}
          >
            
            <h2 className="text-lg font-semibold text-center">{jobTitle}</h2>
          </div>
        ))}
      </div>

      {/* Overlay Modal */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-6 backdrop-blur-sm">
          <div className={`w-[98%] max-w-5xl p-6 rounded-lg shadow-xl transform transition-all scale-105 relative overflow-hidden ${
          darkMode ? "bg-[#111c44] text-white" : "bg-white text-black"
        }`} >
            <button
              className="absolute top-2 left-4 text-lg text-red-500 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setShowModal(false)}
            >
              Close Details
            </button>

            <h2 className="text-2xl font-semibold text-center text-purple-600">{selectedJob} Details & Resumes</h2>
            <p className="text-center text-gray-600">{jobDetails.company_name || ""}</p>

            {/* Job Details Section */}
            <div className="border p-6  rounded-md mt-4">
              <div className="flex justify-start space-x-10 text-lg">
                <p><strong>📍 Location:</strong> {jobDetails.location || "Location Data"}</p>
                <p><strong>📌 Status:</strong> {jobDetails.status || "Status Data"}</p>
              </div>
              <p className="text-lg mt-6"><strong>💼 Job Type:</strong> {jobDetails.job_type || "Job Type Data"}</p>
              
              {/* Scrollable Description Container */}
              <div className={`text-lg mt-4 relative transition-all duration-300 ease-in-out ${expanded ? "max-h-48 overflow-y-auto" : "max-h-24 overflow-hidden"}`}>
                <strong>Description:</strong> {expanded ? jobDetails.description : `${jobDetails.description?.slice(0, 77)}...`}
              </div>

              {/* Read More / Read Less Button */}
              {jobDetails.description && jobDetails.description.length > 77 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-2 text-blue-600 font-semibold hover:underline focus:outline-none"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>


            <div className="max-h-72 overflow-y-auto border rounded-md mt-6">
              <table className="w-full border-collapse border  shadow-lg text-lg">
                <thead>
                  <tr className=" text-center font-bold text-xl">
                    <th className="border p-4">#</th>
                    <th className="border p-4">Name</th>
                    <th className="border p-4">Email</th>
                    <th className="border p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobResumes[selectedJob]?.length > 0 ? (
                    jobResumes[selectedJob].map((resume, index) => (
                      <tr key={resume.id} className=" transition-all duration-300">
                        <td className="border p-4 font-semibold text-center">{index + 1}</td>
                        <td className="border p-4 font-semibold text-center">{resume.name}</td>
                        <td className="border p-4 font-semibold text-center">{resume.email}</td>
                        <td className="border p-4 text-center">
                          <button
                            onClick={() => openPdfInNewTab(resume.resume_url)}
                            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 shadow-lg"
                          >
                            View Resume
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="border p-4 text-center font-semibold" colSpan="4">
                        No resumes found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeTechwise;
