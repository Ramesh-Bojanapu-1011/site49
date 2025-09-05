import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./theme/ModeToggle";
import i18n from "@/i18n";

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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Supported languages
  const supportedLanguages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "he", label: "Hebrew" },
  ];
  //   const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [langReady, setLangReady] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  function handleLogout(): void {
    throw new Error("Function not implemented.");
  }

  // Dropdown handler: only one open at a time
  const handleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Restore language from localStorage on mount and on route change
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const setLangFromStorage = () => {
        const savedLang = localStorage.getItem("selectedLanguage");
        if (savedLang) {
          //   setSelectedLanguage(savedLang);
          if (savedLang === "English" && i18n.language !== "en")
            i18n.changeLanguage("en");
          else if (savedLang === "Arabic" && i18n.language !== "ar")
            i18n.changeLanguage("ar");
          else if (savedLang === "Hebrew" && i18n.language !== "he")
            i18n.changeLanguage("he");
          // Set document direction
          if (savedLang === "Arabic" || savedLang === "Hebrew") {
            document.documentElement.dir = "rtl";
          } else {
            document.documentElement.dir = "ltr";
          }
        }
      };
      setLangFromStorage();
      setLangReady(true);
      // Listen for route changes to re-apply language
      const handleRouteChange = () => {
        setLangFromStorage();
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events, i18n.language]);
  const handleLanguageChange = (langLabel: string) => {
    // setSelectedLanguage(langLabel);
    const langObj = supportedLanguages.find((l) => l.label === langLabel);
    if (langObj) {
      i18n.changeLanguage(langObj.code);
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLanguage", langLabel);
        if (langObj.code === "ar" || langObj.code === "he") {
          document.documentElement.dir = "rtl";
        } else {
          document.documentElement.dir = "ltr";
        }
      }
    }
  };

  return (
    <header className=" bg-white dark:bg-gray-900 shadow-md border-b   sticky top-0  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={"/logo-stackly.png"}
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <div className="relative group">
            <button
              onClick={() => handleDropdown("home")}
              className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              Home <span className="ml-1">▼</span>
            </button>
            {openDropdown === "home" && (
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
              onClick={() => handleDropdown("services")}
              className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              Services <span className="ml-1">▼</span>
            </button>
            {openDropdown === "services" && (
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
              onClick={() => handleDropdown("profile")}
              className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-white px-3 py-1 font-bold text-lg shadow-md border-2 border-white dark:border-gray-900">
                FL
              </span>
              <span className="ml-1">Profile</span> <span>▼</span>
            </button>
            {openDropdown === "profile" && (
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
              onClick={() => handleDropdown("language")}
              className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl">🌐</span> <span>▼</span>
            </button>
            {openDropdown === "language" && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[120px]">
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.label)}
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    {lang.label}
                  </button>
                ))}
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
              onClick={() => handleDropdown("home")}
              className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Home <span>▼</span>
            </button>
            {openDropdown === "home" && (
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
              onClick={() => handleDropdown("services")}
              className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Services <span>▼</span>
            </button>
            {openDropdown === "services" && (
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
                onClick={() => handleDropdown("profile")}
                className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-white px-3 py-1 font-bold text-lg shadow-md border-2 border-white dark:border-gray-900 mr-2">
                  FL
                </span>
                Profile <span>▼</span>
              </button>
              {openDropdown === "profile" && (
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
            <div className="">
              <button
                onClick={() => handleDropdown("language")}
                className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-xl">🌐</span> Language <span>▼</span>
              </button>
              {openDropdown === "language" && (
                <div className="flex flex-col p-3 absolute bg-white dark:bg-gray-800 shadow-md rounded-md border dark:border-gray-700">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.label)}
                      className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                    >
                      {lang.label}
                    </button>
                  ))}
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
