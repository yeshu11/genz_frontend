"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token && window.location.pathname === "/admin") {
      router.push("/admin/login"); // ✅ Redirect to login if not authenticated
    }
  }, []);

  return <>{children}</>;
}
