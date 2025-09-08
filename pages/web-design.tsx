import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const WebDesign = () => {
  const { t } = useTranslation();
  const webDesignStats = [
    {
      icon: "/award.svg",
      label: t("webDesign.statsAwards"),
      value: 8,
      desc: t("webDesign.statsAwardsDesc"),
    },
    {
      icon: "/project.svg",
      label: t("webDesign.statsProjects"),
      value: 60,
      desc: t("webDesign.statsProjectsDesc"),
    },
    {
      icon: "/happy.svg",
      label: t("webDesign.statsClients"),
      value: 45,
      desc: t("webDesign.statsClientsDesc"),
    },
    {
      icon: "/globe.svg",
      label: t("webDesign.statsCountries"),
      value: 10,
      desc: t("webDesign.statsCountriesDesc"),
    },
  ];
  return (
    <>
      <Head>
        <title>{t("webDesign.pageTitle")}</title>
        <meta name="description" content={t("webDesign.pageDesc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("webDesign.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("webDesign.heroDesc")}
            </p>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide animate-bounce"
            >
              {t("webDesign.heroBtn")}
            </Link>
          </div>
        </section>

        {/* Section 2: Web Design Awards & Recognition */}
        <section className="  mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900    p-10 backdrop-blur-xl">
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold mb-6 text-[#00bcd4] dark:text-[#26c6da] drop-shadow-lg">
                {t("webDesign.awardsTitle")}
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                {t("webDesign.awardsDesc")}
              </p>
              <ul className="list-disc pl-6 text-base space-y-2 text-[#00bcd4] dark:text-cyan-300">
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("webDesign.award1Title")}
                  </span>{" "}
                  – {t("webDesign.award1Org")}
                </li>
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("webDesign.award2Title")}
                  </span>{" "}
                  – {t("webDesign.award2Org")}
                </li>
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("webDesign.award3Title")}
                  </span>{" "}
                  – {t("webDesign.award3Org")}
                </li>
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("webDesign.award4Title")}
                  </span>{" "}
                  {t("webDesign.award4Org")}
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative bg-gradient-to-br from-[#b3eaf2] via-cyan-100 to-amber-100 dark:from-[#002d32] dark:via-cyan-900 dark:to-amber-900 rounded-2xl shadow-2xl flex items-center justify-center p-2 min-w-[320px] min-h-[220px] group hover:scale-105 hover:shadow-amber-400/40 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-white/30 dark:bg-gray-900/40 backdrop-blur-md z-0" />
                <Image
                  src="/award-star.png"
                  alt="Gold Star Award"
                  width={340}
                  height={220}
                  className="rounded-xl object-cover shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-[#00bcd4] opacity-0 group-hover:opacity-80 blur-md transition-all duration-300" />
              </div>
            </div>
          </div>
          <style jsx>{`
            .shadow-amber-400\/40 {
              box-shadow:
                0 8px 32px 0 rgba(251, 191, 36, 0.25),
                0 1.5px 8px 0 rgba(6, 182, 212, 0.15);
            }
          `}</style>
        </section>

        {/* Section 3: Web Design Process Steps (Vertical Stepper) */}
        <section className="py-20 px-6   mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
            {t("webDesign.processTitle")}
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00bcd4] via-cyan-400 to-amber-400 opacity-30 z-0" />
            <div className="flex flex-col gap-14 relative z-10">
              {[
                {
                  icon: "/search.svg",
                  title: t("webDesign.processDiscoveryTitle"),
                  desc: t("webDesign.processDiscoveryDesc"),
                },
                {
                  icon: "/strategy.svg",
                  title: t("webDesign.processStrategyTitle"),
                  desc: t("webDesign.processStrategyDesc"),
                },
                {
                  icon: "/design.svg",
                  title: t("webDesign.processDesignTitle"),
                  desc: t("webDesign.processDesignDesc"),
                },
                {
                  icon: "/dev.svg",
                  title: t("webDesign.processDevTitle"),
                  desc: t("webDesign.processDevDesc"),
                },
                {
                  icon: "/launch.svg",
                  title: t("webDesign.processLaunchTitle"),
                  desc: t("webDesign.processLaunchDesc"),
                },
                {
                  icon: "/support.svg",
                  title: t("webDesign.processSupportTitle"),
                  desc: t("webDesign.processSupportDesc"),
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-center w-full ${
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`relative w-1/2 bg-gradient-to-br from-[#7a8387] via-[#00BFFF] to-[#8e4747] rounded-2xl shadow-xl p-8 flex flex-col items-center border border-cyan-100 dark:border-cyan-900 animate-popin`}
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div
                      className={`absolute ${
                        idx % 2 !== 0 ? "-left-8" : "-right-8"
                      } top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/80 dark:bg-gray-900/80 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 animate-float`}
                    >
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="font-bold text-xl text-white mb-2 text-center drop-shadow-lg">
                      {step.title}
                    </div>
                    <div className="text-white/80 dark:text-gray-200 text-center mb-2">
                      {step.desc}
                    </div>
                    <div className="w-8 h-1 bg-gradient-to-r from-[#00bcd4] to-cyan-400 rounded-full mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            .animate-float {
              animation: float 2.5s ease-in-out infinite;
            }
            @keyframes popin {
              0% {
                opacity: 0;
                transform: scale(0.8);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-popin {
              animation: popin 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
            }
          `}</style>
        </section>

        {/* Section 4: Web Design Features (Horizontal Cards) */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
            {t("webDesign.featuresTitle")}
          </h2>
          <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
            {[
              {
                icon: "/award.svg",
                title: t("webDesign.featureAwardTitle"),
                desc: t("webDesign.featureAwardDesc"),
              },
              {
                icon: "/next.svg",
                title: t("webDesign.featureFastTitle"),
                desc: t("webDesign.featureFastDesc"),
              },
              {
                icon: "/file.svg",
                title: t("webDesign.featureGraphicsTitle"),
                desc: t("webDesign.featureGraphicsDesc"),
              },
              {
                icon: "/window.svg",
                title: t("webDesign.featureModesTitle"),
                desc: t("webDesign.featureModesDesc"),
              },
              {
                icon: "/globe.svg",
                title: t("webDesign.featureGlobalTitle"),
                desc: t("webDesign.featureGlobalDesc"),
              },
              {
                icon: "/vercel.svg",
                title: t("webDesign.featureDeployTitle"),
                desc: t("webDesign.featureDeployDesc"),
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[220px] max-w-xs rounded-2xl shadow-xl p-8 bg-gradient-to-br from-[#7a8387] via-[#00BFFF] to-[#8e4747] hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-full shadow-lg border-4 border-white dark:border-gray-900 mb-4 animate-float">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="font-extrabold text-xl text-white mb-2 text-center drop-shadow-lg text-nowrap">
                  {feature.title}
                </div>
                <div className="text-white/80 dark:text-gray-200 text-center mb-2">
                  {feature.desc}
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-[#00bcd4] to-cyan-400 rounded-full mt-2" />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            .animate-float {
              animation: float 2.5s ease-in-out infinite;
            }
          `}</style>
        </section>

        {/* Section 5: Pricing Plans */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
            {t("webDesign.pricingTitle")}
          </h2>
          <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
            {/* Basic Plan */}
            <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
                {t("webDesign.pricingBasicTitle")}
              </span>
              <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
                <div className="mb-4">
                  <Image
                    src="/award.svg"
                    alt="Basic"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
                <div className="font-extrabold text-4xl text-[#00bcd4] dark:text-cyan-300 mb-2 text-center drop-shadow-2xl">
                  $299
                </div>
                <div className="font-semibold text-lg text-[#0097a7] dark:text-cyan-200 mb-2 text-center tracking-wide">
                  {t("webDesign.pricingBasicDesc")}
                </div>
                <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                  <li>{t("webDesign.pricingBasicPages")}</li>
                  <li>{t("webDesign.pricingBasicResponsive")}</li>
                  <li>{t("webDesign.pricingBasicSEO")}</li>
                  <li>{t("webDesign.pricingBasicSupport")}</li>
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
                >
                  {t("webDesign.pricingBtn")}
                </Link>
              </div>
            </div>
            {/* Advanced Plan */}
            <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
                {t("webDesign.pricingAdvancedTitle")}
              </span>
              <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
                <div className="mb-4">
                  <Image
                    src="/project.svg"
                    alt="Advanced"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
                <div className="font-extrabold text-4xl text-cyan-400 dark:text-amber-300 mb-2 text-center drop-shadow-2xl">
                  $599
                </div>
                <div className="font-semibold text-lg text-cyan-600 dark:text-amber-200 mb-2 text-center tracking-wide">
                  {t("webDesign.pricingAdvancedDesc")}
                </div>
                <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                  <li>{t("webDesign.pricingAdvancedPages")}</li>
                  <li>{t("webDesign.pricingAdvancedGraphics")}</li>
                  <li>{t("webDesign.pricingAdvancedSEO")}</li>
                  <li>{t("webDesign.pricingAdvancedForms")}</li>
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
                >
                  {t("webDesign.pricingBtn")}
                </Link>
              </div>
            </div>
            {/* Pro Plan */}
            <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-amber-400 to-[#00bcd4] text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
                {t("webDesign.pricingProTitle")}
              </span>
              <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
                <div className="mb-4">
                  <Image
                    src="/happy.svg"
                    alt="Pro"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
                <div className="font-extrabold text-4xl text-amber-400 dark:text-[#26c6da] mb-2 text-center drop-shadow-2xl">
                  $999
                </div>
                <div className="font-semibold text-lg text-amber-600 dark:text-[#80dde9] mb-2 text-center tracking-wide">
                  {t("webDesign.pricingProDesc")}
                </div>
                <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                  <li>{t("webDesign.pricingProPages")}</li>
                  <li>{t("webDesign.pricingProCustom")}</li>
                  <li>{t("webDesign.pricingProSupport")}</li>
                  <li>{t("webDesign.pricingProIntegrations")}</li>
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-amber-400 to-[#00bcd4] text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
                >
                  {t("webDesign.pricingBtn")}
                </Link>
              </div>
            </div>
          </div>
          <style jsx>{``}</style>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <Image
              src="/contact-main.jpg"
              alt={t("webDesign.contactImgAlt")}
              width={400}
              height={400}
              className="rounded-3xl w-96 h-96 shadow-2xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-lg">
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-tr from-[#00bcd4] via-cyan-400 to-amber-400 animate-gradient-x blur-sm opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-w-[340px]">
                <div className="flex gap-6 mb-6 animate-float">
                  <a
                    href="mailto:hello@site49.com"
                    className="hover:scale-110 transition"
                  >
                    <Image src="/mail.svg" alt="Email" width={36} height={36} />
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="hover:scale-110 transition"
                  >
                    <Image
                      src="/phone.svg"
                      alt="Phone"
                      width={36}
                      height={36}
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      width={36}
                      height={36}
                    />
                  </a>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center drop-shadow-lg">
                  {t("webDesign.contactTitle")}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                  {t("webDesign.contactDesc")}
                </p>
                <a
                  href="/contact-us"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
                >
                  {t("webDesign.contactBtn")}
                </a>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes gradient-x {
              0%,
              100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }
            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 4s ease-in-out infinite;
            }
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-12px);
              }
            }
            .animate-float {
              animation: float 2.5s ease-in-out infinite;
            }
          `}</style>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default WebDesign;
