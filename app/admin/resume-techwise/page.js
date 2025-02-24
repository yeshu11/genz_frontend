"use client";
import { useEffect, useState } from "react";

const ResumeTechwise = () => {
  const [jobResumes, setJobResumes] = useState({});
  const [selectedJob, setSelectedJob] = useState(null);

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

  const openPdfInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No resume available");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Resume Techwise</h1>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-6">
        {Object.keys(jobResumes).map((jobTitle) => (
          <div
            key={jobTitle}
            className="p-6 border rounded-lg shadow-lg cursor-pointer bg-white hover:bg-gray-100 transition-all duration-200"
            onClick={() => setSelectedJob(jobTitle)}
          >
            <h2 className="text-lg font-semibold text-center">{jobTitle}</h2>
          </div>
        ))}
      </div>

      {/* Resumes Table */}
      {selectedJob && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">{selectedJob} Resumes</h2>
          <table className="w-full border-collapse border bg-white shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobResumes[selectedJob]?.map((resume) => (
                <tr key={resume.id}>
                  <td className="border p-3">{resume.name}</td>
                  <td className="border p-3">{resume.email}</td>
                  <td className="border p-3">
                    {resume.resume_url ? (
                      <>
                        <button
                          onClick={() => openPdfInNewTab(resume.resume_url)}
                          className="text-blue-600 hover:underline mr-3"
                        >
                          View Resume
                        </button>
                      </>
                    ) : (
                      "No Resume Available"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResumeTechwise;
