"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

const JobDetails = () => {
  const { id } = useParams(); // Get job ID from URL
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

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

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-6 shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600">Job Details</h1>
        <p className="text-gray-700 mt-2">Job ID: {id}</p>

        {/* Job Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Job Description</h2>
          <p className="text-gray-600 mt-2">
            We are looking for a talented developer to join our team. Apply now to be part of an exciting journey!
          </p>
        </div>

        {/* Apply Now Form */}
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
