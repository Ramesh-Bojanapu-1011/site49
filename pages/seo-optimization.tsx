import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const SeoOptimization = () => {
  const { t } = useTranslation();
  const seoStats = [
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0xMiA2Ljc0QTIuODcgMi44NyAwIDEgMCAxMiAxYTIuODcgMi44NyAwIDAgMCAwIDUuNzQiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZjliZiIgZD0iTTkuMTMgMy44N2MuMDAxLjI3LjA0LjU0LjExNi44QTIuODcgMi44NyAwIDAgMCAxMy44IDEuNjM0QTIuODcgMi44NyAwIDAgMCA5LjEzIDMuODciIC8+CgkJPHBhdGggZmlsbD0iI2ZmYmM0NCIgZD0ibTkuMDIgMTEuMjg1bC0yLjQzMSAxLjE0YTEuNTk4IDEuNTk4IDAgMCAwLS42NyAyLjQwMmw0LjE2OSA2LjI0aDMuODI2bDQuMTY4LTYuMjRhMS42IDEuNiAwIDAgMC0uNjctMi40MDJsLTIuNjE0LTEuMjI3eiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZlZjVlIiBkPSJNMTUuNjEgOS41NjlhLjQ3Ny40NzcgMCAwIDAtLjY0LS41NTRhNy45NCA3Ljk0IDAgMCAxLTUuOTQzLS4wMDhhLjQ3OC40NzggMCAwIDAtLjYzOC41NTRsMi42NTUgMTEuNTA1aDEuOTEzeiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmOWJmIiBkPSJNMTIgOS41ODhhOC4zIDguMyAwIDAgMS0yLjk3My0uNTgxYS40NzguNDc4IDAgMCAwLS42MzguNTU0bDIuNjU1IDExLjUwNUgxMnoiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMTkxOTE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNy40NjcgMjIuNjI5YTQuMjYgNC4yNiAwIDAgMC0zLjA0NS0xLjU0Mkg5LjYzOWE0LjQgNC40IDAgMCAwLTMuMDc2IDEuNTE5TDYuMjYyIDIzSDE3Ljc0ek0xNS42MSA5LjU2OWEuNDc3LjQ3NyAwIDAgMC0uNjQtLjU1NGE3Ljk0IDcuOTQgMCAwIDEtNS45NDMtLjAwOGEuNDc4LjQ3OCAwIDAgMC0uNjM4LjU1NGwyLjY1NSAxMS41MDVoMS45MTN6TTEyIDYuNzRBMi44NyAyLjg3IDAgMSAwIDEyIDFhMi44NyAyLjg3IDAgMCAwIDAgNS43NG00LjUyOCA1LjI3bC44ODQuNDE1YTEuNTk4IDEuNTk4IDAgMCAxIC42NyAyLjQwM2wtNC4xNjkgNi4yNG0tNi40NC05LjA1OGwtLjg4NC40MTVhMS41OTggMS41OTggMCAwIDAtLjY3IDIuNDAzbDQuMTY5IDYuMjQiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTwvZz4KPC9zdmc+",
      label: t("seoOptimization.statsAwards"),
      value: 5,
      desc: t("seoOptimization.statsAwardsDesc"),
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMxZTg4ZTUiIGQ9Ik0yOC45NjcgMTJIOS40NDJhMiAyIDAgMCAwLTEuODk4IDEuMzY4TDQgMjRWMTBoMjRhMiAyIDAgMCAwLTItMkgxNS4xMjRhMiAyIDAgMCAxLTEuMjgtLjQ2NGwtMS4yODgtMS4wNzJBMiAyIDAgMCAwIDExLjI3NiA2SDRhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDIybDQuODA1LTExLjIxMkEyIDIgMCAwIDAgMjguOTY3IDEyIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFlODhlNSIgLz4KCTxwYXRoIGZpbGw9IiNiYmRlZmIiIGQ9Ik0yNy4zNTQgMjAuODcxTDMyIDI1LjM0M2wtMi43NCAyLjYyNGwtNC42MTMtNC40NzF2LS43MzdsMS45NDctMS44ODh6bS43NTEtMi4wMjNsLS44LS43NjhsLTMuOTUzIDMuODM5djEuNTc3TDE4LjcwNiAyOEwxNiAyNS4zNDNsNC42MTItNC40NzJoMS42MjZsLjY0NC0uNjI0bC0zLjE3LTMuMDhoLTEuMDcxbC0yLjMyLTIuMjcxbDIuMTYyLTIuMDk2bDIuMzExIDIuMjR2MS4wNDhsMy4yMSAzLjA3MmwyLjE5NC0yLjEyOGwtLjc5MS0uODA4bDEuMDcyLTEuMDQ5aC0yLjE5NmwtLjUzNi0uNTJMMjYuNDggMTJsLjU0NS41Mjd2Mi4xMjlsMS4wODEtMS4wNTdsMi43MDcgMi42MjVhMi4yMiAyLjIyIDAgMCAxIDAgMy4xODRsLTEuNjI3LTEuNjA5WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNiYmRlZmIiIC8+Cjwvc3ZnPg==",
      label: t("seoOptimization.statsProjects"),
      value: 40,
      desc: t("seoOptimization.statsProjectsDesc"),
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0yMi4wNDYgMTEuOTk4VjEuOTU4YS45NTIuOTUyIDAgMCAwLTEuMjY3LS45MDRjLTMuODU1IDEuNDM1LTEzLjcwMyAxLjQzNS0xNy41NTggMGEuOTUuOTUgMCAwIDAtMS4yNjYuOTA1djEwLjAzOUMxLjk1NSAxOC4wNzMgMTAuMDg3IDIzIDEyIDIzczEwLjA0Ni00LjkyNyAxMC4wNDYtMTEuMDAyIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmY5YmYiIGQ9Ik0xMiAyLjEzYTI5IDI5IDAgMCAxLTguNzc5LTEuMDc2YS45NS45NSAwIDAgMC0xLjI2Ni45MDV2MTAuMDM5QzEuOTU1IDE4LjA3MyAxMC4wODcgMjMgMTIgMjN6IiAvPgoJCTxwYXRoIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuMDQ2IDExLjk5OFYxLjk1OGEuOTUyLjk1MiAwIDAgMC0xLjI2Ny0uOTA0Yy0zLjg1NSAxLjQzNS0xMy43MDMgMS40MzUtMTcuNTU4IDBhLjk1Ljk1IDAgMCAwLTEuMjY2LjkwNXYxMC4wMzlDMS45NTUgMTguMDczIDEwLjA4NyAyMyAxMiAyM3MxMC4wNDYtNC45MjcgMTAuMDQ2LTExLjAwMiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJCTxwYXRoIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQuMzkyIDguNjVhMS45MTQgMS45MTQgMCAwIDEgMy44MjcgMG0tMTIuNDM4IDBhMS45MTMgMS45MTMgMCAxIDEgMy44MjcgMG0tMS40MzUgNC43ODNhMy44MjcgMy44MjcgMCAwIDAgNy42NTQgMCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJPC9nPgo8L3N2Zz4=",
      label: t("seoOptimization.statsClients"),
      value: 35,
      desc: t("seoOptimization.statsClientsDesc"),
    },
    {
      icon: "/globe.svg",
      label: t("seoOptimization.statsCountries"),
      value: 8,
      desc: t("seoOptimization.statsCountriesDesc"),
    },
  ];
  return (
    <>
      <Head>
        <title>{t("seoOptimization.pageTitle")}</title>
        <meta name="description" content={t("seoOptimization.pageDesc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("seoOptimization.heroTitle")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
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
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-[#00bcd4] opacity-0 group-hover:opacity-80 blur-md transition-all duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: SEO Process Steps (Vertical Stepper) */}
        <section className="py-20 px-6 mx-auto w-full">
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
                  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxjaXJjbGUgY3g9IjEwLjUiIGN5PSI5LjUiIHI9IjYuNSIgZmlsbD0idXJsKCNTVkdsSVlrdGRYUikiIC8+CgkJPGNpcmNsZSBjeD0iMTAuNSIgY3k9IjkuNSIgcj0iNi41IiBmaWxsPSJ1cmwoI1NWRzRKMGFPY21WKSIgZmlsbC1vcGFjaXR5PSIwLjYiIC8+CgkJPGNpcmNsZSBjeD0iMTAuNSIgY3k9IjkuNSIgcj0iNi41IiBmaWxsPSJ1cmwoI1NWR296cUZFQnR5KSIgZmlsbC1vcGFjaXR5PSIwLjYiIC8+CgkJPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiB4PSIxMCIgeT0iOSIgZmlsbD0idXJsKCNTVkd4U3RsNWN6YSkiIHJ4PSIzIiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHOWpWdUVibnQpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41IDE2YTYuNSA2LjUgMCAwIDAgNi40ODEtN0gxM2EzIDMgMCAwIDAtMyAzdjMuOTgxcS4yNDguMDIuNS4wMTkiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR0txWnRJZUFsKSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNSAxNmE2LjUgNi41IDAgMCAwIDYuNDgxLTdIMTNhMyAzIDAgMCAwLTMgM3YzLjk4MXEuMjQ4LjAyLjUuMDE5IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPHBhdGggZmlsbD0idXJsKCNTVkdXMDBad3J0cikiIGQ9Ik03LjUgMTMuOTQ4YzAgNS4yNy0xLjQ2IDguMDItMi43NSA4LjAyYy0xLjExNyAwLTIuNzUtMi4yODItMi43NS04LjAyQzIgOS4wNSAzLjIzMSA4LjI3IDQuNzUgOC4yN2MxLjM1NCAwIDIuNzUuNDEgMi43NSA1LjY3OCIgLz4KCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR1d3RDhFZTdUKSIgZmlsbC1vcGFjaXR5PSIwLjUiIGQ9Ik03LjUgMTMuOTQ4YzAgNS4yNy0xLjQ2IDguMDItMi43NSA4LjAyYy0xLjExNyAwLTIuNzUtMi4yODItMi43NS04LjAyQzIgOS4wNSAzLjIzMSA4LjI3IDQuNzUgOC4yN2MxLjM1NCAwIDIuNzUuNDEgMi43NSA1LjY3OCIgLz4KCQk8cGF0aCBmaWxsPSJ1cmwoI1NWR0ppVWs2ZGR0KSIgZD0iTTcuNSAxMy45NDhjMCA1LjI3LTEuNDYgOC4wMi0yLjc1IDguMDJjLTEuMTE3IDAtMi43NS0yLjI4Mi0yLjc1LTguMDJDMiA5LjA1IDMuMjMxIDguMjcgNC43NSA4LjI3YzEuMzU0IDAgMi43NS40MSAyLjc1IDUuNjc4IiAvPgoJCTxwYXRoIGZpbGw9InVybCgjU1ZHWG1QWW5iRk8pIiBmaWxsLW9wYWNpdHk9IjAuNyIgZD0iTTcuNSAxMy45NDhjMCA1LjI3LTEuNDYgOC4wMi0yLjc1IDguMDJjLTEuMTE3IDAtMi43NS0yLjI4Mi0yLjc1LTguMDJDMiA5LjA1IDMuMjMxIDguMjcgNC43NSA4LjI3YzEuMzU0IDAgMi43NS40MSAyLjc1IDUuNjc4IiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIgZD0iTTIuMDYzIDEyLjIwNmMuMjctMy4zNSAxLjM3LTMuOTM2IDIuNjg3LTMuOTM2YzEuMTg2IDAgMi40MDUuMzE0IDIuNjg5IDMuOTM2YTUgNSAwIDAgMS0yLjY4OC43NjdjLTEgMC0xLjkyNi0uMjg0LTIuNjg4LS43NjciIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiNmZmYiIC8+CgkJPHBhdGggZmlsbD0idXJsKCNTVkdwa201VWNHYSkiIGQ9Ik01LjU3NSAyLjA3NEEuNzUuNzUgMCAwIDEgNiAyLjc1YzAgLjc0NS4zMjggMS4zMzEuNzMyIDEuOTMyYy4zMzIuNDk0Ljc2OCAxLjE0MS43NjggMi4wNjhhMi43NSAyLjc1IDAgMSAxLTUuNSAwYzAtLjM2OCAwLTEuMDAxLjM4My0xLjgxOGMuMzc1LS44IDEuMDg4LTEuNzE5IDIuMzk4LTIuNzY4YS43NS43NSAwIDAgMSAuNzk0LS4wOSIgLz4KCQk8ZGVmcz4KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdsSVlrdGRYUiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKC03OC4zODIgMTQuMzY2IDYuMzk2KXNjYWxlKDE3LjU4NjMpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBvZmZzZXQ9Ii4yMjIiIHN0b3AtY29sb3I9IiM0ZTQ2ZTIiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii41NzgiIHN0b3AtY29sb3I9IiM2MjVkZjYiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii45NTUiIHN0b3AtY29sb3I9IiNlMzdkZmYiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHNEowYU9jbVYiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg2Ljc3ODk3IC0yLjEwOTAxIDIuNzYwNjcgOC44NzM1OSAyLjI5MiAxMi45MTQpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBvZmZzZXQ9Ii41NjYiIHN0b3AtY29sb3I9IiMyNTFmYmEiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZTUxZTQiIHN0b3Atb3BhY2l0eT0iMCIgLz4KCQkJPC9yYWRpYWxHcmFkaWVudD4KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdvenFGRUJ0eSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDYuNDYyODMgLjkzODEgLS45NTg5MyA2LjYwNjI5IDEuODA2IDguMDkyKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agb2Zmc2V0PSIuNTY2IiBzdG9wLWNvbG9yPSIjMjUxZmJhIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWU1MWU0IiBzdG9wLW9wYWNpdHk9IjAiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHeFN0bDVjemEiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg0Mi40NjIgLTYuOTIgMTkuNzcxKXNjYWxlKDE0LjE4ODUgMTkuMjcxOSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiNjMzU0ZmYiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii4xNTgiIHN0b3AtY29sb3I9IiNiMzM5ZjAiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii40MjkiIHN0b3AtY29sb3I9IiNmMjRhOWQiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii43NDkiIHN0b3AtY29sb3I9IiNmZjgzNWMiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmM0NzAiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHV3dEOEVlN1QiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg4MS4yMjQgLTIuMDYyIDYuMzQzKXNjYWxlKDEzLjYxMTcgMzMuNzUzMSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiNkZDNjZTIiIHN0b3Atb3BhY2l0eT0iMCIgLz4KCQkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2RkM2NlMiIgLz4KCQkJPC9yYWRpYWxHcmFkaWVudD4KCQkJPHJhZGlhbEdyYWRpZW50IGlkPSJTVkdYbVBZbmJGTyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDIuNTM2NzEgLTYuNDQxMTQgMTIuNDMwNzIgNC44OTU1OSAzLjAwMyA4LjA3NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIG9mZnNldD0iLjE2OSIgc3RvcC1jb2xvcj0iIzAyODg4ZCIgLz4KCQkJCTxzdG9wIG9mZnNldD0iLjI2IiBzdG9wLWNvbG9yPSIjMDI4ODhkIiBzdG9wLW9wYWNpdHk9IjAiIC8+CgkJCTwvcmFkaWFsR3JhZGllbnQ+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHcGttNVVjR2EiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMS43ODg2MiA1LjQ3MDY4IC01LjkyMDM4IC0xLjkzNTY1IDUuOTE3IDQuNDUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBzdG9wLWNvbG9yPSIjZmY5NTMyIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIuMjUxIiBzdG9wLWNvbG9yPSIjZmY4MzVjIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjI0YTlkIiAvPgoJCQk8L3JhZGlhbEdyYWRpZW50PgoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWRzlqVnVFYm50IiB4MT0iMTYuMzEzIiB4Mj0iMTEuMDgiIHkxPSIxNS44OTciIHkyPSI4LjIwOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agb2Zmc2V0PSIuMTk1IiBzdG9wLWNvbG9yPSIjNmQzN2NkIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIuNzY1IiBzdG9wLWNvbG9yPSIjZWE3MWVmIiAvPgoJCQk8L2xpbmVhckdyYWRpZW50PgoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0txWnRJZUFsIiB4MT0iMTcuNDIiIHgyPSI5LjA3NiIgeTE9IjE3LjcwNSIgeTI9IjYuMDQ0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CgkJCQk8c3RvcCBvZmZzZXQ9Ii4xOTUiIHN0b3AtY29sb3I9IiM3NjMxZmYiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii44ODYiIHN0b3AtY29sb3I9IiNlNjMwODAiIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHVzAwWndydHIiIHgxPSIuNzExIiB4Mj0iNi44NzIiIHkxPSIxNC4wODUiIHkyPSIyMC42MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agc3RvcC1jb2xvcj0iIzBmYWZmZiIgLz4KCQkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI3NjRlNyIgLz4KCQkJPC9saW5lYXJHcmFkaWVudD4KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdKaVVrNmRkdCIgeDE9IjkuNTYzIiB4Mj0iLS4wNjIiIHkxPSIxNC41NDQiIHkyPSIxNC41NDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIG9mZnNldD0iLjMwNyIgc3RvcC1jb2xvcj0iIzBkOTFlMSIgLz4KCQkJCTxzdG9wIG9mZnNldD0iLjc2MSIgc3RvcC1jb2xvcj0iIzUyYjQ3MSIgLz4KCQkJPC9saW5lYXJHcmFkaWVudD4KCQk8L2RlZnM+Cgk8L2c+Cjwvc3ZnPg==",
                  title: t("seoOptimization.processOnPageTitle"),
                  desc: t("seoOptimization.processOnPageDesc"),
                },
                {
                  icon: "https://www.svgrepo.com/show/49726/development.svg",
                  title: t("seoOptimization.processTechnicalTitle"),
                  desc: t("seoOptimization.processTechnicalDesc"),
                },
                {
                  icon: "https://www.svgrepo.com/show/263540/launch-rocket.svg",
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
        </section>

        {/* Section 4: SEO Features (Horizontal Cards) */}
        <section className="py-20 px-6 mx-auto w-full">
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
                icon: "/next.svg",
                title: t("seoOptimization.featureFastTitle"),
                desc: t("seoOptimization.featureFastDesc"),
              },
              {
                icon: "/file.svg",
                title: t("seoOptimization.featureContentTitle"),
                desc: t("seoOptimization.featureContentDesc"),
              },
              {
                icon: "/window.svg",
                title: t("seoOptimization.featureMobileTitle"),
                desc: t("seoOptimization.featureMobileDesc"),
              },
              {
                icon: "/globe.svg",
                title: t("seoOptimization.featureGlobalTitle"),
                desc: t("seoOptimization.featureGlobalDesc"),
              },
              {
                icon: "/vercel.svg",
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
        </section>

        {/* Section 5: Pricing Plans */}
        <section className="py-20 px-6 mx-auto w-full">
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
                <div className="mb-4">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0xMiA2Ljc0QTIuODcgMi44NyAwIDEgMCAxMiAxYTIuODcgMi44NyAwIDAgMCAwIDUuNzQiIC8+CgkJPHBhdGggZmlsbD0iI2ZmZjliZiIgZD0iTTkuMTMgMy44N2MuMDAxLjI3LjA0LjU0LjExNi44QTIuODcgMi44NyAwIDAgMCAxMy44IDEuNjM0QTIuODcgMi44NyAwIDAgMCA5LjEzIDMuODciIC8+CgkJPHBhdGggZmlsbD0iI2ZmYmM0NCIgZD0ibTkuMDIgMTEuMjg1bC0yLjQzMSAxLjE0YTEuNTk4IDEuNTk4IDAgMCAwLS42NyAyLjQwMmw0LjE2OSA2LjI0aDMuODI2bDQuMTY4LTYuMjRhMS42IDEuNiAwIDAgMC0uNjctMi40MDJsLTIuNjE0LTEuMjI3eiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZlZjVlIiBkPSJNMTUuNjEgOS41NjlhLjQ3Ny40NzcgMCAwIDAtLjY0LS41NTRhNy45NCA3Ljk0IDAgMCAxLTUuOTQzLS4wMDhhLjQ3OC40NzggMCAwIDAtLjYzOC41NTRsMi42NTUgMTEuNTA1aDEuOTEzeiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmOWJmIiBkPSJNMTIgOS41ODhhOC4zIDguMyAwIDAgMS0yLjk3My0uNTgxYS40NzguNDc4IDAgMCAwLS42MzguNTU0bDIuNjU1IDExLjUwNUgxMnoiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMTkxOTE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNy40NjcgMjIuNjI5YTQuMjYgNC4yNiAwIDAgMC0zLjA0NS0xLjU0Mkg5LjYzOWE0LjQgNC40IDAgMCAwLTMuMDc2IDEuNTE5TDYuMjYyIDIzSDE3Ljc0ek0xNS42MSA5LjU2OWEuNDc3LjQ3NyAwIDAgMC0uNjQtLjU1NGE3Ljk0IDcuOTQgMCAwIDEtNS45NDMtLjAwOGEuNDc4LjQ3OCAwIDAgMC0uNjM4LjU1NGwyLjY1NSAxMS41MDVoMS45MTN6TTEyIDYuNzRBMi44NyAyLjg3IDAgMSAwIDEyIDFhMi44NyAyLjg3IDAgMCAwIDAgNS43NG00LjUyOCA1LjI3bC44ODQuNDE1YTEuNTk4IDEuNTk4IDAgMCAxIC42NyAyLjQwM2wtNC4xNjkgNi4yNG0tNi40NC05LjA1OGwtLjg4NC40MTVhMS41OTggMS41OTggMCAwIDAtLjY3IDIuNDAzbDQuMTY5IDYuMjQiIHN0cm9rZS13aWR0aD0iMSIgLz4KCTwvZz4KPC9zdmc+"
                    alt="Basic"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
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
                <div className="mb-4">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMxZTg4ZTUiIGQ9Ik0yOC45NjcgMTJIOS40NDJhMiAyIDAgMCAwLTEuODk4IDEuMzY4TDQgMjRWMTBoMjRhMiAyIDAgMCAwLTItMkgxNS4xMjRhMiAyIDAgMCAxLTEuMjgtLjQ2NGwtMS4yODgtMS4wNzJBMiAyIDAgMCAwIDExLjI3NiA2SDRhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDIybDQuODA1LTExLjIxMkEyIDIgMCAwIDAgMjguOTY3IDEyIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzFlODhlNSIgLz4KCTxwYXRoIGZpbGw9IiNiYmRlZmIiIGQ9Ik0yNy4zNTQgMjAuODcxTDMyIDI1LjM0M2wtMi43NCAyLjYyNGwtNC42MTMtNC40NzF2LS43MzdsMS45NDctMS44ODh6bS43NTEtMi4wMjNsLS44LS43NjhsLTMuOTUzIDMuODM5djEuNTc3TDE4LjcwNiAyOEwxNiAyNS4zNDNsNC42MTItNC40NzJoMS42MjZsLjY0NC0uNjI0bC0zLjE3LTMuMDhoLTEuMDcxbC0yLjMyLTIuMjcxbDIuMTYyLTIuMDk2bDIuMzExIDIuMjR2MS4wNDhsMy4yMSAzLjA3MmwyLjE5NC0yLjEyOGwtLjc5MS0uODA4bDEuMDcyLTEuMDQ5aC0yLjE5NmwtLjUzNi0uNTJMMjYuNDggMTJsLjU0NS41Mjd2Mi4xMjlsMS4wODEtMS4wNTdsMi43MDcgMi42MjVhMi4yMiAyLjIyIDAgMCAxIDAgMy4xODRsLTEuNjI3LTEuNjA5WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNiYmRlZmIiIC8+Cjwvc3ZnPg=="
                    alt="Advanced"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
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
                <div className="mb-4">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiNmZmVmNWUiIGQ9Ik0yMi4wNDYgMTEuOTk4VjEuOTU4YS45NTIuOTUyIDAgMCAwLTEuMjY3LS45MDRjLTMuODU1IDEuNDM1LTEzLjcwMyAxLjQzNS0xNy41NTggMGEuOTUuOTUgMCAwIDAtMS4yNjYuOTA1djEwLjAzOUMxLjk1NSAxOC4wNzMgMTAuMDg3IDIzIDEyIDIzczEwLjA0Ni00LjkyNyAxMC4wNDYtMTEuMDAyIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmY5YmYiIGQ9Ik0xMiAyLjEzYTI5IDI5IDAgMCAxLTguNzc5LTEuMDc2YS45NS45NSAwIDAgMC0xLjI2Ni45MDV2MTAuMDM5QzEuOTU1IDE4LjA3MyAxMC4wODcgMjMgMTIgMjN6IiAvPgoJCTxwYXRoIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjIuMDQ2IDExLjk5OFYxLjk1OGEuOTUyLjk1MiAwIDAgMC0xLjI2Ny0uOTA0Yy0zLjg1NSAxLjQzNS0xMy43MDMgMS40MzUtMTcuNTU4IDBhLjk1Ljk1IDAgMCAwLTEuMjY2LjkwNXYxMC4wMzlDMS45NTUgMTguMDczIDEwLjA4NyAyMyAxMiAyM3MxMC4wNDYtNC45MjcgMTAuMDQ2LTExLjAwMiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJCTxwYXRoIHN0cm9rZT0iIzE5MTkxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTQuMzkyIDguNjVhMS45MTQgMS45MTQgMCAwIDEgMy44MjcgMG0tMTIuNDM4IDBhMS45MTMgMS45MTMgMCAxIDEgMy44MjcgMG0tMS40MzUgNC43ODNhMy44MjcgMy44MjcgMCAwIDAgNy42NTQgMCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgoJPC9nPgo8L3N2Zz4="
                    alt="Pro"
                    width={48}
                    height={48}
                    className="drop-shadow-lg"
                  />
                </div>
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
        </section>

        {/* Section 6: Contact CTA */}
        <section className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
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
                  {t("seoOptimization.contactTitle")}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                  {t("seoOptimization.contactDesc")}
                </p>
                <a
                  href="/contact-us"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
                >
                  {t("seoOptimization.contactBtn")}
                </a>
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
