import React from "react";

const JobDetailOverlay = ({ job, onClose }) => {
  if (!job) return null; // Don't render if no job is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-gray-700">{job.description}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default JobDetailOverlay;
