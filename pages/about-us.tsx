import React from "react";
import Image from "next/image";
import Header from "@/components/Hedder";
import Head from "next/head";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("aboutUs.pageTitle")}</title>
        <meta name="description" content={t("aboutUs.pageDesc")} />
      </Head>
      <main className=" min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center  ">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          >
            <source src="/about-bg-video.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("aboutUs.heroTitle")}
            </h1>
            <p className="text-xl  dark:text-gray-300 mb-8">
              {t("aboutUs.heroDesc")}
            </p>
          </div>
        </section>

        {/* Section 2: Our Story (Split Image + Content) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6   mx-auto w-full flex flex-col md:flex-row items-center gap-12 ">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/about-main.jpg"
                alt={t("aboutUs.storyImgAlt")}
                width={400}
                height={400}
                className="rounded-3xl w-150 h-150 shadow-2xl object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 text-[#00bcd4]">
                {t("aboutUs.storyTitle")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300  ">
                {t("aboutUs.storyDesc1")}
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
                {t("aboutUs.storyDesc2")}
              </p>
              <ul className="space-y-4">
                {[
                  { year: "2017", desc: t("aboutUs.timeline2017") },
                  { year: "2018", desc: t("aboutUs.timeline2018") },
                  { year: "2019", desc: t("aboutUs.timeline2019") },
                  { year: "2020", desc: t("aboutUs.timeline2020") },
                  { year: "2021", desc: t("aboutUs.timeline2021") },
                  { year: "2022", desc: t("aboutUs.timeline2022") },
                  { year: "2024", desc: t("aboutUs.timeline2024") },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                      {item.year}
                    </span>
                    <span className="text-gray-800 dark:text-gray-200">
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Meet the Team (Horizontal Scroll Carousel) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 justify-center flex flex-col items-center   mx-auto w-full">
            <h2 className="text-3xl font-bold mb-12 text-[#00bcd4] text-center">
              {t("aboutUs.teamTitle")}
            </h2>
            <div className="flex flex-wrap gap-10 pb-4">
              {[
                {
                  name: t("aboutUs.team1Name"),
                  role: t("aboutUs.team1Role"),
                  img: "/team1.jpg",
                  fun: t("aboutUs.team1Fun"),
                  socials: [
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#fff"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="#0a66c2"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                            ></path>
                          </g>
                        </svg>
                      ),
                      url: "#",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#fff"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="#1d9bf0"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                            ></path>
                          </g>
                        </svg>
                      ),
                      url: "#",
                    },
                  ],
                },
                {
                  name: t("aboutUs.team2Name"),
                  role: t("aboutUs.team2Role"),
                  img: "/team2.jpg",
                  fun: t("aboutUs.team2Fun"),
                  socials: [
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#fff"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="#0a66c2"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                            ></path>
                          </g>
                        </svg>
                      ),
                      url: "#",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
                          ></path>
                        </svg>
                      ),
                      url: "#",
                    },
                  ],
                },
                {
                  name: t("aboutUs.team3Name"),
                  role: t("aboutUs.team3Role"),
                  img: "/team3.jpg",
                  fun: t("aboutUs.team3Fun"),
                  socials: [
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#fff"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="#0a66c2"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                            ></path>
                          </g>
                        </svg>
                      ),
                      url: "#",
                    },
                    {
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="url(#SVGWRUqebek)"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="url(#SVGfkNpldMH)"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                            ></path>
                            <defs>
                              <radialGradient
                                id="SVGWRUqebek"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#fd5"></stop>
                                <stop offset={0.1} stopColor="#fd5"></stop>
                                <stop offset={0.5} stopColor="#ff543e"></stop>
                                <stop offset={1} stopColor="#c837ab"></stop>
                              </radialGradient>
                              <radialGradient
                                id="SVGfkNpldMH"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3771c8"></stop>
                                <stop offset={0.128} stopColor="#3771c8"></stop>
                                <stop
                                  offset={1}
                                  stopColor="#60f"
                                  stopOpacity={0}
                                ></stop>
                              </radialGradient>
                            </defs>
                          </g>
                        </svg>
                      ),
                      url: "#",
                    },
                  ],
                },
              ].map((member, idx) => (
                <div
                  key={idx}
                  className="w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center relative hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-6 border-4 w-20 h-20 object-cover object-top border-[#00bcd4] shadow-lg"
                  />
                  <div className="font-bold text-2xl text-[#00bcd4] mb-1 text-center">
                    {member.name}
                  </div>
                  <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                    {member.role}
                  </div>
                  <div className="italic text-sm text-cyan-600 dark:text-cyan-300 mb-4 text-center">
                    {member.fun}
                  </div>
                  <div className="flex gap-4 mt-2">
                    {member.socials.map((social, sidx) => (
                      <a
                        key={sidx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Our Values (Horizontal Stepper) */}
        <section className=" bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6   mx-auto w-full">
            <h2 className="text-3xl font-bold mb-14 text-[#00bcd4] text-center">
              {t("aboutUs.valuesTitle")}
            </h2>
            <div className="flex flex-wrap gap-2  items-center justify-center md:gap-0 relative">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={45}
                      height={45}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="#020202"
                          d="M18.287 11.684a7.7 7.7 0 0 0-1.305-3.748a6.7 6.7 0 0 0-7.286-2.72a6.87 6.87 0 0 0-5.262 5.65a5.6 5.6 0 0 0 0 1.585c.076.547.278 1.068.588 1.525c.548.777 1.395.997 1.824 1.604c.166.235.24.522.209.808a.27.27 0 0 0 .249.289h.28q1.071.296 2.172.448q.471.06.947.06h.946c.728 0 1.446-.14 2.183-.24a.309.309 0 1 0-.03-.617l-2.153-.12H7.603c0-.33-.1-.654-.289-.926c-.409-.589-1.236-.858-1.754-1.635a3 3 0 0 1-.409-1.256a4.8 4.8 0 0 1 .02-1.405a6.05 6.05 0 0 1 4.754-4.814a5.74 5.74 0 0 1 6.2 2.352a6.7 6.7 0 0 1 1.136 3.22a3.92 3.92 0 0 1-.997 3.069a6 6 0 0 1-.478.429c-.449.348-.897.628-1.336.996c-.162.161-.282.36-.349.578a8 8 0 0 0-.219.997c-.01.23-.086.45-.22.638a3.2 3.2 0 0 1-2.232.767a10.2 10.2 0 0 1-3.628-.787c.09-.16 0-.648 0-.947a.32.32 0 0 0-.329-.299a.31.31 0 0 0-.289.329c0 .399-.07.907 0 1.126a.43.43 0 0 0 .25.31c1.278.59 2.66.928 4.066.996a3.93 3.93 0 0 0 2.79-.917c.16-.155.28-.347.35-.558a7 7 0 0 0 .239-.997c-.005-.176.033-.35.11-.508c.438-.379.876-.628 1.315-.997q.31-.229.578-.508a4.84 4.84 0 0 0 1.405-3.777"
                        ></path>
                        <path
                          fill="#0c6fff"
                          d="M9.696 13.976c.06-.578.1-1.166.15-1.744q.234.242.528.408c.318.202.69.302 1.067.29c.35-.01.692-.106.996-.28v.827q-.005.974.16 1.934c0 .21.498.339.598 0q-.091-.967 0-1.933q.208-1.316.588-2.592a.44.44 0 0 0-.2-.518a.45.45 0 0 0-.608.06a.7.7 0 0 0-.1.16l-.109.218l-.24.39a1.6 1.6 0 0 1-.508.457a1.14 1.14 0 0 1-.597.18a1 1 0 0 1-.628-.23a1.75 1.75 0 0 1-.519-.597l-.179-.449c0-.09-.07-.309-.09-.369a.5.5 0 0 0-.398-.199a.46.46 0 0 0-.449.13c-.319.339-.07 2.252-.21 4.475q.038.323 0 .648c0 .418.47.538.579.1c.106-.448.163-.906.17-1.366M3.098 6.182a3 3 0 0 0-.408-.409l-.459-.339c-.369-.239-.757-.428-1.146-.647a.32.32 0 0 0-.439.07a.31.31 0 0 0 .07.428c.3.309.588.618.897.917c.13.13.26.259.389.369c.13.11.27.229.409.338q.518.353.996.758a.27.27 0 0 0 .379 0a.27.27 0 0 0 .05-.389a5.8 5.8 0 0 0-.738-1.096m3.967-4.445q.075.276.19.538c.07.17.139.339.228.508c.21.389.459.738.678 1.136a.28.28 0 0 0 .518-.189a12 12 0 0 0-.269-1.326c-.05-.179-.12-.358-.189-.538a4 4 0 0 0-.21-.508C7.754.959 7.514.6 7.285.212a.31.31 0 0 0-.409-.19a.31.31 0 0 0-.169.4c.12.468.22.896.359 1.315m7.444 2.621a.27.27 0 0 0 .299-.24q.21-.543.369-1.106c.05-.219.07-.448.1-.667a6 6 0 0 1 .109-.997a.328.328 0 0 0-.568-.329a4.3 4.3 0 0 0-.508.997q-.075.225-.12.458q-.015.235 0 .469c0 .378.08.717.11 1.056c-.044.157.05.32.209.359m8.572 3.139c-.469 0-.907-.07-1.366-.07h-.588c-.19 0-.389.07-.578.12q-.669.226-1.286.568a.279.279 0 1 0 .18.519c.448-.07.867-.07 1.295-.1l.538-.06l.549-.1c.428-.09.847-.199 1.295-.289a.33.33 0 0 0 .29-.338a.31.31 0 0 0-.33-.25"
                        ></path>
                        <path
                          fill="#020202"
                          d="M12.915 21.002q-.497.031-.996 0c-.32 0-.638-.05-.997-.07l-.997-.05c-.657 0-1.305 0-1.993-.07a.28.28 0 0 0-.329.21a.28.28 0 0 0 .21.33a10.4 10.4 0 0 0 1.724.517q.385.07.777.08q.39.03.777 0q.967-.079 1.904-.329a.32.32 0 0 0 .26-.359a.31.31 0 0 0-.34-.259m-1.075 2.014a8 8 0 0 1-.997-.09a5 5 0 0 0-.658 0c-.399 0-.768.1-1.156.14a.27.27 0 0 0-.3.239a.3.3 0 0 0 .25.309q.504.192 1.026.328q.223.04.449.05q.229.015.458 0A4.2 4.2 0 0 0 12 23.624a.31.31 0 0 0-.13-.608z"
                        ></path>
                      </g>
                    </svg>
                  ),
                  title: t("aboutUs.valueCreativityTitle"),
                  desc: t("aboutUs.valueCreativityDesc"),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={45}
                      height={45}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd" clipRule="evenodd">
                        <path
                          fill="#020202"
                          d="M9.068 10.263c.43.17.887.261 1.349.27q.58.037 1.16 0c.799-.06 1.388-.24 2.477-.29c.22 0 .86.07 1.27 0a1.36 1.36 0 0 0 .609-.2c.351-.26.608-.63.73-1.05c.18-.758.237-1.54.17-2.318c0-.57.079-1.638 0-2.508a3.3 3.3 0 0 0-.32-1.259a7.5 7.5 0 0 0-.89-1.219A17 17 0 0 0 14.104.16a.63.63 0 0 0-.44-.16c-.33 0-1.119.15-1.249.16L9.508.55a.39.39 0 0 0-.32.26a.35.35 0 0 0-.33-.23a.34.34 0 0 0-.33.35l-.1 5.935c0 .44-.14 1.17-.15 1.789c-.016.32.024.642.12.95a1.18 1.18 0 0 0 .67.659m5.756-7.894c.275.33.517.689.72 1.069c.074.181.117.374.129.57l-.06-.01a15 15 0 0 0-1.709-.23a1.8 1.8 0 0 1-.6-.2c0-.17.08-.44.08-.63v-.95l-.06-.859c.14 0 .26 0 .31-.1q.632.638 1.19 1.34m-5.226-1l2.867-.26l-.15.85c0 .08-.11.42-.18.81a7 7 0 0 0-.06.889a1.16 1.16 0 0 0 .38.939c.323.18.681.285 1.05.31c.66 0 1.349-.16 1.998-.12a.32.32 0 0 0 .19 0c0 .76-.11 1.559-.11 1.998q.057.705 0 1.41c-.2 1.568-.91.789-1.549.819c-1.109.07-1.709.25-2.528.33a8 8 0 0 1-1 0a4 4 0 0 1-.769-.06c-.09 0-.19-.14-.24-.09a2.4 2.4 0 0 1-.08-.74c0-.57.07-1.18.05-1.559l-.25-5.776a.38.38 0 0 0 .38.2zm12.21 17.767a1.8 1.8 0 0 0-.47-.36a3 3 0 0 0-.429-.14a2.47 2.47 0 0 0 .67-2.598a2.93 2.93 0 0 0-2.569-2.048a2.15 2.15 0 0 0-1.479.45a2.88 2.88 0 0 0-.999 1.798a2.18 2.18 0 0 0 .74 2.178q-.39.093-.75.27a1.9 1.9 0 0 0-.44.35q-.191.215-.33.47a3.3 3.3 0 0 0-.369 1.239a3 3 0 0 0-.62-.58a5 5 0 0 0-.759-.38a2.78 2.78 0 0 0 .54-2.758a3.08 3.08 0 0 0-3.787-1.948a3 3 0 0 0-1.3 4.906c-.14.06-.29.11-.42.18q-.362.229-.669.53c0 .06-.08.13-.13.18a3.4 3.4 0 0 0-.4-1.27a2 2 0 0 0-.369-.47a2 2 0 0 0-.45-.349a4 4 0 0 0-.45-.14a2.47 2.47 0 0 0 .67-2.608a2.93 2.93 0 0 0-2.528-1.998a2.12 2.12 0 0 0-1.469.45a2.84 2.84 0 0 0-.999 1.798a2.16 2.16 0 0 0 .74 2.178a3.6 3.6 0 0 0-.76.28q-.243.152-.44.36a2.5 2.5 0 0 0-.33.47a3.4 3.4 0 0 0-.429 1.219a.38.38 0 0 0 .25.48a.39.39 0 0 0 .49-.24q.138-.259.33-.48q.188-.206.399-.39l.37-.39q.365-.474.799-.889a.3.3 0 0 0 .14-.16h.17a.35.35 0 0 0 .36-.33a.33.33 0 0 0-.31-.31c-.86-.11-1-.899-.81-1.598s.67-1.27 1.38-1.18a1.72 1.72 0 0 1 1.498 1.12a1.48 1.48 0 0 1-.46 1.809a1.06 1.06 0 0 1-.43.2q-.29.06-.589.08a.39.39 0 0 0-.336.546a.38.38 0 0 0 .366.223a3.6 3.6 0 0 0 .86-.06h.14c.26.23.47.48.689.7l.4.399q.22.183.42.39q.196.226.34.49a.37.37 0 0 0 .349.25a5.1 5.1 0 0 0-.62 1.788a.39.39 0 1 0 .74.22a5.5 5.5 0 0 1 1.319-1.779l.47-.44q.362-.331.769-.61a1 1 0 0 0 .1 0c.512.09 1.036.09 1.549 0q.044.015.09 0a.39.39 0 0 0 .46.14q.22-.101.419-.24q.445.336.85.72c.16.16.299.32.429.47a5.8 5.8 0 0 1 1.109 1.998a.39.39 0 0 0 .49.26a.4.4 0 0 0 .29-.46a7.2 7.2 0 0 0-.4-1.908a2.6 2.6 0 0 0-.21-.36a.38.38 0 0 0 .44-.24q.148-.255.34-.48c.11-.14.26-.239.389-.379c.13-.14.25-.24.37-.38q.365-.47.8-.879a.3.3 0 0 0 .149-.16h.17a.34.34 0 0 0 0-.68c-.85-.11-1-.899-.81-1.598s.68-1.27 1.39-1.18a1.71 1.71 0 0 1 1.488 1.12a1.48 1.48 0 0 1-.41 1.839c-.13.096-.28.164-.439.2q-.287.06-.58.08a.39.39 0 0 0-.37.399a.37.37 0 0 0 .39.37q.439.021.87-.06h.14c.26.23.47.47.69.69s.269.26.399.389c.13.13.29.24.42.39q.19.225.34.48a.38.38 0 0 0 .479.26a.39.39 0 0 0 .26-.48a3.3 3.3 0 0 0-.42-1.3a2 2 0 0 0-.38-.52m-11.581.34a1.9 1.9 0 0 1-.29-1.829a1.74 1.74 0 0 1 1.17-1.259a1.93 1.93 0 0 1 2.427 1.07c1.13 2.697-2.648 2.747-3.307 2.018"
                        ></path>
                        <path
                          fill="#0c6fff"
                          d="M2.533 13.12c.15 0 .2.14.879-1.339c.09-.19.16-.4.23-.59c.46-1.198.61-1.258.38-1.488c-.45-.4-1.41.85-1.42.88a2.1 2.1 0 0 0-.42.959c-.059.3-.109 1.538.35 1.578m20.286-2.128a2 2 0 0 0-.26-.45s-1-1.279-1.42-.879c-.249.23-.109.31.35 1.489c.08.19.15.4.23.59c.69 1.478.73 1.348.89 1.339c.46 0 .4-1.28.36-1.58a2 2 0 0 0-.15-.509M6.02 8.714q.144-.066.27-.16a1.1 1.1 0 0 0 .24-.19c.76-.67.9-.72.79-1c0-.11-.16-.479-1.4-.05a1.6 1.6 0 0 0-.64.41c-.159.18-.749 1-.509 1.24c.09.08.15.25 1.25-.25m12.569-.35q.114.105.24.19q.133.094.28.16c1.11.5 1.17.33 1.25.24c.24-.26-.36-1.06-.51-1.24a1.8 1.8 0 0 0-.65-.41c-1.229-.429-1.359-.06-1.399.05c-.1.29.04.34.79 1.01"
                        ></path>
                      </g>
                    </svg>
                  ),
                  title: t("aboutUs.valueCollaborationTitle"),
                  desc: t("aboutUs.valueCollaborationDesc"),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={45}
                      height={45}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#dcb67a"
                        d="M21.346 24.019H7.306a1.2 1.2 0 0 1-1.249-1.15V4.915a1.2 1.2 0 0 1 1.249-1.15h14.04a1.2 1.2 0 0 1 1.254 1.15v17.954a1.2 1.2 0 0 1-1.254 1.15"
                      ></path>
                      <path
                        fill="#231f20"
                        d="M21.346 24.048H7.306a1.23 1.23 0 0 1-1.277-1.179V4.915a1.23 1.23 0 0 1 1.277-1.179h14.04a1.23 1.23 0 0 1 1.277 1.179v17.954a1.23 1.23 0 0 1-1.277 1.179M7.306 3.793a1.175 1.175 0 0 0-1.22 1.122v17.954a1.176 1.176 0 0 0 1.22 1.122h14.04a1.176 1.176 0 0 0 1.22-1.122V4.915a1.175 1.175 0 0 0-1.22-1.122Z"
                      ></path>
                      <path
                        fill="#cccccb"
                        d="M23.566 22.2H9.54a1.2 1.2 0 0 1-1.248-1.145V3.173A1.2 1.2 0 0 1 9.54 2.028h14.026a1.2 1.2 0 0 1 1.249 1.145v17.88a1.2 1.2 0 0 1-1.249 1.147m-2.12-5.443a1.167 1.167 0 1 0 1.167 1.167a1.17 1.17 0 0 0-1.167-1.169Z"
                      ></path>
                      <path
                        fill="#231f20"
                        d="M23.566 22.226H9.54a1.23 1.23 0 0 1-1.276-1.173V3.173A1.23 1.23 0 0 1 9.54 2h14.026a1.23 1.23 0 0 1 1.277 1.173v17.88a1.12 1.12 0 0 1-.375.83a1.32 1.32 0 0 1-.902.343M9.54 2.057a1.174 1.174 0 0 0-1.22 1.116v17.88a1.173 1.173 0 0 0 1.22 1.116h14.026a1.27 1.27 0 0 0 .864-.327a1.06 1.06 0 0 0 .356-.789V3.173a1.173 1.173 0 0 0-1.22-1.116Zm11.906 17.06a1.2 1.2 0 1 1 1.195-1.2a1.2 1.2 0 0 1-1.195 1.2m0-2.333a1.138 1.138 0 1 0 1.138 1.138a1.14 1.14 0 0 0-1.138-1.138"
                      ></path>
                      <path
                        fill="#fff"
                        d="M22.189 6.859H10.806V5.322h11.383Zm0 1.594H10.806v1.536h11.383Zm0 3.415H10.806V13.4h11.383Zm-5.122 3.415h-6.261v1.536h6.261Z"
                      ></path>
                      <path
                        fill="#231f20"
                        d="M17.1 16.848h-6.322v-1.594H17.1Zm-6.261-.057h6.2v-1.48h-6.2Zm11.383-3.358H10.778v-1.594h11.44Zm-11.383-.057h11.322V11.9H10.835Zm11.383-3.358H10.778V8.424h11.44Zm-11.387-.057h11.326v-1.48H10.835Zm11.383-3.073h-11.44V5.294h11.44Zm-11.383-.057h11.326v-1.48H10.835Z"
                      ></path>
                      <path
                        fill="#4778bc"
                        fillRule="evenodd"
                        d="M19.242 24.019a1.336 1.336 0 0 0-1.122 1.474v3.041A1.33 1.33 0 0 0 19.245 30h5.6a1.327 1.327 0 0 0 1.125-1.466l-.057-3.041c0-.808-.444-1.472-1.065-1.474V20.5a3.034 3.034 0 0 0-2.724-3.308a.6.6 0 0 0-.339.079a.71.71 0 0 0-.365.657a.665.665 0 0 0 .4.622a.6.6 0 0 0 .245.06c.819.015 1.532.974 1.518 2.794v2.614m-1.137 2.669v1.264a.256.256 0 0 1-.511 0v-1.263a.73.73 0 0 1-.51-.689a.767.767 0 0 1 1.532 0a.735.735 0 0 1-.51.689Z"
                      ></path>
                    </svg>
                  ),
                  title: t("aboutUs.valueIntegrityTitle"),
                  desc: t("aboutUs.valueIntegrityDesc"),
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className=" flex  flex-col  items-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 mx-6 z-10 hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 ${
                      idx === 1 ? "border-cyan-400" : "border-[#00bcd4]"
                    } bg-gradient-to-tr from-[#00bcd4] to-cyan-400 animate-pulse`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-xl text-[#00bcd4] mb-2 text-center">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Achievements (Circular Stats Carousel) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold mb-14 text-[#00bcd4] text-center">
              {t("aboutUs.achievementsTitle")}
            </h2>
            <div className="flex gap-10 justify-center items-center flex-wrap">
              {[
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0xMiA2Ljc0QTIuODcgMi44NyAwIDEgMCAxMiAxYTIuODcgMi44NyAwIDAgMCAwIDUuNzQiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZjliZiIgZD0iTTkuMTMgMy44N2MuMDAxLjI3LjA0LjU0LjExNi44QTIuODcgMi44NyAwIDAgMCAxMy44IDEuNjM0QTIuODcgMi44NyAwIDAgMCA5LjEzIDMuODciIC8+CgkJPHBhdGggZmlsbD0iI2ZmYmM0NCIgZD0ibTkuMDIgMTEuMjg1bC0yLjQzMSAxLjE0YTEuNTk4IDEuNTk4IDAgMCAwLS42NyAyLjQwMmw0LjE2OSA2LjI0aDMuODI2bDQuMTY4LTYuMjRhMS42IDEuNiAwIDAgMC0uNjctMi40MDJsLTIuNjE0LTEuMjI3eiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZlZjVlIiBkPSJNMTUuNjEgOS41NjlhLjQ3Ny40NzcgMCAwIDAtLjY0LS41NTRhNy45NCA3Ljk0IDAgMCAxLTUuOTQzLS4wMDhhLjQ3OC40NzggMCAwIDAtLjYzOC41NTRsMi42NTUgMTEuNTA1aDEuOTEzeiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmOWJmIiBkPSJNMTIgOS41ODhhOC4zIDguMyAwIDAgMS0yLjk3My0uNTgxYS40NzguNDc4IDAgMCAwLS42MzguNTU0bDIuNjU1IDExLjUwNUgxMnoiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMTkxOTE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNy40NjcgMjIuNjI5YTQuMjYgNC4yNiAwIDAgMC0zLjA0NS0xLjU0Mkg5LjYzOWE0LjQgNC40IDAgMCAwLTMuMDc2IDEuNTE5TDYuMjYyIDIzSDE3Ljc0ek0xNS42MSA5LjU2OWEuNDc3LjQ3NyAwIDAgMC0uNjQtLjU1NGE3Ljk0IDcuOTQgMCAwIDEtNS45NDMtLjAwOGEuNDc4LjQ3OCAwIDAgMC0uNjM4LjU1NGwyLjY1NSAxMS41MDVoMS45MTN6TTEyIDYuNzRBMi44NyAyLjg3IDAgMSAwIDEyIDFhMi44NyAyLjg3IDAgMCAwIDAgNS43NG00LjUyOCA1LjI3bC44ODQuNDE1YTEuNTk4IDEuNTk4IDAgMCAxIC42NyAyLjQwM2wtNC4xNjkgNi4yNG0tNi40NC05LjA1OGwtLjg4NC40MTVhMS41OTggMS41OTggMCAwIDAtLjY3IDIuNDAzbDQuMTY5IDYuMjQiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTwvZz4KPC9zdmc+",
                  label: t("aboutUs.achievementsAwards"),
                  value: 7,
                  percent: 70,
                },
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMxZTg4ZTUiIGQ9Ik0yOC45NjcgMTJIOS40NDJhMiAyIDAgMCAwLTEuODk4IDEuMzY4TDQgMjRWMTBoMjRhMiAyIDAgMCAwLTItMkgxNS4xMjRhMiAyIDAgMCAxLTEuMjgtLjQ2NGwtMS4yODgtMS4wNzJBMiAyIDAgMCAwIDExLjI3NiA2SDRhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDIybDQuODA1LTExLjIxMkEyIDIgMCAwIDAgMjguOTY3IDEyIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFlODhlNSIgLz4KCTxwYXRoIGZpbGw9IiNiYmRlZmIiIGQ9Ik0yNy4zNTQgMjAuODcxTDMyIDI1LjM0M2wtMi43NCAyLjYyNGwtNC42MTMtNC40NzF2LS43MzdsMS45NDctMS44ODh6bS43NTEtMi4wMjNsLS44LS43NjhsLTMuOTUzIDMuODM5djEuNTc3TDE4LjcwNiAyOEwxNiAyNS4zNDNsNC42MTItNC40NzJoMS42MjZsLjY0NC0uNjI0bC0zLjE3LTMuMDhoLTEuMDcxbC0yLjMyLTIuMjcxbDIuMTYyLTIuMDk2bDIuMzExIDIuMjR2MS4wNDhsMy4yMSAzLjA3MmwyLjE5NC0yLjEyOGwtLjc5MS0uODA4bDEuMDcyLTEuMDQ5aC0yLjE5NmwtLjUzNi0uNTJMMjYuNDggMTJsLjU0NS41Mjd2Mi4xMjlsMS4wODEtMS4wNTdsMi43MDcgMi42MjVhMi4yMiAyLjIyIDAgMCAxIDAgMy4xODRsLTEuNjI3LTEuNjA5WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNiYmRlZmIiIC8+Cjwvc3ZnPg==",
                  label: t("aboutUs.achievementsProjects"),
                  value: 54,
                  percent: 90,
                },
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0yMi4wNDYgMTEuOTk4VjEuOTU4YS45NTIuOTUyIDAgMCAwLTEuMjY3LS45MDRjLTMuODU1IDEuNDM1LTEzLjcwMyAxLjQzNS0xNy41NTggMGEuOTUuOTUgMCAwIDAtMS4yNjYuOTA1djEwLjAzOUMxLjk1NSAxOC4wNzMgMTAuMDg3IDIzIDEyIDIzczEwLjA0Ni00LjkyNyAxMC4wNDYtMTEuMDAyIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmY5YmYiIGQ9Ik0xMiAyLjEzYTI5IDI5IDAgMCAxLTguNzc5LTEuMDc2YS45NS45NSAwIDAgMC0xLjI2Ni45MDV2MTAuMDM5QzEuOTU1IDE4LjA3MyAxMC4wODcgMjMgMTIgMjN6IiAvPgoJCTxwYXRoIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuMDQ2IDExLjk5OFYxLjk1OGEuOTUyLjk1MiAwIDAgMC0xLjI2Ny0uOTA0Yy0zLjg1NSAxLjQzNS0xMy43MDMgMS40MzUtMTcuNTU4IDBhLjk1Ljk1IDAgMCAwLTEuMjY2LjkwNXYxMC4wMzlDMS45NTUgMTguMDczIDEwLjA4NyAyMyAxMiAyM3MxMC4wNDYtNC45MjcgMTAuMDQ2LTExLjAwMiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJCTxwYXRoIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQuMzkyIDguNjVhMS45MTQgMS45MTQgMCAwIDEgMy44MjcgMG0tMTIuNDM4IDBhMS45MTMgMS45MTMgMCAxIDEgMy44MjcgMG0tMS40MzUgNC43ODNhMy44MjcgMy44MjcgMCAwIDAgNy42NTQgMCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJPC9nPgo8L3N2Zz4=",
                  label: t("aboutUs.achievementsHappyClients"),
                  value: 38,
                  percent: 80,
                },
                {
                  icon: "/globe.svg",
                  label: t("aboutUs.achievementsCountries"),
                  value: 12,
                  percent: 60,
                },
              ].map((fact, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center justify-center min-w-[180px] max-w-xs"
                >
                  {/* Animated Circular Progress */}
                  <svg
                    className="mb-4"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#grad)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={
                        2 * Math.PI * 40 * (1 - fact.percent / 100)
                      }
                      style={{ transition: "stroke-dashoffset 1s" }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="100" y2="0">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#f59e42" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className=" absolute top-7 left-1/2 -translate-x-1/2">
                    <Image
                      src={fact.icon}
                      alt={fact.label}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="font-extrabold text-3xl text-[#00bcd4] mb-2 mt-2">
                    {fact.value}
                  </div>
                  <div className="font-semibold text-lg text-gray-700 dark:text-gray-300 text-center">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Contact Us (Split Image + Card) */}
        <section className=" bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
            {/* Left Side Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
              <Image
                src="/contact-main.jpg"
                alt={t("aboutUs.contactImgAlt")}
                width={400}
                height={400}
                className="rounded-3xl w-100 h-100 shadow-2xl object-cover"
              />
            </div>
            {/* Right Side Contact Card */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative group w-full max-w-lg">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-tr from-[#00bcd4] via-cyan-400 to-amber-400 animate-gradient-x blur-sm opacity-80 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-w-[340px]">
                  {/* Floating Contact Icons */}
                  <div className="flex gap-6 mb-6 animate-float">
                    <a
                      href="mailto:hello@site49.com"
                      className="hover:scale-110 transition"
                    >
                      <Image
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIyMiIgeD0iMSIgeT0iNSIgZmlsbD0iI2I0YWNiYyIgcng9IjEuNSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNiNGFjYmMiIC8+CgkJPHJlY3Qgd2lkdGg9IjI4IiBoZWlnaHQ9IjE4IiB4PSIyIiB5PSI3IiBmaWxsPSIjY2RjNGQ2IiByeD0iMSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNjZGM0ZDYiIC8+CgkJPHBhdGggZmlsbD0iI2UxZDhlYyIgZD0ibTMwIDIzLjRsLTEyLjk3MS03Ljc4MmEyIDIgMCAwIDAtMi4wNTggMEwyIDIzLjRWMjVhMSAxIDAgMCAwIDEgMWgyNmExIDEgMCAwIDAgMS0xeiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNlMWQ4ZWMiIC8+CgkJPHBhdGggZmlsbD0iIzk5OGVhNCIgZD0iTTIgOS43NjZWOGgyOHYxLjc2NkwxNy41NDQgMTcuMjRhMyAzIDAgMCAxLTMuMDg4IDB6IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzk5OGVhNCIgLz4KCQk8cGF0aCBmaWxsPSIjZjNlZWY4IiBkPSJNMiA4LjZWN2ExIDEgMCAwIDEgMS0xaDI2YTEgMSAwIDAgMSAxIDF2MS42bC0xMi45NzEgNy43ODNhMiAyIDAgMCAxLTIuMDU4IDB6IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iI2YzZWVmOCIgLz4KCQk8cGF0aCBmaWxsPSIjMDBhNmVkIiBkPSJNMTYgMjNhNyA3IDAgMSAwIDAtMTRhNyA3IDAgMCAwIDAgMTQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjMDBhNmVkIiAvPgoJCTxwYXRoIGZpbGw9IiNmNGY0ZjQiIGQ9Ik0xNiAxMS41Yy0xLjIxLS4wMi0yLjM2LjQ0LTMuMjIgMS4zYy0uODcuODUtMS4zNCAxLjk5LTEuMzQgMy4yYzAgMi40OCAyLjAyIDQuNSA0LjUgNC41YS40Ny40NyAwIDEgMCAwLS45NGMtMS45NiAwLTMuNTYtMS42LTMuNTYtMy41NmMwLS45Ni4zOC0xLjg2IDEuMDYtMi41M3MxLjU5LTEuMDMgMi41NS0xLjAzYzEuOTMuMDMgMy41MSAxLjY1IDMuNTEgMy42MnYuODFhLjY3LjY3IDAgMCAxLTEuMzQgMHYtMy4wOGEuNDcuNDcgMCAwIDAtLjQ3LS40N2MtLjI2IDAtLjQ5LjIxLS40OS40N3YuMDljLS40NC0uMzUtLjk5LS41Ny0xLjYtLjU3Yy0xLjQgMC0yLjU0IDEuMTQtMi41NCAyLjU0czEuMTQgMi41NCAyLjU0IDIuNTRjLjcgMCAxLjM0LS4yOSAxLjgtLjc1Yy4yOC41LjgxLjg0IDEuNDIuODRjLjg5IDAgMS42Mi0uNzMgMS42Mi0xLjYydi0uODFjMC0yLjQ3LTEuOTktNC41Mi00LjQ0LTQuNTVtLS4zOSA1Ljk2Yy0uODggMC0xLjYtLjcyLTEuNi0xLjZzLjcyLTEuNiAxLjYtMS42czEuNi43MiAxLjYgMS42cy0uNzIgMS42LTEuNiAxLjYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjZjRmNGY0IiAvPgoJPC9nPgo8L3N2Zz4="
                        alt="Email"
                        width={36}
                        height={36}
                      />
                    </a>
                    <a
                      href="tel:+1234567890"
                      className="hover:scale-110 transition"
                    >
                      <Image
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNjZkMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMy44MzIgMTYuNTY4YTEgMSAwIDAgMCAxLjIxMy0uMzAzbC4zNTUtLjQ2NUEyIDIgMCAwIDEgMTcgMTVoM2EyIDIgMCAwIDEgMiAydjNhMiAyIDAgMCAxLTIgMkExOCAxOCAwIDAgMSAyIDRhMiAyIDAgMCAxIDItMmgzYTIgMiAwIDAgMSAyIDJ2M2EyIDIgMCAwIDEtLjggMS42bC0uNDY4LjM1MWExIDEgMCAwIDAtLjI5MiAxLjIzM2ExNCAxNCAwIDAgMCA2LjM5MiA2LjM4NCIgLz4KPC9zdmc+"
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
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZmZmIiByeD0iNjAiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmZmYiIC8+CgkJPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiMwYTY2YzIiIHJ4PSI2MCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iIzBhNjZjMiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMC00IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRNMzggNTkuNjI4YzAgMTEuODY0IDkuNzY3IDIxLjYyNiAyMS42MzIgMjEuNjI2YzExLjg2Mi0uMDAxIDIxLjYyMy05Ljc2OSAyMS42MjMtMjEuNjMxQzgxLjI1MyA0Ny43NjEgNzEuNDkxIDM4IDU5LjYyOCAzOEM0Ny43NjIgMzggMzggNDcuNzYzIDM4IDU5LjYyN202Ljk1OSAxNTguMDU4aDI5LjMwN2E0IDQgMCAwIDAgNC00VjEwMS42NmE0IDQgMCAwIDAtNC00SDQ0Ljk1OWE0IDQgMCAwIDAtNCA0djExMi4wMjVhNCA0IDAgMCAwIDQgNCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iI2ZmZiIgLz4KCTwvZz4KPC9zdmc+"
                        alt="LinkedIn"
                        width={36}
                        height={36}
                      />
                    </a>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center drop-shadow-lg">
                    {t("aboutUs.contactTitle")}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                    {t("aboutUs.contactDesc")}
                  </p>
                  <a
                    href="/contact-us"
                    className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
                  >
                    {t("aboutUs.contactBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Keyframes for gradient and float animation */}
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

export default AboutUs;
