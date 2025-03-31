'use client';

import { useEffect, useState } from 'react';
import { X, Pencil, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from "@/components/DarkModeContext"; // Import Context

const JobDetailModal = ({ jobId, onClose, refreshJobs }) => {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedJob, setEditedJob] = useState(null);
  const { darkMode } = useDarkMode(); // Use Global Dark Mode State

  useEffect(() => {
  const fetchJobDetail = async () => {
    if (!jobId) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/admin/jobs/${jobId}`, {
        credentials: 'include', // ✅ Ensure cookies/session are sent
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to fetch job details');

      const data = await response.json();
      setJob(data);
      setEditedJob(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  fetchJobDetail();
}, [jobId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/admin/jobs/${jobId}`, {
        method: 'PUT',
        credentials: 'include', // ✅ Ensure cookies/session are sent
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job: editedJob }), // ✅ Wrap inside "job"
      });
      if (!response.ok) throw new Error('Failed to update job');
      const updatedJob = await response.json();
      setJob(updatedJob);
      setEditedJob(updatedJob);
      setIsEditing(false);
      refreshJobs(); // 🔥 Update job list immediately
    } catch (error) {
      setError(error.message);
    }
};

  if (!jobId) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div 
        className={`w-[98%] max-w-5xl p-6 rounded-lg shadow-xl transform transition-all scale-105 relative overflow-hidden ${
          darkMode ? "bg-[#111c44] text-white" : "bg-white text-black"
        }`} 
        onClick={(e) => e.stopPropagation()} // Prevent modal close on background click
      >
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4   transition" 
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Animated Edit Button */}
        {!isEditing && (
          <motion.button
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute top-4 left-4 text-blue-500 hover:text-blue-700 transition"
            onClick={handleEditClick}
          >
            <Pencil size={24} />
          </motion.button>
        )}

        {loading ? (
          <p className="text-center text-gray-500 flex-grow flex items-center justify-center">Loading job details...</p>
        ) : error ? (
          <p className="text-center text-red-500 flex-grow flex items-center justify-center">{error}</p>
        ) : (
          <div className="flex flex-col flex-grow">
            
            {/* Job Title */}
            {isEditing ? (
              <input
              type="text"
              className={`text-2xl font-semibold text-center border-b p-1 ${
                darkMode ? "bg-transparent text-white border-gray-500" : "bg-white text-black border-gray-300"
              }`}
              value={editedJob.title}
              onChange={(e) => setEditedJob({ ...editedJob, title: e.target.value })}
            />
            ) : (
              <h2 className="text-3xl font-bold  text-center">{job.title}</h2>
            )}

            {/* Job Details */}
            <div className="grid grid-cols-2 gap-6 mt-6 p-6  rounded-lg">
              <p>
                <strong>📍 Location:</strong>
                {isEditing ? (
                  <input type="text" className={`border-b ml-2 p-1 ${
                    darkMode ? "bg-transparent text-white border-gray-500" : "bg-white text-black border-gray-300"
                  }`} value={editedJob.location} onChange={(e) => setEditedJob({ ...editedJob, location: e.target.value })} />
                ) : (
                  ` ${job.location}`
                )}
              </p>
              <p>
                <strong>📌 Status:</strong>
                {isEditing ? (
                  <input type="text" className={`border-b ml-2 p-1 ${
                    darkMode ? "bg-transparent text-white border-gray-500" : "bg-white text-black border-gray-300"
                  }`} value={editedJob.status} onChange={(e) => setEditedJob({ ...editedJob, status: e.target.value })} />
                ) : (
                  ` ${job.status}`
                )}
              </p>
              <p>
                <strong>💼 Job Type:</strong>
                {isEditing ? (
                  <input type="text" className={`border-b ml-2 p-1 ${
                    darkMode ? "bg-transparent text-white border-gray-500" : "bg-white text-black border-gray-300"
                  }`} value={editedJob.job_type} onChange={(e) => setEditedJob({ ...editedJob, job_type: e.target.value })} />
                ) : (
                  ` ${job.job_type}`
                )}
              </p>
            </div>

            {/* Job Description - Now Scrollable */}
            <div className="flex-grow mt-6 p-6 border-t">
              <div className="max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {isEditing ? (
                  <textarea
                  className={`w-full border p-3 rounded-lg ${
                    darkMode ? "bg-transparent text-white border-gray-500" : "bg-white text-black border-gray-300"
                  }`}
                  rows="5"
                  value={editedJob.description}
                  onChange={(e) => setEditedJob({ ...editedJob, description: e.target.value })}
                />
                ) : (
                  <p className="">
                    {showFullDescription ? job.description : `${job.description.slice(0, 150)}...`}
                  </p>
                )}
              </div>
              
              {!isEditing && job.description.length > 150 && (
                <button 
                  onClick={() => setShowFullDescription(!showFullDescription)} 
                  className="text-blue-600 font-semibold mt-2 "
                >
                  {showFullDescription ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {/* Save Button (Only Visible When Editing) */}
            {isEditing && (
              <div className="flex justify-end mt-6">
                <button 
                  onClick={handleSaveClick} 
                  className="bg-green-500 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-green-600"
                >
                  <Check size={20} /> Save
                </button>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetailModal;