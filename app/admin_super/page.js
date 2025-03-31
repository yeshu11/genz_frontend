"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SuperAdminDashboard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [adminSuper, setAdminSuper] = useState(null);
  const [loading, setLoading] = useState(true); // Prevents flash

  // ✅ Enforce authentication
  useEffect(() => {
    const storedAdminSuper = localStorage.getItem("admin_super");

    if (!storedAdminSuper) {
      router.replace("/admin_super/login"); // Instant redirect, no flash
      return;
    }

    try {
      const parsedAdminSuper = JSON.parse(storedAdminSuper);

      if (!parsedAdminSuper || typeof parsedAdminSuper !== "object") {
        throw new Error("Invalid super admin data format");
      }

      setAdminSuper(parsedAdminSuper);
    } catch (error) {
      console.error("Error parsing super admin data:", error);
      localStorage.removeItem("admin_super");
      router.replace("/admin_super/login");
    } finally {
      setLoading(false); // Stop loading after validation
    }
  }, [router]);

  // ✅ Logout function
  const handleLogout = () => {
    fetch("http://localhost:3001/admin_super/sign_out", {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      localStorage.removeItem("admin_super");
      router.push("/admin_super/login");
    });
  };

  if (loading) return null; // Prevent rendering during auth check

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-purple-600 to-blue-500">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-yellow-300">Super Admin</h1>
        <ul className="mt-6 space-y-4">
          <li>
            <Link href="/admin_super/jobs" className={`block py-2 px-4 rounded hover:bg-gray-700 ${pathname === "/admin_super/jobs" ? "bg-gray-700" : ""}`}>
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
          <li>
            <Link href="/super_admin/create-job" className="block py-2 px-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition">
              + Create Job
            </Link>
          </li>
          <li>
            <Link href="/super_admin/create-admin" className="block py-2 px-4 bg-green-600 text-white text-center rounded hover:bg-green-700 transition">
              + Create Admin
            </Link>
          </li>
        </ul>
        {/* ✅ Logout Button */}
        <button onClick={handleLogout} className="w-full mt-6 py-2 bg-red-600 text-white text-center rounded hover:bg-red-700 transition">
          Logout
        </button>
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
