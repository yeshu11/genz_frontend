"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/components/DarkModeContext";

const CreateJob = () => {
  const { darkMode } = useDarkMode();
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/jobs`, {
        method: "POST",
        body: jobData,
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to create job");
      
      alert("Job created successfully!");
      router.push("/admin/jobs");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={` flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className={`p-6 shadow-xl rounded-lg w-full max-w-2xl ${darkMode ? "bg-[#111c44] text-white" : "bg-white text-black"}`}>
        
        <h1 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
          Create New Job (Admin)
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            required
            className={`w-full p-3 border rounded ${darkMode ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white text-black border-gray-300"}`}
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Job Description"
            required
            className={`w-full p-3 border rounded ${darkMode ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white text-black border-gray-300"}`}
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            className={`w-full p-3 border rounded ${darkMode ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white text-black border-gray-300"}`}
            value={formData.location}
            onChange={handleChange}
          />
          <select
            name="job_type"
            className={`w-full p-3 border rounded ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
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
            className={`w-full p-3 border rounded ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
            value={formData.status}
            onChange={handleChange}
          >
            <option>Onsite</option>
            <option>Hybrid</option>
            <option>Remote</option>
          </select>
          <button
            type="submit"
            className={`w-full p-3 rounded-lg transition font-semibold ${darkMode ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;