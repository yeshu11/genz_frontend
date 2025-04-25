"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, MoreVertical } from "lucide-react";
import axios from "axios";
import SuperAdminJobDetailModal from "@/components/SuperAdminJobDetailModal";
import { useDarkMode } from "@/components/DarkModeContext";

const SuperAdminJobsPage = () => {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);
  const [showDelete, setShowDelete] = useState({});
  const [selectedJob, setSelectedJob] = useState(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      console.log("Fetching jobs from http://localhost:3001/admin_super/jobs");
      const response = await axios.get("http://localhost:3001/admin_super/jobs", {
        cache: "no-store",
        withCredentials: true,
      });

      console.log("API Response:", response.data);
      setJobs(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Fetch jobs error:", error);
      setError("Failed to load jobs: " + error.message);
      setJobs([]);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (confirmDelete) {
      try {
        console.log(`Deleting job with id: ${id}`);
        await axios.delete(`http://localhost:3001/admin_super/jobs/${id}`, {
          withCredentials: true,
        });
        fetchJobs();
      } catch (error) {
        console.error("Delete job error:", error);
        setError("Failed to delete job: " + error.message);
      }
    }
  };

  const toggleDeleteButton = (id) => {
    setShowDelete((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    if (!showDelete[id]) {
      setTimeout(() => {
        setShowDelete((prev) => ({
          ...prev,
          [id]: false,
        }));
      }, 10000);
    }
  };

  const truncateDescription = (description) => {
    return description.length > 37 ? description.slice(0, 37) + "..." : description;
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
              <button
                onClick={() => toggleDeleteButton(job.id)}
                className="dots-button absolute top-2 right-2"
              >
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
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                      >
                        <Trash2 size={24} color="red" />
                      </motion.div>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
      </div>

      {selectedJob && (
        <SuperAdminJobDetailModal
          jobId={selectedJob}
          onClose={() => setSelectedJob(null)}
          refreshJobs={fetchJobs}
        />
      )}
    </div>
  );
};

export default SuperAdminJobsPage;