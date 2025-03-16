"use client";
import { useEffect, useState } from "react";
import { Trash, Undo, MoreVertical } from "lucide-react";

const DeletedJobs = () => {
  const [deletedJobs, setDeletedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showIcons, setShowIcons] = useState({});

  useEffect(() => {
    fetchDeletedJobs();
  }, []);

  const fetchDeletedJobs = async () => {
    try {
      const response = await fetch("http://localhost:3001/deleted_jobs");
      if (!response.ok) throw new Error("Failed to fetch deleted jobs");

      const data = await response.json();
      setDeletedJobs(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ✅ Permanently Delete a Job
  const deleteJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to permanently delete this job?")) return;
    try {
      const response = await fetch(`http://localhost:3001/deleted_jobs/${jobId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete job");
      alert("Job permanently deleted");
      setDeletedJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      setSelectedJob(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ✅ Restore (Undo) a Deleted Job
  const restoreJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to restore this job?")) return;
    try {
      const response = await fetch(`http://localhost:3001/deleted_jobs/${jobId}/restore`, {
        method: "POST",
      });
      if (!response.ok) throw new Error("Failed to restore job");
      alert("Job restored successfully");
      setDeletedJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      setSelectedJob(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleDotsClick = (jobId, e) => {
    e.stopPropagation();
    setShowIcons((prev) => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-700 to-purple-500 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-6">Deleted Jobs</h1>

      <div className="grid grid-cols-3 gap-6">
        {deletedJobs.map((job) => (
          <div
            key={job.id}
            className="relative p-6 border rounded-lg shadow-lg bg-white text-black hover:bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 transform hover:scale-105 cursor-pointer h-32"
            onClick={(e) => {
              if (!e.target.closest(".dots") && !e.target.closest(".icons")) {
                setSelectedJob(job);
              }
            }}
          >
            {/* Three Dots Menu */}
            <div
              className="absolute top-3 right-3 cursor-pointer dots"
              onClick={(e) => handleDotsClick(job.id, e)}
            >
              <MoreVertical className="text-gray-500 hover:text-gray-800 transition-all duration-300" />
            </div>

            <h2 className="text-xl font-semibold text-center">{job.title}</h2>

            {showIcons[job.id] && (
              <div className="absolute bottom-3 right-3 flex flex-col gap-2 icons">
                <Trash className="text-red-600 animate-bounce cursor-pointer" onClick={() => deleteJob(job.id)} />
                <Undo className="text-green-600 animate-spin cursor-pointer" onClick={() => restoreJob(job.id)} />
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-6">
          <div className="bg-white text-black w-[95%] max-w-7xl p-6 rounded-lg shadow-xl transform transition-all scale-105">
            <button
              className="absolute top-2 left-4 text-lg text-red-500 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setSelectedJob(null)}
            >
              Close Details
            </button>

            <h2 className="text-2xl font-semibold text-center text-purple-600">{selectedJob.title} Details & Resumes</h2>
            <p className="text-center text-gray-600">{selectedJob.company_name}</p>

            <div className="border p-6 bg-gray-100 rounded-md mt-4">
              <p className="text-lg"><strong>Location:</strong> {selectedJob.location}</p>
              <p className="text-lg"><strong>Job Type:</strong> {selectedJob.job_type}</p>
              <p className="text-lg"><strong>Salary:</strong> {selectedJob.salary}</p>
              <p className="text-lg"><strong>Description:</strong> {selectedJob.description}</p>
            </div>

            {/* Super Wide Table */}
            <table className="w-full border-collapse border bg-white shadow-lg mt-6 text-lg mx-auto">
              <thead>
                <tr className="bg-gray-200 text-center font-bold text-xl">
                  <th className="border p-4">Name</th>
                  <th className="border p-4">Email</th>
                  <th className="border p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {selectedJob.resumes?.length > 0 ? (
                  selectedJob.resumes.map((resume) => (
                    <tr key={resume.id} className="hover:bg-gray-100 transition-all duration-300">
                      <td className="border p-4 font-semibold text-center">{resume.name}</td>
                      <td className="border p-4 font-semibold text-center">{resume.email}</td>
                      <td className="border p-4 text-center">
                        <button
                          onClick={() => window.open(resume.file_url, "_blank")}
                          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 shadow-lg"
                        >
                          View Resume
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border p-4 text-center font-semibold" colSpan="3">
                      No resumes found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeletedJobs;