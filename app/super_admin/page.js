"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SuperAdminDashboard = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-purple-600 to-blue-500">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-yellow-300">Super Admin</h1>
        <ul className="mt-6 space-y-4">
          <li>
            <Link href="/super_admin/jobs" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/super_admin/jobs" ? "bg-gray-700" : ""}`}>
              Job Management
            </Link>
          </li>
          <li>
            <Link href="/super_admin/resume-techwise" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/super_admin/resume-techwise" ? "bg-gray-700" : ""}`}>
              Resume Techwise
            </Link>
          </li>
          <li>
            <Link href="/super_admin/open-resumes" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/super_admin/open-resumes" ? "bg-gray-700" : ""}`}>
              Open Resumes
            </Link>
          </li>
          <li>
            <Link href="/super_admin/deleted-jobs" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/super_admin/deleted-jobs" ? "bg-gray-700" : ""}`}>
              Deleted Job’s CV
            </Link>
          </li>
          {/* Create Job Link */}
          <li>
            <Link href="/super_admin/create-job" className={`block py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition`}>
              + Create Job
            </Link>
          </li>
          {/* New Create Admin Link */}
          <li>
            <Link href="/super_admin/create-admin" className={`block py-2 px-4 bg-green-600 text-white text-center rounded hover:bg-green-700 transition`}>
              + Create Admin
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6 bg-white shadow-lg rounded-lg m-6">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome, Super Admin!</h2>
        <p className="text-gray-600 mt-2">Manage job postings, resumes, and deleted jobs here.</p>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
