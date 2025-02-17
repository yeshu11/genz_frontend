"use client";
import { useState } from "react";

const deletedJobsData = [
  {
    jobTitle: "Frontend Developer",
    jobId: "101",
    location: "Bangalore",
    experience: "2+ years",
    resumes: [
      { name: "John Doe", email: "john@example.com", resume: "/resumes/john_doe.pdf" },
      { name: "Alice Smith", email: "alice@example.com", resume: "/resumes/alice_smith.pdf" },
    ],
  },
  {
    jobTitle: "Backend Developer",
    jobId: "102",
    location: "Mumbai",
    experience: "3+ years",
    resumes: [
      { name: "Michael Brown", email: "michael@example.com", resume: "/resumes/michael_brown.pdf" },
    ],
  },
];

const DeletedJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 p-8">
      <h1 className="text-4xl font-bold text-white">Deleted Jobs' CVs</h1>
      <p className="text-gray-200 mt-2">
        Click on a deleted job to view resumes.
      </p>

      {/* Deleted Job Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {deletedJobsData.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer transition hover:bg-red-200"
            onClick={() => handleJobClick(job)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{job.jobTitle}</h2>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-gray-500">{job.experience}</p>
          </div>
        ))}
      </div>

      {/* Selected Job Resumes */}
      {selectedJob && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-red-700">
            {selectedJob.jobTitle} Resumes
          </h2>
          <p className="text-gray-600 mt-2">
            List of resumes submitted for {selectedJob.jobTitle}.
          </p>

          {/* Scrollable Resume List */}
          <div className="mt-4 max-h-64 overflow-y-auto border rounded-lg p-4 bg-gray-100">
            {selectedJob.resumes.length > 0 ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-300 text-gray-800">
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Resume</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedJob.resumes.map((resume, index) => (
                    <tr key={index} className="text-gray-700 text-center">
                      <td className="p-2 border">{resume.name}</td>
                      <td className="p-2 border">{resume.email}</td>
                      <td className="p-2 border">
                        <a
                          href={resume.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 hover:underline"
                        >
                          View Resume
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">No resumes available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeletedJobs;
