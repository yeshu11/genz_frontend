"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateJob = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    job_type: "Full-Time",
    status: "Open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const jobData = new FormData();
    jobData.append("job[title]", formData.title);
    jobData.append("job[description]", formData.description);
    jobData.append("job[location]", formData.location);
    jobData.append("job[job_type]", formData.job_type);
    jobData.append("job[status]", formData.status);
  
    try {
      const response = await fetch("http://localhost:3001/admin/jobs", {
        method: "POST",
        body: jobData,
        credentials: "include",  // ✅ Ensures session is maintained
      });
  
      if (!response.ok) throw new Error("Failed to create job");
  
      alert("Job created successfully!");
      router.push("/admin/jobs");
    } catch (error) {
      alert(error.message);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 shadow-xl rounded-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Create New Job</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            required
            className="w-full p-3 border rounded"
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Job Description"
            required
            className="w-full p-3 border rounded"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className="w-full p-3 border rounded"
            value={formData.location}
            onChange={handleChange}
          />
          <select
            name="job_type"
            className="w-full p-3 border rounded"
            value={formData.job_type}
            onChange={handleChange}
          >
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Contract</option>
            <option>Freelance</option>
          </select>
          <select
            name="status"
            className="w-full p-3 border rounded"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Onsite</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
          {/* Removed the file input for the image */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
