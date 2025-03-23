"use client";
import { useState } from "react";

const OpenResumes = () => {
  const [resumes] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Frontend Developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Backend Developer" },
    { id: 3, name: "John Doe", email: "jlohn@example.com", role: "Frontend Developer" },
    { id: 4, name: "Jane Smith", email: "juane@example.com", role: "Backend Developer" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold">Open Resumes</h2>
      <p className="text-gray-600 mt-2">View resumes submitted without a specific job post.</p>

      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Interested Role</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume) => (
            <tr key={resume.id} className="border">
              <td className="p-3">{resume.name}</td>
              <td className="p-3">{resume.email}</td>
              <td className="p-3">{resume.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OpenResumes;
