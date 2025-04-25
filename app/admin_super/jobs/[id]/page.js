"use client";

import { useRouter } from "next/navigation";
import SuperAdminJobDetailModal from "@/components/SuperAdminJobDetailModal";

const SuperAdminJobPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const handleClose = () => {
    router.push("/admin_super/jobs");
  };

  const refreshJobs = () => {
    // Empty function; refresh handled by parent SuperAdminJobsPage
  };

  return <SuperAdminJobDetailModal jobId={id} onClose={handleClose} refreshJobs={refreshJobs} />;
};

export default SuperAdminJobPage;