"use client";
import CreateJobPage from "@/app/admin/create-job/page"; // ✅ Import create-job page route

const CreateJobContent = () => {
  return (
    <div className="w-10/6 p-10">
      <CreateJobPage />
    </div>
  );
};

export default CreateJobContent;
