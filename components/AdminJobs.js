import { useEffect, useState } from "react";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs from the Rails backend API
  useEffect(() => {
    fetch("http://localhost:3000/jobs")  // Replace with your Rails API endpoint
      .then((response) => response.json())
      .then((data) => setJobs(data));  // Update the jobs state with the fetched data
  }, []);  // Empty dependency array ensures this effect runs once when the component mounts

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
