"use client";
import CreateJobPage from "@/app/admin_super/create-job/page"; // ✅ Import create-job page route

const SuperCreateJobContent = () => {
  return (
    <div className="w-10/6 p-10">
      <CreateJobPage />
    </div>
  );
};

export default SuperCreateJobContent;
