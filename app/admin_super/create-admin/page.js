"use client";
import { useState } from "react";
import { useDarkMode } from "@/components/DarkModeContext";

const CreateAdmin = () => {
  const { darkMode } = useDarkMode();
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/admin_super/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Admin created successfully!");
      setAdminData({ name: "", email: "", phone: "", password: "" });
    } else {
      alert(data.errors.join(", "));
    }
  };

  return (
    <div className={`flex justify-center items-center transition-all duration-500 `}>
      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-xl shadow-lg backdrop-blur-lg transition-all duration-500 max-w-md w-full ${
          darkMode ? "bg-[#111c44]/80 text-white" : "bg-white/80 text-gray-900"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center animate-fade-in">
          Create Admin
        </h2>

        <div className="space-y-4">
          {["name", "email", "phone", "password"].map((field, index) => (
            <input
              key={field}
              type={field === "password" ? "text" : field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={adminData[field]}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-lg border outline-none transition-all duration-300 focus:ring-2 ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
                  : "bg-white border-gray-300 text-black focus:ring-blue-600"
              } ${index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white"
        >
          Create Admin
        </button>
      </form>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out; }
      `}</style>
    </div>
  );
};

export default CreateAdmin;
