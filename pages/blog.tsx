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
      img: "/avatar2.jpg",
    },
    {
      name: t("blog.author2Name"),
      bio: t("blog.author2Bio"),
      img: "/avatar1.jpg",
    },
    {
      name: t("blog.author3Name"),
      bio: t("blog.author3Bio"),
      img: "/avatar3.jpg",
    },
  ];
  const tips = [
    {
      tip: t("blog.tip1Text"),
      author: t("blog.tip1Author"),
      color: "from-pink-400 to-fuchsia-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#9b9b9b"
              d="M17.651 22.27h-3.89c-.79 0-1.44.64-1.43 1.43v3.89c0 .79.64 1.43 1.43 1.43h.248a1.94 1.94 0 0 0 3.384 0h.258c.79 0 1.43-.64 1.43-1.43V23.7c0-.79-.64-1.43-1.43-1.43"
            ></path>
            <path
              fill="#fcd53f"
              d="M18.161 23.13c.24 0 .43-.18.45-.41c.07-.86.44-2.95 2.46-5.19a8.66 8.66 0 0 0 3.29-6.31c.02-.24.03-.4.03-.5v-.1c-.06-4.78-3.93-8.62-8.7-8.62a8.69 8.69 0 0 0-8.69 8.6s-.01.24.03.64c.16 2.54 1.4 4.79 3.29 6.28c2.02 2.25 2.42 4.34 2.49 5.2c.02.23.21.41.45.41z"
            ></path>
            <path
              fill="#ffb02e"
              d="M15.701 10.7c1.62 0 2.94 1.31 2.96 2.93v.08c0 .03 0 .07-.01.13c-.05.84-.46 1.63-1.12 2.15l-.07.05l-.06.06c-1.1 1.22-1.33 4.32-1.37 6.02h-.65c-.05-1.7-.29-4.8-1.39-6.02l-.06-.06l-.07-.05a2.96 2.96 0 0 1-1.12-2.17c0-.04-.01-.07-.01-.09v-.09c.03-1.62 1.36-2.94 2.97-2.94m0-1a3.96 3.96 0 0 0-2.45 7.07c1.2 1.34 1.14 6.36 1.14 6.36h2.64s-.08-5.02 1.13-6.35c.86-.68 1.43-1.71 1.5-2.88c.01-.11.01-.18.01-.23v-.04a3.97 3.97 0 0 0-3.97-3.93"
            ></path>
            <path
              fill="#d3d3d3"
              d="M19.167 25.053a.5.5 0 1 0-.172-.986l-6.74 1.18a.5.5 0 1 0 .172.986zm-.05 2.15a.5.5 0 0 0-.172-.985l-6.65 1.17a.5.5 0 1 0 .173.984z"
            ></path>
            <path
              fill="#fff478"
              d="M13.791 5.44c-1.11 1.92-.55 4.32 1.25 5.35s4.15.32 5.26-1.6s.55-4.32-1.25-5.35s-4.15-.32-5.26 1.6"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      tip: t("blog.tip2Text"),
      author: t("blog.tip2Author"),
      color: "from-cyan-400 to-blue-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 64 64"
        >
          <g fill="#f4ae7f">
            <path d="M52.11 58.32c0 3.056-2.289 5.531-5.116 5.531H14.379c-2.824 0-5.114-2.476-5.114-5.531V8.447c0-3.059 2.291-5.534 5.114-5.534h32.615c2.827 0 5.116 2.475 5.116 5.534z"></path>
            <path d="M30.899 10.509c0 .581-1.158 1.051-2.58 1.051H11.848c-1.426 0-2.582-.47-2.582-1.051v-9.46C9.266.47 10.421 0 11.848 0h16.471c1.422 0 2.58.47 2.58 1.049z"></path>
          </g>
          <path
            fill="#d0d2d3"
            d="M54.662 56c0 2.593-2.312 4.69-5.167 4.69H16.536c-2.851 0-5.167-2.098-5.167-4.69V13.73c0-2.591 2.316-4.69 5.167-4.69h32.959c2.855 0 5.167 2.1 5.167 4.69z"
          ></path>
          <path
            fill="#fff"
            d="M54.662 52.694c0 2.593-2.312 4.69-5.167 4.69H16.536c-2.851 0-5.167-2.098-5.167-4.69v-42.27c0-2.591 2.316-4.688 5.167-4.688h32.959c2.855 0 5.167 2.098 5.167 4.688z"
          ></path>
          <path
            fill="#d0d2d3"
            d="M43.1 8.28c0 .312-1.538.566-3.43.566h-21.9c-1.896 0-3.434-.254-3.434-.566V3.185c0-.315 1.538-.566 3.434-.566h21.9c1.892 0 3.43.251 3.43.566z"
          ></path>
          <path
            fill="#35494d"
            d="M20.07 18.03h28.562c1.922 0 1.922-2.7 0-2.7H20.07c-1.915 0-1.915 2.7 0 2.7m0 5.485h28.562c1.922 0 1.922-2.698 0-2.698H20.07c-1.915 0-1.915 2.698 0 2.698m0 5.605h28.562c1.922 0 1.922-2.7 0-2.7H20.07c-1.915 0-1.915 2.7 0 2.7m0 5.48h28.562c1.922 0 1.922-2.698 0-2.698H20.07c-1.915 0-1.915 2.698 0 2.698m0 10.58h13.148c1.916 0 1.916-2.699 0-2.699H20.07c-1.915-.001-1.915 2.699 0 2.699"
          ></path>
        </svg>
      ),
    },
    {
      tip: t("blog.tip3Text"),
      author: t("blog.tip3Author"),
      color: "from-yellow-400 to-orange-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 36 36"
        >
          <path
            fill="#3b88c3"
            d="M14.57 27.673c2.814-1.692 6.635-3.807 9.899-7.071c7.03-7.029 12.729-16.97 11.314-18.385C34.369.803 24.428 6.502 17.398 13.531c-3.265 3.265-5.379 7.085-7.071 9.899z"
          ></path>
          <path
            fill="#c1694f"
            d="M.428 34.744s7.071 1.414 12.021-3.536c2.121-2.121 2.121-4.949 2.121-4.949l-2.829-2.829s-3.535.708-4.95 2.122c-1.414 1.414-2.518 4.232-2.888 5.598c-.676 2.502-3.475 3.594-3.475 3.594"
          ></path>
          <path
            fill="#ccd6dd"
            d="m17.882 25.328l-5.168-5.168c-.391-.391-.958-.326-1.27.145l-1.123 1.705c-.311.471-.271 1.142.087 1.501l4.122 4.123c.358.358 1.03.397 1.501.087l1.705-1.124c.472-.311.536-.878.146-1.269"
          ></path>
          <path
            fill="#a0041e"
            d="M11.229 32.26c-1.191.769-1.826.128-1.609-.609c.221-.751-.12-1.648-1.237-1.414s-1.856-.354-1.503-1.767c.348-1.393-1.085-1.863-1.754-.435c-.582 1.16-1.017 2.359-1.222 3.115c-.677 2.503-3.476 3.595-3.476 3.595s5.988 1.184 10.801-2.485"
          ></path>
        </svg>
      ),
    },
    {
      tip: t("blog.tip4Text"),
      author: t("blog.tip4Author"),
      color: "from-green-400 to-teal-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#ca0b4a"
              d="M29.2 2.95c-.947-.947-2.7-.998-3.818-.425c-.913.314-1.874.667-2.854 1.063l.01.01c-2.575 1.095-6.427 3.04-9.51 5.902c-2.164 2.01-3.404 3.556-4.235 4.965l-5.298 1.95a1 1 0 0 0-.362 1.646l11.138 11.137a1 1 0 0 0 1.645-.362l2.204-5.986c1.608-.958 3.223-2.165 4.908-3.85c2.39-2.39 4.366-6.56 5.513-9.357l.009.008c.4-.99.758-1.961 1.074-2.883c.573-1.118.74-2.654-.424-3.818"
            ></path>
            <path
              fill="#f4f4f4"
              d="M23.299 4.365c-2.517 1.04-6.478 2.978-9.59 5.868c-2.015 1.87-3.172 3.294-3.94 4.55c-.769 1.255-1.175 2.38-1.663 3.74l-.002.007c-.17.474-.35.977-.559 1.514l4.556 4.556c3.602-1.48 6.74-2.828 10.22-6.307c2.351-2.352 4.339-6.642 5.454-9.421z"
            ></path>
            <path
              fill="#9b9b9b"
              d="M24.528 11.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0"
            ></path>
            <path
              fill="#83cbff"
              d="M23.528 11.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"
            ></path>
            <path
              fill="#ff8257"
              d="M2.451 29.61C1.744 28.905 2.028 24 4.528 23c0 0 2.5-1 4.11.6c1.612 1.601.89 3.4.89 3.4c-.707 2.121-3.718 2.965-4.071 2.61c-.195-.194.156-.55 0-.706c-.157-.157-.398.022-1.06.353c-.472.236-1.663.637-1.946.354"
            ></path>
            <path
              fill="#533566"
              d="M6.088 21.06a1.5 1.5 0 0 1 2.122 0l3.535 3.536a1.5 1.5 0 1 1-2.121 2.122l-3.536-3.536a1.5 1.5 0 0 1 0-2.121"
            ></path>
            <path
              fill="#f92f60"
              d="M15.535 18.722c.442-1.2-.725-2.368-1.926-1.926l-7.114 2.619a1 1 0 0 0-.362 1.646l5.138 5.137a1 1 0 0 0 1.645-.362z"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      tip: t("blog.tip5Text"),
      author: t("blog.tip5Author"),
      color: "from-purple-400 to-indigo-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#b4acbc"
              fillRule="evenodd"
              d="M16 8.05A3.5 3.5 0 0 1 18.5 7h8c.743 0 1.39.404 1.734 1.003c.07.121.096.26.096.4v2.294L29 25.5a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 3 25.5l.67-14.803V8.403c0-.14.026-.279.096-.4A2 2 0 0 1 5.5 7h8c.98 0 1.865.402 2.5 1.05"
              clipRule="evenodd"
            ></path>
            <path
              fill="#0074ba"
              d="M17.732 30H28.5c.83 0 1.501-.678 1.501-1.505V27.44c0-.827-.67-2.441-1.501-2.441h-25C2.671 25 2 26.614 2 27.441v1.064C2 29.332 2.67 30 3.501 30h10.767a2 2 0 0 0 3.464 0"
            ></path>
            <path
              fill="#00a6ed"
              fillRule="evenodd"
              d="M3.501 10H14v1h4v-1h10.499c.83 0 1.501.668 1.501 1.495v16c0 .827-.67 1.505-1.501 1.505H17.732a2 2 0 0 1-3.464 0H3.5c-.829 0-1.5-.668-1.5-1.495v-16.01C2 10.668 2.67 10 3.501 10M17.5 27.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
              clipRule="evenodd"
            ></path>
            <path
              fill="#b4acbc"
              d="M13 8H5.803a1.5 1.5 0 0 0-1.248.668L3 11v14.5A1.5 1.5 0 0 0 4.5 27h23a1.5 1.5 0 0 0 1.5-1.5V11l-1.555-2.332A1.5 1.5 0 0 0 26.197 8H19v3h-6z"
            ></path>
            <path
              fill="#f3eef8"
              d="M5.5 8h8a2.5 2.5 0 0 1 2.5 2.5V27l-.447-.894A2 2 0 0 0 13.763 25H5.5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m13 0h8a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-8.264a2 2 0 0 0-1.736 1.007V9c.456-.607 1.182-1 2-1"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      tip: t("blog.tip6Text"),
      author: t("blog.tip6Author"),
      color: "from-red-400 to-pink-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#ffc83d"
              d="M11.406 6.156c-5.275-.65-7.156 2-8.062 3.219c-2.469 3.64-.985 7.64.812 9.563c0 0 10.094 9.828 10.375 10.093s.946 1.172 2.547.914c1.398-.225 1.797-1.914 1.797-1.914s1.032.842 2.516 0c1.156-.656 1.109-1.968 1.109-1.968s1.238.62 2.563-.5c1.192-1.01.453-2.782.453-2.782s1.07.176 1.828-.656c1.025-1.125.672-2.547 0-3.187L19.625 10.5l-.594-3.125z"
            ></path>
            <path
              fill="#d67d00"
              d="m26.707 22.593l-2.226-2.257a.5.5 0 1 0-.712.703l1.764 1.788l-.017-.046s.582.096 1.191-.188m-2.729 3.557l-2.31-2.563a.5.5 0 0 0-.743.67l1.66 1.841c.199.076.73.232 1.393.053m-3.402 2.2l-1.806-1.913a.5.5 0 1 0-.727.687l.904.957c.199.13.795.45 1.629.269m-2.173.703c-.759.202-2.167.265-3.137-.773l-.776.71l.041.04q.044.042.1.1c.328.34 1.01 1.046 2.447.814c.622-.1 1.046-.49 1.325-.892"
            ></path>
            <path
              fill="#f59f00"
              d="M6.375 6.813c-1.687 2.166-4.287 7.775.313 11.625L5.24 19.993l-1.084-1.055C2.36 17.016.875 13.016 3.344 9.375l.04-.055c.525-.706 1.366-1.839 2.95-2.567z"
            ></path>
            <path
              fill="#d67d00"
              d="M17.25 23.688c1.203 1.39-.3 3.162-1 3.906L5.669 16.584c1.974-2.002 3.278-2.203 4.16-1.334c.88.869.468 1.484.468 1.484s1.194-.678 2.453.563c1.26 1.241.39 2.187.39 2.187s1.3-.234 2.22.797c1.03 1.157.374 2.5.374 2.5s.79.068 1.516.907"
            ></path>
            <path
              fill="#ffc83d"
              d="M12.438 8c3.234-1.297 8.14-1.953 10.39-1.984c1.531 0 3.481.37 5.547 2.797c3.3 3.874.828 8.296-1.125 10.093V17.5s-7.506-6.536-7.75-6.766c-.45-.425-2.302-.296-2.5-.234c-.604.188-1.65.5-3 1c-1.098.407-1.969.078-2.328-.766c-.36-.843-.842-2.09.765-2.734"
            ></path>
            <path
              fill="#d67d00"
              d="M28.31 17.71a8.4 8.4 0 0 1-1.06 1.196c-2.76-2.406-8.378-7.325-8.828-7.75s-.974-.406-1.172-.344A79 79 0 0 0 13.75 12c-1.098.407-2.203-.422-2.562-1.266c-.33-.771-.356-1.879.87-2.556l.632-.277l.05-.019c-1.953 1.468-.228 3.262 1.385 3.056c.567-.073 1.5-.266 2.406-.5c.36-.094.713-.259 1.046-.414c.625-.293 1.18-.552 1.58-.243c1.5 1.165 5.976 4.968 9.154 7.929"
            ></path>
            <path
              fill="#ffc83d"
              d="M8.82 16.879a2.203 2.203 0 0 0-3.09-.398L3.812 18.1c-.883.735-1.112 2.11-.467 3.002c.584.808 1.48 1.142 2.303.908c-.365.835-.334 1.903.367 2.49c.655.547 1.464.922 2.275.669c-.078.535.08 1.121.63 1.705c.52.551 1.276.826 2.087.643c-.107.572.074 1.208.743 1.853c.819.79 2.08.858 3.265-.23l.772-.9c.62-.78 1.478-2.136.196-3.288c-.443-.398-.952-.619-1.481-.62c.287-.7.282-1.558-.55-2.38c-.52-.513-1.157-.736-1.86-.568c.38-.808.371-1.633-.39-2.385c-.691-.683-1.543-1.007-2.643-.39c.194-.596.148-1.228-.24-1.731"
            ></path>
            <path
              fill="#d67d00"
              d="M9.034 17.242L4.31 21.907c.418.186.873.229 1.31.112l3.469-3.426l-.029.016c.15-.459.156-.94-.026-1.367m3.212 2.584L6.96 25.085c.425.171.878.226 1.332.085l3.807-3.786l-.005.001c.245-.52.328-1.048.153-1.559m2.326 3.071l-4.918 4.498c.404.177.865.231 1.345.125l3.513-3.213c.17-.427.23-.912.06-1.41"
            ></path>
          </g>
        </svg>
      ),
    },
  ];
  return (
    <>
      <Head>
        <title>{t("blog.pageTitle")}</title>
        <meta name="description" content={t("blog.pageDesc")} />
      </Head>
      <main className=" min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          >
            <source src="/blog-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("blog.heroTitle")}
            </h1>
            <p className="text-xl  dark:text-gray-300 mb-8">
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
        <section
          id="latest"
          className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 "
        >
          <div className="py-16 px-6 max-w-7xl mx-auto w-full">
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
                    className="w-full h-60   object-cover"
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
                      className="inline-block mt-auto px-6 py-2 rounded-lg bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-base text-center"
                    >
                      {t("blog.caseStudyReadMore")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Explore Blog Categories */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row md:items-start gap-12">
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
          </div>
        </section>

        {/* Section 4: Author Spotlight (Vertical Cards) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 mx-auto w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("blog.authorsTitle")}
            </h2>
            <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
              {authors.map((author, idx) => (
                <div
                  key={idx}
                  className="w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={author.img}
                    alt={author.name}
                    width={80}
                    height={80}
                    className="rounded-full w-30 h-30 object-cover object-top mb-6 border-4 border-[#00bcd4] shadow-lg"
                  />
                  <div className="font-bold text-xl text-[#00bcd4] mb-1 text-center">
                    {author.name}
                  </div>
                  <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                    {author.bio}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Quick Tips (Masonry Grid) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 mx-auto w-full">
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
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
          <div className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
              <Image
                src="/contact-main.jpg"
                alt={t("digitalMarketing.contactImgAlt")}
                width={400}
                height={400}
                className="rounded-3xl w-100 h-100 shadow-2xl object-cover"
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
                    {t("digitalMarketing.contactTitle")}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                    {t("digitalMarketing.contactDesc")}
                  </p>
                  <a
                    href="/contact-us"
                    className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
                  >
                    {t("digitalMarketing.contactBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Blog;
