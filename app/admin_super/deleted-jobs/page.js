"use client";
import { useEffect, useState } from "react";
import { Trash2, Undo, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDarkMode } from "@/components/DarkModeContext"; // Import Context


const DeletedJobs = () => {
  const [deletedJobs, setDeletedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showIcons, setShowIcons] = useState({});
  const [expanded, setExpanded] = useState(false);
  const { darkMode } = useDarkMode(); // Use Global Dark Mode State


  useEffect(() => {
    fetchDeletedJobs();
  }, []);

  const fetchDeletedJobs = async () => {
    try {
      const response = await fetch("http://localhost:3001/admin_super/deleted_jobs");
      if (!response.ok) throw new Error("Failed to fetch deleted jobs");

      const data = await response.json();
      setDeletedJobs(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const deleteJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to permanently delete this job?")) return;
    try {
      const response = await fetch(`http://localhost:3001/admin_super/deleted_jobs/${jobId}`, {
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
    <div className="p-8 ">
      <h1 className={`text-3xl font-bold text-center mb-6 ${darkMode ? "text-white" : "text-black"}`}>
        Deleted Jobs
      </h1>

          <div className="grid grid-cols-3 gap-6">
      {deletedJobs.map((job) => (
        <div
        key={job.id}
        className={`job-card ${darkMode ? "dark-mode" : ""}`}
        onClick={(e) => {
          if (!e.target.closest(".dots") && !e.target.closest(".icons")) {
            setSelectedJob(job);
            setExpanded(false);
          }
        }}
      >
      
      
          {/* 3 Dots Icon (More Options) */}
          <div
            className="absolute top-3 right-3 cursor-pointer dots"
            onClick={(e) => handleDotsClick(job.id, e)}
          >
            <MoreVertical className="text-gray-500 hover:text-gray-800 transition-all duration-300" />
          </div>

          {/* Job Title */}
          <h2 className="text-xl font-semibold text-center">{job.title}</h2>

          {/* Trash & Restore Icons with Animation */}
          <AnimatePresence>
              {showIcons[job.id] && (
                <motion.div
                  className="absolute bottom-2 right-3 flex gap-2 items-center icons"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button 
                    className="delete-button"
                    onClick={() => deleteJob(job.id)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.6 }}
                    >
                      <Trash2 size={24} color="red" />
                    </motion.div>
                  </motion.button>

                  <Undo
                    className="text-green-600 cursor-pointer hover:scale-110 transition-transform duration-300"
                    onClick={() => restoreJob(job.id)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      ))}
    </div>


      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-6 backdrop-blur-sm">
          <div 
            className={`w-[90%] max-w-5xl p-6 rounded-lg shadow-xl transform transition-all scale-105 relative overflow-hidden ${
              darkMode ? "bg-[#111c44] text-white" : "bg-white text-black"
            }`}
          >

            <button
              className="absolute top-2 left-4 text-lg text-red-500 hover:text-yellow-400 transition-all duration-300"
              onClick={() => setSelectedJob(null)}
            >
              Close Details
            </button>

            <h2 className="text-2xl font-semibold text-center text-purple-600">{selectedJob.title} Details & Resumes</h2>
            <p className="text-center text-gray-600">{selectedJob.company_name}</p>

            <div className="border p-6  rounded-md mt-4">
              <div className="flex justify-start space-x-10 text-lg">
                <p><strong>📍 Location:</strong> {selectedJob.location}</p>
                <p><strong>📌 Status:</strong> {selectedJob.status}</p>
              </div>

              <p className="text-lg mt-6"><strong>💼 Job Type:</strong> {selectedJob.job_type}</p>
              
              {/* Scrollable & Truncated Description */}
              <div className={`text-lg mt-4 relative transition-all duration-300 ease-in-out ${expanded ? "max-h-48 overflow-y-auto" : "max-h-24 overflow-hidden"}`}>
                <strong>Description:</strong> {expanded ? selectedJob.description : `${selectedJob.description?.slice(0, 77)}...`}
              </div>

              {/* Read More / Read Less Button */}
              {selectedJob.description && selectedJob.description.length > 77 && (
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
                  {selectedJob.resumes?.length > 0 ? (
                    selectedJob.resumes.map((resume, index) => (
                      <tr key={resume.id} className=" transition-all duration-300">
                        <td className="border p-4 font-semibold text-center">{index + 1}</td>
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

export default DeletedJobs;