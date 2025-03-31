'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const SuperAdminJobDetailPage = () => {
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
        const response = await fetch(`http://localhost:3001/super_admin/jobs/${id}`);
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
      const response = await fetch(`http://localhost:3001/super_admin/jobs/${id}`, {
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
            <h1 className="text-3xl font-bold text-gray-800 border-b pb-2">{job.title}</h1>

            {isEditing ? (
              <div className="space-y-4">
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded-md" />
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded-md" rows="4" />
                <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded-md" />
                <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded-md">
                  <option>Open</option>
                  <option>Closed</option>
                </select>
                <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
              </div>
            ) : (
              <p>{job.description}</p>
            )}
          </>
        ) : <p>Job not found.</p>}
      </div>
    </div>
  );
};

export default SuperAdminJobDetailPage;
