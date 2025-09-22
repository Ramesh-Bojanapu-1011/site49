import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const EcommerceSuccess = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>
          {t("blog.caseStudy1Title")} | {t("blog.pageTitle")}
        </title>
        <meta name="description" content={t("blog.caseStudy1Desc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[50vh] text-center">
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("blog.caseStudy1Title")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("blog.caseStudy1Desc")}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto w-full">
          <article className="prose dark:prose-invert prose-lg mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da]">
              {t(
                "ecommerceSuccess.transformedTitle",
                "How E-Commerce Transformed a Local Business",
              )}
            </h2>
            <Image
              src="/case-study1.jpg"
              alt={t("blog.caseStudy1Title")}
              width={500}
              height={200}
              className="rounded-2xl shadow-xl mb-8 object-cover w-full h-[500px]"
            />
            <p>
              {t(
                "ecommerceSuccess.intro",
                "In today's digital age, having an online store is more than a convenience—it's a necessity. Our client, a local retailer, wanted to reach new customers and modernize their business. This blog explores the journey, challenges, and strategies that led to their e-commerce success.",
              )}
            </p>
            <blockquote className="bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white rounded-xl p-6 shadow-xl my-8">
              <span className="text-2xl font-bold">
                {t(
                  "ecommerceSuccess.quote",
                  "“Launching our online store was the best decision we made. Sales soared and our brand reached new heights.”",
                )}
              </span>
              <br />
              <span className="text-base font-semibold">
                {t("ecommerceSuccess.quoteAuthor", "— Store Owner")}
              </span>
            </blockquote>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
              {t(
                "ecommerceSuccess.keyStepsTitle",
                "Key Steps to E-Commerce Success",
              )}
            </h3>
            <ul>
              <li>
                <strong>
                  {t("ecommerceSuccess.customStorefront", "Custom Storefront:")}
                </strong>{" "}
                {t(
                  "ecommerceSuccess.customStorefrontDesc",
                  "Designed for brand identity and user experience.",
                )}
              </li>
              <li>
                <strong>
                  {t(
                    "ecommerceSuccess.mobileOptimization",
                    "Mobile Optimization:",
                  )}
                </strong>{" "}
                {t(
                  "ecommerceSuccess.mobileOptimizationDesc",
                  "Ensured seamless shopping on any device.",
                )}
              </li>
              <li>
                <strong>
                  {t("ecommerceSuccess.securePayments", "Secure Payments:")}
                </strong>{" "}
                {t(
                  "ecommerceSuccess.securePaymentsDesc",
                  "Integrated trusted gateways for customer confidence.",
                )}
              </li>
              <li>
                <strong>
                  {t("ecommerceSuccess.seoMarketing", "SEO & Marketing:")}
                </strong>{" "}
                {t(
                  "ecommerceSuccess.seoMarketingDesc",
                  "Boosted visibility and attracted organic traffic.",
                )}
              </li>
              <li>
                <strong>{t("ecommerceSuccess.analytics", "Analytics:")}</strong>{" "}
                {t(
                  "ecommerceSuccess.analyticsDesc",
                  "Tracked growth and customer behavior for ongoing improvement.",
                )}
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
              {t("ecommerceSuccess.resultsTitle", "Results & Insights")}
            </h3>
            <p>
              {t(
                "ecommerceSuccess.resultsIntro",
                "Within six months, sales increased by",
              )}
              <span className="font-extrabold">300%</span>.{" "}
              {t(
                "ecommerceSuccess.resultsRest",
                "Customer engagement and repeat purchases grew dramatically. The business now enjoys a scalable platform ready for future growth.",
              )}
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow mb-8">
              <h4 className="text-xl font-bold mb-2 text-[#00bcd4]">
                {t("ecommerceSuccess.takeawaysTitle", "Actionable Takeaways")}
              </h4>
              <ul className="list-disc pl-6">
                <li>
                  {t(
                    "ecommerceSuccess.takeaway1",
                    "Invest in a user-friendly, mobile-ready website.",
                  )}
                </li>
                <li>
                  {t(
                    "ecommerceSuccess.takeaway2",
                    "Focus on secure payments and easy checkout.",
                  )}
                </li>
                <li>
                  {t(
                    "ecommerceSuccess.takeaway3",
                    "Leverage SEO and digital marketing for visibility.",
                  )}
                </li>
                <li>
                  {t(
                    "ecommerceSuccess.takeaway4",
                    "Use analytics to guide business decisions.",
                  )}
                </li>
              </ul>
            </div>
            <p>
              {t(
                "ecommerceSuccess.readyToTransform",
                "Ready to transform your business?",
              )}{" "}
              <Link href="/contact-us">
                <span className="text-[#00bcd4] font-bold hover:underline">
                  {t("ecommerceSuccess.contactTeam", "Contact our team")}
                </span>
              </Link>{" "}
              {t(
                "ecommerceSuccess.freeConsultation",
                "for a free consultation.",
              )}
            </p>
            <div className="mt-10">
              <div
                onClick={() => window.history.back()}
                className="inline-block  cursor-default px-8 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide"
              >
                {t("ecommerceSuccess.backToBlog", "Back to Blog")}
              </div>
            </div>
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default EcommerceSuccess;
