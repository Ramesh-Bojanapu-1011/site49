import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const caseStudies = [
    {
      title: t("blog.caseStudy1Title"),
      img: "/case-study1.jpg",
      desc: t("blog.caseStudy1Desc"),
      link: "/ecommerce-success",
    },
    {
      title: t("blog.caseStudy2Title"),
      img: "/case-study2.jpg",
      desc: t("blog.caseStudy2Desc"),
      link: "/personal-brand",
    },
    {
      title: t("blog.caseStudy3Title"),
      img: "/case-study3.jpg",
      desc: t("blog.caseStudy3Desc"),
      link: "/corporate-redesign",
    },
  ];
  const categories = [
    {
      title: t("blog.categoryDesignTitle"),
      desc: t("blog.categoryDesignDesc"),
      color: "bg-gradient-to-tr from-pink-400 to-fuchsia-500",
    },
    {
      title: t("blog.categorySeoTitle"),
      desc: t("blog.categorySeoDesc"),
      color: "bg-gradient-to-tr from-cyan-400 to-blue-500",
    },
    {
      title: t("blog.categoryBrandingTitle"),
      desc: t("blog.categoryBrandingDesc"),
      color: "bg-gradient-to-tr from-yellow-400 to-orange-500",
    },
    {
      title: t("blog.categoryContentTitle"),
      desc: t("blog.categoryContentDesc"),
      color: "bg-gradient-to-tr from-green-400 to-teal-500",
    },
  ];
  const authors = [
    {
      name: t("blog.author1Name"),
      bio: t("blog.author1Bio"),
      img: "/avatars/ramesh.jpg",
      link: "/authors/ramesh-b",
    },
    {
      name: t("blog.author2Name"),
      bio: t("blog.author2Bio"),
      img: "/avatars/priya.jpg",
      link: "/authors/priya-s",
    },
    {
      name: t("blog.author3Name"),
      bio: t("blog.author3Bio"),
      img: "/avatars/david.jpg",
      link: "/authors/david-l",
    },
  ];
  const tips = [
    {
      tip: t("blog.tip1Text"),
      author: t("blog.tip1Author"),
      color: "from-pink-400 to-fuchsia-500",
      icon: "💡",
    },
    {
      tip: t("blog.tip2Text"),
      author: t("blog.tip2Author"),
      color: "from-cyan-400 to-blue-500",
      icon: "📝",
    },
    {
      tip: t("blog.tip3Text"),
      author: t("blog.tip3Author"),
      color: "from-yellow-400 to-orange-500",
      icon: "🎨",
    },
    {
      tip: t("blog.tip4Text"),
      author: t("blog.tip4Author"),
      color: "from-green-400 to-teal-500",
      icon: "🚀",
    },
    {
      tip: t("blog.tip5Text"),
      author: t("blog.tip5Author"),
      color: "from-purple-400 to-indigo-500",
      icon: "📖",
    },
    {
      tip: t("blog.tip6Text"),
      author: t("blog.tip6Author"),
      color: "from-red-400 to-pink-500",
      icon: "🤝",
    },
  ];
  return (
    <>
      <Head>
        <title>{t("blog.pageTitle")}</title>
        <meta name="description" content={t("blog.pageDesc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("blog.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("blog.heroDesc")}
            </p>
            <Link
              href="#latest"
              className="px-8 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide animate-bounce"
            >
              {t("blog.heroBtn")}
            </Link>
          </div>
        </section>

        {/* Featured Case Studies Section */}
        <section id="latest" className="py-16 px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#00bcd4]">
            {t("blog.caseStudiesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col"
              >
                <Image
                  src={study.img}
                  alt={study.title}
                  width={500}
                  height={220}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-bold text-xl mb-2 text-[#00bcd4]">
                    {study.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                    {study.desc}
                  </p>
                  <a
                    href={study.link}
                    className="inline-block mt-auto px-6 py-2 rounded-lg bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-base"
                  >
                    {t("blog.caseStudyReadMore")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Explore Blog Categories */}
        <section className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row md:items-start gap-12">
          <div className="md:w-1/2 flex  flex-col justify-center mb-10 md:mb-0">
            <h2 className="text-4xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da]">
              {t("blog.categoriesTitle")}
            </h2>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {t("blog.categoriesDesc1")}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400">
              {t("blog.categoriesDesc2")}
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className={`group ${cat.color} rounded-2xl shadow-xl p-8 flex flex-col items-start hover:scale-105 transition-all duration-300`}
              >
                <div className="font-bold text-2xl text-white mb-2">
                  {cat.title}
                </div>
                <div className="text-white/90 text-base mb-2">{cat.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Author Spotlight (Vertical Cards) */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
            {t("blog.authorsTitle")}
          </h2>
          <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
            {authors.map((author, idx) => (
              <Link
                key={idx}
                href={author.link}
                className="w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <Image
                  src={author.img}
                  alt={author.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-6 border-4 border-[#00bcd4] shadow-lg"
                />
                <div className="font-bold text-xl text-[#00bcd4] mb-1 text-center">
                  {author.name}
                </div>
                <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                  {author.bio}
                </div>
                <span className="text-cyan-500 font-bold hover:underline">
                  {t("blog.authorsViewProfile")}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 5: Quick Tips (Masonry Grid) */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-4xl font-extrabold mb-10 text-[#0097a7] dark:text-[#26c6da] text-left md:text-center">
            {t("blog.tipsTitle")}
          </h2>
          <div className="flex gap-8 flex-wrap justify-center pb-4">
            {tips.map((item, idx) => (
              <div
                key={idx}
                className={`min-w-[320px] max-w-xs bg-gradient-to-tr ${item.color} rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all duration-300 text-white relative`}
              >
                <div className="absolute top-6 left-6 text-4xl drop-shadow-lg">
                  {item.icon}
                </div>
                <div className="text-lg font-semibold mb-4 mt-8 text-center">
                  {item.tip}
                </div>
                <div className="text-sm font-bold text-cyan-100 text-center">
                  {item.author}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Subscribe CTA (Gradient Card) */}
        <section className="py-20   mx-auto w-full flex flex-col items-center justify-center">
          <div className="relative group w-full  ">
            <div className="relative bg-white dark:bg-gray-900     p-12 flex flex-col items-center justify-center min-w-[340px]">
              <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center drop-shadow-lg">
                {t("blog.subscribeTitle")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                {t("blog.subscribeDesc")}
              </p>
              <form className="w-full flex max-w-2xl  justify-center items-center gap-4">
                <input
                  type="email"
                  placeholder={t("blog.subscribePlaceholder")}
                  className="w-full px-6 py-3 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105   text-xl tracking-wide  "
                >
                  {t("blog.subscribeBtn")}
                </button>
              </form>
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
          `}</style>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Blog;
