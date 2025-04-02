"use client";
import SuperAdminJobsPage from "@/app/admin_super/jobs/page"; // ✅ Import jobs page route

const SuperAdminContent = () => {
  return (
    <div className="w-10/6 p-10">
      <SuperAdminJobsPage />
    </div>
  );
};

export default SuperAdminContent;
