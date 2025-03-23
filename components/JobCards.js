import React, { useState } from "react";
import JobDetailOverlay from "./JobDetailOverlay";

const JobCards = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
          onClick={() => setSelectedJob(job)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
          <p className="text-gray-600">{job.location}</p>
        </div>
      ))}

      {/* Show Job Overlay When a Job is Selected */}
      {selectedJob && (
        <JobDetailOverlay job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default JobCards;
