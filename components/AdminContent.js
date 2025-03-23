"use client";
import JobsPage from "@/app/admin/jobs/page"; // ✅ Import jobs page route

const AdminContent = () => {
  return (
    <div className="w-10/6 p-10">
      <JobsPage />
    </div>
  );
};

export default AdminContent;
