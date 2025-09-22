import { LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const quickLinks = [
    { name: t("footer.home1"), href: "/home1" },
    { name: t("footer.home2"), href: "/home2" },
    { name: t("footer.about"), href: "/about-us" },
    { name: t("footer.services"), href: "/services" },
    { name: t("footer.blog"), href: "/blog" },
    { name: t("footer.contact"), href: "/contact" },
  ];
  const services = [
    t("footer.webDesign"),
    t("footer.graphicDesign"),
    t("footer.seoOptimization"),
    t("footer.contentWriting"),
    t("footer.branding"),
    t("footer.digitalMarketing"),
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-10 pb-6 px-4 md:px-8 lg:px-16 justify-center caret-transparent">
      <div className="flex flex-col w-full sm:flex-row sm:justify-evenly sm:items-start gap-8">
        {/* Column 1: Logo & Content */}
        <div className="flex flex-col sm:w-1/4 items-start">
          <Image
            src="/logo-stackly.png"
            alt="Logo"
            width={80}
            height={80}
            className="mb-3"
          />

          <p className="text-sm">{t("footer.description")}</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="sm:w-1/4 items-center">
          <h3 className="font-semibold text-md mb-3">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#00bcd4] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="sm:w-1/4 items-center">
          <h3 className="font-semibold text-md mb-3">{t("footer.services")}</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service}>
                <Link href={`/${service.toLowerCase().replace(/\s+/g, "-")}`}>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="sm:w-1/4 items-center">
          <h3 className="font-semibold text-md mb-3">{t("footer.contact")}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              {t("footer.email")}:{" "}
              <a href="mailto:hello@email.com" className="hover:text-[#00bcd4]">
                hello@email.com
              </a>
            </li>
            <li>
              {t("footer.phone")}:{" "}
              <Link href="tel:+1234567890" className="hover:text-[#00bcd4]">
                +1 234 567 890
              </Link>
            </li>
            <li>{t("footer.location")}: City, Country</li>
          </ul>
          <div className="flex space-x-3 mt-3">
            <Link href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
              >
                <path
                  fill="#1877f2"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                ></path>
                <path
                  fill="#fff"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-[#00bcd4]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width={256} height={256} fill="#fff" rx={60}></rect>
                  <rect width={256} height={256} fill="#1d9bf0" rx={60}></rect>
                  <path
                    fill="#fff"
                    d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                  ></path>
                </g>
              </svg>
            </Link>

            <Link href="#" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 256 256"
              >
                <g fill="none">
                  <rect width={256} height={256} fill="#fff" rx={60}></rect>
                  <rect width={256} height={256} fill="#0a66c2" rx={60}></rect>
                  <path
                    fill="#fff"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                  ></path>
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} {t("footer.copyright")}.
      </div>
    </footer>
  );
};

export default Footer;
