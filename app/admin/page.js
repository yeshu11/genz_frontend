"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminDashboard = () => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <ul className="mt-6 space-y-4">
          <li>
            <Link href="/admin/jobs" className={`hover:text-gray-400 ${pathname === "/admin/jobs" ? "text-yellow-400 font-semibold" : ""}`}>
              Job Management
            </Link>
          </li>
          <li>
            <Link href="/admin/resume-techwise" className={`hover:text-gray-400 ${pathname === "/admin/resume-techwise" ? "text-yellow-400 font-semibold" : ""}`}>
              Resume Techwise
            </Link>
          </li>
          <li>
            <Link href="/admin/open-resumes" className={`hover:text-gray-400 ${pathname === "/admin/open-resumes" ? "text-yellow-400 font-semibold" : ""}`}>
              Open Resumes
            </Link>
          </li>
          <li>
            <Link href="/admin/deleted-jobs" className={`hover:text-gray-400 ${pathname === "/admin/deleted-jobs" ? "text-yellow-400 font-semibold" : ""}`}>
              Deleted Job’s CV
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="w-3/4 p-6">
        <h2 className="text-3xl font-semibold">Welcome, Admin!</h2>
        <p className="text-gray-600 mt-2">Manage job postings and candidate applications here.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
