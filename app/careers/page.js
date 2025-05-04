"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const truncateDescription = (description, wordLimit = 7) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

const Careers = () => {
  const [jobs, setJobs] = useState(null); // Start with null instead of empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/careers`);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data.length > 0 ? data : []); // Ensure empty state is confirmed
      } catch (error) {
        setError("Failed to load jobs: " + error.message);
        setJobs([]); // Prevent infinite loading state
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <h1 className="text-4xl font-bold text-center text-white">Join Our Team</h1>
      <p className="text-white text-center mt-2">Explore our job openings and apply now!</p>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Show only when jobs have been confirmed empty */}
      {jobs !== null && jobs.length === 0 && (
        <p className="text-white text-center mt-8">No job listings available</p>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs &&
          jobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`} className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <p className="text-gray-600 mt-1">{job.location}</p>
                <p className="text-gray-500 mt-2">{truncateDescription(job.description, 7)}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Careers;