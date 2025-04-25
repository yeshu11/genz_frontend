"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token && window.location.pathname === "/admin") {
      router.push("/admin/login");
    }
  }, [router]); // Added router to dependency array

  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
}