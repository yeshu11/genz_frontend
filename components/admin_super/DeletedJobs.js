"use client";
import DeletedJobsPage from "@/app/admin_super/deleted-jobs/page"; // ✅ Import deleted-jobs page route

const SuperDeletedJobsContent = () => {
  return (
    <div className="w-10/6 p-10">
      <DeletedJobsPage />
    </div>
  );
};

export default SuperDeletedJobsContent;
