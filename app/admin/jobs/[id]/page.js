'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const JobDetailPage = () => {
  const [job, setJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    status: '',
    job_type: ''
  });

  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  useEffect(() => {
    const fetchJobDetail = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/admin/jobs/${id}`);
        if (!response.ok) throw new Error('Failed to fetch job details');

        const data = await response.json();
        setJob(data);
        setFormData({
          title: data.title || '',
          description: data.description || '',
          location: data.location || '',
          status: data.status || '',
          job_type: data.job_type || ''
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3001/admin/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job: formData })
      });

      if (!response.ok) throw new Error('Failed to update job');

      const updatedJob = await response.json();
      setJob(updatedJob);
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading job details...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="w-[60%] bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500">
        {error && <p className="text-red-500 mb-2">{error}</p>}

        {job ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800 border-b pb-2">{job.title}</h1>
              <div className="relative">
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110 animate-pulse"
                  >
                    ✏️
                  </button>
                )}
              </div>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Job Title"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md break-words"
                  rows="4"
                  placeholder="Job Description"
                />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Location"
                />
                <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded-md">
                  <option>Open</option>
                  <option>Closed</option>
                </select>
                <select name="job_type" value={formData.job_type} onChange={handleChange} className="w-full p-2 border rounded-md">
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                </select>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-gray-700 text-lg mb-2 break-words">
                  {job.description || <span className="italic text-gray-500">No description available</span>}
                </p>
                <div className="space-y-2">
                  <p><strong>Location:</strong> {job.location}</p>
                  <p><strong>Status:</strong> {job.status}</p>
                  <p><strong>Job Type:</strong> {job.job_type}</p>
                </div>
              </>
            )}
          </>
        ) : (
          <p className="text-gray-600 text-lg">No job found.</p>
        )}
      </div>
    </div>
  );
};

export default JobDetailPage;
