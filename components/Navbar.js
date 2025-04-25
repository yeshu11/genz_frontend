"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Added for <Image>

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY < lastScrollY || scrollY < 50);
      setIsScrolled(scrollY >= 50);
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } z-50 lg:h-[128px]`}
      style={{
        background: isScrolled
          ? "#185186"
          : "linear-gradient(rgb(35, 124, 178), rgba(35, 124, 178, 0.8))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 lg:py-2 flex justify-between items-center">
        <div className="flex items-center lg:pl-6">
          <Link href="/">
            <Image
              src="/navbar_logo.png"
              alt="GenZ Tech Logo"
              width={1128}
              height={80} // Estimated based on h-12 to h-32
              className="h-12 w-auto object-contain md:h-20 lg:h-32 lg:-ml-32"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:flex md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-[#185186] md:bg-transparent transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <a
              href="/careers"
              target="careersTab"
              className="text-white hover:text-blue-300 text-lg md:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </a>
            <Link
              href="/about"
              className="text-white hover:text-blue-300 text-lg md:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;