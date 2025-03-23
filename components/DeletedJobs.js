"use client";
import DeletedJobsPage from "@/app/admin/deleted-jobs/page"; // ✅ Import deleted-jobs page route

const DeletedJobsContent = () => {
  return (
    <div className="w-10/6 p-10">
      <DeletedJobsPage />
    </div>
  );
};

export default DeletedJobsContent;
