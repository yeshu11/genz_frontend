"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const AdminLogin = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      router.push("/admin");
    }
  }, [router]);

  useEffect(() => {
    const savedAdmin = JSON.parse(localStorage.getItem("admin"));
    if (savedAdmin?.email) {
      setLoginData((prev) => ({ ...prev, email: savedAdmin.email }));
    }
  }, []);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("http://localhost:3001/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
      credentials: "include",
    });
    const data = await response.json();
    setLoading(false);
    if (response.ok) {
      localStorage.setItem("admin", JSON.stringify(data.admin));
      router.push("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <motion.div
      initial={{ background: "#C7C5F4" }}
      animate={{ background: ["#C7C5F4", "#776BCC", "#5D54A4", "#C7C5F4"] }}
      transition={{ repeat: Infinity, duration: 6 }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="relative w-[420px] h-[600px] shadow-2xl rounded-xl overflow-hidden bg-gradient-to-r from-[#5D54A4] to-[#7C78B8]">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-10 z-10">
          <form onSubmit={handleSubmit} className="w-full text-white space-y-6">
            <div className="relative flex items-center">
              <FaUser className="absolute left-4 text-[#7875B5] text-lg" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleChange}
                required
                autoComplete="new-password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-black placeholder-gray-500 shadow-sm"
              />
            </div>
            <div className="relative flex items-center">
              <FaLock className="absolute left-4 text-[#7875B5] text-lg" />
              <input
                type="text"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                required
                autoComplete="off"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-black placeholder-gray-500 shadow-sm"
              />
            </div>

            {/* Animated Login Button with Arrow Fix */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              className="relative w-full bg-white text-[#4C489D] font-bold py-3 rounded-2xl mt-4 shadow-md overflow-hidden flex items-center justify-between px-6"
            >
              <span>{loading ? "Logging in..." : "Log In Now"}</span>
              <div className="relative w-12 h-6 overflow-hidden">
                {/* Main Arrow (Fixed Position) */}
                <motion.div
                  animate={{ x: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute right-2 text-2xl text-[#7875B5]"
                >
                  <FaChevronRight />
                </motion.div>

                {/* Shadow Trail (Adjusted) */}
                <motion.div
                  animate={{ x: [0, 12, 0], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  className="absolute right-3 text-2xl text-[#B0AEE5]"
                >
                  <FaChevronRight />
                </motion.div>
                <motion.div
                  animate={{ x: [0, 12, 0], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                  className="absolute right-6 text-2xl text-[#D0CDEF]"
                >
                  <FaChevronRight />
                </motion.div>
              </div>
            </motion.button>
          </form>

          <div className="mt-6 text-center text-white">
            <h3 className="mb-2">Log in via</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-xl text-white transition hover:scale-125"><FaInstagram /></a>
              <a href="#" className="text-xl text-white transition hover:scale-125"><FaFacebook /></a>
              <a href="#" className="text-xl text-white transition hover:scale-125"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminLogin;
