"use client";
import CreateAdminPage from "@/app/admin_super/create-admin/page"; // ✅ Import create-job page route

const SuperCreateAdminContent = () => {
  return (
    <div className="w-10/6 p-10">
      <CreateAdminPage />
    </div>
  );
};

export default SuperCreateAdminContent;
