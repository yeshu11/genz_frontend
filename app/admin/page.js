"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (!storedAdmin) {
      router.push("/admin/login"); // ✅ Redirect to login if no admin is found
    } else {
      setAdmin(JSON.parse(storedAdmin)); // ✅ Load admin details
    }
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:3001/admin/logout", {
      method: "DELETE",
      credentials: "include", // ✅ Ensures session is properly cleared
    }).then(() => {
      localStorage.removeItem("admin");
      router.push("/admin/login");
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-yellow-400">Admin Panel</h1>
        <ul className="mt-6 space-y-4">
          <li>
            <Link href="/admin/jobs" className="block py-2 px-4 rounded hover:bg-gray-700">
              Job Management
            </Link>
          </li>
          <li>
            <Link href="/admin/resume-techwise" className="block py-2 px-4 rounded hover:bg-gray-700">
              Resume Techwise
            </Link>
          </li>
          <li>
            <Link href="/admin/open-resumes" className="block py-2 px-4 rounded hover:bg-gray-700">
              Open Resumes
            </Link>
          </li>
          <li>
            <Link href="/admin/deleted-jobs" className="block py-2 px-4 rounded hover:bg-gray-700">
              Deleted Job’s CV
            </Link>
          </li>
          <li>
            <Link href="/admin/create-job" className="block py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition">
              + Create Job
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6 bg-white shadow-lg rounded-lg m-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome, {admin ? admin.name : "Admin"}!
        </h2>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
