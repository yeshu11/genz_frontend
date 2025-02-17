"use client";
import { useState } from "react";

const techCategories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "UI/UX Designer",
  "Mobile Developer",
  "Data Scientist",
  "QA Engineer",
];

// Sample Resumes Data (Will be replaced with backend data later)
const resumesData = {
  "Frontend Developer": [
    { name: "John Doe", email: "john@example.com", experience: "2 years", location: "Bangalore", resume: "/resumes/john_doe.pdf" },
    { name: "Alice Smith", email: "alice@example.com", experience: "3 years", location: "Delhi", resume: "/resumes/alice_smith.pdf" },
  ],
  "Backend Developer": [
    { name: "Michael Brown", email: "michael@example.com", experience: "5 years", location: "Mumbai", resume: "/resumes/michael_brown.pdf" },
  ],
};

const ResumeTechwise = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 p-8">
      <h1 className="text-4xl font-bold text-white">Resume Techwise</h1>
      <p className="text-gray-200 mt-2">
        Click on a category to view submitted resumes.
      </p>

      {/* Technology Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {techCategories.map((tech, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center cursor-pointer transition hover:bg-blue-200"
            onClick={() => handleTechClick(tech)}
          >
            <h2 className="text-lg font-semibold text-gray-800">{tech}</h2>
          </div>
        ))}
      </div>

      {/* Selected Tech Resumes */}
      {selectedTech && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-blue-700">{selectedTech} Resumes</h2>
          <p className="text-gray-600 mt-2">
            List of resumes submitted for {selectedTech}.
          </p>

          {/* Scrollable Resume List */}
          <div className="mt-4 max-h-64 overflow-y-auto border rounded-lg p-4 bg-gray-100">
            {resumesData[selectedTech]?.length > 0 ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-300 text-gray-800">
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Experience</th>
                    <th className="p-2 border">Location</th>
                    <th className="p-2 border">Resume</th>
                  </tr>
                </thead>
                <tbody>
                  {resumesData[selectedTech]
                    .sort((a, b) => a.experience.localeCompare(b.experience)) // Sorting by experience
                    .map((resume, index) => (
                      <tr key={index} className="text-gray-700 text-center">
                        <td className="p-2 border">{resume.name}</td>
                        <td className="p-2 border">{resume.email}</td>
                        <td className="p-2 border">{resume.experience}</td>
                        <td className="p-2 border">{resume.location}</td>
                        <td className="p-2 border">
                          <a
                            href={resume.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
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

export default ResumeTechwise;
