"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DarkModeProvider } from "@/context/DarkModeContext"; // ✅ Import Dark Mode Context
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token && window.location.pathname === "/admin") {
      router.push("/admin/login"); // ✅ Redirect to login if not authenticated
    }
  }, []);

  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
}
