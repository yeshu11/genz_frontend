"use client";
import { useEffect, useState } from "react";
import { useDarkMode } from "@/components/DarkModeContext"; // Import Context

const ProfilePage = () => {
  const [admin, setAdmin] = useState(null);
  const { darkMode } = useDarkMode(); // Use Global Dark Mode State

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get stored admin details
      const storedAdmin = localStorage.getItem("admin");
      if (storedAdmin) {
        setAdmin(JSON.parse(storedAdmin));
      }
    }
  }, []);

  return (
    <div className="p-8 min-h-screen flex flex-col">
      {/* Title - Stays at the Top */}
      <h1 className={`text-3xl font-bold text-center mb-6 relative top-14 ${darkMode ? "text-white" : "text-black"}`}>
        Profile
      </h1>

      {/* Centered Profile Card */}
      <div className="flex-grow flex justify-center items-center">
        <div className={`shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center transition-all ${
          darkMode ? "bg-[#111c44] text-white" : "bg-white text-gray-800"
        }`}>
          {/* Profile Picture */}
          <div className="flex justify-center">
            <img
              src="/test_profile.png"
              alt="Admin Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
            />
          </div>

          {/* Admin Name */}
          <h2 className="mt-6 text-2xl font-bold">
            {admin ? admin.name : "Admin"}
          </h2>

          {/* Admin Details */}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between border-b pb-3 text-lg">
          <span className="font-semibold">Email:</span>
          <span>{admin ? admin.email : "Not available"}</span>
        </div>
        <div className="flex justify-between border-b pb-3 text-lg">
          <span className="font-semibold">Phone:</span>
          <span>{admin ? admin.phone : "Not available"}</span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProfilePage;