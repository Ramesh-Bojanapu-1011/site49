import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const locations = [
    {
      city: t("contactUs.locations.ny.city"),
      address: t("contactUs.locations.ny.address"),
      img: "/public/location-ny.jpg",
    },
    {
      city: t("contactUs.locations.london.city"),
      address: t("contactUs.locations.london.address"),
      img: "/public/location-london.jpg",
    },
    {
      city: t("contactUs.locations.sydney.city"),
      address: t("contactUs.locations.sydney.address"),
      img: "/public/location-sydney.jpg",
    },
  ];
  const team = [
    {
      name: t("contactUs.team.ramesh.name"),
      role: t("contactUs.team.ramesh.role"),
      img: "/avatars/ramesh.jpg",
    },
    {
      name: t("contactUs.team.priya.name"),
      role: t("contactUs.team.priya.role"),
      img: "/avatars/priya.jpg",
    },
    {
      name: t("contactUs.team.david.name"),
      role: t("contactUs.team.david.role"),
      img: "/avatars/david.jpg",
    },
  ];
  const faqs = [
    {
      q: t("contactUs.faqs.q1"),
      a: t("contactUs.faqs.a1"),
    },
    {
      q: t("contactUs.faqs.q2"),
      a: t("contactUs.faqs.a2"),
    },
    {
      q: t("contactUs.faqs.q3"),
      a: t("contactUs.faqs.a3"),
    },
  ];
  return (
    <>
      <Head>
        <title>{t("contactUs.pageTitle")}</title>
        <meta name="description" content={t("contactUs.pageDesc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("contactUs.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("contactUs.heroDesc")}
            </p>
          </div>
        </section>

        {/* Section 2: Contact Form */}
        <section className="py-16 px-6   mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-[#00bcd4] text-center">
            {t("contactUs.formTitle")}
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
              <Image
                src="/contact-form-side.jpg"
                alt={t("contactUs.formImgAlt")}
                width={350}
                height={350}
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <form className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 md:w-1/2 w-full">
              <input
                type="text"
                placeholder={t("contactUs.formName")}
                className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                required
              />
              <input
                type="email"
                placeholder={t("contactUs.formEmail")}
                className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                required
              />
              <textarea
                placeholder={t("contactUs.formMessage")}
                rows={5}
                className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                required
              />
              <button
                type="submit"
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 text-xl tracking-wide"
              >
                {t("contactUs.formBtn")}
              </button>
            </form>
          </div>
        </section>

        {/* Section 3: Our Locations (Map & Cards) */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
            {t("contactUs.locationsTitle")}
          </h2>
          <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 flex flex-col items-center"
              >
                <Image
                  src={loc.img}
                  alt={loc.city}
                  width={80}
                  height={80}
                  className="rounded-xl mb-6 shadow-lg"
                />
                <div className="font-bold text-xl text-[#00bcd4] mb-1 text-center">
                  {loc.city}
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                  {loc.address}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Meet the Team (Horizontal Scroll) */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
            {t("contactUs.teamTitle")}
          </h2>
          <div className="flex gap-8 overflow-x-auto pb-4">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="min-w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 border-4 border-[#00bcd4] shadow-lg"
                />
                <div className="font-bold text-xl text-[#00bcd4] mb-1 text-center">
                  {member.name}
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: FAQs (Accordion) */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
            {t("contactUs.faqsTitle")}
          </h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="mb-6 bg-white dark:bg-gray-900 rounded-xl shadow p-6"
              >
                <summary className="font-bold text-[#00bcd4] cursor-pointer text-lg mb-2">
                  {faq.q}
                </summary>
                <div className="text-gray-700 dark:text-gray-300 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Section 6: Social & Newsletter CTA (Gradient Card) */}
        <section className="py-20 mx-auto w-full flex flex-col items-center justify-center">
          <div className="relative group w-full">
            <div className="relative bg-white dark:bg-gray-900 p-12 flex flex-col items-center justify-center min-w-[340px]">
              <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center drop-shadow-lg">
                {t("contactUs.stayConnectedTitle")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                {t("contactUs.stayConnectedDesc")}
              </p>
              <div className="flex gap-6 mb-8">
                <a
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <form className="w-full flex max-w-2xl justify-center items-center gap-4">
                <input
                  type="email"
                  placeholder={t("contactUs.newsletterPlaceholder")}
                  className="w-full px-6 py-3 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 text-xl tracking-wide"
                >
                  {t("contactUs.newsletterBtn")}
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ContactUs;
