'use client';

import { useEffect, useState } from 'react';

const JobsPage = () => {
  const [jobs, setJobs] = useState(null); // Initially set to null
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3001/jobs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJobs(data.length > 0 ? data : []); // Ensure empty state is confirmed
      } catch (error) {
        setError('Failed to load jobs: ' + error.message);
        setJobs([]); // Prevent infinite loading
      }
    };

    fetchJobs();
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.slice(0, 7).join(' ') + (words.length > 7 ? '...' : '');
  };

  return (
    <div className="jobs-container">
      <h1>Job Listings</h1>
      {error && <p className="error-message">{error}</p>}

      {/* Show "No jobs available" only when jobs are confirmed to be empty */}
      {jobs !== null && jobs.length === 0 && <p>No jobs available</p>}

      <div className="job-listings">
        {jobs &&
          jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h2>{job.title}</h2>
              <p>{truncateDescription(job.description)}</p>
              <a href={`/admin/jobs/${job.id}`} className="read-more">
                Read More
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobsPage;
