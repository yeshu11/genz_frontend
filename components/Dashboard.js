"use client";
import DashboardPage from "@/app/admin/dashboard/page"; // ✅ Import deleted-jobs page route

const DashboardContent = () => {
  return (
    <div className="w-10/6 p-10">
      <DashboardPage />
    </div>
  );
};

export default DashboardContent;
