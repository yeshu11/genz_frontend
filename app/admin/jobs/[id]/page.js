"use client";

import { useRouter } from "next/navigation";
import JobDetailModal from "@/components/JobDetailModal";

const JobPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const handleClose = () => {
    router.push("/admin/jobs");
  };

  const refreshJobs = () => {
    // Empty function; refresh handled by parent JobsPage
  };

  return <JobDetailModal jobId={id} onClose={handleClose} refreshJobs={refreshJobs} />;
};

export default JobPage;