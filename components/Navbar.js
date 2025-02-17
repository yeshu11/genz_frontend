"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY < lastScrollY || scrollY < 50);
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-white shadow-md transition-transform ${
        visible ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          GenZ Tech
        </Link>
        <div className="space-x-4">
          <a href="/careers" target="careersTab" className="text-gray-700 hover:text-blue-600">
            Careers
          </a>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
