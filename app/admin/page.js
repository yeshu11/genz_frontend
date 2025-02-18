"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminDashboard = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-yellow-400">Admin Panel</h1>
        <ul className="mt-6 space-y-4">
          <li>
            <Link href="/admin/jobs" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/admin/jobs" ? "bg-gray-700" : ""}`}>
              Job Management
            </Link>
          </li>
          <li>
            <Link href="/admin/resume-techwise" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/admin/resume-techwise" ? "bg-gray-700" : ""}`}>
              Resume Techwise
            </Link>
          </li>
          <li>
            <Link href="/admin/open-resumes" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/admin/open-resumes" ? "bg-gray-700" : ""}`}>
              Open Resumes
            </Link>
          </li>
          <li>
            <Link href="/admin/deleted-jobs" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/admin/deleted-jobs" ? "bg-gray-700" : ""}`}>
              Deleted Job’s CV
            </Link>
          </li>
          {/* New Create Job Link */}
          <li>
            <Link href="/admin/create-job" className="block py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition">
              + Create Job
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6 bg-white shadow-lg rounded-lg m-6">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome, Admin!</h2>
        <p className="text-gray-600 mt-2">Manage job postings and candidate applications here.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
