"use client";
import { useEffect, useState } from "react";

const DeletedJobs = () => {
  const [deletedJobs, setDeletedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchDeletedJobs();
  }, []);

  const fetchDeletedJobs = async () => {
    try {
      const response = await fetch("http://localhost:3001/deleted_jobs");
      if (!response.ok) {
        throw new Error("Failed to fetch deleted jobs");
      }
      const data = await response.json();
      setDeletedJobs(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const openPdfInNewTab = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No resume available");
    }
  };

  // ✅ Permanently Delete a Job
  const deleteJob = async (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to permanently delete this job?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3001/deleted_jobs/${jobId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete job");
      }

      alert("Job permanently deleted");
      setDeletedJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      setSelectedJob(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ✅ Restore (Undo) a Deleted Job with Confirmation
  const restoreJob = async (jobId) => {
    const confirmRestore = window.confirm("Are you sure you want to restore this job?");
    if (!confirmRestore) return;

    try {
      const response = await fetch(`http://localhost:3001/deleted_jobs/${jobId}/restore`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to restore job");
      }

      alert("Job restored successfully");
      setDeletedJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
      setSelectedJob(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Deleted Jobs</h1>

      <div className="grid grid-cols-3 gap-6">
        {deletedJobs.map((job) => (
          <div
            key={job.id}
            className="p-6 border rounded-lg shadow-lg bg-white hover:bg-gray-100 transition-all duration-200"
          >
            <h2 className="text-lg font-semibold text-center cursor-pointer" onClick={() => setSelectedJob(job)}>
              {job.title}
            </h2>
            <div className="flex justify-center gap-4 mt-3">
              <button className="text-red-600 hover:underline" onClick={() => deleteJob(job.id)}>
                Delete
              </button>
              <button className="text-green-600 hover:underline" onClick={() => restoreJob(job.id)}>
                Undo
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">{selectedJob.title} Details & Resumes</h2>

          <div className="border p-4 bg-gray-100 rounded-md mb-6">
            <p><strong>Title:</strong> {selectedJob.title}</p>
            <p><strong>Company:</strong> {selectedJob.company_name}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Job Type:</strong> {selectedJob.job_type}</p>
            <p><strong>Salary:</strong> {selectedJob.salary}</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
          </div>

          <table className="w-full border-collapse border bg-white shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border p-3">Name</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedJob.resumes?.length > 0 ? (
                selectedJob.resumes.map((resume) => (
                  <tr key={resume.id}>
                    <td className="border p-3">{resume.name}</td>
                    <td className="border p-3">{resume.email}</td>
                    <td className="border p-3">
                      <button onClick={() => openPdfInNewTab(resume.file_url)} className="text-blue-600 hover:underline">
                        View Resume
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border p-3 text-center" colSpan="3">
                    No resumes found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DeletedJobs;
