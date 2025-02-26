'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, MoreVertical } from 'lucide-react';
import axios from 'axios';

const JobsPage = () => {
  const [jobs, setJobs] = useState(null);
  const [error, setError] = useState(null);
  const [showDelete, setShowDelete] = useState({});

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/jobs', { cache: 'no-store' });
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
        await axios.delete(`http://localhost:3001/jobs/${id}`);
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

  const truncateDescription = (description) => {
    return description.length > 37 ? description.slice(0, 37) + '...' : description;
  };

  return (
    <div className="jobs-container">
      <h1>Explore Our Job Openings</h1>
      {error && <p className="error-message">{error}</p>}
      {jobs !== null && jobs.length === 0 && <p>Currently, No Open Positions</p>}
      
      <div className="job-listings">
        {jobs && jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <button onClick={() => toggleDeleteButton(job.id)} className="dots-button">
              <MoreVertical size={20} />
            </button>
            
            <h2 className="job-title">{job.title}</h2>
            <p className="job-description">{truncateDescription(job.description)}</p>
            
            <div className="card-footer">
              <motion.a
                href={`/admin/jobs/${job.id}`}
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
      
      <style jsx>{`
        .job-card {
          position: relative;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin: 10px 0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .job-title {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .dots-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 10px;
        }
        .delete-button {
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 15px;
        }
        .read-more {
          text-decoration: none;
          color: blue;
          font-weight: bold;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default JobsPage;
