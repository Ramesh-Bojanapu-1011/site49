import React, { useState } from "react";
 
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./theme/ModeToggle";

const services = [
  "Web Design",
  "Graphic Design",
  "SEO Optimization",
  "Content Writing",
  "Branding",
  "Digital Marketing",
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  function handleLogout(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={'/logo-stackly.png'} alt="Logo" width={100} height={100} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <div className="relative group">
            <button
              onClick={() => setHomeOpen((v) => !v)}
              className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              Home <span className="ml-1">▼</span>
            </button>
            {homeOpen && (
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[120px]">
                <a
                  href="/home1"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Home1
                </a>
                <a
                  href="/home2"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Home2
                </a>
              </div>
            )}
          </div>
          <a
            href="/about-us"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            About Us
          </a>
          <div className="relative group">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              Services <span className="ml-1">▼</span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[160px]">
                <a
                  href="/services"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors font-semibold text-blue-600 dark:text-blue-400"
                >
                  Services
                </a>
                {services.map((service) => (
                  <a
                    key={service}
                    href={`/${service.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="/blog"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </a>
          <a
            href="/contact-us"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Contact Us
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          {/* Profile Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-white px-3 py-1 font-bold text-lg shadow-md border-2 border-white dark:border-gray-900">
                FL
              </span>
              <span className="ml-1">Profile</span> <span>▼</span>
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[120px]">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          {/* Language Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl">🌐</span> <span>▼</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[120px]">
                <a
                  href="#en"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  English
                </a>
                <a
                  href="#ar"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Arabic
                </a>
                <a
                  href="#he"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Hebrew
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden flex gap-4 items-center">
          {/* Mobile Hamburger */}
          <button
            className=" text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg px-4 py-3 transition-colors">
          <div className="mb-2">
            <button
              onClick={() => setHomeOpen((v) => !v)}
              className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Home <span>▼</span>
            </button>
            {homeOpen && (
              <div className="pl-4">
                <a
                  href="#home1"
                  className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Home1
                </a>
                <a
                  href="#home2"
                  className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Home2
                </a>
              </div>
            )}
          </div>
          <a
            href="#about"
            className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            About Us
          </a>
          <div className="mb-2">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Services <span>▼</span>
            </button>
            {servicesOpen && (
              <div className="pl-4">
                {services.map((service) => (
                  <a
                    key={service}
                    href={`#${service.replace(/\s+/g, "-").toLowerCase()}`}
                    className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="#blog"
            className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Contact Us
          </a>
          <div className="mt-4 border-t flex justify-between items-center   dark:border-gray-700 pt-4">
            <ModeToggle />

            <div className="mb-2 flex items-center gap-2">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-white px-3 py-1 font-bold text-lg shadow-md border-2 border-white dark:border-gray-900 mr-2">
                  FL
                </span>
                Profile <span>▼</span>
              </button>
              {profileOpen && (
                <div className="  px-3   absolute bg-white dark:bg-gray-800 shadow-md rounded-md border dark:border-gray-700">
                  <a
                    href="#logout"
                    className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
            <div className=" ">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-xl">🌐</span> Language <span>▼</span>
              </button>
              {langOpen && (
                <div className=" flex flex-col p-3   absolute bg-white dark:bg-gray-800 shadow-md rounded-md border dark:border-gray-700">
                  <a
                    href="#en"
                    className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    English
                  </a>
                  <a
                    href="#ar"
                    className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    Arabic
                  </a>
                  <a
                    href="#he"
                    className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    Hebrew
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
