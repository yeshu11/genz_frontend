"use client";
import { useState } from "react";

const CreateAdmin = () => {
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

    const response = await fetch("http://localhost:3001/super_admin/admins", {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Admin</h2>

        <input type="text" name="name" placeholder="Name" value={adminData.name} onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />
        <input type="email" name="email" placeholder="Email" value={adminData.email} onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />
        <input type="tel" name="phone" placeholder="Phone" value={adminData.phone} onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />
        <input type="password" name="password" placeholder="Password" value={adminData.password} onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded w-full">Create Admin</button>
      </form>
    </div>
  );
};

export default CreateAdmin;
