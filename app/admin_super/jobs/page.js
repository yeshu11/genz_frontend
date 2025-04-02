"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, MoreVertical } from "lucide-react";
import axios from "axios";
import JobDetailModal from "./[id]/page";
import { useDarkMode } from "@/components/DarkModeContext"; // Import Dark Mode Context

const SuperAdminJobsPage = () => {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);
  const [showDelete, setShowDelete] = useState({});
  const [selectedJob, setSelectedJob] = useState(null); // Track selected job
  const { darkMode } = useDarkMode(); // Use Global Dark Mode State

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin_super/jobs", {
        cache: "no-store",
        withCredentials: true,
      });
  
      console.log("API Response:", response.data); // ✅ Debugging API response
      
      setJobs(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setError("Failed to load jobs: " + error.message);
      setJobs([]);
    }
  };
  
  

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/admin_super/jobs/${id}`, {
          withCredentials: true, // ✅ Ensure credentials are sent
        });
  
        fetchJobs(); // Refresh job list after deletion
      } catch (error) {
        setError('Failed to delete job: ' + error.message);
      }
    }
  };
  

  const toggleDeleteButton = (id) => {
    setShowDelete((prev) => ({
      ...prev,
      [id]: !prev[id] // Toggle visibility on click
    }));

    if (!showDelete[id]) {
      setTimeout(() => {
        setShowDelete((prev) => ({
          ...prev,
          [id]: false
        }));
      }, 10000); // Hide after 10 seconds
    }
  };

  const truncateDescription = (description) => {
    return description.length > 37 ? description.slice(0, 37) + '...' : description;
  };

  return (
    <div className="jobs-container">
      <h1 className={`text-3xl font-bold text-center mb-6 ${darkMode ? "text-white" : "text-black"}`}>
        Super Admin - Manage Jobs
      </h1>
      {error && <p className="error-message">{error}</p>}
      {jobs !== null && jobs.length === 0 && <p>No Job Openings Available</p>}

      <div className="job-listings">
        {jobs &&
          jobs.map((job) => (
            <div className={`job-card ${darkMode ? "dark-mode" : ""}`} key={job.id}>
              {/* Vertical Dots at Top-Right Corner */}
              <button onClick={() => toggleDeleteButton(job.id)} className="dots-button absolute top-2 right-2">
                <MoreVertical size={20} />
              </button>

              <h2 className="job-title">{job.title}</h2>
              <p className="job-description">{truncateDescription(job.description)}</p>

              <div className="card-footer">
                <motion.button
                  onClick={() => setSelectedJob(job.id)}
                  className="read-more"
                  whileHover={{ scale: 1.1, textShadow: "0px 0px 5px rgba(0,0,255,0.5)" }}
                >
                  Read More
                </motion.button>

                <AnimatePresence>
                  {showDelete[job.id] && (
                    <motion.button
                      className="delete-button absolute bottom-2 right-2"
                      onClick={() => handleDelete(job.id)}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 0.6 }}>
                        <Trash2 size={24} color="red" />
                      </motion.div>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
      </div>

      {/* Job Detail Modal */}
      {selectedJob && <JobDetailModal jobId={selectedJob} onClose={() => setSelectedJob(null)} refreshJobs={fetchJobs} />}
    </div>
  );
};

export default SuperAdminJobsPage;
