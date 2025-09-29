import i18n from "@/i18n";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { getUsers } from "../../pages/auth";
import { ModeToggle } from "./theme/ModeToggle";

const Header: React.FC = () => {
  // Ref for dropdown menus
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Services array with translations
  const services = [
    {
      title: t("hedder.webDesign"),
      link: "web-design",
    },
    {
      title: t("hedder.graphicDesign"),
      link: "graphic-design",
    },
    {
      title: t("hedder.seoOptimization"),
      link: "seo-optimization",
    },
    {
      title: t("hedder.contentWriting"),
      link: "content-writing",
    },
    {
      title: t("hedder.branding"),
      link: "branding",
    },
    {
      title: t("hedder.digitalMarketing"),
      link: "digital-marketing",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userInitials, setUserInitials] = React.useState(""); // Default initials

  // Supported languages
  const supportedLanguages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "he", label: "Hebrew" },
  ];
  //   const [selectedLanguage, setSelectedLanguage] = useState("English");
  // const [langReady, setLangReady] = useState(false);
  const router = useRouter();

  React.useEffect(() => {
    // Runs only in the browser
    const userData = localStorage.getItem("currentUser");

    if (userData) {
      try {
        const user = JSON.parse(userData);
        const firstInitial = user.first
          ? user.first.charAt(0).toUpperCase()
          : "";
        const lastInitial = user.last ? user.last.charAt(0).toUpperCase() : "";
        setUserInitials(firstInitial + lastInitial);
      } catch (error) {
        console.error("Failed to parse user data:", error);
      }
    }
  }, []);

  function handleLogout(): void {
    // Implement logout logic here
    const users = getUsers();
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        const updatedUsers = users.map((u) =>
          u.email === user.email
            ? { ...u, logoutTime: new Date().toISOString() }
            : u,
        );
        // Save updated users back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      } catch (error) {
        console.error("Failed to parse user data during logout:", error);
      }
    }

    window.localStorage.removeItem("currentUser");
    window.location.href = "/auth"; // Redirect to home or login page
  }

  // Dropdown handler: only one open at a time
  const handleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    if (!openDropdown) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

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
      // setLangReady(true);
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
    setOpenDropdown(null); // Close language dropdown after selection
  };

  return (
    <header className=" caret-transparent bg-white dark:bg-gray-900 max-w-screen sticky top-0 z-100  ">
      <div
        ref={dropdownRef}
        className="  mx-auto flex items-center justify-between px-4 py-3"
      >
        {/* Logo */}
        <Link href={"/home1"} className="flex items-center gap-2">
          <Image
            src={"/logo-stackly.png"}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <div className="relative group">
            <button
              onClick={() => handleDropdown("home")}
              className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              {t("hedder.home")} <span className="ml-1">▼</span>
            </button>
            {openDropdown === "home" && (
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[120px]">
                <Link
                  href="/home1"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  {t("hedder.home1")}
                </Link>
                <Link
                  href="/home2"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  {t("hedder.home2")}
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/about-us"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {t("hedder.aboutUs")}
          </Link>
          <div className="relative group">
            <button
              onClick={() => handleDropdown("services")}
              className="hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              {t("hedder.services")} <span className="ml-1">▼</span>
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[160px]">
                <Link
                  href="/services"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors font-semibold text-blue-600 dark:text-blue-400"
                >
                  {t("hedder.services")}
                </Link>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/${service.link}`}
                    className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 text-nowrap transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/blog"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {t("hedder.blog")}
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {t("hedder.contactUs")}
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          {/* Profile Dropdown */}
          <div className="relative group">
            <button
              onClick={() => handleDropdown("profile")}
              className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 flex w-10 h-10 justify-center items-center text-center dark:to-blue-300 text-white font-bold text-lg shadow-md border-2 border-white dark:border-gray-900">
                {userInitials || "AD"}
              </span>
              <span className="ml-1">{t("hedder.profile")}</span> <span>▼</span>
            </button>
            {openDropdown === "profile" && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg min-w-[120px]">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  {t("hedder.logout")}
                </button>
              </div>
            )}
          </div>
          <div className="relative group">
            <button
              onClick={() => handleDropdown("language")}
              className="flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-xl">🌐</span> <span>▼</span>
            </button>
            {openDropdown === "language" && (
              <div
                className={`absolute ${
                  i18n.language === "en" ? "right-0" : "left-0"
                } mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg `}
              >
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.label)}
                    className="block px-4 w-full py-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
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
        <nav
          ref={dropdownRef}
          className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg px-4 py-3 transition-colors"
        >
          <div className="mb-2">
            <button
              onClick={() => handleDropdown("home")}
              className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {t("hedder.home")} <span>▼</span>
            </button>
            {openDropdown === "home" && (
              <div className="pl-4 mt-2 bg-white dark:bg-gray-800 rounded shadow-md border dark:border-gray-700 w-full">
                <Link
                  href="/home1"
                  className="block py-2 w-full text-left hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  {t("hedder.home1")}
                </Link>
                <Link
                  href="/home2"
                  className="block py-2 w-full text-left hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  {t("hedder.home2")}
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/about-us"
            className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {t("hedder.aboutUs")}
          </Link>
          <div className="mb-2">
            <button
              onClick={() => handleDropdown("services")}
              className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {t("hedder.services")} <span>▼</span>
            </button>
            {openDropdown === "services" && (
              <div className="pl-4 mt-2 bg-white dark:bg-gray-800 rounded shadow-md border dark:border-gray-700 w-full">
                <Link
                  href={`/services`}
                  className="block py-2 w-full text-left hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  {t("hedder.services")}
                </Link>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={`/${service.link}`}
                    className="block py-2 w-full text-left hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/blog"
            className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {t("hedder.blog")}
          </Link>
          <Link
            href="/contact-us"
            className="block py-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {t("hedder.contactUs")}
          </Link>
          <div className="mt-4 border-t flex justify-between items-center   dark:border-gray-700 pt-4">
            <ModeToggle />

            <div className="mb-2 flex items-center gap-2">
              <button
                onClick={() => handleDropdown("profile")}
                className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-blue-500 flex w-10 h-10 justify-center items-center text-center dark:to-blue-300 text-white font-bold text-lg shadow-md border-2 border-white dark:border-gray-900">
                  {userInitials || "AD"}
                </span>
                {t("hedder.profile")} <span>▼</span>
              </button>
              {openDropdown === "profile" && (
                <div className="  px-3   absolute bg-white dark:bg-gray-800 shadow-md rounded-md border dark:border-gray-700">
                  <button
                    onClick={handleLogout}
                    className="block py-1 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                  >
                    {t("hedder.logout")}
                  </button>
                </div>
              )}
            </div>
            <div className="">
              <button
                onClick={() => handleDropdown("language")}
                className="w-full text-left py-2 flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-xl">🌐</span> {t("hedder.language")}{" "}
                <span>▼</span>
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
