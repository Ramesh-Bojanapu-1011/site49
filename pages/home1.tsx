import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Hedder";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  AwardIcon,
  Clock10,
  FolderKanban,
  Star,
  StarHalfIcon,
  User2,
} from "lucide-react";

const Home1 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home1.pageTitle")}</title>
      </Head>
      <main className=" max-h-screen flex flex-col caret-transparent overflow-auto  [&::-webkit-scrollbar]:hidden">
        <Header />
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center px-6 py-16 mx-auto w-full overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 opacity-50 w-full object-cover min-h-screen z-0"
          >
            <source src="/home1-bg-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 z-10 bg-white/60 dark:bg-black/60 pointer-events-none" />
          <div className="flex text-center w-full flex-col items-center z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-lg">
              {t("home1.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-900 dark:text-gray-300 mb-8 drop-shadow">
              {t("home1.heroDesc")}
            </p>
            <a
              href="/contact-us"
              className="inline-block px-8 py-3 w-fit rounded-lg bg-amber-50 dark:bg-black dark:text-white font-semibold shadow-lg hover:bg-[#0097a7] transition-colors duration-200 text-lg"
            >
              {t("home1.heroBtn")}
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="  w-full bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="py-16 px-6 max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/about-main.jpg"
                  alt={t("home1.aboutImgAlt")}
                  className="w-full h-[400px] rounded-3xl shadow-2xl object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-tr from-[#00bcd4] to-cyan-400 rounded-3xl shadow-2xl p-1">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center">
                      {t("home1.aboutTitle")}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify  ">
                      {t("home1.aboutDesc")}
                    </p>
                    <a
                      href="/about-us"
                      className="inline-block px-8 py-3 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg tracking-wide text-center"
                    >
                      {t("home1.aboutBtn")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-16 px-6 mx-auto w-full bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#00bcd4]">
            {t("home1.whyTitle")}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Stats Cards */}
            {[
              {
                label: t("home1.projectsCompleted"),
                value: "120+",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 shadow-lg mb-4">
                    <FolderKanban />
                  </span>
                ),
              },
              {
                label: t("home1.happyClients"),
                value: "80+",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-[#00bcd4] shadow-lg mb-4">
                    <User2 />
                  </span>
                ),
              },
              {
                label: t("home1.yearsExperience"),
                value: "5+",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-[#00bcd4] shadow-lg mb-4">
                    <Clock10 />
                  </span>
                ),
              },
              {
                label: t("home1.awardsWon"),
                value: "10",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-pink-400 to-[#00bcd4] shadow-lg mb-4">
                    <AwardIcon />
                  </span>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="min-w-[220px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center mx-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {stat.icon}
                <div className="text-4xl font-extrabold text-[#00bcd4] mb-2 animate-pulse">
                  {stat.value}
                </div>
                <div className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Success Stories Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="px-6 max-w-7xl mx-auto w-full">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#00bcd4]">
              {t("home1.featuredTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t("home1.ecommerceTitle"),
                  img: "/success-ecommerce.jpg",
                  desc: t("home1.ecommerceDesc"),
                },
                {
                  title: t("home1.brandTitle"),
                  img: "/success-brand.jpg",
                  desc: t("home1.brandDesc"),
                },
                {
                  title: t("home1.nonprofitTitle"),
                  img: "/success-nonprofit.jpg",
                  desc: t("home1.nonprofitDesc"),
                },
              ].map((story) => (
                <div
                  key={story.title}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
                >
                  <Image
                    src={story.img}
                    alt={story.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-top object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h4 className="font-bold text-lg mb-2 text-[#00bcd4]">
                      {story.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {story.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-20 px-6 mx-auto w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#00bcd4] via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {t("home1.reviewsTitle")}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00bcd4] to-cyan-400 mx-auto rounded-full mb-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: t("home1.review1Name"),
                  avatar: "/review1.jpg",
                  rating: 5,
                  text: t("home1.review1Text"),
                },
                {
                  name: t("home1.review2Name"),
                  avatar: "/review2.jpg",
                  rating: 4.5,
                  text: t("home1.review2Text"),
                },
                {
                  name: t("home1.review3Name"),
                  avatar: "/review3.jpg",
                  rating: 5,
                  text: t("home1.review3Text"),
                },
              ].map((review, index) => (
                <div
                  key={review.name}
                  className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 ${
                    index === 1 ? "lg:scale-105 lg:shadow-xl" : ""
                  }`}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00bcd4]/20 via-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>

                  {/* Quote icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#00bcd4] to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">"</span>
                  </div>

                  <div className="pt-6">
                    {/* Rating */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center bg-amber-50 dark:bg-amber-900/30 px-4 py-2 rounded-full">
                        {[...Array(Math.floor(review.rating))].map((_, i) => (
                          <Star
                            key={i}
                            className="text-amber-400 w-5 h-5 fill-current"
                          />
                        ))}
                        {review.rating % 1 !== 0 && (
                          <StarHalfIcon className="text-amber-400 w-5 h-5 fill-current" />
                        )}
                        <span className="ml-2 text-sm font-semibold text-amber-600 dark:text-amber-400">
                          {review.rating}
                        </span>
                      </div>
                    </div>

                    {/* Review text */}
                    <blockquote className="text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed font-medium">
                      "{review.text}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex flex-col items-center">
                      <div className="relative mb-4">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={80}
                          height={80}
                          className="rounded-full w-20 h-20 object-cover border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00bcd4]/20 to-cyan-400/20 group-hover:animate-pulse"></div>
                      </div>

                      <div className="text-center">
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                          {review.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Collaborate Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900  mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center">
                {t("home1.collabTitle")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                {t("home1.collabDesc")}
              </p>
              <a
                href="/contact-us"
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-xl tracking-wide text-nowrap text-center"
              >
                {t("home1.collabBtn")}
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home1;
