"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import config from "../config";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path
      ? "bg-[#232323] text-[#f58327]"
      : "hover:bg-[#232323] text-white";
  };

  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 right-0 w-full px-4 md:px-8 py-1 backdrop-blur-lg bg-[#0d0d0d] md:bg-transparent z-50">
      <div className="w-28">
        <img src={config.navbar.logo} alt="Logo" />
      </div>

      <div className="hidden md:flex space-x-4 rounded-full bg-[#0d0d0d] border-[0.5px] p-2 text-sm">
        <Link href="/" className={`rounded-full px-4 py-2 ${isActive("/")}`}>
          HOME
        </Link>
        {/* <Link href="/about" className={`rounded-full px-4 py-2 ${isActive("/about")}`}>ABOUT</Link> */}
        <Link
          href="/services"
          className={`rounded-full px-4 py-2 ${isActive("/services")}`}
        >
          SERVICES
        </Link>
        <Link
          href="/projects"
          className={`rounded-full px-4 py-2 ${isActive("/projects")}`}
        >
          PROJECTS
        </Link>
        <Link
          href="/staffing"
          className={`rounded-full px-4 py-2 ${isActive("/staffing")}`}
        >
          STAFF AUGUMENTATION
        </Link>
        <Link
          href="/blog"
          className={`rounded-full px-4 py-2 ${isActive("/blog")}`}
        >
          BLOG
        </Link>
        <Link
          href="/contact"
          className={`rounded-full px-4 py-2 ${isActive("/contact")}`}
        >
          CONTACT
        </Link>
      </div>

      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-11 left-0 right-0 bg-[#0d0d0d] text-white text-sm px-4 py-6 flex flex-col items-center space-y-4 overflow-hidden`}
      >
        <Link
          href="/"
          className={`w-full text-center rounded-full px-4 py-2 ${isActive(
            "/"
          )}`}
        >
          HOME
        </Link>
        <Link
          href="/about"
          className={`w-full text-center rounded-full px-4 py-2 ${isActive(
            "/about"
          )}`}
        >
          ABOUT
        </Link>
        <Link
          href="/services"
          className={`w-full text-center rounded-full px-4 py-2 ${isActive(
            "/services"
          )}`}
        >
          SERVICES
        </Link>
        <Link
          href="/projects"
          className={`w-full text-center rounded-full px-4 py-2 ${isActive(
            "/projects"
          )}`}
        >
          PROJECTS
        </Link>
        <Link
          href="/staffing"
          className={`w-full text-center rounded-full px-4 py-2 ${isActive(
            "/staffing"
          )}`}
        >
          PARTNER WITH US
        </Link>
        <Link
          href="/blog"
          className={`w-full text-center rounded-full px-4 py-2 ${isActive(
            "/blog"
          )}`}
        >
          BLOG
        </Link>
        <Link
          href="/contact"
          className={`w-full text-center rounded-full px-4 py-2 ${isActive(
            "/contact"
          )}`}
        >
          CONTACT
        </Link>
      </div>

      <Link
        href="contact"
        className="hidden md:block bg-[#FF7A30] rounded-full px-4 py-2"
      >
        {" "}
        Contact Us ↗
      </Link>
    </nav>
  );
};

export default Navbar;
