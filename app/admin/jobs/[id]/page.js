'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const JobDetailPage = () => {
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams(); // Get dynamic route params
  const router = useRouter();

  const id = params?.id; // Extract job id

  // Fetch job details from Rails API when component mounts or id changes
  useEffect(() => {
    const fetchJobDetail = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:3001/jobs/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setJob(data);
        } catch (error) {
          setError('Failed to load job details: ' + error.message);
        }
      }
    };

    fetchJobDetail();
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="w-[60%] bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Jobs
        </button>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {job ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-4">{job.title}</h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {job.description ? job.description : <span className="italic text-gray-500">No job description available.</span>}
            </p>
          </>
        ) : (
          <p className="text-gray-600 text-lg">Loading job details...</p>
        )}
      </div>
    </div>
  );
};

export default JobDetailPage;
