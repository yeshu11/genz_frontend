"use client";
import Link from "next/link";

const Careers = () => {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote", description: "React & Next.js Developer needed for UI/UX design." },
    { id: 2, title: "Backend Developer", location: "Hybrid", description: "Ruby on Rails Developer needed for API development." },
    { id: 3, title: "Full Stack Developer", location: "On-Site", description: "Build full-stack applications with modern frameworks." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <h1 className="text-4xl font-bold text-center text-white">Join Our Team</h1>
      <p className="text-white text-center mt-2">Explore our job openings and apply now!</p>

      {/* Job Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`} className="block">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-600 mt-1">{job.location}</p>
              <p className="text-gray-500 mt-2">{job.description}</p>
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
