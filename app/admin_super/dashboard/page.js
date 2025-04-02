"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/components/DarkModeContext"; // Import Context

const SuperAdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true); // Prevents flashing
  const router = useRouter();
  const { darkMode } = useDarkMode(); // Use Global Dark Mode State

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAdminSuper = localStorage.getItem("admin_super");

      if (!storedAdminSuper) {
        router.replace("/admin_super/login"); // ✅ Redirect correctly
      } else {
        setIsLoading(false); // ✅ Stop loading once verified
      }
    }
  }, []);

  if (isLoading) return null; // ✅ Prevent rendering until check completes

  return (
    <div>
      <h1 className={`text-3xl font-bold text-center mb-6 ${darkMode ? "text-white" : "text-black"}`}>
        Super Admin Main Dashboard
      </h1>
    </div>
  );
};

export default SuperAdminDashboard;