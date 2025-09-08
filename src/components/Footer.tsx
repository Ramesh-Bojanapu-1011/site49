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
              <a href="tel:+1234567890" className="hover:text-[#00bcd4]">
                +1 234 567 890
              </a>
            </li>
            <li>{t("footer.location")}: City, Country</li>
          </ul>
          <div className="flex space-x-3 mt-3">
            <a href="#" aria-label="Twitter" className="hover:text-[#00bcd4]">
              <TwitterIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#00bcd4]">
              <LinkedinIcon />
            </a>
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
