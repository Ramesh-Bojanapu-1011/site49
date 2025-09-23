import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const WebDesign = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("webDesign.pageTitle")}</title>
        <meta name="description" content={t("webDesign.pageDesc")} />
      </Head>
      <main className="max-h-screen flex flex-col caret-transparent overflow-auto  [&::-webkit-scrollbar]:hidden">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          >
            <source src="/web-design-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30 pointer-events-none" />
          <div className="relative z-10 mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("webDesign.heroTitle")}
            </h1>
            <p className="text-xl  dark:text-gray-300 mb-8">
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
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="py-20 px-6   mx-auto w-full ">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("webDesign.processTitle")}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00bcd4] via-cyan-400 to-amber-400 opacity-30 z-0" />
              <div className="flex flex-col gap-14 relative z-10">
                {[
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KCTxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNCI+CgkJPHBhdGggZmlsbD0iIzJmODhmZiIgc3Ryb2tlPSIjMDAwIiBkPSJNMjEgMzhDMzAuMzg4OCAzOCAzOCAzMC4zODg4IDM4IDIxQzM4IDExLjYxMTIgMzAuMzg4OCA0IDIxIDRDMTEuNjExMiA0IDQgMTEuNjExMiA0IDIxQzQgMzAuMzg4OCAxMS42MTEyIDM4IDIxIDM4WiIgLz4KCQk8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTI2LjY1NyAxNC4zNDMxQzI1LjIwOTMgMTIuODk1NCAyMy4yMDkzIDEyIDIxLjAwMDEgMTJDMTguNzkxIDEyIDE2Ljc5MSAxMi44OTU0IDE1LjM0MzMgMTQuMzQzMSIgLz4KCQk8cGF0aCBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMzLjIyMTYgMzMuMjIxN0w0MS43MDY5IDQxLjcwNyIgLz4KCTwvZz4KPC9zdmc+",
                    title: t("webDesign.processDiscoveryTitle"),
                    desc: t("webDesign.processDiscoveryDesc"),
                  },
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMwMDY2ZDEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuOSA4LjQ3Yy4zNTkuNDIuODU4LjUxOSAxLjE0Ny44MzlhLjYzLjYzIDAgMCAxIC4xMy4zN2EuMjkuMjkgMCAwIDAgLjI5LjI4OWguMTZxLjYzNC4xOCAxLjI4OC4yNnEuMjguMDMuNTYgMHEuMjgxLS4wMTUuNTU4LS4wN2MuMzktLjA3Ljc3LS4xOSAxLjE1OS0uM3YuNzc5YzAgLjU4OS0uNy43NDktMS4xMjkuNzg5YTUuNCA1LjQgMCAwIDEtMS45MzctLjIyYy4wNy0uMjEtLjE3LS43NjktLjE5LS45NDlhLjMzMy4zMzMgMCAwIDAtLjY1OS4wOWMwIC4yMiAwIC44NDkuMSAxLjA5OWEuNDUuNDUgMCAwIDAgLjI3LjM2Yy43OS4yOTkgMS42My40NDUgMi40NzYuNDI4YTIuNDMgMi40MyAwIDAgMCAxLjcwOC0uNzA5Yy4xMzctLjE2Ny4yMi0uMzczLjI0LS41ODljMC0uMjYgMC0uNjA5LjA2LS45MThzLjE2LS4zOCAxLjA2OC0xLjE4OWMuNDYyLS41NC43MTctMS4yMjYuNzE5LTEuOTM3YTQuNiA0LjYgMCAwIDAtLjk5OS0yLjc0NmE0LjE0IDQuMTQgMCAwIDAtNC42MzMtMS4yOThBNC4xOSA0LjE5IDAgMCAwIDcuMzggNi41NzJjLS4wMjYuMzk0LjAxOC43OS4xMyAxLjE2OWMuMDguMjY2LjIxMy41MTMuMzkuNzI5bS4yNTktMS44MjhhMy4zMzUgMy4zMzUgMCAwIDEgMi40MjYtMi44MTZhMy4xMSAzLjExIDAgMCAxIDMuNDM1Ljk5OWMuMzk4LjQ4Ni42NjMgMS4wNjguNzcgMS42ODhhMiAyIDAgMCAxLS4zOSAxLjYzN2wtLjk5OS45MjlhLjUuNSAwIDAgMC0uMDcuMTJhLjM1LjM1IDAgMCAwLS4xNyAwYy0uNDI5IDAtLjgzOC0uMDUtMS4yNTctLjA2aC0xLjA1Yy0uMzk5LjA2LS43NzguMTYtMS4xNzcuMjFhMS4xNCAxLjE0IDAgMCAwLS4yMS0uNDZjLS4yNi0uMzItLjc1LS40NC0xLjA3OS0uODY5YTEuNTUgMS41NSAwIDAgMS0uMjUtLjY0OWEyLjQgMi40IDAgMCAxIC4wMi0uNzI5TTUuNTcyIDQuMjE2cS4xMDMuMTA3LjIyLjJxLjEwNS4wODguMjIuMTZjLjIzLjEyLjQ1LjE2OS42NjkuMjk5YS4yOS4yOSAwIDEgMCAuNDMtLjM5YTIuOSAyLjkgMCAwIDAtLjQzLS43MzlhMS4yIDEuMiAwIDAgMC0uMjYtLjIzYTEuNSAxLjUgMCAwIDAtLjMtLjE2OWE2IDYgMCAwIDAtLjczOC0uMjVhLjMzNS4zMzUgMCAxIDAtLjM3LjU2Yy4yMi4xOS4zNy4zNjkuNTYuNTU5TTguNDQ4IDEuMjhxLjA0Ni4xNTguMTEuMzFxLjA3Ni4xNDQuMTcuMjhjLjE3LjIwOS4zNi4zNTkuNTUuNTY4YS4yOS4yOSAwIDEgMCAuNTI4LS4yNGE3IDcgMCAwIDAtLjEyLS44MDhBMS43IDEuNyAwIDAgMCA5LjM2OC44YTYgNiAwIDAgMC0uNTMtLjU4OWEuMzIuMzIgMCAwIDAtLjU0My0uMWEuMzIuMzIgMCAwIDAtLjAzNS4zN3EuMDcuNDA2LjE5Ljc5OW00LjM2Mi44OTlhLjI5LjI5IDAgMCAwIC4yOC4zYS4zLjMgMCAwIDAgLjMtLjI4cS4xNjktLjMyNy4yNzktLjY4YTEuNSAxLjUgMCAwIDAgMC0uMzY5YzAtLjItLjA5LS4zNy0uMDgtLjU2YS4zNC4zNCAwIDAgMC0uMi0uNDI5YS4zMy4zMyAwIDAgMC0uNDE5LjJxLS4yMi4yOTMtLjM0LjY0YS45LjkgMCAwIDAtLjA3LjI3OWEuOS45IDAgMCAwIDAgLjI4cS4wOTguMzIuMjUuNjE5bTMuMzk2IDIuNTU2aDEuMDY4bC4zLS4xYy4yNC0uMDkuNDU5LS4yMS43MDgtLjMxYS4zMy4zMyAwIDAgMCAuMjgtLjM3OWEuMzMuMzMgMCAwIDAtLjM3LS4yOGMtLjI4OSAwLS41MzktLjA2LS44MTgtLjA2YTEuNCAxLjQgMCAwIDAtLjM1IDBhMS40IDEuNCAwIDAgMC0uMzQuMTFhMy43IDMuNyAwIDAgMC0uNzA4LjVhLjI5LjI5IDAgMCAwLS4wODYuNDcxYS4yOC4yOCAwIDAgMCAuMzE1LjA0OG0tNi45MiA4LjI3OGEuMy4zIDAgMCAwLS40MSAwYy0uNTU4LjUyLTEuMjQ4Ljk5OS0xLjk0NyAxLjUzOGMtLjQxOS4zMi0uODI4LjY2LTEuMjg4Ljk0OXEtLjcxLjQ4Mi0xLjUwOC43OTlhLjMyLjMyIDAgMCAwLS4yNC40YS4zMy4zMyAwIDAgMCAuNC4yMzlhNyA3IDAgMCAwIDIuMTI3LS43MWE2IDYgMCAwIDAgLjgwOS0uNTA4cS40MDgtLjI1OS43NzktLjU3cS43MjYtLjggMS4yOTgtMS43MTdhLjI5LjI5IDAgMCAwLS4wMi0uNDJtMi45OTYuMjhhLjI5LjI5IDAgMCAwLS4yOC0uMjhhLjMuMyAwIDAgMC0uMzEuMjhjLS4wOS40OS0uMjI5Ljk5OS0uMjk5IDEuNDg4cS0uMDMuMzMgMCAuNjU5cS4wMDYuMzQzLjA3LjY3OWMuMDg3LjUyNy4yNTIgMS4wMzkuNDkgMS41MThhLjMzLjMzIDAgMSAwIC42MTgtLjIxYTcuNiA3LjYgMCAwIDEtLjEtMS40MTh2LS45OThjLS4wMy0uNi0uMTMtMS4xNTktLjE5LTEuNzE4bTYuMzUyIDQuMzg0YS4zMy4zMyAwIDAgMCAuNDYtLjA4YS4zMi4zMiAwIDAgMC0uMDgtLjQ2YTEwIDEwIDAgMCAxLS44MS0uNzg4Yy0uMjU5LS4yOC0uNDc5LS41OC0uNzE4LS44OGMtLjI0LS4yOTktLjQ2LS41ODgtLjctLjg3OGMtLjQ5OS0uNjE5LS45OTgtMS4xOTgtMS40NDctMS44MDdhLjI5My4yOTMgMCAxIDAtLjUxLjI5cS4zOS45OTkuOTEgMS45MzdxLjI0LjM5LjUyOC43NDlxLjI4Ny4zNjQuNjMuNjc5Yy41MjYuNDgxIDEuMTEuODk3IDEuNzM3IDEuMjM4bS0xNS4wNzkuMzI5QTIuNzg2IDIuNzg2IDAgMCAwIC44NSAyMC43NjJjLjA1IDMuMTE2IDUuNzUyIDMuNzE1IDUuNTQyLS4yYTIuNjM2IDIuNjM2IDAgMCAwLTIuODM2LTIuNTU2bS0xLjc2NyAyLjc5NmExLjc5NyAxLjc5NyAwIDAgMSAxLjg0Ny0xLjY5N2ExLjYzNyAxLjYzNyAwIDAgMSAxLjgxOCAxLjUzOGMuMzc5IDMuMTQ1LTMuODA1IDIuNDM2LTMuNjY1LjE0em0xMi4zNTEuOTA5Yy0uNDEtLjU3LS44MDktMS41OTgtMS4zNzgtMi4yODdhMi41IDIuNSAwIDAgMC0xLjE1OC0uODM5YS42NC42NCAwIDAgMC0uNjYuMjhjLS4xNDkuMjMtLjQ3OS44NDktLjUwOS44OTlsLTEuODY3IDMuMjk1YS4yOS4yOSAwIDAgMCAuMzAxLjQ0M2EuMy4zIDAgMCAwIC4xODgtLjEyM2wyLjE2Ny0zLjA3NnMuMjgtLjI1LjQ1LS40NnEuMjM3LjI1NS40Mi41NWMuNDM5LjY1OS44MDggMS40NjggMS4xNjggMS45OTdxLjI0NS4xOTIuNDY5LjQxaC0uMDVhMyAzIDAgMCAxLS40OC4xOGE1LjMgNS4zIDAgMCAxLTEuMjM4LjIwOWMtLjY1OS4wNS0xLjMyOCAwLTEuOTk3IDBhLjM0LjM0IDAgMCAwIDAgLjY3Yy42OS4wNDkgMS4zNjguMTI5IDIuMDU3LjEzOWMuNDg0LjAxMy45NjctLjAzNCAxLjQzOC0uMTRhNCA0IDAgMCAwIC43Ny0uMjNjLjIxNi0uMDk4LjQwNS0uMjQ5LjU0OC0uNDM5YS42My42MyAwIDAgMCAwLS42NWMtLjE4LS4yMjktLjU4OS0uNzU4LS42MzktLjgyOG04Ljk5OC0uNTA5YTUuMyA1LjMgMCAwIDAtLjI3LTIuMDg3YTEuNTMgMS41MyAwIDAgMC0xLjUwOC0uNzNhNy41IDcuNSAwIDAgMC0xLjA0OC4xYy0uNzYuMTItMS40OTguMzItMi4yNjcuNGEuMzQuMzQgMCAwIDAtLjMxLjM2YS4zMy4zMyAwIDAgMCAuMzYuM2MuNzc5IDAgMS41NDgtLjE5IDIuMzE2LS4yNnEuNDctLjAzOS45NCAwYy4zNjkgMCAuNTY4LjExLjY2OC4zYTQuMiA0LjIgMCAwIDEgMCAxLjY1N3EuMDMuNDIgMCAuODM5YS43NS43NSAwIDAgMS0uMTEuNDY5YS43NS43NSAwIDAgMS0uMzkuMTFjLS4zODkuMDYtLjgzOC4wNi0xLjA5OC4xMWwtMS4xMjguMTFoLS43ODlhMi41IDIuNSAwIDAgMS0uNDYgMGEuOC44IDAgMCAxLS4zMTktLjA5Yy0uMTItLjA3LS4xNS0uMy0uMTktLjU1YTEyIDEyIDAgMCAxLS4xMi0xLjM3OGE3IDcgMCAwIDEgMC0uNzc5YTcgNyAwIDAgMSAwLS43NjlhLjI5Mi4yOTIgMCAwIDAtLjU3OS0uMDhxLS4wNy40MDgtLjEuODJhOCA4IDAgMCAwIDAgLjgyOGE5LjcgOS43IDAgMCAwIDAgMS43MzhjLjAzNy4zNTIuMi42NzguNDYuOTE5cS4yMzcuMTY3LjUyLjI0cS4zMzQuMDkuNjc4LjEyOWwuOTA5LjA1bDEuMjY4LS4wOGMuMzItLjA1Ljg3OSAwIDEuMzE4LS4xM2MuMjgxLS4wNTQuNTQzLS4xODIuNzYtLjM3Yy4yMDYtLjIwNS4zNDItLjQ3LjM4OS0uNzU4Yy4wOS0uNDY3LjEyMy0uOTQzLjEtMS40MTgiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0iIzAwNjZkMSIgLz4KPC9zdmc+",
                    title: t("webDesign.processStrategyTitle"),
                    desc: t("webDesign.processStrategyDesc"),
                  },
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxjaXJjbGUgY3g9IjEwLjUiIGN5PSI5LjUiIHI9IjYuNSIgZmlsbD0idXJsKCNTVkdsSVlrdGRYUikiIC8+CgkJPGNpcmNsZSBjeD0iMTAuNSIgY3k9IjkuNSIgcj0iNi41IiBmaWxsPSJ1cmwoI1NWRzRKMGFPY21WKSIgZmlsbC1vcGFjaXR5PSIwLjYiIC8+CgkJPGNpcmNsZSBjeD0iMTAuNSIgY3k9IjkuNSIgcj0iNi41IiBmaWxsPSJ1cmwoI1NWR296cUZFQnR5KSIgZmlsbC1vcGFjaXR5PSIwLjYiIC8+CgkJPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiB4PSIxMCIgeT0iOSIgZmlsbD0idXJsKCNTVkd4U3RsNWN6YSkiIHJ4PSIzIiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHOWpWdUVibnQpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41IDE2YTYuNSA2LjUgMCAwIDAgNi40ODEtN0gxM2EzIDMgMCAwIDAtMyAzdjMuOTgxcS4yNDguMDIuNS4wMTkiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR0txWnRJZUFsKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNSAxNmE2LjUgNi41IDAgMCAwIDYuNDgxLTdIMTNhMyAzIDAgMCAwLTMgM3YzLjk4MXEuMjQ4LjAyLjUuMDE5IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPHBhdGggZmlsbD0idXJsKCNTVkdXMDBad3J0cikiIGQ9Ik03LjUgMTMuOTQ4YzAgNS4yNy0xLjQ2IDguMDItMi43NSA4LjAyYy0xLjExNyAwLTIuNzUtMi4yODItMi43NS04LjAyQzIgOS4wNSAzLjIzMSA4LjI3IDQuNzUgOC4yN2MxLjM1NCAwIDIuNzUuNDEgMi43NSA1LjY3OCIgLz4KCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR1d3RDhFZTdUKSIgZmlsbC1vcGFjaXR5PSIwLjUiIGQ9Ik03LjUgMTMuOTQ4YzAgNS4yNy0xLjQ2IDguMDItMi43NSA4LjAyYy0xLjExNyAwLTIuNzUtMi4yODItMi43NS04LjAyQzIgOS4wNSAzLjIzMSA4LjI3IDQuNzUgOC4yN2MxLjM1NCAwIDIuNzUuNDEgMi43NSA1LjY3OCIgLz4KCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR0ppVWs2ZGR0KSIgZD0iTTcuNSAxMy45NDhjMCA1LjI3LTEuNDYgOC4wMi0yLjc1IDguMDJjLTEuMTE3IDAtMi43NS0yLjI4Mi0yLjc1LTguMDJDMiA5LjA1IDMuMjMxIDguMjcgNC43NSA4LjI3YzEuMzU0IDAgMi43NS40MSAyLjc1IDUuNjc4IiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHWG1QWW5iRk8pIiBmaWxsLW9wYWNpdHk9IjAuNyIgZD0iTTcuNSAxMy45NDhjMCA1LjI3LTEuNDYgOC4wMi0yLjc1IDguMDJjLTEuMTE3IDAtMi43NS0yLjI4Mi0yLjc1LTguMDJDMiA5LjA1IDMuMjMxIDguMjcgNC43NSA4LjI3YzEuMzU0IDAgMi43NS40MSAyLjc1IDUuNjc4IiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZD0iTTIuMDYzIDEyLjIwNmMuMjctMy4zNSAxLjM3LTMuOTM2IDIuNjg3LTMuOTM2YzEuMTg2IDAgMi40MDUuMzE0IDIuNjg5IDMuOTM2YTUgNSAwIDAgMS0yLjY4OC43NjdjLTEgMC0xLjkyNi0uMjg0LTIuNjg4LS43NjciIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiNmZmYiIC8+CgkJPHBhdGggZmlsbD0idXJsKCNTVkdwa201VWNHYSkiIGQ9Ik01LjU3NSAyLjA3NEEuNzUuNzUgMCAwIDEgNiAyLjc1YzAgLjc0NS4zMjggMS4zMzEuNzMyIDEuOTMyYy4zMzIuNDk0Ljc2OCAxLjE0MS43NjggMi4wNjhhMi43NSAyLjc1IDAgMSAxLTUuNSAwYzAtLjM2OCAwLTEuMDAxLjM4My0xLjgxOGMuMzc1LS44IDEuMDg4LTEuNzE5IDIuMzk4LTIuNzY4YS43NS43NSAwIDAgMSAuNzk0LS4wOSIgLz4KCQk8ZGVmcz4KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdsSVlrdGRYUiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKC03OC4zODIgMTQuMzY2IDYuMzk2KXNjYWxlKDE3LjU4NjMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBvZmZzZXQ9Ii4yMjIiIHN0b3AtY29sb3I9IiM0ZTQ2ZTIiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii41NzgiIHN0b3AtY29sb3I9IiM2MjVkZjYiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii45NTUiIHN0b3AtY29sb3I9IiNlMzdkZmYiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHNEowYU9jbVYiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg2Ljc3ODk3IC0yLjEwOTAxIDIuNzYwNjcgOC44NzM1OSAyLjI5MiAxMi45MTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBvZmZzZXQ9Ii41NjYiIHN0b3AtY29sb3I9IiMyNTFmYmEiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZTUxZTQiIHN0b3Atb3BhY2l0eT0iMCIgLz4KCQkJPC9yYWRpYWxHcmFkaWVudD4KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdvenFGRUJ0eSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDYuNDYyODMgLjkzODEgLS45NTg5MyA2LjYwNjI5IDEuODA2IDguMDkyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agb2Zmc2V0PSIuNTY2IiBzdG9wLWNvbG9yPSIjMjUxZmJhIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWU1MWU0IiBzdG9wLW9wYWNpdHk9IjAiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHeFN0bDVjemEiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg0Mi40NjIgLTYuOTIgMTkuNzcxKXNjYWxlKDE0LjE4ODUgMTkuMjcxOSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiNjMzU0ZmYiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii4xNTgiIHN0b3AtY29sb3I9IiNiMzM5ZjAiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii40MjkiIHN0b3AtY29sb3I9IiNmMjRhOWQiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii43NDkiIHN0b3AtY29sb3I9IiNmZjgzNWMiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmM0NzAiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHV3dEOEVlN1QiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg4MS4yMjQgLTIuMDYyIDYuMzQzKXNjYWxlKDEzLjYxMTcgMzMuNzUzMSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiNkZDNjZTIiIHN0b3Atb3BhY2l0eT0iMCIgLz4KCQkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2RkM2NlMiIgLz4KCQkJPC9yYWRpYWxHcmFkaWVudD4KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdYbVBZbmJGTyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDIuNTM2NzEgLTYuNDQxMTQgMTIuNDMwNzIgNC44OTU1OSAzLjAwMyA4LjA3NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIG9mZnNldD0iLjE2OSIgc3RvcC1jb2xvcj0iIzAyODg4ZCIgLz4KCQkJCTxzdG9wIG9mZnNldD0iLjI2IiBzdG9wLWNvbG9yPSIjMDI4ODhkIiBzdG9wLW9wYWNpdHk9IjAiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHcGttNVVjR2EiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMS43ODg2MiA1LjQ3MDY4IC01LjkyMDM4IC0xLjkzNTY1IDUuOTE3IDQuNDUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBzdG9wLWNvbG9yPSIjZmY5NTMyIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIuMjUxIiBzdG9wLWNvbG9yPSIjZmY4MzVjIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjI0YTlkIiAvPgoJCQk8L3JhZGlhbEdyYWRpZW50PgoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWRzlqVnVFYm50IiB4MT0iMTYuMzEzIiB4Mj0iMTEuMDgiIHkxPSIxNS44OTciIHkyPSI4LjIwOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agb2Zmc2V0PSIuMTk1IiBzdG9wLWNvbG9yPSIjNmQzN2NkIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIuNzY1IiBzdG9wLWNvbG9yPSIjZWE3MWVmIiAvPgoJCQk8L2xpbmVhckdyYWRpZW50PgoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0txWnRJZUFsIiB4MT0iMTcuNDIiIHgyPSI5LjA3NiIgeTE9IjE3LjcwNSIgeTI9IjYuMDQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBvZmZzZXQ9Ii4xOTUiIHN0b3AtY29sb3I9IiM3NjMxZmYiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii44ODYiIHN0b3AtY29sb3I9IiNlNjMwODAiIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHVzAwWndydHIiIHgxPSIuNzExIiB4Mj0iNi44NzIiIHkxPSIxNC4wODUiIHkyPSIyMC42MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agc3RvcC1jb2xvcj0iIzBmYWZmZiIgLz4KCQkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI3NjRlNyIgLz4KCQkJPC9saW5lYXJHcmFkaWVudD4KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdKaVVrNmRkdCIgeDE9IjkuNTYzIiB4Mj0iLS4wNjIiIHkxPSIxNC41NDQiIHkyPSIxNC41NDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIG9mZnNldD0iLjMwNyIgc3RvcC1jb2xvcj0iIzBkOTFlMSIgLz4KCQkJCTxzdG9wIG9mZnNldD0iLjc2MSIgc3RvcC1jb2xvcj0iIzUyYjQ3MSIgLz4KCQkJPC9saW5lYXJHcmFkaWVudD4KCQk8L2RlZnM+Cgk8L2c+Cjwvc3ZnPg==",
                    title: t("webDesign.processDesignTitle"),
                    desc: t("webDesign.processDesignDesc"),
                  },
                  {
                    icon: "https://www.svgrepo.com/show/49726/development.svg",
                    title: t("webDesign.processDevTitle"),
                    desc: t("webDesign.processDevDesc"),
                  },
                  {
                    icon: "https://www.svgrepo.com/show/263540/launch-rocket.svg",
                    title: t("webDesign.processLaunchTitle"),
                    desc: t("webDesign.processLaunchDesc"),
                  },
                  {
                    icon: "https://www.svgrepo.com/show/428775/support-online-center.svg",
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
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 mx-auto w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("webDesign.featuresTitle")}
            </h2>
            <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
              {[
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0xMiA2Ljc0QTIuODcgMi44NyAwIDEgMCAxMiAxYTIuODcgMi44NyAwIDAgMCAwIDUuNzQiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZjliZiIgZD0iTTkuMTMgMy44N2MuMDAxLjI3LjA0LjU0LjExNi44QTIuODcgMi44NyAwIDAgMCAxMy44IDEuNjM0QTIuODcgMi44NyAwIDAgMCA5LjEzIDMuODciIC8+CgkJPHBhdGggZmlsbD0iI2ZmYmM0NCIgZD0ibTkuMDIgMTEuMjg1bC0yLjQzMSAxLjE0YTEuNTk4IDEuNTk4IDAgMCAwLS42NyAyLjQwMmw0LjE2OSA2LjI0aDMuODI2bDQuMTY4LTYuMjRhMS42IDEuNiAwIDAgMC0uNjctMi40MDJsLTIuNjE0LTEuMjI3eiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZlZjVlIiBkPSJNMTUuNjEgOS41NjlhLjQ3Ny40NzcgMCAwIDAtLjY0LS41NTRhNy45NCA3Ljk0IDAgMCAxLTUuOTQzLS4wMDhhLjQ3OC40NzggMCAwIDAtLjYzOC41NTRsMi42NTUgMTEuNTA1aDEuOTEzeiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmOWJmIiBkPSJNMTIgOS41ODhhOC4zIDguMyAwIDAgMS0yLjk3My0uNTgxYS40NzguNDc4IDAgMCAwLS42MzguNTU0bDIuNjU1IDExLjUwNUgxMnoiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMTkxOTE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNy40NjcgMjIuNjI5YTQuMjYgNC4yNiAwIDAgMC0zLjA0NS0xLjU0Mkg5LjYzOWE0LjQgNC40IDAgMCAwLTMuMDc2IDEuNTE5TDYuMjYyIDIzSDE3Ljc0ek0xNS42MSA5LjU2OWEuNDc3LjQ3NyAwIDAgMC0uNjQtLjU1NGE3Ljk0IDcuOTQgMCAwIDEtNS45NDMtLjAwOGEuNDc4LjQ3OCAwIDAgMC0uNjM4LjU1NGwyLjY1NSAxMS41MDVoMS45MTN6TTEyIDYuNzRBMi44NyAyLjg3IDAgMSAwIDEyIDFhMi44NyAyLjg3IDAgMCAwIDAgNS43NG00LjUyOCA1LjI3bC44ODQuNDE1YTEuNTk4IDEuNTk4IDAgMCAxIC42NyAyLjQwM2wtNC4xNjkgNi4yNG0tNi40NC05LjA1OGwtLjg4NC40MTVhMS41OTggMS41OTggMCAwIDAtLjY3IDIuNDAzbDQuMTY5IDYuMjQiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTwvZz4KPC9zdmc+",
                  title: t("webDesign.featureAwardTitle"),
                  desc: t("webDesign.featureAwardDesc"),
                },
                {
                  icon: "https://pic.onlinewebfonts.com/thumbnails/icons_448371.svg",
                  title: t("webDesign.featureFastTitle"),
                  desc: t("webDesign.featureFastDesc"),
                },
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDYiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTA2IDUxMiI+Cgk8cmVjdCB3aWR0aD0iNTA2IiBoZWlnaHQ9IjUxMiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMwMDY2ZDEiIGQ9Ik0yMDguOTY0LjAwN0w1MS40NSA3My45NzdjLTE4LjcxIDEwLjMzNy0xMi4zNiAyNy41OTQgMTMuNDYgNDMuMTE5bDEyMS4xMDEgNzIuMjY3YzIuNzA1IDEzLjQyNi02LjQxMyAyOC40NDctMjAuMTUgMzAuOTRjLTQyLjU2Ny0yNS4wNDgtODQuNTE2LTUxLjItMTI3LjQ3NS03NS41MjVjLTQ4LjI1Ny0xNS41Ni0zNy4yOTQgMzAuMzg1LTM3LjM2NSA1Ny4wM2w5LjYzIDEzMS40YzIuNzIgMTkuNjc2IDIwLjgzIDIwLjYzMyA0My44NTMgNi42bDk4LjI5MS01OS4zOTZjMTEuNDc4IDQuNDUyIDIyLjcyNSAxNy40MDYgMjIuMzQ1IDMwLjI4N0w1Ny4xOTQgMzgyLjMxMWMtOS43IDguMzUyLTEwLjc4IDI2Ljc3NiAxLjYxNCAzMy4yM2M0NS44ODQgMzIuMDcgOTEuODA2IDY0LjE5NiAxMzguMTA1IDk1LjU5NmMxNC40MyA0LjI5NyAzMS4xOTQtOC4wNzIgMzAuMDI1LTIzLjQ0bDIuNDE3LTE0OS40MzNjOS42ODQtMTEuMzczIDI5LjEyLTEwLjg2MiAzOS43MS4wMzdsLTEuNTY3IDE0Ny4zNTJjMi4wNTggMjkuNzA2IDM0LjEzNSAyNi40MzkgNTQuOTk3IDEwLjE3M0w0NDIuMzA4IDQxMy45YzIyLjY0OS0yMC4wODkgMy41NDEtMzIuMzc0LTEyLjI1My00MS41MUwzMjcuNzcgMzE1LjU1NGMtMi4zNi0xMy43MDUgNC41OTQtMzAuODczIDE5LjMxNS0zMy45NDdsMTE3LjQ5NyA2Ni45MDdjOS43MjggNC4wNDQgMjYuMjAxIDMuNzYzIDI1LjgzOC0xMS4xMjNjNi4yMTYtNTguNzYgMTEuODk2LTEyNC4wMiAxNC45NDYtMTc3LjIxM2MtNS4yODItMTMuODQ3LTI0LjQ3OS0xOS4zOTItMzYuNzk1LTExLjU1MUwzMzguNjkgMjIxLjMxYy04LjU2LTYuODc4LTMwLjE5NC0yNC4xODItMTEuNzQtMzMuNDUybDEyMy41MTYtNjkuMzk2YzI0Ljk0MS0xNy40NiA1LjI0MS00MC40MDMtMTMuMzMtNDkuOUwyOTkuMjQgMi4wNTJjLTI1LjcxNy00Ljc3OC0yNy42ODggOC45MDUtMjkuMDcyIDI0LjgzOWwuNjQ1IDEyNC44ODZjLTEwLjM2NyA5LjIzMi0yNy45MjQgOS4zMzEtMzcuNzY3LS41ODNsLS4yODQtMTMxLjI3QzIyOS41MjQgOS43NjUgMjIwLjI3OC0uMyAyMDguOTY0LjAwNm0tMjIuMDEzIDY4Ljc0MXEuNjM2IDI4LjI2IDEuMjc2IDU2LjUyMmwtNTMuOTg0LTMyLjIzOGMxNy41NDYtOS4xODMgMzUuMDg5LTE4LjM3MiA1Mi42MzQtMjcuNTU2em0xODYuMzggMjcuMTE3bC01Ni4xMSAzMS4wOWwxLjkyNS01OC42MDR6bS04Ny4wMiAxNDkuMDhjNC4wNDggMy40MTYtMS42OTQgNy4xNTMtNC4zOTkgOC44NGMtOS4yNTEgOC4yNjctMTIuNDkyIDIxLjEyNy0xMi42MDUgMzMuMTI2Yy03LjUwNS0xMC45NDktMjQuOTY2LTE1LjA0NS0zNC44NTUtNS4xMDFjLTMuNiAyLjczLTQuNzczLTMuOTUyLTQuNDE1LTYuNzk1Yy0xLjA2Mi0xMS43ODctOS4xNzktMjEuMzA3LTE4LjQ0NC0yNy44NjJjMTAuMDM4LTUuOTE4IDE4Ljg5LTE1LjI2IDE5LjkwOS0yNy40MjRjMy4zNC0zLjg3OCA3LjI4NS0uMDA4IDExLjM5NSAyLjUxNGMxMC42NDMgMy4xMyAyMiAuMjk2IDMxLjY4NC00LjUxNmMtNS45MTQgMTMuNjY0IDIuMzggMjMuODM0IDExLjczIDI3LjIxOG0tMTc3LjAyIDkuMDdsLTUxLjI1NiAyNy45NTRsLTMuMjc4LTYwLjc0em0zMzUuNjgyIDMwLjEwNGwtNTQuMTItMjcuNTgzbDU2LjU3LTMxLjU1OXpNMTcxLjg2MSA0MjkuNzFsLTQ5Ljg3Ny0zMS42Mmw1MC44NDktMzQuNTQ2em0yMDQuNDcyLTMyLjI1M2wtNTAuOTEyIDMzLjE2bDEuMTM5LTY0LjMxNXoiIC8+Cjwvc3ZnPg==",
                  title: t("webDesign.featureGraphicsTitle"),
                  desc: t("webDesign.featureGraphicsDesc"),
                },
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMxZTg4ZTUiIGQ9Ik0yOC45NjcgMTJIOS40NDJhMiAyIDAgMCAwLTEuODk4IDEuMzY4TDQgMjRWMTBoMjRhMiAyIDAgMCAwLTItMkgxNS4xMjRhMiAyIDAgMCAxLTEuMjgtLjQ2NGwtMS4yODgtMS4wNzJBMiAyIDAgMCAwIDExLjI3NiA2SDRhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDIybDQuODA1LTExLjIxMkEyIDIgMCAwIDAgMjguOTY3IDEyIiAvPgoJPHBhdGggZmlsbD0iI2JiZGVmYiIgZD0iTTIxLjk5OCAxMEMxNiAxMCAxMiAxNCAxMiAyMGExMCAxMCAwIDAgMCAxMCAxMGMuOTIgMCAyIDAgMi0yYzAtLjQzNi0uNTY5LS43ODUtLjk2NC0xLjE4QTIuMzcgMi4zNyAwIDAgMSAyMiAyNWMwLTEgMS0xIDItMWg0YzQgMCA0LTQgNC02YzAtNC00LTgtMTAuMDAyLThNMTYgMjBhMiAyIDAgMSAxIDItMmEyIDIgMCAwIDEtMiAybTYtNGEyIDIgMCAxIDEgMi0yYTIgMiAwIDAgMS0yIDJtNiA0YTIgMiAwIDEgMSAyLTJhMiAyIDAgMCAxLTIgMiIgLz4KPC9zdmc+",
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
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="py-20 px-6 mx-auto w-full">
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
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
          <div className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
              <Image
                src="/contact-main.jpg"
                alt={t("webDesign.contactImgAlt")}
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
                    <Link
                      href="mailto:hello@site49.com"
                      className="hover:scale-110 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        viewBox="0 0 32 32"
                      >
                        <g fill="none">
                          <rect
                            width={30}
                            height={22}
                            x={1}
                            y={5}
                            fill="#b4acbc"
                            rx={1.5}
                          ></rect>
                          <rect
                            width={28}
                            height={18}
                            x={2}
                            y={7}
                            fill="#cdc4d6"
                            rx={1}
                          ></rect>
                          <path
                            fill="#e1d8ec"
                            d="m30 23.4l-12.971-7.782a2 2 0 0 0-2.058 0L2 23.4V25a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1z"
                          ></path>
                          <path
                            fill="#998ea4"
                            d="M2 9.766V8h28v1.766L17.544 17.24a3 3 0 0 1-3.088 0z"
                          ></path>
                          <path
                            fill="#f3eef8"
                            d="M2 8.6V7a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v1.6l-12.971 7.783a2 2 0 0 1-2.058 0z"
                          ></path>
                          <path
                            fill="#00a6ed"
                            d="M16 23a7 7 0 1 0 0-14a7 7 0 0 0 0 14"
                          ></path>
                          <path
                            fill="#f4f4f4"
                            d="M16 11.5c-1.21-.02-2.36.44-3.22 1.3c-.87.85-1.34 1.99-1.34 3.2c0 2.48 2.02 4.5 4.5 4.5a.47.47 0 1 0 0-.94c-1.96 0-3.56-1.6-3.56-3.56c0-.96.38-1.86 1.06-2.53s1.59-1.03 2.55-1.03c1.93.03 3.51 1.65 3.51 3.62v.81a.67.67 0 0 1-1.34 0v-3.08a.47.47 0 0 0-.47-.47c-.26 0-.49.21-.49.47v.09c-.44-.35-.99-.57-1.6-.57c-1.4 0-2.54 1.14-2.54 2.54s1.14 2.54 2.54 2.54c.7 0 1.34-.29 1.8-.75c.28.5.81.84 1.42.84c.89 0 1.62-.73 1.62-1.62v-.81c0-2.47-1.99-4.52-4.44-4.55m-.39 5.96c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6s1.6.72 1.6 1.6s-.72 1.6-1.6 1.6"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                    <Link
                      href="tel:+1234567890"
                      className="hover:scale-110 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="#000"
                          strokeLinejoin="round"
                          strokeWidth={4}
                        >
                          <path
                            strokeLinecap="round"
                            d="M41.7796 20.6066C42.0324 18.9108 41.9495 17.1747 41.5309 15.5054C40.978 13.3002 39.8392 11.2118 38.1147 9.4873C36.3902 7.76281 34.3018 6.62409 32.0967 6.07115C30.4274 5.65257 28.6912 5.56967 26.9954 5.82245"
                          ></path>
                          <path
                            strokeLinecap="round"
                            d="M34.1897 19.8035C34.4605 17.9869 33.8967 16.0699 32.4983 14.6715C31.0998 13.2731 29.1829 12.7092 27.3663 12.98"
                          ></path>
                          <path
                            fill="#2f88ff"
                            d="M14.3757 8.79424C15.1022 8.79424 15.7716 9.1883 16.1243 9.8235L18.5707 14.2303C18.891 14.8073 18.9061 15.5052 18.6109 16.0955L16.2541 20.8091C16.2541 20.8091 16.9371 24.3206 19.7955 27.179C22.654 30.0374 26.1536 30.7086 26.1536 30.7086L30.8665 28.3522C31.4572 28.0568 32.1556 28.0721 32.7328 28.393L37.1521 30.85C37.7868 31.2028 38.1803 31.8719 38.1803 32.598V37.6715C38.1803 40.2552 35.7804 42.1213 33.3323 41.2952C28.3044 39.5987 20.4997 36.3685 15.5529 31.4216C10.606 26.4748 7.37579 18.6701 5.67928 13.6422C4.85325 11.1941 6.71934 8.79424 9.30299 8.79424H14.3757Z"
                          ></path>
                        </g>
                      </svg>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
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
                    </Link>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center drop-shadow-lg">
                    {t("webDesign.contactTitle")}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                    {t("webDesign.contactDesc")}
                  </p>
                  <Link
                    href="/contact-us"
                    className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
                  >
                    {t("webDesign.contactBtn")}
                  </Link>
                </div>
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
