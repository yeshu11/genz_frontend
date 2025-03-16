'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, MoreVertical } from 'lucide-react';
import axios from 'axios';

const SuperAdminJobsPage = () => {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);
  const [showDelete, setShowDelete] = useState({});

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/super_admin/jobs', { cache: 'no-store' });
      setJobs(response.data.length > 0 ? response.data : []);
    } catch (error) {
      setError('Failed to load jobs: ' + error.message);
      setJobs([]);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3001/super_admin/jobs/${id}`);
        fetchJobs(); // Refresh job list after deletion
      } catch (error) {
        setError('Failed to delete job: ' + error.message);
      }
    }
  };

  const toggleDeleteButton = (id) => {
    setShowDelete((prev) => ({
      ...prev,
      [id]: true
    }));

    setTimeout(() => {
      setShowDelete((prev) => ({
        ...prev,
        [id]: false
      }));
    }, 10000);
  };

  return (
    <div className="jobs-container">
      <h1>Super Admin - Job Management</h1>
      {error && <p className="error-message">{error}</p>}
      {jobs !== null && jobs.length === 0 && <p>Currently, No Open Positions</p>}
      
      <div className="job-listings">
        {jobs && jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <button onClick={() => toggleDeleteButton(job.id)} className="dots-button">
              <MoreVertical size={20} />
            </button>
            
            <h2 className="job-title">{job.title}</h2>
            <p className="job-description">{job.description.length > 37 ? job.description.slice(0, 37) + '...' : job.description}</p>
            
            <div className="card-footer">
              <motion.a
                href={`/super_admin/jobs/${job.id}`}
                className="read-more"
                whileHover={{ scale: 1.1, textShadow: "0px 0px 5px rgba(0,0,255,0.5)" }}
              >
                Read More
              </motion.a>
              
              <AnimatePresence>
                {showDelete[job.id] && (
                  <motion.button 
                    className="delete-button"
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
    </div>
  );
};

export default SuperAdminJobsPage;
