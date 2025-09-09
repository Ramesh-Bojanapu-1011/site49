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
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Hero Section */}
        <section className="  flex min-h-screen   items-center   px-6 py-16   mx-auto w-full  ">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 opacity-50 w-full h-full object-cover z-0"
          >
            <source src="/home1-bg-video.mp4" type="video/mp4" />
          </video>

          <div className="flex text-center w-full flex-col items-center z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-lg">
              {t("home1.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 drop-shadow">
              {t("home1.heroDesc")}
            </p>
            <a
              href="/contact-us"
              className="inline-block px-8 py-3 w-fit   rounded-lg bg-amber-50 dark:bg-black dark:text-white font-semibold shadow-lg hover:bg-[#0097a7] transition-colors duration-200 text-lg"
            >
              {t("home1.heroBtn")}
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto w-full">
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
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col   justify-center">
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
        </section>

        {/* Why Choose Me Section */}
        <section className="py-16 px-6 mx-auto w-full">
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
        <section className="py-16 px-6 max-w-7xl mx-auto w-full">
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
                  className="w-full h-48 object-cover"
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
        </section>

        {/* Client Reviews Section */}
        <section className="py-16 px-6   mx-auto w-full">
          <h2 className="text-3xl  font-bold mb-6 text-center text-[#00bcd4]">
            {t("home1.reviewsTitle")}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between   gap-8 pb-4  ">
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
            ].map((review) => (
              <div
                key={review.name}
                className="min-w-[320px] max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center mx-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="rounded-full mb-4 w-20 h-20 object-cover object-top border-4 border-[#00bcd4]"
                />
                <div className="flex items-center justify-center mb-2">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-6 h-6" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <StarHalfIcon className="text-yellow-400 w-6 h-6" />
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "{review.text}"
                </p>
                <div className="font-semibold text-[#00bcd4]">
                  - {review.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Let's Collaborate Section */}
        <section className="py-16 px-6   mx-auto w-full">
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
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-xl tracking-wide"
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
