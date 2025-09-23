import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import {
  CodeIcon,
  DessertIcon,
  RocketIcon,
  Search,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";

const HomePage2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home2.pageTitle")}</title>
        <meta name="description" content={t("home2.pageDesc")} />
      </Head>
      <main className="max-h-screen flex flex-col caret-transparent overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Header />
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] px-6 py-20 text-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
          >
            <source src="/home2-bg.mp4" type="video/mp4" />
          </video>
          {/* <div className="absolute inset-0 bg-black opacity-80 z-10" /> */}
          <div className="relative z-20 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
              {t("home2.heroTitle")}
            </h1>
            <p className="text-xl   mb-8">{t("home2.heroDesc")}</p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl"
            >
              {t("home2.heroBtn")}
            </Link>
          </div>
        </section>

        {/* Section 2: Featured Skills */}
        <section className="    w-full bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-24 px-6 max-w-6xl grid grid-cols-1 mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#00bcd4]">
              {t("home2.skillsTitle")}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3   gap-10">
              {[
                {
                  name: t("home2.skillReact"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#242938"
                          rx={60}
                        ></rect>
                        <path
                          fill="#00d8ff"
                          d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
                        ></path>
                        <path
                          stroke="#00d8ff"
                          strokeWidth={8.911}
                          d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          stroke="#00d8ff"
                          strokeWidth={8.911}
                          d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          stroke="#00d8ff"
                          strokeWidth={8.911}
                          d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  ),
                },

                {
                  name: t("home2.skillFigma"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#242938"
                          rx={60}
                        ></rect>
                        <g clipPath="url(#SVG9U8Xmbth)">
                          <path
                            fill="#0acf83"
                            d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
                          ></path>
                          <path
                            fill="#a259ff"
                            d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
                          ></path>
                          <path
                            fill="#f24e1e"
                            d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
                          ></path>
                          <path
                            fill="#ff7262"
                            d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
                          ></path>
                          <path
                            fill="#1abcfe"
                            d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="SVG9U8Xmbth">
                            <path fill="#fff" d="M61 28h133.36v200H61z"></path>
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                  ),
                },
                {
                  name: t("home2.skillNodejs"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={52}
                      height={32}
                      viewBox="0 0 512 314"
                    >
                      <defs>
                        <linearGradient
                          id="SVGn7WyXdQM"
                          x1="68.188%"
                          x2="27.823%"
                          y1="17.487%"
                          y2="89.755%"
                        >
                          <stop offset="0%" stopColor="#41873f"></stop>
                          <stop offset="32.88%" stopColor="#418b3d"></stop>
                          <stop offset="63.52%" stopColor="#419637"></stop>
                          <stop offset="93.19%" stopColor="#3fa92d"></stop>
                          <stop offset="100%" stopColor="#3fae2a"></stop>
                        </linearGradient>
                        <linearGradient
                          id="SVGYUHp3cUc"
                          x1="43.277%"
                          x2="159.245%"
                          y1="55.169%"
                          y2="-18.306%"
                        >
                          <stop offset="13.76%" stopColor="#41873f"></stop>
                          <stop offset="40.32%" stopColor="#54a044"></stop>
                          <stop offset="71.36%" stopColor="#66b848"></stop>
                          <stop offset="90.81%" stopColor="#6cc04a"></stop>
                        </linearGradient>
                        <linearGradient
                          id="SVGvU14yb0S"
                          x1="-4413.77%"
                          x2="5327.93%"
                          y1="13.43%"
                          y2="13.43%"
                        >
                          <stop offset="9.192%" stopColor="#6cc04a"></stop>
                          <stop offset="28.64%" stopColor="#66b848"></stop>
                          <stop offset="59.68%" stopColor="#54a044"></stop>
                          <stop offset="86.24%" stopColor="#41873f"></stop>
                        </linearGradient>
                        <linearGradient
                          id="SVGsgCB2mOc"
                          x1="-4.389%"
                          x2="101.499%"
                          y1="49.997%"
                          y2="49.997%"
                        >
                          <stop offset="9.192%" stopColor="#6cc04a"></stop>
                          <stop offset="28.64%" stopColor="#66b848"></stop>
                          <stop offset="59.68%" stopColor="#54a044"></stop>
                          <stop offset="86.24%" stopColor="#41873f"></stop>
                        </linearGradient>
                        <linearGradient
                          id="SVGgyHjFbjQ"
                          x1="-9713.77%"
                          x2="27.93%"
                          y1="36.21%"
                          y2="36.21%"
                        >
                          <stop offset="9.192%" stopColor="#6cc04a"></stop>
                          <stop offset="28.64%" stopColor="#66b848"></stop>
                          <stop offset="59.68%" stopColor="#54a044"></stop>
                          <stop offset="86.24%" stopColor="#41873f"></stop>
                        </linearGradient>
                        <linearGradient
                          id="SVGKboQA3ft"
                          x1="-103.861%"
                          x2="100.797%"
                          y1="50.275%"
                          y2="50.275%"
                        >
                          <stop offset="9.192%" stopColor="#6cc04a"></stop>
                          <stop offset="28.64%" stopColor="#66b848"></stop>
                          <stop offset="59.68%" stopColor="#54a044"></stop>
                          <stop offset="86.24%" stopColor="#41873f"></stop>
                        </linearGradient>
                        <linearGradient
                          id="SVGGrjLcbXr"
                          x1="130.613%"
                          x2="4.393%"
                          y1="-211.069%"
                          y2="201.605%"
                        >
                          <stop offset="0%" stopColor="#41873f"></stop>
                          <stop offset="32.88%" stopColor="#418b3d"></stop>
                          <stop offset="63.52%" stopColor="#419637"></stop>
                          <stop offset="93.19%" stopColor="#3fa92d"></stop>
                          <stop offset="100%" stopColor="#3fae2a"></stop>
                        </linearGradient>
                        <path
                          id="SVGA41zMIsC"
                          d="M57.903 1.85a5.96 5.96 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.96 5.96 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085z"
                        ></path>
                      </defs>
                      <g fill="none">
                        <path
                          fill="#539e43"
                          d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04m14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18q0 .521-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95"
                        ></path>
                        <path
                          fill="#333"
                          d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81s2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543zM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849q-1.04.519-2.08 0l-12.251-7.05a5.96 5.96 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.96 5.96 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.71 1.71 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.71 1.71 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.96 5.96 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543s-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.82 2.82 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0z"
                        ></path>
                        <path
                          fill="#539e43"
                          d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04z"
                        ></path>
                        <g transform="translate(134.068 70.501)">
                          <mask id="SVGag4sAb1K" fill="#fff">
                            <use href="#SVGA41zMIsC"></use>
                          </mask>
                          <use
                            fill="url(#SVGn7WyXdQM)"
                            href="#SVGA41zMIsC"
                          ></use>
                          <g mask="url(#SVGag4sAb1K)">
                            <path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693m4.739 123.204c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045z"></path>
                            <path
                              fill="url(#SVGYUHp3cUc)"
                              d="M106.676 29.934L57.788 1.85a8 8 0 0 0-1.503-.578L1.502 95.12a6.1 6.1 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156"
                            ></path>
                          </g>
                          <g mask="url(#SVGag4sAb1K)">
                            <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.1 5.1 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271M3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085q1.734 1.04 3.814.693L3.467 29.818z"></path>
                            <path
                              fill="url(#SVGvU14yb0S)"
                              fillRule="evenodd"
                              d="m50.391.809l-.693.347h.924z"
                              transform="translate(0 -9.246)"
                            ></path>
                            <path
                              fill="url(#SVGsgCB2mOc)"
                              fillRule="evenodd"
                              d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8 8 0 0 0 2.196-.693z"
                              transform="translate(0 -9.246)"
                            ></path>
                            <path
                              fill="url(#SVGgyHjFbjQ)"
                              fillRule="evenodd"
                              d="m111.3 104.712l-.347-.578v.809z"
                              transform="translate(0 -9.246)"
                            ></path>
                            <path
                              fill="url(#SVGKboQA3ft)"
                              fillRule="evenodd"
                              d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                              transform="translate(0 -9.246)"
                            ></path>
                            <path
                              fill="url(#SVGGrjLcbXr)"
                              fillRule="evenodd"
                              d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                              transform="translate(0 -9.246)"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  ),
                },
                {
                  name: t("home2.skillTypescript"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#3178c6"
                        d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0"
                      ></path>
                      <path
                        fill="#fff"
                        d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  name: t("home2.skillTailwind"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#242938"
                          rx={60}
                        ></rect>
                        <path
                          fill="url(#SVGYCM7xdyn)"
                          fillRule="evenodd"
                          d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
                          clipRule="evenodd"
                        ></path>
                        <defs>
                          <linearGradient
                            id="SVGYCM7xdyn"
                            x1={86.5}
                            x2={163.5}
                            y1={74}
                            y2={185.5}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32b1c1"></stop>
                            <stop offset={1} stopColor="#14c6b7"></stop>
                          </linearGradient>
                        </defs>
                      </g>
                    </svg>
                  ),
                },
                {
                  name: t("home2.skillSEO"),
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 48 48"
                    >
                      <g fill="none" strokeWidth={4}>
                        <rect
                          width={40}
                          height={32}
                          x={4}
                          y={8}
                          fill="#2f88ff"
                          stroke="#000"
                          rx={1.633}
                        ></rect>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 18.9479C14 15.9999 10.4978 17.9375 10.7489 20.9687C11 23.9999 15 23.9999 15.2498 27.0311C15.4997 30.0623 12 31.9999 10 29.0519"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M26 18H22V31H26"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M22 25H26"
                        ></path>
                        <rect
                          width={6}
                          height={13}
                          x={32}
                          y={18}
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          rx={3}
                        ></rect>
                      </g>
                    </svg>
                  ),
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl p-8 flex flex-col items-center justify-center bg-gradient-to-br from-white/60 to-[#b3eaf2]/40 dark:from-gray-800/60 dark:to-[#002d32]/40 backdrop-blur-xl border-2 border-[#26c6da] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  {/* Floating Icon Circle */}
                  <div className="absolute -top-8  w-16 h-16 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 z-20">
                    {skill.icon}
                  </div>
                  {/* Card Content */}
                  <div className="pt-10 pb-2 flex flex-col items-center">
                    <span className="font-bold text-xl text-[#0097a7] dark:text-[#4dd0e1] mb-2 text-center">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Process Timeline (Zigzag Layout) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-16 px-6 mx-auto w-full  ">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#00bcd4]">
              {t("home2.processTitle")}
            </h2>
            <div className="relative">
              {[
                {
                  step: t("home2.processDiscovery"),
                  desc: t("home2.processDiscoveryDesc"),
                  icon: <SearchIcon className="w-8 h-8 text-white" />,
                },
                {
                  step: t("home2.processDesign"),
                  desc: t("home2.processDesignDesc"),
                  icon: <DessertIcon className="w-8 h-8 text-white" />,
                },
                {
                  step: t("home2.processDevelopment"),
                  desc: t("home2.processDevelopmentDesc"),
                  icon: <CodeIcon className="w-8 h-8 text-white" />,
                },
                {
                  step: t("home2.processLaunch"),
                  desc: t("home2.processLaunchDesc"),
                  icon: <RocketIcon className="w-8 h-8 text-white" />,
                },
              ].map((item, idx, _arr) => (
                <div
                  key={item.step}
                  className={`relative flex flex-col md:flex-row items-center mb-12 ${
                    idx % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Icon */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 mx-6 z-10">
                    {item.icon}
                  </div>
                  {/* Step Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                    <h3 className="font-bold text-2xl text-[#00bcd4] mb-2">
                      {item.step}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Client Success Stories (Animated Carousel) */}
        <section className=" bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-16 px-6  mx-auto w-full">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#00bcd4]">
              {t("home2.clientStoriesTitle")}
            </h2>
            <div className="relative">
              <div className="flex flex-wrap justify-center   gap-8 pb-4   snap-x snap-mandatory">
                {[
                  {
                    name: t("home2.client1Name"),
                    avatar: "/avatar1.jpg",
                    quote: t("home2.client1Quote"),
                    role: t("home2.client1Role"),
                  },
                  {
                    name: t("home2.client2Name"),
                    avatar: "/avatar2.jpg",
                    quote: t("home2.client2Quote"),
                    role: t("home2.client2Role"),
                  },
                  {
                    name: t("home2.client3Name"),
                    avatar: "/avatar3.jpg",
                    quote: t("home2.client3Quote"),
                    role: t("home2.client3Role"),
                  },
                  {
                    name: t("home2.client4Name"),
                    avatar: "/avatar4.jpg",
                    quote: t("home2.client4Quote"),
                    role: t("home2.client4Role"),
                  },
                ].map((client, idx) => (
                  <div
                    key={idx}
                    className=" w-[340px]   bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center snap-center transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={client.avatar}
                      alt={client.name}
                      width={80}
                      height={80}
                      className="rounded-full mb-4 border-2 w-20 h-20 object-cover object-top shadow-lg"
                    />
                    <p className="italic text-lg text-gray-700 dark:text-gray-300 text-center mb-4">
                      "{client.quote}"
                    </p>
                    <div className="font-bold text-[#00bcd4] text-xl mb-1">
                      {client.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {client.role}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#00bcd4] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer opacity-70 hover:opacity-100 transition duration-200"
                style={{ display: "none" }}
              >
                {/* Left arrow for future carousel controls */}
                &#8592;
              </div>
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#00bcd4] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer opacity-70 hover:opacity-100 transition duration-200"
                style={{ display: "none" }}
              >
                {/* Right arrow for future carousel controls */}
                &#8594;
              </div>
            </div>
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>
        </section>

        {/* Section 5: Interactive Timeline (Career Milestones) */}
        <section className=" bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6   mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-center text-[#00bcd4]">
              {t("home2.timelineTitle")}
            </h2>

            <div className="flex flex-wrap justify-center gap-10  pb-4 hide-scrollbar">
              {[
                {
                  year: "2018",
                  title: t("home2.timeline2018Title"),
                  desc: t("home2.timeline2018Desc"),
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMwMDY2ZDEiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwczEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybS0xIDE0SDlWOGgyem0xIDBWOGw1IDR6IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlPSIjMDA2NmQxIiAvPgo8L3N2Zz4=",
                },
                {
                  year: "2019",
                  title: t("home2.timeline2019Title"),
                  desc: t("home2.timeline2019Desc"),
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMxZTg4ZTUiIGQ9Ik0yOC45NjcgMTJIOS40NDJhMiAyIDAgMCAwLTEuODk4IDEuMzY4TDQgMjRWMTBoMjRhMiAyIDAgMCAwLTItMkgxNS4xMjRhMiAyIDAgMCAxLTEuMjgtLjQ2NGwtMS4yODgtMS4wNzJBMiAyIDAgMCAwIDExLjI3NiA2SDRhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDIybDQuODA1LTExLjIxMkEyIDIgMCAwIDAgMjguOTY3IDEyIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFlODhlNSIgLz4KCTxwYXRoIGZpbGw9IiNiYmRlZmIiIGQ9Ik0yNy4zNTQgMjAuODcxTDMyIDI1LjM0M2wtMi43NCAyLjYyNGwtNC42MTMtNC40NzF2LS43MzdsMS45NDctMS44ODh6bS43NTEtMi4wMjNsLS44LS43NjhsLTMuOTUzIDMuODM5djEuNTc3TDE4LjcwNiAyOEwxNiAyNS4zNDNsNC42MTItNC40NzJoMS42MjZsLjY0NC0uNjI0bC0zLjE3LTMuMDhoLTEuMDcxbC0yLjMyLTIuMjcxbDIuMTYyLTIuMDk2bDIuMzExIDIuMjR2MS4wNDhsMy4yMSAzLjA3MmwyLjE5NC0yLjEyOGwtLjc5MS0uODA4bDEuMDcyLTEuMDQ5aC0yLjE5NmwtLjUzNi0uNTJMMjYuNDggMTJsLjU0NS41Mjd2Mi4xMjlsMS4wODEtMS4wNTdsMi43MDcgMi42MjVhMi4yMiAyLjIyIDAgMCAxIDAgMy4xODRsLTEuNjI3LTEuNjA5WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNiYmRlZmIiIC8+Cjwvc3ZnPg==",
                },
                {
                  year: "2021",
                  title: t("home2.timeline2021Title"),
                  desc: t("home2.timeline2021Desc"),
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNlM2UzZTMiIGQ9Ik0yMS4xNyAxOS42MjZhLjQ4NC40ODQgMCAwIDEtLjQ4Mi40ODNIMy4zMTJhLjQ4LjQ4IDAgMCAxLS40ODItLjQ4M1Y2LjI4NGEuOTcuOTcgMCAwIDEgLjUxNS0uODU0bDguMjA1LTQuMzJhLjk3Ljk3IDAgMCAxIC44OTkgMGw4LjIwNSA0LjMxOWEuOTcuOTcgMCAwIDEgLjUxNS44NTR6IiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMiAxYTEgMSAwIDAgMC0uNDUuMTFMMy4zNDUgNS40M2EuOTcuOTcgMCAwIDAtLjUxNS44NTR2MTMuMzQyYS40OC40OCAwIDAgMCAuNDgyLjQ4M0gxMnoiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZWY1ZSIgZD0ibTEyLjU2NyA3LjA1OGwxLjIzOCAyLjQzM2gyLjQxM2EuNTkyLjU5MiAwIDAgMSAuNDE2IDEuMDMybC0yLjA5IDIuMTg0bDEuMTU4IDIuNjY1YS42My42MyAwIDAgMS0uOS43OUwxMiAxNC41OGwtMi44IDEuNTc3YS42MzEuNjMxIDAgMCAxLS44OTgtLjc5bDEuMTU4LTIuNjY1bC0yLjA5NC0yLjE4NGEuNTkuNTkgMCAwIDEgLjQxNy0xLjAyOGgyLjQxM2wxLjIzNy0yLjQzM2EuNjM4LjYzOCAwIDAgMSAxLjEzNCAwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmY5YmYiIGQ9Im05LjQ2IDEyLjcwM2wtMS4xNTggMi42NjVhLjYuNiAwIDAgMCAuMDEzLjUxbDYuMzg4LTYuMzg3aC0uODk3bC0xLjIzOC0yLjQzM2EuNjM4LjYzOCAwIDAgMC0xLjEzNCAwbC0xLjI0IDIuNDMzSDcuNzhhLjU5LjU5IDAgMCAwLS40MTMgMS4wMjh6IiAvPgoJCTxwYXRoIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjEuMTcgMTkuNjI2YS40ODQuNDg0IDAgMCAxLS40ODIuNDgzSDMuMzEyYS40OC40OCAwIDAgMS0uNDgyLS40ODNWNi4yODRhLjk3Ljk3IDAgMCAxIC41MTUtLjg1NGw4LjIwNS00LjMyYS45Ny45NyAwIDAgMSAuODk5IDBsOC4yMDUgNC4zMTlhLjk3Ljk3IDAgMCAxIC41MTUuODU0ek0yLjgzIDIzaDE4LjM0IiBzdHJva2Utd2lkdGg9IjEiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMTkxOTE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im0xMi41NjcgNy4wNThsMS4yMzggMi40MzNoMi40MTNhLjU5Mi41OTIgMCAwIDEgLjQxNiAxLjAzMmwtMi4wOSAyLjE4NGwxLjE1OCAyLjY2NWEuNjMuNjMgMCAwIDEtLjkuNzlMMTIgMTQuNThsLTIuOCAxLjU3N2EuNjMxLjYzMSAwIDAgMS0uODk4LS43OWwxLjE1OC0yLjY2NWwtMi4wOTQtMi4xODRhLjU5LjU5IDAgMCAxIC40MTctMS4wMjhoMi40MTNsMS4yMzctMi40MzNhLjYzOC42MzggMCAwIDEgMS4xMzQgMCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJPC9nPgo8L3N2Zz4=",
                },
                {
                  year: "2023",
                  title: t("home2.timeline2023Title"),
                  desc: t("home2.timeline2023Desc"),
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KCTxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiM3Y2IzNDIiIGQ9Ik0yNCA0QzEzIDQgNCAxMyA0IDI0czkgMjAgMjAgMjBzMjAtOSAyMC0yMFMzNSA0IDI0IDQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjN2NiMzQyIiAvPgoJPHBhdGggZmlsbD0iIzAyNzdiZCIgZD0iTTQ1IDI0YzAgMTEuNy05LjUgMjEtMjEgMjFTMyAzNS43IDMgMjRTMTIuMyAzIDI0IDNzMjEgOS4zIDIxIDIxbS0yMS4yIDkuN2MwLS40LS4yLS42LS42LS44Yy0xLjMtLjQtMi41LS40LTMuNi0xLjVjLS4yLS40LS4yLS44LS40LTEuM2MtLjQtLjQtMS41LS42LTIuMS0uOGgtNC4yYy0uNi0uMi0xLjEtMS4xLTEuNS0xLjdjMC0uMiAwLS42LS40LS42Yy0uNC0uMi0uOC4yLTEuMyAwYy0uMi0uMi0uMi0uNC0uMi0uNmMwLS42LjQtMS4zLjgtMS43Yy42LS40IDEuMy4yIDEuOS4yYy4yIDAgLjIgMCAuNC4yYy42LjIuOCAxIC44IDEuN3YuNGMwIC4yLjIuMi40LjJjLjItMS4xLjItMi4xLjQtMy4yYzAtMS4zIDEuMy0yLjUgMi4zLTIuOWMuNC0uMi42LjIgMS4xIDBjMS4zLS40IDQuNC0xLjcgMy44LTMuNGMtLjQtMS41LTEuNy0yLjktMy40LTIuN2MtLjQuMi0uNi40LTEgLjZjLS42LjQtMS45IDEuNy0yLjUgMS43Yy0xLjEtLjItMS4xLTEuNy0uOC0yLjNjLjItLjggMi4xLTMuNiAzLjQtMy4xbC44LjhjLjQuMiAxLjEuMiAxLjcuMmMuMiAwIC40IDAgLjYtLjJzLjItLjIuMi0uNGMwLS42LS42LTEuMy0xLTEuN3MtMS4xLS44LTEuNy0xLjFjLTIuMS0uNi01LjUuMi03LjEgMS43cy0yLjkgNC0zLjggNi4xYy0uNCAxLjMtLjggMi45LTEgNC40Yy0uMiAxLS40IDEuOS4yIDIuOWMuNiAxLjMgMS45IDIuNSAzLjIgMy40Yy44LjYgMi41LjYgMy40IDEuN2MuNi44LjQgMS45LjQgMi45YzAgMS4zLjggMi4zIDEuMyAzLjRjLjIuNi40IDEuNS42IDIuMWMwIC4yLjIgMS41LjIgMS43YzEuMy42IDIuMyAxLjMgMy44IDEuN2MuMiAwIDEtMS4zIDEtMS41Yy42LS42IDEuMS0xLjUgMS43LTEuOWMuNC0uMi44LS40IDEuMy0uOGMuNC0uNC42LTEuMy44LTEuOWMuMS0uNS4zLTEuMy4xLTEuOW0uNC0xOS40Yy4yIDAgLjQtLjIuOC0uNGMuNi0uNCAxLjMtMS4xIDEuOS0xLjVzMS4zLTEuMSAxLjctMS41Yy42LS40IDEuMS0xLjMgMS4zLTEuOWMuMi0uNC44LTEuMy42LTEuOWMtLjItLjQtMS4zLS42LTEuNy0uOGMtMS43LS40LTMuMS0uNi00LjgtLjZjLS42IDAtMS41LjItMS43LjhjLS4yIDEuMS42LjggMS41IDEuMWMwIDAgLjIgMS43LjIgMS45Yy4yIDEtLjQgMS43LS40IDIuN2MwIC42IDAgMS43LjQgMi4xek00MS44IDI5Yy4yLS40LjItMS4xLjQtMS41Yy4yLTEgLjItMi4xLjItMy4xYzAtMi4xLS4yLTQuMi0uOC02LjFjLS40LS42LS42LTEuMy0uOC0xLjljLS40LTEuMS0xLTIuMS0xLjktMi45Yy0uOC0xLjEtMS45LTQtMy44LTMuMWMtLjYuMi0xIDEtMS41IDEuNWMtLjQuNi0uOCAxLjMtMS4zIDEuOWMtLjIuMi0uNC42LS4yLjhjMCAuMi4yLjIuNC4yYy40LjIuNi4yIDEgLjRjLjIgMCAuNC4yLjIuNGMwIDAgMCAuMi0uMi4yYy0xIDEuMS0yLjEgMS45LTMuMSAyLjljLS4yLjItLjQuNi0uNC44cy4yLjIuMi40cy0uMi4yLS40LjRjLS40LjItLjguNC0xLjEuNmMtLjIuNCAwIDEuMS0uMiAxLjVjLS4yIDEuMS0uOCAxLjktMS4zIDIuOWMtLjQuNi0uNiAxLjMtMSAxLjljMCAuOC0uMiAxLjUuMiAyLjFjMSAxLjUgMi45LjYgNC40IDEuM2MuNC4yLjguMiAxLjEuNmMuNi42LjYgMS43LjggMi4zYy4yLjguNCAxLjcuOCAyLjVjLjIgMSAuNiAyLjEuOCAyLjljMS45LTEuNSAzLjYtMy4xIDQuOC01LjJjMS41LTEuMyAyLjEtMyAyLjctNC43IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzAyNzdiZCIgLz4KPC9zdmc+",
                },
                {
                  year: "2025",
                  title: t("home2.timeline2025Title"),
                  desc: t("home2.timeline2025Desc"),
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KCTxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNmZjYyNDIiIGQ9Im0xNC4wNSAyNi41OGw1LjY3LTdhMTkuNTUgMTkuNTUgMCAwIDAtOC41LS4yNGMtMy4xMi43Ny0zLjYxIDYuNjYtMy42NiA5LjQ1YS44Ny44NyAwIDAgMCAxLjMxLjc3WiIgLz4KCTxwYXRoIGZpbGw9IiNmZjg2NmUiIGQ9Ik0xMS4yNCAyMmExOC4yIDE4LjIgMCAwIDEgNi42Mi0uMTNsMS44Ni0yLjI4YTE5LjU1IDE5LjU1IDAgMCAwLTguNS0uMjRjLTMuMTIuNzYtMy42MSA2LjY1LTMuNjYgOS40NGEuODUuODUgMCAwIDAgLjE0LjQ4Yy4zLTIuOTQgMS4wOS02LjY2IDMuNTQtNy4yNyIgLz4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ1NDEzYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJtMTQuMDUgMjYuNThsNS42Ny03YTE5LjU1IDE5LjU1IDAgMCAwLTguNS0uMjRjLTMuMTIuNzctMy42MSA2LjY2LTMuNjYgOS40NWEuODcuODcgMCAwIDAgMS4zMS43N1oiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTxwYXRoIGZpbGw9IiNmZjYyNDIiIGQ9Im0yMC44NiAzMy40bDctNS42N2ExOS41IDE5LjUgMCAwIDEgLjI0IDguNDljLS43MyAzLjEyLTYuNTggMy42MS05LjQxIDMuNjZhLjg3Ljg3IDAgMCAxLS43Ny0xLjMxWiIgLz4KCTxwYXRoIGZpbGw9IiNmZjg2NmUiIGQ9Ik0yNS40MSAzNi4yMWExOCAxOCAwIDAgMCAuMTMtNi42M2wyLjI4LTEuODVhMTkuNSAxOS41IDAgMCAxIC4yNCA4LjQ5Yy0uNzMgMy4xMi02LjU4IDMuNjEtOS40MSAzLjY2YS44Ny44NyAwIDAgMS0uNDgtLjE0YzIuOTQtLjI2IDYuNjYtMS4wOSA3LjI0LTMuNTMiIC8+Cgk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0NTQxM2MiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTIwLjg2IDMzLjRsNy01LjY3YTE5LjUgMTkuNSAwIDAgMSAuMjQgOC40OWMtLjczIDMuMTItNi41OCAzLjYxLTkuNDEgMy42NmEuODcuODcgMCAwIDEtLjc3LTEuMzFaIiBzdHJva2Utd2lkdGg9IjEiIC8+Cgk8cGF0aCBmaWxsPSIjZThmNGZhIiBkPSJNMzkuNDggMjEuNTZjNS40Mi01LjcgMy43MS0xMi43MyAyLjg2LTE1LjJhMiAyIDAgMCAwLS40OC0uNzhhMi4xIDIuMSAwIDAgMC0uNzctLjQ4Yy0yLjQ3LS44NS05LjUxLTIuNTYtMTUuMjEgMi45QzE4Ljg0IDE0LjY2IDE0IDI2LjUgMTQgMjYuNWw3IDdzMTEuNzgtNC45IDE4LjQ4LTExLjk0IiAvPgoJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI4LjA1IDExLjg3YzUuNTMtNS4yNyAxMi4zMS0zLjggMTUtMi45NGExNyAxNyAwIDAgMC0uNjYtMi41N2EyIDIgMCAwIDAtMS4zLTEuMjZjLTIuNDctLjg1LTkuNTEtMi41Ni0xNS4yMSAyLjlDMTguODQgMTQuNjYgMTQgMjYuNSAxNCAyNi41bDIuNjkgMi42OWMxLjQzLTMuMTkgNS42OC0xMS45MiAxMS4zNi0xNy4zMiIgLz4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ1NDEzYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMzkuNDggMjEuNTZjNS40Mi01LjcgMy43MS0xMi43MyAyLjg2LTE1LjJhMiAyIDAgMCAwLS40OC0uNzhhMi4xIDIuMSAwIDAgMC0uNzctLjQ4Yy0yLjQ3LS44NS05LjUxLTIuNTYtMTUuMjEgMi45QzE4Ljg0IDE0LjY2IDE0IDI2LjUgMTQgMjYuNWw3IDdzMTEuNzgtNC45IDE4LjQ4LTExLjk0IiBzdHJva2Utd2lkdGg9IjEiIC8+Cgk8cGF0aCBmaWxsPSIjNDU0MTNjIiBkPSJNMTguMjIgNDQuMjFhMTAgMS41IDAgMSAwIDIwIDBhMTAgMS41IDAgMSAwLTIwIDAiIG9wYWNpdHk9IjAuMTUiIC8+Cgk8cGF0aCBmaWxsPSIjZmY2MjQyIiBzdHJva2U9IiM0NTQxM2MiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTIyLjcgMjUuNjVhLjY4LjY4IDAgMCAwLS45Mi0uOTNhMjIuMSAyMi4xIDAgMCAwLTUuMzEgMy44YTE3LjggMTcuOCAwIDAgMC0zLjg3IDUuODZhLjM0LjM0IDAgMCAwIC40NC40NUExNy44IDE3LjggMCAwIDAgMTguOSAzMWEyMS45IDIxLjkgMCAwIDAgMy44LTUuMzUiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTxwYXRoIGZpbGw9IiNjMGRjZWIiIHN0cm9rZT0iIzQ1NDEzYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjguMjQgMTMuNzJhNS40OSA1LjQ5IDAgMSAwIDEwLjk4IDBhNS40OSA1LjQ5IDAgMSAwLTEwLjk4IDAiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTxwYXRoIGZpbGw9IiMwMGI4ZjAiIGQ9Ik0yOS45NiAxMy42OWEzLjggMy44IDAgMSAwIDcuNiAwYTMuOCAzLjggMCAxIDAtNy42IDAiIC8+Cgk8cGF0aCBmaWxsPSIjNGFjZmZmIiBkPSJNMzEuMDcgMTFhMy44IDMuOCAwIDAgMCAwIDUuMzhhNCA0IDAgMCAwIC44NS42MmwzLjU1LTYuNjlhMy43NyAzLjc3IDAgMCAwLTQuNC42OSIgLz4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ1NDEzYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjkuOTYgMTMuNjlhMy44IDMuOCAwIDEgMCA3LjYgMGEzLjggMy44IDAgMSAwLTcuNiAwIiBzdHJva2Utd2lkdGg9IjEiIC8+Cgk8cGF0aCBmaWxsPSIjZmY4YTE0IiBzdHJva2U9IiM0NTQxM2MiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExLjM0IDQxLjQ3Yy0uNy43LTUuMTYgMi4yMS03LjQyIDIuOTRjLS40Mi4xNC0xLS40Ny0uODktLjg5Yy43My0yLjI1IDIuMjQtNi43MSAzLTcuNDJjLjk1LTEgMy40My0xIDQuOTEuNDZzMS4zNSAzLjk2LjQgNC45MSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJPHBhdGggZmlsbD0iI2ZmZTUwMCIgc3Ryb2tlPSIjNDU0MTNjIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMC4xMyAzOS43OWMtLjUuNDktMi41NyAxLTMgLjU2cy4wNy0yLjU0LjU3LTNhMS41NyAxLjU3IDAgMCAxIDIuMTMuMzRhMS41NiAxLjU2IDAgMCAxIC4zIDIuMSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJPHBhdGggZmlsbD0iI2ZmZTUwMCIgZD0ibTQzLjMyIDIzLjY5bC44IDEuNTFhLjQyLjQyIDAgMCAwIC4zMi4yMmwxLjY5LjJhLjQyLjQyIDAgMCAxIC4yNS43MWwtMS4xOSAxLjIyYS4zOS4zOSAwIDAgMC0uMTEuMzdsLjMzIDEuNjdhLjQyLjQyIDAgMCAxLS41OS40NmwtMS41My0uNzZhLjQ0LjQ0IDAgMCAwLS4zOSAwbC0xLjQ5Ljg0YS40My40MyAwIDAgMS0uNjItLjQzTDQxIDI4YS40MS40MSAwIDAgMC0uMTMtLjM2bC0xLjIxLTEuMTRhLjQyLjQyIDAgMCAxIC4yMS0uNzJsMS42OC0uMjlhLjQxLjQxIDAgMCAwIC4zMS0uMjNsLjcyLTEuNTVhLjQxLjQxIDAgMCAxIC43NC0uMDIiIC8+Cgk8cGF0aCBmaWxsPSIjZmZmNDhjIiBkPSJtNDAuNTMgMjcuMzFsMS4wNi0uMTlhLjQuNCAwIDAgMCAuMzEtLjIzbC43Mi0xLjU1YS40Mi40MiAwIDAgMSAuNzUgMGwuNzkgMS41MWEuNDIuNDIgMCAwIDAgLjMyLjIybDEuMDcuMTNsLjgzLS44NWEuNDIuNDIgMCAwIDAtLjI1LS43MWwtMS42OS0uMmEuNDIuNDIgMCAwIDEtLjMyLS4yMmwtLjgtMS41MWEuNDEuNDEgMCAwIDAtLjc0IDBsLS43MiAxLjU1YS40MS40MSAwIDAgMS0uMzEuMjNsLTEuNjguMjlhLjQyLjQyIDAgMCAwLS4yMS43MloiIC8+Cgk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0NTQxM2MiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTQzLjMyIDIzLjY5bC44IDEuNTFhLjQyLjQyIDAgMCAwIC4zMi4yMmwxLjY5LjJhLjQyLjQyIDAgMCAxIC4yNS43MWwtMS4xOSAxLjIyYS4zOS4zOSAwIDAgMC0uMTEuMzdsLjMzIDEuNjdhLjQyLjQyIDAgMCAxLS41OS40NmwtMS41My0uNzZhLjQ0LjQ0IDAgMCAwLS4zOSAwbC0xLjQ5Ljg0YS40My40MyAwIDAgMS0uNjItLjQzTDQxIDI4YS40MS40MSAwIDAgMC0uMTMtLjM2bC0xLjIxLTEuMTRhLjQyLjQyIDAgMCAxIC4yMS0uNzJsMS42OC0uMjlhLjQxLjQxIDAgMCAwIC4zMS0uMjNsLjcyLTEuNTVhLjQxLjQxIDAgMCAxIC43NC0uMDIiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTxwYXRoIGZpbGw9IiNmZmU1MDAiIGQ9Im0zMS43NCA0MC41OWwuMjYgMS4zNWEuMzUuMzUgMCAwIDAgLjIuMjRsMS4yNy41NGEuMzQuMzQgMCAwIDEgMCAuNmwtMS4yLjY4YS4zMi4zMiAwIDAgMC0uMTcuMjZsLS4xIDEuMzdhLjM0LjM0IDAgMCAxLS41Ny4yMmwtMS0uOTNhLjMuMyAwIDAgMC0uMy0uMDhsLTEuMzQuM2EuMzQuMzQgMCAwIDEtLjM4LS40N2wuNTktMS4yNWEuMzEuMzEgMCAwIDAgMC0uMzFsLS43LTEuMThhLjM0LjM0IDAgMCAxIC4zMy0uNTFsMS4zNi4xNmEuMzguMzggMCAwIDAgLjMtLjExbC45LTFhLjM0LjM0IDAgMCAxIC41NS4xMiIgLz4KCTxwYXRoIGZpbGw9IiNmZmY0OGMiIGQ9Im0yOC43NiA0Mi43NWwuODYuMWEuMzUuMzUgMCAwIDAgLjMtLjExbC45LTFhLjM0LjM0IDAgMCAxIC41OS4xNWwuMjcgMS4zNWEuMzEuMzEgMCAwIDAgLjE5LjI0bC44LjM0bC44NC0uNDdhLjM0LjM0IDAgMCAwIDAtLjZsLTEuMjctLjU0YS4zNS4zNSAwIDAgMS0uMi0uMjRsLS4yNy0xLjM1YS4zNC4zNCAwIDAgMC0uNTgtLjE2bC0uOSAxYS4zOC4zOCAwIDAgMS0uMy4xMWwtMS4zNi0uMTZhLjM0LjM0IDAgMCAwLS4zMy41MVoiIC8+Cgk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0NTQxM2MiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0ibTMxLjc0IDQwLjU5bC4yNiAxLjM1YS4zNS4zNSAwIDAgMCAuMi4yNGwxLjI3LjU0YS4zNC4zNCAwIDAgMSAwIC42bC0xLjIuNjhhLjMyLjMyIDAgMCAwLS4xNy4yNmwtLjEgMS4zN2EuMzQuMzQgMCAwIDEtLjU3LjIybC0xLS45M2EuMy4zIDAgMCAwLS4zLS4wOGwtMS4zNC4zYS4zNC4zNCAwIDAgMS0uMzgtLjQ3bC41OS0xLjI1YS4zMS4zMSAwIDAgMCAwLS4zMWwtLjctMS4xOGEuMzQuMzQgMCAwIDEgLjMzLS41MWwxLjM2LjE2YS4zOC4zOCAwIDAgMCAuMy0uMTFsLjktMWEuMzQuMzQgMCAwIDEgLjU1LjEyIiBzdHJva2Utd2lkdGg9IjEiIC8+Cgk8cGF0aCBmaWxsPSIjOWNlYjYwIiBkPSJNMTEuODYgN2EzLjA2IDMuMDYgMCAxIDEtMi41OS0zLjQ0QTMuMDYgMy4wNiAwIDAgMSAxMS44NiA3IiAvPgoJPHBhdGggZmlsbD0iI2M4ZmZhMSIgZD0iTTkuMjcgNS43NGEzLjA2IDMuMDYgMCAwIDEgMi40MSAyYTMgMyAwIDAgMCAuMTgtLjc0YTMuMDYgMy4wNiAwIDAgMC02LjA2LS44NUEzLjIgMy4yIDAgMCAwIDYgNy42N2EzLjA4IDMuMDggMCAwIDEgMy4yNy0xLjkzIiAvPgoJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDU0MTNjIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xMS44NiA3YTMuMDYgMy4wNiAwIDEgMS0yLjU5LTMuNDRBMy4wNiAzLjA2IDAgMCAxIDExLjg2IDciIHN0cm9rZS13aWR0aD0iMSIgLz4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ1NDEzYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNS44NiA3LjNDNS4xIDcuODIgMy41NyA5IDQgOS44NnMxMC40OS01LjE1IDEwLjE0LTZzLTIuNS4xMi0zLjI2LjQ4IiBzdHJva2Utd2lkdGg9IjEiIC8+Cjwvc3ZnPg==",
                },
              ].map((milestone, idx) => (
                <div
                  key={idx}
                  className=" w-[260px]   bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center relative border-t-4 border-[#26c6da] hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 flex items-center justify-center shadow-lg mb-4">
                    <Image
                      src={milestone.icon}
                      alt={milestone.title}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="font-bold text-lg text-[#00bcd4] mb-1">
                    {milestone.year}
                  </div>
                  <div className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-2 text-center">
                    {milestone.title}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-center">
                    {milestone.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Call to Action */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="bg-white my-16 dark:bg-gray-900 rounded-2xl p-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center">
              {t("home2.ctaTitle")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
              {t("home2.ctaDesc")}
            </p>
            <Link
              href="/contact-us"
              className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide"
            >
              {t("home2.ctaBtn")}
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default HomePage2;
