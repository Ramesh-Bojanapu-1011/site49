import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const CorporateRedesign = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t("corporateRedesign.pageTitle")} | {t("blog.pageTitle")}
        </title>
        <meta name="description" content={t("corporateRedesign.pageDesc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 max-h-screen flex flex-col caret-transparent overflow-auto  [&::-webkit-scrollbar]:hidden">
        <Header />
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[50vh] text-center">
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("corporateRedesign.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("corporateRedesign.heroDesc")}
            </p>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
          <article className="prose dark:prose-invert prose-lg mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da]">
              {t("corporateRedesign.guideTitle")}
            </h2>
            <Image
              src="/case-study3.jpg"
              alt={t("corporateRedesign.heroTitle")}
              width={500}
              height={200}
              className="rounded-2xl shadow-xl mb-8 object-cover   w-full h-[500px]  "
            />
            <p>{t("corporateRedesign.intro")}</p>
            <blockquote className="bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white rounded-xl p-6 shadow-xl my-8">
              <span className="text-2xl font-bold">
                {t("corporateRedesign.quote")}
              </span>
              <br />
              <span className="text-base font-semibold">
                {t("corporateRedesign.quoteAuthor")}
              </span>
            </blockquote>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
              {t("corporateRedesign.keyElementsTitle")}
            </h3>
            <ul>
              <li>
                <strong>{t("corporateRedesign.modernUITitle")}</strong>{" "}
                {t("corporateRedesign.modernUIDesc")}
              </li>
              <li>
                <strong>{t("corporateRedesign.performanceTitle")}</strong>{" "}
                {t("corporateRedesign.performanceDesc")}
              </li>
              <li>
                <strong>{t("corporateRedesign.messagingTitle")}</strong>{" "}
                {t("corporateRedesign.messagingDesc")}
              </li>
              <li>
                <strong>{t("corporateRedesign.mobileTitle")}</strong>{" "}
                {t("corporateRedesign.mobileDesc")}
              </li>
              <li>
                <strong>{t("corporateRedesign.seoTitle")}</strong>{" "}
                {t("corporateRedesign.seoDesc")}
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
              {t("corporateRedesign.impactTitle")}
            </h3>
            <p>{t("corporateRedesign.impactDesc")}</p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow mb-8">
              <h4 className="text-xl font-bold mb-2 text-[#00bcd4]">
                {t("corporateRedesign.tipsTitle")}
              </h4>
              <ul className="list-disc pl-6">
                <li>{t("corporateRedesign.tip1")}</li>
                <li>{t("corporateRedesign.tip2")}</li>
                <li>{t("corporateRedesign.tip3")}</li>
                <li>{t("corporateRedesign.tip4")}</li>
              </ul>
            </div>
            <p>
              {t("corporateRedesign.thinkingRedesign")}{" "}
              <Link href="/contact-us">
                <span className="text-[#00bcd4] font-bold hover:underline">
                  {t("corporateRedesign.contactTeam")}
                </span>
              </Link>{" "}
              {t("corporateRedesign.expertAdvice")}
            </p>
            <div className="mt-10">
              <div
                onClick={() => window.history.back()}
                className="inline-block  cursor-default px-8 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide"
              >
                {t("corporateRedesign.backToBlog")}
              </div>
            </div>
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default CorporateRedesign;
