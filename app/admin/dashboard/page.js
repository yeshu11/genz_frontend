"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/components/DarkModeContext";

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const router = useRouter();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAdmin = localStorage.getItem("admin");
      if (!storedAdmin) {
        router.push("/admin/login");
      } else {
        setAdmin(JSON.parse(storedAdmin));
      }
    }
  }, [router]); // Added router to dependencies to fix useEffect warning

  if (!admin) {
    return null; // Render nothing while checking admin (avoids flash)
  }

  return (
    <div className={`p-6 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h1 className={`text-3xl font-bold text-center mb-6`}>
        Main Dashboard
      </h1>
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Welcome, {admin.name || "Admin"}!
        </h2>
        <p className="mt-2">
          Email: {admin.email || "N/A"}
        </p>
        <p>
          Role: {admin.role || "Administrator"}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;