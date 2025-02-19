"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  // Fetch job details from Rails API
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/jobs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError("Failed to load job details: " + error.message);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Your application has been submitted!");
  };

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  if (!job) {
    return <p className="text-center text-gray-700 mt-4">Loading job details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-6 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600">{job.title}</h1>
        <p className="text-gray-600 mt-2 font-semibold">Location: {job.location}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Job Description</h2>
          <p className="text-gray-600 mt-2">{job.description}</p>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Apply Now</h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full p-3 border rounded-lg"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Why are you interested?"
              className="w-full p-3 border rounded-lg"
              value={formData.message}
              onChange={handleChange}
            />
            <input
              type="file"
              name="resume"
              accept=".pdf"
              className="w-full p-3 border rounded-lg"
              onChange={handleFileChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
