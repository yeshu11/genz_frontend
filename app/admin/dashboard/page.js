"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/components/DarkModeContext"; // Import Context


const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const router = useRouter();
  const { darkMode } = useDarkMode(); // Use Global Dark Mode State


  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAdmin = localStorage.getItem("admin");
      if (!storedAdmin) {
        router.push("/admin/login"); // ✅ Redirect to login if admin is not found
      } else {
        setAdmin(JSON.parse(storedAdmin));
      }
    }
  }, []);

  return (
    <div>
      <h1 className={`text-3xl font-bold text-center mb-6 ${darkMode ? "text-white" : "text-black"}`}>
      Main Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;
