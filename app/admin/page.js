"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Added for <Image> component
import { Home, Briefcase, FileText, Trash2, User, Plus } from "lucide-react";
import AdminContent from "@/components/AdminContent";
import DashboardContent from "@/components/Dashboard";
import ResumeTechwiseContent from "@/components/ResumeTechwise";
import DeletedJobsContent from "@/components/DeletedJobs";
import OpenResumesContent from "@/components/OpenResumes";
import CreateJobContent from "@/components/CreateJob";
import AdminProfileContent from "@/components/AdminProfile";
import { Menu, MenuButton } from "@headlessui/react";
import { MdLogout } from "react-icons/md";
import { useDarkMode } from "@/components/DarkModeContext";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const { darkMode, toggleDarkMode } = useDarkMode();
  const router = useRouter();

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");

    if (!storedAdmin) {
      router.replace("/admin/login");
      return;
    }

    try {
      const parsedAdmin = JSON.parse(storedAdmin);

      if (!parsedAdmin || typeof parsedAdmin !== "object") {
        throw new Error("Invalid admin data format");
      }

      setAdmin(parsedAdmin);
    } catch (error) {
      console.error("Error parsing admin data:", error);
      localStorage.removeItem("admin");
      router.replace("/admin/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    fetch("http://localhost:3001/admin/logout", {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      localStorage.removeItem("admin");
      router.push("/admin/login");
    });
  };

  if (loading) return null;

  return (
    <div
      className={`h-screen w-screen flex justify-center p-8 overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-blue-500 to-blue-700"
      }`}
    >
      <div
        className={`w-full max-w-[120%] h-full shadow-2xl rounded-3xl flex overflow-hidden transition-all duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100"
        }`}
      >
        {/* Sidebar */}
        <div
          className={`w-1/6 p-6 rounded-l-3xl shadow-lg transition-all duration-300 ${
            darkMode ? "bg-[#111c44]" : "bg-white text-gray-900"
          }`}
        >
          {/* Company Logo */}
          <div className="flex justify-center">
            <Image
              src={
                darkMode
                  ? "/updated_Genz_cover_White_text-removebg.png"
                  : "/updated_Genz_Cover_black__text-removebg.png"
              }
              alt="GenZ Logo"
              width={220}
              height={80} // Estimated based on w-[220px]
              className="max-w-[220px] h-auto mx-auto object-contain transition-all duration-300"
            />
          </div>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center gap-2 py-2 px-3 w-full rounded-lg transition ${
                  activeTab === "dashboard"
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-200"
                }`}
              >
                <Home size={20} color="#7551ff" />
                Dashboard
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-2 py-2 px-3 w-full rounded-lg transition ${
                  activeTab === "profile"
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-200"
                }`}
              >
                <Home size={20} color="#7551ff" />
                Profile
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("jobs")}
                className={`flex items-center gap-2 py-2 px-3 w-full rounded-lg transition ${
                  activeTab === "jobs"
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : darkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-200"
                }`}
              >
                <Briefcase size={20} color="#7551ff" />
                Jobs
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("resume-techwise")}
                className={`flex items-center gap-2 py-2 px-3 w-full rounded-lg transition ${
                  activeTab === "resume-techwise"
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-200"
                }`}
              >
                <FileText size={20} color="#7551ff" />
                Techwise Resumes
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("open-resumes")}
                className={`flex items-center gap-2 py-2 px-3 w-full rounded-lg transition ${
                  activeTab === "open-resumes"
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : darkMode
                      ? "hover:bg-gray-700"
                    : "hover:bg-gray-200"
                }`}
              >
                <User size={20} color="#7551ff" />
                Open Resumes
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("deleted-jobs")}
                className={`flex items-center gap-2 py-2 px-3 w-full rounded-lg transition ${
                  activeTab === "deleted-jobs"
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                    : darkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-200"
                }`}
              >
                <Trash2 size={20} color="#7551ff" />
                Deleted CVs
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("create-job")}
                className="flex items-center gap-2 py-2 px-3 w-full bg-[#7551ff] text-white rounded-lg hover:bg-purple-700 transition"
              >
                <Plus size={20} />
                Create Job
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-5/6 h-full flex-1 relative overflow-hidden">
          <div className="absolute top-5 right-8 flex items-center justify-end gap-4">
            {/* Profile Section */}
            <div
              className={`shadow-lg rounded-full p-3 w-[130px] h-14 flex items-center justify-end gap-x-3 transition-all ${
                darkMode ? "bg-[#111c44]" : "bg-white"
              }`}
            >
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="text-2xl cursor-pointer transition-all"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              <Menu as="div" className="relative">
                <MenuButton className="flex items-center">
                  <Image
                    src="/test_profile.png"
                    alt="Profile"
                    width={40}
                    height={40} // Based on w-10 h-10
                    className="rounded-full object-cover cursor-pointer border-2 border-gray-200"
                  />
                </MenuButton>
                <Menu.Items
                  className={`absolute right-0 mt-3 w-56 shadow-md rounded-lg border z-50 overflow-hidden py-2 transition-all ${
                    darkMode ? "bg-gray-800 text-white" : "bg-white"
                  }`}
                >
                  <div className="px-4 py-2 text-sm font-semibold">
                    👋 Hey, {admin ? admin.name : "Admin"}!
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`px-4 py-2 w-full text-left ${
                          active ? (darkMode ? "bg-gray-700" : "bg-gray-200") : ""
                        }`}
                      >
                        Profile Settings
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`px-4 py-2 w-full text-left flex items-center gap-2 text-red-600 ${
                          active ? (darkMode ? "bg-gray-700" : "bg-gray-200") : ""
                        }`}
                        onClick={handleLogout}
                      >
                        <MdLogout size={20} />
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>

          <div
            className={`content-area ${
              darkMode ? "dark-mode" : "light-mode"
            }`}
          >
            {activeTab === "dashboard" && <DashboardContent />}
            {activeTab === "jobs" && <AdminContent />}
            {activeTab === "resume-techwise" && <ResumeTechwiseContent />}
            {activeTab === "open-resumes" && <OpenResumesContent />}
            {activeTab === "deleted-jobs" && <DeletedJobsContent />}
            {/* Centered create-job Section with Increased Width */}
            {activeTab === "create-job" && (
              <div className="flex justify-center items-center h-full">
                <div className="w-[700px]">
                  <CreateJobContent />
                </div>
              </div>
            )}
            {/* Centered Profile Section with Increased Width */}
            {activeTab === "profile" && (
              <div className="flex justify-center items-center h-full">
                <div className="w-[700px]">
                  <AdminProfileContent />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;