"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminSuperLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const storedAdminSuper = localStorage.getItem("admin_super");
    if (storedAdminSuper) {
      router.replace("/admin_super");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin_super/sign_in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (data.error) {
        alert("Invalid email or password");
        return;
      }

      if (data.admin_super) {
        localStorage.setItem("admin_super", JSON.stringify(data.admin_super));
        router.push("/admin_super");
      } else {
        console.error("AdminSuper data missing from response:", data);
        setError("Login failed. Unexpected response.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your connection or try again later.");
    }
  };

  if (loading) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Super Admin Login</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}