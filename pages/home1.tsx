import React, { useEffect, useState } from "react";
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

// Small, reusable heading component with decorative accent
const SectionHeading: React.FC<{
  children: React.ReactNode;
  accent?: string;
}> = ({ children, accent = "from-[#00bcd4] via-cyan-400 to-blue-500" }) => (
  <div className="relative mb-12 text-center">
    <h2
      className={`text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${accent} bg-clip-text text-transparent drop-shadow-sm inline-block`}
    >
      {children}
    </h2>
    <span className="block w-24 h-[3px] mx-auto mt-4 bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 rounded-full" />
  </div>
);

const Home1 = () => {
  const { t } = useTranslation();

  // Auto-highlight index for reviews
  const [activeReview, setActiveReview] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setActiveReview((p) => (p + 1) % 3);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Head>
        <title>{t("home1.pageTitle")}</title>
      </Head>
      <main className="max-h-screen flex flex-col caret-transparent overflow-auto [&::-webkit-scrollbar]:hidden bg-gradient-to-b from-white via-white/60 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative">
        {/* Global subtle background patterns */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#00bcd4]/15 via-cyan-400/10 to-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/10 via-[#00bcd4]/15 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-72 bg-[radial-gradient(circle_at_center,rgba(0,188,212,0.18),transparent_65%)]" />
        </div>
        <Header />

        {/* Hero Section */}
        <section className="relative flex min-h-[92vh] items-center px-6 md:px-10 py-20 mx-auto w-full overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 opacity-40 w-full object-cover min-h-full z-0"
          >
            <source src="/home1-bg-video.mp4" type="video/mp4" />
          </video>
          {/* Layered overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/70 via-white/55 to-transparent dark:from-gray-950/80 dark:via-gray-900/70 dark:to-gray-900/30 backdrop-blur-[2px]" />
          <div
            className="absolute inset-0 z-10 mix-blend-overlay opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(120deg,rgba(0,188,212,0.15) 0%,rgba(6,182,212,0.08) 40%,transparent 80%)",
            }}
          />
          <div className="absolute inset-0 z-10 opacity-[0.35] [background:radial-gradient(circle_at_25%_20%,rgba(0,188,212,0.55),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.35),transparent_60%)]" />
          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.08] bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] [background-size:60px_60px]" />

          <div className="relative flex text-center w-full flex-col items-center z-20 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] bg-gradient-to-br from-[#00bcd4] via-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              {t("home1.heroTitle")}
            </h1>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl font-medium">
              {t("home1.heroDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <a
                href="/about-us"
                className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-bold text-white text-lg tracking-wide overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-[#00bcd4] via-cyan-400 to-blue-500 transition-transform duration-300 group-hover:scale-105" />
                <span className="relative">{t("home1.aboutBtn")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative w-full py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-50/40 to-transparent dark:via-cyan-900/10" />
          <div className="relative px-6 md:px-10 max-w-7xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div className="relative group order-2 md:order-1">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#00bcd4]/30 via-cyan-400/30 to-blue-500/30 opacity-0 blur-xl group-hover:opacity-100 transition duration-700" />
                <div className="relative overflow-hidden rounded-3xl ring-1 ring-cyan-100/60 dark:ring-gray-800 shadow-xl shadow-cyan-500/10">
                  <Image
                    src="/about-main.jpg"
                    alt={t("home1.aboutImgAlt")}
                    className="w-full h-[420px] object-cover scale-[1.02] group-hover:scale-105 transition duration-[3500ms] ease-[cubic-bezier(.16,.84,.44,1)]"
                    width={640}
                    height={420}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-60 mix-blend-luminosity" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <SectionHeading>{t("home1.aboutTitle")}</SectionHeading>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-justify">
                  {t("home1.aboutDesc")}
                </p>
                <div className="flex gap-5 flex-wrap">
                  <a
                    href="/about-us"
                    className="group relative inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 group-hover:scale-105 transition-transform" />
                    <span className="relative tracking-wide">
                      {t("home1.aboutBtn")}
                    </span>
                  </a>
                  <a
                    href="/contact-us"
                    className="relative inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-[#00bcd4] dark:text-cyan-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur border border-cyan-100/70 dark:border-gray-700 hover:shadow-lg hover:-translate-y-0.5 transition"
                  >
                    {t("home1.collabBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="relative py-28 px-6 md:px-10 mx-auto w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-100/40 to-transparent dark:via-cyan-900/5" />
          <div className="relative max-w-7xl mx-auto">
            <SectionHeading>{t("home1.whyTitle")}</SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  label: t("home1.projectsCompleted"),
                  value: "120+",
                  icon: FolderKanban,
                  grad: "from-[#00bcd4] to-cyan-400",
                },
                {
                  label: t("home1.happyClients"),
                  value: "80+",
                  icon: User2,
                  grad: "from-green-400 to-[#00bcd4]",
                },
                {
                  label: t("home1.yearsExperience"),
                  value: "5+",
                  icon: Clock10,
                  grad: "from-yellow-400 to-[#00bcd4]",
                },
                {
                  label: t("home1.awardsWon"),
                  value: "10",
                  icon: AwardIcon,
                  grad: "from-pink-400 to-[#00bcd4]",
                },
              ].map((card, i) => (
                <div
                  key={card.label}
                  className="group relative rounded-3xl p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-cyan-100/70 dark:border-gray-800 shadow-sm hover:shadow-2xl transition duration-500 overflow-hidden flex flex-col items-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br ${card.grad} text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition`}
                  >
                    <card.icon className="w-10 h-10" />
                  </div>
                  <div className="text-5xl font-black tracking-tight bg-gradient-to-r from-[#00bcd4] via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    {card.value}
                  </div>
                  <p className="mt-3 font-semibold text-center text-gray-700 dark:text-gray-300 leading-snug">
                    {card.label}
                  </p>
                  <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00bcd4]/15 via-cyan-400/15 to-blue-500/15 transition" />
                  <div className="absolute -bottom-10 group-hover:bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 rounded-t-xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Success Stories Section */}
        <section className="relative py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white dark:via-gray-900 to-transparent" />
          <div className="relative px-6 md:px-10 max-w-7xl mx-auto w-full">
            <SectionHeading>{t("home1.featuredTitle")}</SectionHeading>
            <div className="grid md:grid-cols-3 gap-10">
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
              ].map((story, i) => (
                <article
                  key={story.title}
                  className="group relative flex flex-col rounded-3xl overflow-hidden bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-cyan-100/60 dark:border-gray-800 hover:shadow-2xl shadow-sm transition duration-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={story.img}
                      alt={story.title}
                      width={600}
                      height={320}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-[2500ms] ease-[cubic-bezier(.16,.84,.44,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent mix-blend-overlay opacity-70" />
                  </div>
                  <div className="flex-1 flex flex-col p-7">
                    <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-[#00bcd4] to-cyan-500 bg-clip-text text-transparent">
                      {story.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {story.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00bcd4]/10 via-cyan-400/10 to-blue-500/10 transition" />
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 transition-all duration-700" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="relative py-28 px-6 md:px-10 mx-auto w-full  ">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900" />
          <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-200/25 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-200/25 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto z-10">
            <SectionHeading>{t("home1.reviewsTitle")}</SectionHeading>
            <div className="grid lg:grid-cols-3 gap-10">
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
              ].map((review, index) => {
                const isActive = index === activeReview;
                return (
                  <div
                    key={review.name}
                    className={`group relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-700 flex flex-col h-full ${
                      isActive
                        ? "bg-white/90 dark:bg-gray-900/80 border-cyan-300/60 shadow-2xl shadow-cyan-500/20 scale-[1.04]"
                        : "bg-white/60 dark:bg-gray-800/60 border-cyan-100/30 dark:border-gray-700/40 hover:shadow-xl"
                    }`}
                  >
                    {/* Glow ring */}
                    {isActive && (
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#00bcd4]/40 via-cyan-400/30 to-blue-500/30 blur-xl opacity-80 pointer-events-none" />
                    )}
                    <div className="relative flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              width={70}
                              height={70}
                              className="rounded-full w-16 h-16 object-cover border-4 border-white dark:border-gray-900 shadow-md group-hover:scale-105 transition"
                            />
                            <span className="absolute -bottom-1 -right-1 px-2 py-[2px] rounded-full text-[10px] font-semibold bg-gradient-to-r from-[#00bcd4] to-cyan-400 text-white shadow ring-1 ring-white/60 dark:ring-gray-900/80">
                              {review.rating}
                            </span>
                          </div>
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                            {review.name}
                          </h4>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/30 px-3 py-1 rounded-full">
                          {[...Array(Math.floor(review.rating))].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-amber-400 fill-current"
                            />
                          ))}
                          {review.rating % 1 !== 0 && (
                            <StarHalfIcon className="w-4 h-4 text-amber-400 fill-current" />
                          )}
                        </div>
                      </div>
                      <blockquote className="relative text-gray-700 dark:text-gray-300 italic leading-relaxed font-medium mb-6">
                        <span className="text-cyan-500 font-black text-3xl align-top mr-1">
                          “
                        </span>
                        {review.text}
                        <span className="text-cyan-500 font-black text-3xl align-bottom ml-1">
                          ”
                        </span>
                      </blockquote>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Indicator dots */}
            <div className="mt-10 flex items-center justify-center gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setActiveReview(i)}
                  className={`h-3 w-3 rounded-full transition ${
                    i === activeReview
                      ? "bg-gradient-to-r from-[#00bcd4] to-cyan-400 w-8"
                      : "bg-cyan-300/40 hover:bg-cyan-400/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Let's Collaborate Section */}
        <section className="relative py-28 px-6 md:px-10 mx-auto w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-100/40 dark:via-cyan-900/10 to-transparent" />
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-[2px] bg-gradient-to-br from-[#00bcd4] via-cyan-400 to-blue-500">
              <div className="relative grid md:grid-cols-3 gap-10 bg-white dark:bg-gray-950 rounded-3xl p-10 md:p-14 shadow-xl">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6 bg-gradient-to-r from-[#00bcd4] to-cyan-500 bg-clip-text text-transparent">
                    {t("home1.collabTitle")}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                    {t("home1.collabDesc")}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/contact-us"
                      className="group relative inline-flex items-center justify-center px-9 py-4 rounded-2xl font-semibold text-white text-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 group-hover:scale-105 transition-transform" />
                      <span className="relative">{t("home1.collabBtn")}</span>
                    </a>
                    <a
                      href="/services"
                      className="relative inline-flex items-center justify-center px-9 py-4 rounded-2xl font-semibold text-[#00bcd4] dark:text-cyan-300 text-lg bg-white/80 dark:bg-gray-900/70 backdrop-blur border border-cyan-100 dark:border-gray-800 hover:-translate-y-0.5 hover:shadow-xl transition"
                    >
                      {t("home1.aboutBtn")}
                    </a>
                  </div>
                </div>
                <div className="relative flex md:items-center">
                  <ul className="space-y-5 text-sm font-medium w-full">
                    {[
                      t("home1.projectsCompleted"),
                      t("home1.happyClients"),
                      t("home1.yearsExperience"),
                      t("home1.awardsWon"),
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00bcd4] to-cyan-400 animate-pulse" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-tr from-[#00bcd4]/30 via-cyan-400/30 to-blue-500/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home1;
