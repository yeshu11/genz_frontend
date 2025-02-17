"use client";
import { useState } from "react";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", status: "Remote" },
    { id: 2, title: "Backend Developer", status: "Onsite" },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold">Job Management</h2>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">Job Title</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border">
              <td className="p-3">{job.title}</td>
              <td className="p-3">{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobs;
