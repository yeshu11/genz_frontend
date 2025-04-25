"use client";
import { useEffect, useState } from "react";
import Image from "next/image"; // Added for <Image>
import { useDarkMode } from "@/components/DarkModeContext";

const SuperAdminProfile = () => {
  const [superAdmin, setSuperAdmin] = useState(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedSuperAdmin = localStorage.getItem("admin_super");
      if (storedSuperAdmin) {
        setSuperAdmin(JSON.parse(storedSuperAdmin));
      }
    }
  }, []);

  return (
    <div className="p-8 min-h-screen flex flex-col">
      {/* Title - Stays at the Top */}
      <h1
        className={`text-3xl font-bold text-center mb-6 relative top-14 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Super Admin Profile
      </h1>

      {/* Centered Profile Card */}
      <div className="flex-grow flex justify-center items-center">
        <div
          className={`shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center transition-all ${
            darkMode ? "bg-[#111c44] text-white" : "bg-white text-gray-800"
          }`}
        >
          {/* Profile Picture */}
          <div className="flex justify-center">
            <Image
              src="/test_profile.png"
              alt="Super Admin Profile"
              width={128}
              height={128} // Based on w-32 h-32
              className="rounded-full object-cover border-4 border-gray-300"
            />
          </div>

          {/* Super Admin Name */}
          <h2 className="mt-6 text-2xl font-bold">
            {superAdmin ? superAdmin.name : "Super Admin"}
          </h2>

          {/* Super Admin Details */}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between border-b pb-3 text-lg">
              <span className="font-semibold">Email:</span>
              <span>{superAdmin ? superAdmin.email : "Not available"}</span>
            </div>
            <div className="flex justify-between border-b pb-3 text-lg">
              <span className="font-semibold">Phone:</span>
              <span>{superAdmin ? superAdmin.phone : "Not available"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;