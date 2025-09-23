import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const SeoOptimization = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("seoOptimization.pageTitle")}</title>
        <meta name="description" content={t("seoOptimization.pageDesc")} />
      </Head>
      <main className=" max-h-screen flex flex-col caret-transparent overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
            <source src="/seo-optimization-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30 pointer-events-none" />
          <div className="relative z-10 mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("seoOptimization.heroTitle")}
            </h1>
            <p className="text-xl  dark:text-gray-300 mb-8">
              {t("seoOptimization.heroDesc")}
            </p>
            <Link
              href="/contact-us"
              className="px-8 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide animate-bounce"
            >
              {t("seoOptimization.heroBtn")}
            </Link>
          </div>
        </section>

        {/* Section 2: Awards & Recognition */}
        <section className="mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-10 backdrop-blur-xl">
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold mb-6 text-[#00bcd4] dark:text-[#26c6da] drop-shadow-lg">
                {t("seoOptimization.awardsTitle")}
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                {t("seoOptimization.awardsDesc")}
              </p>
              <ul className="list-disc pl-6 text-base space-y-2 text-[#00bcd4] dark:text-cyan-300">
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("seoOptimization.award1Title")}
                  </span>{" "}
                  – {t("seoOptimization.award1Org")}
                </li>
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("seoOptimization.award2Title")}
                  </span>{" "}
                  – {t("seoOptimization.award2Org")}
                </li>
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("seoOptimization.award3Title")}
                  </span>{" "}
                  – {t("seoOptimization.award3Org")}
                </li>
                <li>
                  <span className="font-semibold text-[#0097a7] dark:text-amber-300">
                    {t("seoOptimization.award4Title")}
                  </span>{" "}
                  {t("seoOptimization.award4Org")}
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
        </section>

        {/* Section 3: SEO Process Steps (Vertical Stepper) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="py-20 px-6 mx-auto w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("seoOptimization.processTitle")}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00bcd4] via-cyan-400 to-amber-400 opacity-30 z-0" />
              <div className="flex flex-col gap-14 relative z-10">
                {[
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KCTxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNCI+CgkJPHBhdGggZmlsbD0iIzJmODhmZiIgc3Ryb2tlPSIjMDAwIiBkPSJNMjEgMzhDMzAuMzg4OCAzOCAzOCAzMC4zODg4IDM4IDIxQzM4IDExLjYxMTIgMzAuMzg4OCA0IDIxIDRDMTEuNjExMiA0IDQgMTEuNjExMiA0IDIxQzQgMzAuMzg4OCAxMS42MTEyIDM4IDIxIDM4WiIgLz4KCQk8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTI2LjY1NyAxNC4zNDMxQzI1LjIwOTMgMTIuODk1NCAyMy4yMDkzIDEyIDIxLjAwMDEgMTJDMTguNzkxIDEyIDE2Ljc5MSAxMi44OTU0IDE1LjM0MzMgMTQuMzQzMSIgLz4KCQk8cGF0aCBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMzLjIyMTYgMzMuMjIxN0w0MS43MDY5IDQxLjcwNyIgLz4KCTwvZz4KPC9zdmc+",
                    title: t("seoOptimization.processAuditTitle"),
                    desc: t("seoOptimization.processAuditDesc"),
                  },
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMwMDY2ZDEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuOSA4LjQ3Yy4zNTkuNDIuODU4LjUxOSAxLjE0Ny44MzlhLjYzLjYzIDAgMCAxIC4xMy4zN2EuMjkuMjkgMCAwIDAgLjI5LjI4OWguMTZxLjYzNC4xOCAxLjI4OC4yNnEuMjguMDMuNTYgMHEuMjgxLS4wMTUuNTU4LS4wN2MuMzktLjA3Ljc3LS4xOSAxLjE1OS0uM3YuNzc5YzAgLjU4OS0uNy43NDktMS4xMjkuNzg5YTUuNCA1LjQgMCAwIDEtMS45MzctLjIyYy4wNy0uMjEtLjE3LS43NjktLjE5LS45NDlhLjMzMy4zMzMgMCAwIDAtLjY1OS4wOWMwIC4yMiAwIC44NDkuMSAxLjA5OWEuNDUuNDUgMCAwIDAgLjI3LjM2Yy43OS4yOTkgMS42My40NDUgMi40NzYuNDI4YTIuNDMgMi40MyAwIDAgMCAxLjcwOC0uNzA5Yy4xMzctLjE2Ny4yMi0uMzczLjI0LS41ODljMC0uMjYgMC0uNjA5LjA2LS45MThzLjE2LS4zOCAxLjA2OC0xLjE4OWMuNDYyLS41NC43MTctMS4yMjYuNzE5LTEuOTM3YTQuNiA0LjYgMCAwIDAtLjk5OS0yLjc0NmE0LjE0IDQuMTQgMCAwIDAtNC42MzMtMS4yOThBNC4xOSA0LjE5IDAgMCAwIDcuMzggNi41NzJjLS4wMjYuMzk0LjAxOC43OS4xMyAxLjE2OWMuMDguMjY2LjIxMy41MTMuMzkuNzI5bS4yNTktMS44MjhhMy4zMzUgMy4zMzUgMCAwIDEgMi40MjYtMi44MTZhMy4xMSAzLjExIDAgMCAxIDMuNDM1Ljk5OWMuMzk4LjQ4Ni42NjMgMS4wNjguNzcgMS42ODhhMiAyIDAgMCAxLS4zOSAxLjYzN2wtLjk5OS45MjlhLjUuNSAwIDAgMC0uMDcuMTJhLjM1LjM1IDAgMCAwLS4xNyAwYy0uNDI5IDAtLjgzOC0uMDUtMS4yNTctLjA2aC0xLjA1Yy0uMzk5LjA2LS43NzguMTYtMS4xNzcuMjFhMS4xNCAxLjE0IDAgMCAwLS4yMS0uNDZjLS4yNi0uMzItLjc1LS40NC0xLjA3OS0uODY5YTEuNTUgMS41NSAwIDAgMS0uMjUtLjY0OWEyLjQgMi40IDAgMCAxIC4wMi0uNzI5TTUuNTcyIDQuMjE2cS4xMDMuMTA3LjIyLjJxLjEwNS4wODguMjIuMTZjLjIzLjEyLjQ1LjE2OS42NjkuMjk5YS4yOS4yOSAwIDEgMCAuNDMtLjM5YTIuOSAyLjkgMCAwIDAtLjQzLS43MzlhMS4yIDEuMiAwIDAgMC0uMjYtLjIzYTEuNSAxLjUgMCAwIDAtLjMtLjE2OWE2IDYgMCAwIDAtLjczOC0uMjVhLjMzNS4zMzUgMCAxIDAtLjM3LjU2Yy4yMi4xOS4zNy4zNjkuNTYuNTU5TTguNDQ4IDEuMjhxLjA0Ni4xNTguMTEuMzFxLjA3Ni4xNDQuMTcuMjhjLjE3LjIwOS4zNi4zNTkuNTUuNTY4YS4yOS4yOSAwIDEgMCAuNTI4LS4yNGE3IDcgMCAwIDAtLjEyLS44MDhBMS43IDEuNyAwIDAgMCA5LjM2OC44YTYgNiAwIDAgMC0uNTMtLjU4OWEuMzIuMzIgMCAwIDAtLjU0My0uMWEuMzIuMzIgMCAwIDAtLjAzNS4zN3EuMDcuNDA2LjE5Ljc5OW00LjM2Mi44OTlhLjI5LjI5IDAgMCAwIC4yOC4zYS4zLjMgMCAwIDAgLjMtLjI4cS4xNjktLjMyNy4yNzktLjY4YTEuNSAxLjUgMCAwIDAgMC0uMzY5YzAtLjItLjA5LS4zNy0uMDgtLjU2YS4zNC4zNCAwIDAgMC0uMi0uNDI5YS4zMy4zMyAwIDAgMC0uNDE5LjJxLS4yMi4yOTMtLjM0LjY0YS45LjkgMCAwIDAtLjA3LjI3OWEuOS45IDAgMCAwIDAgLjI4cS4wOTguMzIuMjUuNjE5bTMuMzk2IDIuNTU2aDEuMDY4bC4zLS4xYy4yNC0uMDkuNDU5LS4yMS43MDgtLjMxYS4zMy4zMyAwIDAgMCAuMjgtLjM3OWEuMzMuMzMgMCAwIDAtLjM3LS4yOGMtLjI4OSAwLS41MzktLjA2LS44MTgtLjA2YTEuNCAxLjQgMCAwIDAtLjM1IDBhMS40IDEuNCAwIDAgMC0uMzQuMTFhMy43IDMuNyAwIDAgMC0uNzA4LjVhLjI5LjI5IDAgMCAwLS4wODYuNDcxYS4yOC4yOCAwIDAgMCAuMzE1LjA0OG0tNi45MiA4LjI3OGEuMy4zIDAgMCAwLS40MSAwYy0uNTU4LjUyLTEuMjQ4Ljk5OS0xLjk0NyAxLjUzOGMtLjQxOS4zMi0uODI4LjY2LTEuMjg4Ljk0OXEtLjcxLjQ4Mi0xLjUwOC43OTlhLjMyLjMyIDAgMCAwLS4yNC40YS4zMy4zMyAwIDAgMCAuNC4yMzlhNyA3IDAgMCAwIDIuMTI3LS43MWE2IDYgMCAwIDAgLjgwOS0uNTA4cS40MDgtLjI1OS43NzktLjU3cS43MjYtLjggMS4yOTgtMS43MTdhLjI5LjI5IDAgMCAwLS4wMi0uNDJtMi45OTYuMjhhLjI5LjI5IDAgMCAwLS4yOC0uMjhhLjMuMyAwIDAgMC0uMzEuMjhjLS4wOS40OS0uMjI5Ljk5OS0uMjk5IDEuNDg4cS0uMDMuMzMgMCAuNjU5cS4wMDYuMzQzLjA3LjY3OWMuMDg3LjUyNy4yNTIgMS4wMzkuNDkgMS41MThhLjMzLjMzIDAgMSAwIC42MTgtLjIxYTcuNiA3LjYgMCAwIDEtLjEtMS40MTh2LS45OThjLS4wMy0uNi0uMTMtMS4xNTktLjE5LTEuNzE4bTYuMzUyIDQuMzg0YS4zMy4zMyAwIDAgMCAuNDYtLjA4YS4zMi4zMiAwIDAgMC0uMDgtLjQ2YTEwIDEwIDAgMCAxLS44MS0uNzg4Yy0uMjU5LS4yOC0uNDc5LS41OC0uNzE4LS44OGMtLjI0LS4yOTktLjQ2LS41ODgtLjctLjg3OGMtLjQ5OS0uNjE5LS45OTgtMS4xOTgtMS40NDctMS44MDdhLjI5My4yOTMgMCAxIDAtLjUxLjI5cS4zOS45OTkuOTEgMS45MzdxLjI0LjM5LjUyOC43NDlxLjI4Ny4zNjQuNjMuNjc5Yy41MjYuNDgxIDEuMTEuODk3IDEuNzM3IDEuMjM4bS0xNS4wNzkuMzI5QTIuNzg2IDIuNzg2IDAgMCAwIC44NSAyMC43NjJjLjA1IDMuMTE2IDUuNzUyIDMuNzE1IDUuNTQyLS4yYTIuNjM2IDIuNjM2IDAgMCAwLTIuODM2LTIuNTU2bS0xLjc2NyAyLjc5NmExLjc5NyAxLjc5NyAwIDAgMSAxLjg0Ny0xLjY5N2ExLjYzNyAxLjYzNyAwIDAgMSAxLjgxOCAxLjUzOGMuMzc5IDMuMTQ1LTMuODA1IDIuNDM2LTMuNjY1LjE0em0xMi4zNTEuOTA5Yy0uNDEtLjU3LS44MDktMS41OTgtMS4zNzgtMi4yODdhMi41IDIuNSAwIDAgMC0xLjE1OC0uODM5YS42NC42NCAwIDAgMC0uNjYuMjhjLS4xNDkuMjMtLjQ3OS44NDktLjUwOS44OTlsLTEuODY3IDMuMjk1YS4yOS4yOSAwIDAgMCAuMzAxLjQ0M2EuMy4zIDAgMCAwIC4xODgtLjEyM2wyLjE2Ny0zLjA3NnMuMjgtLjI1LjQ1LS40NnEuMjM3LjI1NS40Mi41NWMuNDM5LjY1OS44MDggMS40NjggMS4xNjggMS45OTdxLjI0NS4xOTIuNDY5LjQxaC0uMDVhMyAzIDAgMCAxLS40OC4xOGE1LjMgNS4zIDAgMCAxLTEuMjM4LjIwOWMtLjY1OS4wNS0xLjMyOCAwLTEuOTk3IDBhLjM0LjM0IDAgMCAwIDAgLjY3Yy42OS4wNDkgMS4zNjguMTI5IDIuMDU3LjEzOWMuNDg0LjAxMy45NjctLjAzNCAxLjQzOC0uMTRhNCA0IDAgMCAwIC43Ny0uMjNjLjIxNi0uMDk4LjQwNS0uMjQ5LjU0OC0uNDM5YS42My42MyAwIDAgMCAwLS42NWMtLjE4LS4yMjktLjU4OS0uNzU4LS42MzktLjgyOG04Ljk5OC0uNTA5YTUuMyA1LjMgMCAwIDAtLjI3LTIuMDg3YTEuNTMgMS41MyAwIDAgMC0xLjUwOC0uNzNhNy41IDcuNSAwIDAgMC0xLjA0OC4xYy0uNzYuMTItMS40OTguMzItMi4yNjcuNGEuMzQuMzQgMCAwIDAtLjMxLjM2YS4zMy4zMyAwIDAgMCAuMzYuM2MuNzc5IDAgMS41NDgtLjE5IDIuMzE2LS4yNnEuNDctLjAzOS45NCAwYy4zNjkgMCAuNTY4LjExLjY2OC4zYTQuMiA0LjIgMCAwIDEgMCAxLjY1N3EuMDMuNDIgMCAuODM5YS43NS43NSAwIDAgMS0uMTEuNDY5YS43NS43NSAwIDAgMS0uMzkuMTFjLS4zODkuMDYtLjgzOC4wNi0xLjA5OC4xMWwtMS4xMjguMTFoLS43ODlhMi41IDIuNSAwIDAgMS0uNDYgMGEuOC44IDAgMCAxLS4zMTktLjA5Yy0uMTItLjA3LS4xNS0uMy0uMTktLjU1YTEyIDEyIDAgMCAxLS4xMi0xLjM3OGE3IDcgMCAwIDEgMC0uNzc5YTcgNyAwIDAgMSAwLS43NjlhLjI5Mi4yOTIgMCAwIDAtLjU3OS0uMDhxLS4wNy40MDgtLjEuODJhOCA4IDAgMCAwIDAgLjgyOGE5LjcgOS43IDAgMCAwIDAgMS43MzhjLjAzNy4zNTIuMi42NzguNDYuOTE5cS4yMzcuMTY3LjUyLjI0cS4zMzQuMDkuNjc4LjEyOWwuOTA5LjA1bDEuMjY4LS4wOGMuMzItLjA1Ljg3OSAwIDEuMzE4LS4xM2MuMjgxLS4wNTQuNTQzLS4xODIuNzYtLjM3Yy4yMDYtLjIwNS4zNDItLjQ3LjM4OS0uNzU4Yy4wOS0uNDY3LjEyMy0uOTQzLjEtMS40MTgiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0iIzAwNjZkMSIgLz4KPC9zdmc+",
                    title: t("seoOptimization.processStrategyTitle"),
                    desc: t("seoOptimization.processStrategyDesc"),
                  },
                  {
                    icon: "https://www.svgrepo.com/show/37799/optimization.svg",
                    title: t("seoOptimization.processOnPageTitle"),
                    desc: t("seoOptimization.processOnPageDesc"),
                  },
                  {
                    icon: "https://www.svgrepo.com/show/49726/development.svg",
                    title: t("seoOptimization.processTechnicalTitle"),
                    desc: t("seoOptimization.processTechnicalDesc"),
                  },
                  {
                    icon: "https://www.reshot.com/preview-assets/icons/TBKZWXJF27/seo-TBKZWXJF27.svg",
                    title: t("seoOptimization.processOffPageTitle"),
                    desc: t("seoOptimization.processOffPageDesc"),
                  },
                  {
                    icon: "https://www.svgrepo.com/show/428775/support-online-center.svg",
                    title: t("seoOptimization.processReportingTitle"),
                    desc: t("seoOptimization.processReportingDesc"),
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
                        } top-1/2 -translate-y-1/2 w-14 h-14 rounded-full dark:bg-white/80 bg-white/10 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 animate-float`}
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
        </section>

        {/* Section 4: SEO Features (Horizontal Cards) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="py-20 px-6 mx-auto w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("seoOptimization.featuresTitle")}
            </h2>
            <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
              {[
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0xMiA2Ljc0QTIuODcgMi44NyAwIDEgMCAxMiAxYTIuODcgMi44NyAwIDAgMCAwIDUuNzQiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZjliZiIgZD0iTTkuMTMgMy44N2MuMDAxLjI3LjA0LjU0LjExNi44QTIuODcgMi44NyAwIDAgMCAxMy44IDEuNjM0QTIuODcgMi44NyAwIDAgMCA5LjEzIDMuODciIC8+CgkJPHBhdGggZmlsbD0iI2ZmYmM0NCIgZD0ibTkuMDIgMTEuMjg1bC0yLjQzMSAxLjE0YTEuNTk4IDEuNTk4IDAgMCAwLS42NyAyLjQwMmw0LjE2OSA2LjI0aDMuODI2bDQuMTY4LTYuMjRhMS42IDEuNiAwIDAgMC0uNjctMi40MDJsLTIuNjE0LTEuMjI3eiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZlZjVlIiBkPSJNMTUuNjEgOS41NjlhLjQ3Ny40NzcgMCAwIDAtLjY0LS41NTRhNy45NCA3Ljk0IDAgMCAxLTUuOTQzLS4wMDhhLjQ3OC40NzggMCAwIDAtLjYzOC41NTRsMi42NTUgMTEuNTA1aDEuOTEzeiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmOWJmIiBkPSJNMTIgOS41ODhhOC4zIDguMyAwIDAgMS0yLjk3My0uNTgxYS40NzguNDc4IDAgMCAwLS42MzguNTU0bDIuNjU1IDExLjUwNUgxMnoiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMTkxOTE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNy40NjcgMjIuNjI5YTQuMjYgNC4yNiAwIDAgMC0zLjA0NS0xLjU0Mkg5LjYzOWE0LjQgNC40IDAgMCAwLTMuMDc2IDEuNTE5TDYuMjYyIDIzSDE3Ljc0ek0xNS42MSA5LjU2OWEuNDc3LjQ3NyAwIDAgMC0uNjQtLjU1NGE3Ljk0IDcuOTQgMCAwIDEtNS45NDMtLjAwOGEuNDc4LjQ3OCAwIDAgMC0uNjM4LjU1NGwyLjY1NSAxMS41MDVoMS45MTN6TTEyIDYuNzRBMi44NyAyLjg3IDAgMSAwIDEyIDFhMi44NyAyLjg3IDAgMCAwIDAgNS43NG00LjUyOCA1LjI3bC44ODQuNDE1YTEuNTk4IDEuNTk4IDAgMCAxIC42NyAyLjQwM2wtNC4xNjkgNi4yNG0tNi40NC05LjA1OGwtLjg4NC40MTVhMS41OTggMS41OTggMCAwIDAtLjY3IDIuNDAzbDQuMTY5IDYuMjQiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTwvZz4KPC9zdmc+",
                  title: t("seoOptimization.featureAwardTitle"),
                  desc: t("seoOptimization.featureAwardDesc"),
                },
                {
                  icon: "https://pic.onlinewebfonts.com/thumbnails/icons_448371.svg",
                  title: t("seoOptimization.featureFastTitle"),
                  desc: t("seoOptimization.featureFastDesc"),
                },
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMwMDY2ZDEiIGQ9Ik0yMy41MzEgMTYuNDZhOC44IDguOCAwIDAgMC0uODQzLTIuMDA3YTcuNjUgNy42NSAwIDAgMC0yLjE1OC0yLjMzcS4yMTQtLjQ2MS4zODEtLjk0M2MuMjM3LS42NjIuMzMtMS4zNjcuMjcxLTIuMDY4YTIuMTYgMi4xNiAwIDAgMC0xLjAwNC0xLjYwNmExLjY0NiAxLjY0NiAwIDAgMC0yLjAwNy4xOWE2LjQgNi40IDAgMCAwLTEuNDA2IDEuNzY4cS0uNDkzLjk3OS0uODczIDIuMDA3YTQuOSA0LjkgMCAwIDAtMS42NzcuNTMycS0uNDIuMjIzLS43NzMuNTQyYTQgNCAwIDAgMC0uNjEyLjc1M2wtLjI4MS42MjNjLS4xNy43NDMuMDggMS4xMzQuNTEyIDEuMjk1Yy4zOS4xMy44MTQuMTMgMS4yMDUgMGMwIDAtMS4xNDUgMi4zNDktMS4xNTUgMi40NWE4LjQgOC40IDAgMCAwLS4zMjEgMS4zNzRhNCA0IDAgMCAwIDAgMS4wMDRhMy41IDMuNSAwIDAgMCAuMTQuNTYzYy4wNTkuMTQxLjE2LjI2LjI5MS4zNGEuOS45IDAgMCAwIC42NTMuMDkxYTIuNiAyLjYgMCAwIDAgLjgwMy0uMzcxbC41ODItLjU1MmwuNTUyLS43MDNxLjE2LS4wMzQuMzAyLS4xMXEuMzE0LS4yMDIuNTgyLS40NjJxLjM5My0uMzk1LjY5My0uODY0YTcgNyAwIDAgMCAuNDQxLS44NjNxLjA5NS4wNTEuMjAxLjA3cS4zMy4wOS42NzMuMDloLjQwMWEzIDMgMCAwIDAtLjEuNDczcS0uMDMuMjQgMCAuNDgxcS4wNDcuMjM4LjE0LjQ2MmMuMTY0LjM1Ni40MTIuNjY2LjcyMy45MDRhLjMxMy4zMTMgMCAwIDAgLjQ1MiAwYS4zMi4zMiAwIDAgMCAwLS40NTJhMiAyIDAgMCAxLS4xNy0uNDIyYzAtLjE1IDAtLjMtLjA2MS0uNDYyYy0uMDYtLjE2IDAtLjMtLjA3LS40NjFjLS4xNC0uNzIzLS4xNS0uOTA0LS4xOTEtMS4wMDRhLjI4MS4yODEgMCAwIDAtLjM5Ni0uMzAzYS4yNy4yNyAwIDAgMC0uMTI2LjEyMnEtLjIyNS4wMTUtLjQ1MiAwYTIuMSAyLjEgMCAwIDEtLjYwMi0uMThhMi40IDIuNCAwIDAgMS0uOTU0LTEuMDA0Yy0uMTQtLjI2MS0uMi0uNTUzLjE0LS43NDNsLjM0Mi0uMTZjLjI4My0uMDc2LjU4LS4wNzYuODYzIDBxLjQ3OS4xMzIuOTA0LjM5YS4zMS4zMSAwIDAgMCAuNDQyLS4wOWEuMzIuMzIgMCAwIDAtLjA4LS40NDJhNiA2IDAgMCAwLS41OTMtLjQwMWEuMzQuMzQgMCAwIDAgLjIyLS4xNXEuMzAyLS41MzMuNjAzLTEuMTE1YTkuMyA5LjMgMCAwIDEgMS41MjYgMi4yMjlxLjQ1Mi45MDUuNzkzIDEuODU3cS41MzggMS40OC45MDQgMy4wMTFhLjMzLjMzIDAgMCAwIC4zODEuMjYxYS4zMjMuMzIzIDAgMCAwIC4yNTEtLjM4MWEyMC42IDIwLjYgMCAwIDAtLjQ2Mi0zLjIzMm0tMTAuMDM4LTIuMDA3YS4yMy4yMyAwIDAgMS0uMS0uMDdsLjMtLjUzMnEuMzA3LS40NDIuNzAzLS44MDRxLjI2My0uMjU2LjU1Mi0uNDgycS4yNzctLjE5OS41ODItLjM1cS0uMDI4LjA3Ny0uMDcuMTVsLS44OTMgMi4wMDdhOCA4IDAgMCAxLTEuMDM0LjEyMXptLjM0IDUuNDkxYzAtLjA4LS4yLS44MzMtLjIyLTEuMTU0Yy0uMDItLjMyMiAwLS41MzIgMC0uNzkzcS40NDMuNDQ4Ljk0NC44MzNxLjIxNi4xNi40NTEuMjlzLTEuMDI0LjgyNC0xLjEzNC44NjR6bTUuMjQxLTYuNDU1YS4zMS4zMSAwIDAgMCAwIC4zMTFhMiAyIDAgMCAwLS4zMjEtLjE0YTIuMyAyLjMgMCAwIDAtMS4wMDQtLjA5bC0uNjMyLjE5YTEuMzQ2IDEuMzQ2IDAgMCAwLS44MDQgMS43NTdhMi4zOCAyLjM4IDAgMCAwIC45MjQgMS4yMTVjLS4xMi4xNy0uMjIuMzUxLS4zNTEuNTEycS0uMzU2LjQ1NS0uODI0Ljc5M2MtLjA4LjA2LS40MDEuMjctLjM1LjI3YTQgNCAwIDAgMS0uODU0LS4yN2MtLjMzMi0uMTcxLS42NDMtLjM2Mi0xLjAwNC0uNTQycS4zMy0uNjYzLjYwMi0xLjE3NWMuNjAyLTEuMTM0IDEuMDY0LTEuODg3IDEuODc3LTMuNDUzYy40NDItLjg5NC44MzQtMS45MDggMS4zMzYtMi44MzFhNS43IDUuNyAwIDAgMSAxLjEzNC0xLjU0NmEuNjQuNjQgMCAwIDEgLjgwMy0uMWExLjE3IDEuMTcgMCAwIDEgLjYxMi44MzNhNC4yIDQuMiAwIDAgMS0uMTMgMS43MjZjLS4wMS4yMzEtLjgyMyAyLjEyOC0xLjAxNCAyLjU0IiAvPgoJPHBhdGggZmlsbD0iIzAwNjZkMSIgZD0iTTE2LjA2MiAyMC44MjdhMjUgMjUgMCAwIDEtMy44NzUgMS43ODdhNC44IDQuOCAwIDAgMS0yLjYyLjIzMWEyLjMgMi4zIDAgMCAxLTEuMDA0LS42OTNBOS43IDkuNyAwIDAgMSA3LjQgMjAuNDI3Yy0uNTQyLS45MjQtMS4wMDQtMS44NTctMS40NzYtMi44MTFjLS42OTItMS40NDYtMS4zMDUtMi45MTEtMS45NDctNC4zOTdhMjkgMjkgMCAwIDEtLjg5NC0yLjI3OUMyLjY0MSA5Ljc4NSAyLjI3IDguNiAxLjg2OCA3LjQxNmMtLjA4LS4yMzEtLjU0My0xLjAwNC0uNzYzLTEuNDU2cS41MDgtLjAzIDEuMDA0LS4xNWE0MCA0MCAwIDAgMCA1LjAxOS0xLjY1N2E0MCA0MCAwIDAgMCA1LjM2LTIuNDhxLjI0Ny0uMTU1LjQ0Mi0uMzcxcS40MDEuNTg0LjcwMyAxLjIyNWMuNTEyIDEuMTQ0IDEuMDk0IDMuMDExIDEuNjY3IDQuNDk3Yy4xNy40MTIuMzQuNzkzLjUwMSAxLjExNGEuMzIuMzIgMCAwIDAgLjU5NC0uMDM1YS4zMy4zMyAwIDAgMC0uMDExLS4yNDZhMTAgMTAgMCAwIDEtLjQ2Mi0xLjA4NGMtLjU1Mi0xLjQ3Ni0xLjA4NC0zLjM5My0xLjU4Ni00LjU1N0E2LjUgNi41IDAgMCAwIDEzLjA1LjQwOWEuNDguNDggMCAwIDAtLjQ4MiAwYy0uMjYxLjE3LS4wOC4yOS0uNjIzLjYxMmE0OCA0OCAwIDAgMS02LjQwNCAyLjY2YTMxIDMxIDAgMCAxLTMuOTA1IDEuMTQ1Yy0xLjA4NC4xNi0uODc0LS4xMi0xLjMwNS4wOUEuNjIuNjIgMCAwIDAgMCA1LjQ4OGMuMjEuNzg0LjQ5MiAxLjU0Ny44NDQgMi4yNzljLjQwMSAxLjIzNS43NzMgMi4zOCAxLjE2NCAzLjU0NGMuMjkxLjc4My41OTIgMS41NjYuOTQ0IDIuMzQ5Yy42ODIgMS40NzUgMS4zMjUgMi45NDEgMi4wMDggNC4zNzdhMjcgMjcgMCAwIDAgMS42MDYgMi44NGMuMzcyLjY2LjgxNiAxLjI3NyAxLjMyNSAxLjgzOGMuMzc3LjQxMy44NjUuNzA5IDEuNDA1Ljg1M2E1LjQgNS40IDAgMCAwIDMuMDEyLS4zMTFhMjkgMjkgMCAwIDAgMy45MjUtMS45MjhhLjI4LjI4IDAgMCAwIC4xMS0uMzgxYS4yOC4yOCAwIDAgMC0uMjgtLjEyIiAvPgoJPHBhdGggZmlsbD0iIzAwNjZkMSIgZD0iTTcuNjcgNy43ODdhMTAuNSAxMC41IDAgMCAxIDEuNTg2LS4xNGE5IDkgMCAwIDAgMS43ODctLjIxMWEzLjY1IDMuNjUgMCAwIDAgMi4wOTgtMS4yODVhLjMyLjMyIDAgMCAwIDAtLjQ1MmEuMzEuMzEgMCAwIDAtLjQ1MiAwYy0uMzYuMzU2LS44MDYuNjEyLTEuMjk1Ljc0M2E3IDcgMCAwIDEtMS44MzcuMTJhOS43IDkuNyAwIDAgMC0yLjA2OC4xODFhNC4zIDQuMyAwIDAgMC0xLjQ2NS43MDNhNi4xIDYuMSAwIDAgMC0xLjQzNiAxLjYxNmEuMjkxLjI5MSAwIDAgMCAuNDMyLjM1MWMuMzYtLjQxNi43OC0uNzc4IDEuMjQ1LTEuMDc0YTMuNSAzLjUgMCAwIDEgMS40MDUtLjU1Mm02LjE4NCAyLjIxOWEuMzIuMzIgMCAwIDAgMC0uNDUyYS4zMS4zMSAwIDAgMC0uNDUyIDBjLS40MDcuMjcyLS44NjQuNDYtMS4zNDUuNTUyYy0uNzUzLjE3LTEuNTQ2LjE5LTIuMzUuMzAxYy0uNDU1LjA4Ny0uOS4yMjUtMS4zMjQuNDEycS0uNDMxLjE5NS0uODEzLjQ3MmE1LjEgNS4xIDAgMCAwLTEuNTQ2IDEuNjI2YS4yOS4yOSAwIDAgMCAuMTg0LjQzN2EuMjguMjggMCAwIDAgLjI5OC0uMTI2Yy4zMzUtLjQwMy43NC0uNzQzIDEuMTk0LTEuMDA0cS41Mi0uMjg5IDEuMDg0LS40NzJhNy40IDcuNCAwIDAgMSAxLjE0NS0uMzJjLjgwMy0uMTkyIDEuNjE2LS4yOTIgMi4zNzktLjU1M2E0LjIgNC4yIDAgMCAwIDEuNTQ2LS44NzNtLTMuOTE1IDQuODU4YTMuMyAzLjMgMCAwIDAtLjU5My4yNDFxLS4yNzguMTM3LS41MjIuMzMycS0uNTU2LjQ3NS0xLjAwMyAxLjA1NGEuMjkuMjkgMCAwIDAgMCAuNDAxYS4yOC4yOCAwIDAgMCAuNDAxIDBhMTQgMTQgMCAwIDEgMS4zMzUtLjY5MmMuMjExLS4xLjQxMi0uMjIxLjYyMy0uMzMyYy4yMS0uMTEuNDExLS4yNC42MzItLjM0MXEuMzI2LS4xNDUuNjczLS4yMzFhLjMyLjMyIDAgMCAwIC4yOS0uMzUxYS4zMS4zMSAwIDAgMC0uMjI0LS4yODJhLjMuMyAwIDAgMC0uMTI3LS4wMWE0LjMgNC4zIDAgMCAwLTEuNDg1LjIxMSIgLz4KPC9zdmc+",
                  title: t("seoOptimization.featureContentTitle"),
                  desc: t("seoOptimization.featureContentDesc"),
                },
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KCTxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9IiMwMDY2ZDEiPgoJCTxwYXRoIGQ9Ik0xIDBhMSAxIDAgMCAwLTEgMXY5YTEgMSAwIDAgMCAxIDFoNXYxSDJ2Mmg2VjlIMlYyaDEwdjRoMlYxYTEgMSAwIDAgMC0xLTF6IiAvPgoJCTxwYXRoIGQ9Ik0xMCA3YTEgMSAwIDAgMC0xIDF2N2ExIDEgMCAwIDAgMSAxaDVhMSAxIDAgMCAwIDEtMVY4YTEgMSAwIDAgMC0xLTF6bTEgN1Y5aDN2NXoiIC8+Cgk8L2c+Cjwvc3ZnPg==",
                  title: t("seoOptimization.featureMobileTitle"),
                  desc: t("seoOptimization.featureMobileDesc"),
                },
                {
                  icon: "/globe.svg",
                  title: t("seoOptimization.featureGlobalTitle"),
                  desc: t("seoOptimization.featureGlobalDesc"),
                },
                {
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9IiMwMDY2ZDEiPgoJCTxwYXRoIGQ9Ik0yNSA1aC0uMTd2MkgyNWExIDEgMCAwIDEgMSAxdjIwYTEgMSAwIDAgMS0xIDFIN2ExIDEgMCAwIDEtMS0xVjhhMSAxIDAgMCAxIDEtMWguMTdWNUg3YTMgMyAwIDAgMC0zIDN2MjBhMyAzIDAgMCAwIDMgM2gxOGEzIDMgMCAwIDAgMy0zVjhhMyAzIDAgMCAwLTMtMyIgLz4KCQk8cGF0aCBkPSJNMjMgM2gtM1YwaC04djNIOXY2aDE0em0tMiA0SDExVjVoM1YyaDR2M2gzeiIgLz4KCQk8cGF0aCBkPSJNMTAgMTNoMTJ2MkgxMHptMCA1aDEydjJIMTB6bTAgNWgxMnYySDEweiIgY2xhc3M9Im91aUljb25fX2ZpbGxTZWNvbmRhcnkiIC8+Cgk8L2c+Cjwvc3ZnPg==",
                  title: t("seoOptimization.featureReportingTitle"),
                  desc: t("seoOptimization.featureReportingDesc"),
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
        </section>

        {/* Section 5: Pricing Plans */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="py-20 px-6 mx-auto w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("seoOptimization.pricingTitle")}
            </h2>
            <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
              {/* Basic Plan */}
              <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
                  {t("seoOptimization.pricingBasicTitle")}
                </span>
                <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
                  <div className="font-extrabold text-4xl text-[#00bcd4] dark:text-cyan-300 mb-2 text-center drop-shadow-2xl">
                    $249
                  </div>
                  <div className="font-semibold text-lg text-[#0097a7] dark:text-cyan-200 mb-2 text-center tracking-wide">
                    {t("seoOptimization.pricingBasicDesc")}
                  </div>
                  <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                    <li>{t("seoOptimization.pricingBasicAudit")}</li>
                    <li>{t("seoOptimization.pricingBasicOnPage")}</li>
                    <li>{t("seoOptimization.pricingBasicKeywords")}</li>
                    <li>{t("seoOptimization.pricingBasicSupport")}</li>
                  </ul>
                  <Link
                    href="/contact-us"
                    className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
                  >
                    {t("seoOptimization.pricingBtn")}
                  </Link>
                </div>
              </div>
              {/* Advanced Plan */}
              <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
                  {t("seoOptimization.pricingAdvancedTitle")}
                </span>
                <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
                  <div className="font-extrabold text-4xl text-cyan-400 dark:text-amber-300 mb-2 text-center drop-shadow-2xl">
                    $499
                  </div>
                  <div className="font-semibold text-lg text-cyan-600 dark:text-amber-200 mb-2 text-center tracking-wide">
                    {t("seoOptimization.pricingAdvancedDesc")}
                  </div>
                  <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                    <li>{t("seoOptimization.pricingAdvancedFullSEO")}</li>
                    <li>{t("seoOptimization.pricingAdvancedContent")}</li>
                    <li>{t("seoOptimization.pricingAdvancedBacklinks")}</li>
                    <li>{t("seoOptimization.pricingAdvancedForms")}</li>
                  </ul>
                  <Link
                    href="/contact-us"
                    className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
                  >
                    {t("seoOptimization.pricingBtn")}
                  </Link>
                </div>
              </div>
              {/* Pro Plan */}
              <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-amber-400 to-[#00bcd4] text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
                  {t("seoOptimization.pricingProTitle")}
                </span>
                <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
                  <div className="font-extrabold text-4xl text-amber-400 dark:text-[#26c6da] mb-2 text-center drop-shadow-2xl">
                    $899
                  </div>
                  <div className="font-semibold text-lg text-amber-600 dark:text-[#80dde9] mb-2 text-center tracking-wide">
                    {t("seoOptimization.pricingProDesc")}
                  </div>
                  <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                    <li>{t("seoOptimization.pricingProAll")}</li>
                    <li>{t("seoOptimization.pricingProCustom")}</li>
                    <li>{t("seoOptimization.pricingProSupport")}</li>
                    <li>{t("seoOptimization.pricingProIntegrations")}</li>
                  </ul>
                  <Link
                    href="/contact-us"
                    className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-amber-400 to-[#00bcd4] text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
                  >
                    {t("seoOptimization.pricingBtn")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact CTA */}
        <section
          className="
          bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        "
        >
          <div className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
              <Image
                src="/contact-main.jpg"
                alt={t("seoOptimization.contactImgAlt")}
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
                    {t("seoOptimization.contactTitle")}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                    {t("seoOptimization.contactDesc")}
                  </p>
                  <Link
                    href="/contact-us"
                    className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
                  >
                    {t("seoOptimization.contactBtn")}
                  </Link>
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

export default SeoOptimization;
