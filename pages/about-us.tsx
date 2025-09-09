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
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
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
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {t("aboutUs.heroDesc")}
            </p>
          </div>
        </section>

        {/* Section 2: Our Story (Split Image + Content) */}
        <section className="py-20 px-6   mx-auto w-full flex flex-col md:flex-row items-center gap-12">
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
        </section>

        {/* Section 3: Meet the Team (Horizontal Scroll Carousel) */}
        <section className="py-20 px-6 justify-center flex flex-col items-center   mx-auto w-full">
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
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZmZmIiByeD0iNjAiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmZmYiIC8+CgkJPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiMwYTY2YzIiIHJ4PSI2MCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iIzBhNjZjMiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMC00IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRNMzggNTkuNjI4YzAgMTEuODY0IDkuNzY3IDIxLjYyNiAyMS42MzIgMjEuNjI2YzExLjg2Mi0uMDAxIDIxLjYyMy05Ljc2OSAyMS42MjMtMjEuNjMxQzgxLjI1MyA0Ny43NjEgNzEuNDkxIDM4IDU5LjYyOCAzOEM0Ny43NjIgMzggMzggNDcuNzYzIDM4IDU5LjYyN202Ljk1OSAxNTguMDU4aDI5LjMwN2E0IDQgMCAwIDAgNC00VjEwMS42NmE0IDQgMCAwIDAtNC00SDQ0Ljk1OWE0IDQgMCAwIDAtNCA0djExMi4wMjVhNCA0IDAgMCAwIDQgNCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iI2ZmZiIgLz4KCTwvZz4KPC9zdmc+",
                    url: "#",
                  },
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZmZmIiByeD0iNjAiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmZmYiIC8+CgkJPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiMxZDliZjAiIHJ4PSI2MCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iIzFkOWJmMCIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTk5LjU3MiA5MS40MTFjLjExIDEuNTg3LjExIDMuMTc0LjExIDQuNzc2YzAgNDguNzk3LTM3LjE0OCAxMDUuMDc1LTEwNS4wNzUgMTA1LjA3NXYtLjAzQTEwNC41NCAxMDQuNTQgMCAwIDEgMzggMTg0LjY3N3E0LjM3OS41MjUgOC43OS41MzNhNzQuMTUgNzQuMTUgMCAwIDAgNDUuODY1LTE1LjgzOWEzNi45OCAzNi45OCAwIDAgMS0zNC41MDEtMjUuNjQ1YTM2LjggMzYuOCAwIDAgMCAxNi42NzItLjYzNmMtMTcuMjI4LTMuNDgxLTI5LjYyMy0xOC42MTgtMjkuNjIzLTM2LjE5OHYtLjQ2OGEzNi43IDM2LjcgMCAwIDAgMTYuNzYgNC42MjJjLTE2LjIyNi0xMC44NDUtMjEuMjI4LTMyLjQzMi0xMS40My00OS4zMWExMDQuOCAxMDQuOCAwIDAgMCA3Ni4xMTEgMzguNTgyYTM2Ljk1IDM2Ljk1IDAgMCAxIDEwLjY4My0zNS4yODNjMTQuODc0LTEzLjk4MiAzOC4yNjctMTMuMjY1IDUyLjI0OSAxLjYwMWE3NC4xIDc0LjEgMCAwIDAgMjMuNDUxLTguOTY1YTM3LjA2IDM3LjA2IDAgMCAxLTE2LjIzNCAyMC40MjRBNzMuNSA3My41IDAgMCAwIDIxOCA3Mi4yODJhNzUgNzUgMCAwIDEtMTguNDI4IDE5LjEzIiBzdHJva2Utd2lkdGg9IjYuNSIgc3Ryb2tlPSIjZmZmIiAvPgoJPC9nPgo8L3N2Zz4=",
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
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZmZmIiByeD0iNjAiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmZmYiIC8+CgkJPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiMwYTY2YzIiIHJ4PSI2MCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iIzBhNjZjMiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMC00IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRNMzggNTkuNjI4YzAgMTEuODY0IDkuNzY3IDIxLjYyNiAyMS42MzIgMjEuNjI2YzExLjg2Mi0uMDAxIDIxLjYyMy05Ljc2OSAyMS42MjMtMjEuNjMxQzgxLjI1MyA0Ny43NjEgNzEuNDkxIDM4IDU5LjYyOCAzOEM0Ny43NjIgMzggMzggNDcuNzYzIDM4IDU5LjYyN202Ljk1OSAxNTguMDU4aDI5LjMwN2E0IDQgMCAwIDAgNC00VjEwMS42NmE0IDQgMCAwIDAtNC00SDQ0Ljk1OWE0IDQgMCAwIDAtNCA0djExMi4wMjVhNCA0IDAgMCAwIDQgNCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iI2ZmZiIgLz4KCTwvZz4KPC9zdmc+",
                    url: "#",
                  },
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KCTxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj4KCQk8cGF0aCBkPSJNMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRaTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgLz4KCQk8cGF0aCBkPSJNMTkuMTgzMyA0NS40NzE2QzE4Ljk4OTggNDUuMjIxOSAxOC45ODk4IDQyLjk5NzMgMTkuMTgzMyAzOC43OThDMTcuMTExNCAzOC44Njk2IDE1LjgwMjQgMzguNzI1OCAxNS4yNTYzIDM4LjM2NjdDMTQuNDM3IDM3LjgyOCAxMy42MTY5IDM2LjE2NjcgMTIuODg5MSAzNC45OTU5QzEyLjE2MTQgMzMuODI1MSAxMC41NDYzIDMzLjY0IDkuODk0MDUgMzMuMzc4M0M5LjI0MTgyIDMzLjExNjUgOS4wNzgwOSAzMi4wNDk2IDExLjY5MTMgMzIuODU2NUMxNC4zMDQ0IDMzLjY2MzQgMTQuNDMxOSAzNS44NjA3IDE1LjI1NjMgMzYuMzc0NUMxNi4wODA2IDM2Ljg4ODMgMTguMDUxNSAzNi42NjM1IDE4Ljk0NDggMzYuMjUxOUMxOS44MzgyIDM1Ljg0MDMgMTkuNzcyNCAzNC4zMDc4IDE5LjkzMTcgMzMuNzAwN0MyMC4xMzMxIDMzLjEzNCAxOS40MjMzIDMzLjAwODMgMTkuNDA3NyAzMy4wMDM3QzE4LjUzNTUgMzMuMDAzNyAxMy45NTM5IDMyLjAwNzMgMTIuNjk1NSAyNy41NzA2QzExLjQzNyAyMy4xMzQgMTMuMDU4MSAyMC4yMzQxIDEzLjkyMjkgMTguOTg3NUMxNC40OTk1IDE4LjE1NjQgMTQuNDQ4NSAxNi4zODUyIDEzLjc2OTkgMTMuNjczN0MxNi4yMzM1IDEzLjM1ODkgMTguMTM0NyAxNC4xMzQzIDE5LjQ3MzQgMTYuMDAwMUMxOS40NzQ3IDE2LjAxMDggMjEuMjI4NSAxNC45NTcyIDI0LjAwMDMgMTQuOTU3MkMyNi43NzIgMTQuOTU3MiAyNy43NTUzIDE1LjgxNTQgMjguNTE0MiAxNi4wMDAxQzI5LjI3MzEgMTYuMTg0OCAyOS44OCAxMi43MzQxIDM0LjU2NjggMTMuNjczN0MzMy41ODgzIDE1LjU5NjkgMzIuNzY4OSAxOC4wMDAxIDMzLjM5NDMgMTguOTg3NUMzNC4wMTk4IDE5Ljk3NDkgMzYuNDc0NSAyMy4xMTQ3IDM0Ljk2NjYgMjcuNTcwNkMzMy45NjE0IDMwLjU0MTMgMzEuOTg1MyAzMi4zNTIzIDI5LjAzODQgMzMuMDAzN0MyOC43MDA1IDMzLjExMTUgMjguNTMxNSAzMy4yODU1IDI4LjUzMTUgMzMuNTI1NUMyOC41MzE1IDMzLjg4NTYgMjguOTg4NCAzMy45MjQ5IDI5LjY0NjUgMzUuNjExN0MzMC4wODUzIDM2LjczNjIgMzAuMTE3IDM5Ljk0OCAyOS43NDE2IDQ1LjI0N0MyOC43OTA2IDQ1LjQ4OTEgMjguMDUwOCA0NS42NTE2IDI3LjUyMjEgNDUuNzM0N0MyNi41ODQ3IDQ1Ljg4MiAyNS41NjY5IDQ1Ljk2NDYgMjQuNTY2OSA0NS45OTY1QzIzLjU2NjkgNDYuMDI4NCAyMy4yMTk2IDQ2LjAyNDggMjEuODM3IDQ1Ljg5NjFDMjAuOTE1NCA0NS44MTAzIDIwLjAzMDggNDUuNjY4OCAxOS4xODMzIDQ1LjQ3MTZaIiAvPgoJPC9nPgo8L3N2Zz4=",
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
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZmZmIiByeD0iNjAiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmZmYiIC8+CgkJPHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiMwYTY2YzIiIHJ4PSI2MCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iIzBhNjZjMiIgLz4KCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMC00IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRNMzggNTkuNjI4YzAgMTEuODY0IDkuNzY3IDIxLjYyNiAyMS42MzIgMjEuNjI2YzExLjg2Mi0uMDAxIDIxLjYyMy05Ljc2OSAyMS42MjMtMjEuNjMxQzgxLjI1MyA0Ny43NjEgNzEuNDkxIDM4IDU5LjYyOCAzOEM0Ny43NjIgMzggMzggNDcuNzYzIDM4IDU5LjYyN202Ljk1OSAxNTguMDU4aDI5LjMwN2E0IDQgMCAwIDAgNC00VjEwMS42NmE0IDQgMCAwIDAtNC00SDQ0Ljk1OWE0IDQgMCAwIDAtNCA0djExMi4wMjVhNCA0IDAgMCAwIDQgNCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iI2ZmZiIgLz4KCTwvZz4KPC9zdmc+",
                    url: "#",
                  },
                  {
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSJ1cmwoI1NWR1dSVXFlYmVrKSIgcng9IjYwIiAvPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSJ1cmwoI1NWR2ZrTnBsZE1IKSIgcng9IjYwIiAvPgoJCTxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMjguMDA5IDI4Yy0yNy4xNTggMC0zMC41NjcuMTE5LTQxLjIzMy42MDRjLTEwLjY0Ni40ODgtMTcuOTEzIDIuMTczLTI0LjI3MSA0LjY0NmMtNi41NzggMi41NTQtMTIuMTU3IDUuOTcxLTE3LjcxNSAxMS41MzFjLTUuNTYzIDUuNTU5LTguOTggMTEuMTM4LTExLjU0MiAxNy43MTNjLTIuNDggNi4zNi00LjE2NyAxMy42My00LjY0NiAyNC4yNzFjLS40NzcgMTAuNjY3LS42MDIgMTQuMDc3LS42MDIgNDEuMjM2cy4xMiAzMC41NTcuNjA0IDQxLjIyM2MuNDkgMTAuNjQ2IDIuMTc1IDE3LjkxMyA0LjY0NiAyNC4yNzFjMi41NTYgNi41NzggNS45NzMgMTIuMTU3IDExLjUzMyAxNy43MTVjNS41NTcgNS41NjMgMTEuMTM2IDguOTg4IDE3LjcwOSAxMS41NDJjNi4zNjMgMi40NzMgMTMuNjMxIDQuMTU4IDI0LjI3NSA0LjY0NmMxMC42NjcuNDg1IDE0LjA3My42MDQgNDEuMjMuNjA0YzI3LjE2MSAwIDMwLjU1OS0uMTE5IDQxLjIyNS0uNjA0YzEwLjY0Ni0uNDg4IDE3LjkyMS0yLjE3MyAyNC4yODQtNC42NDZjNi41NzUtMi41NTQgMTIuMTQ2LTUuOTc5IDE3LjcwMi0xMS41NDJjNS41NjMtNS41NTggOC45NzktMTEuMTM3IDExLjU0Mi0xNy43MTJjMi40NTgtNi4zNjEgNC4xNDYtMTMuNjMgNC42NDYtMjQuMjcyYy40NzktMTAuNjY2LjYwNC0xNC4wNjYuNjA0LTQxLjIyNXMtLjEyNS0zMC41NjctLjYwNC00MS4yMzRjLS41LTEwLjY0Ni0yLjE4OC0xNy45MTItNC42NDYtMjQuMjdjLTIuNTYzLTYuNTc4LTUuOTc5LTEyLjE1Ny0xMS41NDItMTcuNzE2Yy01LjU2Mi01LjU2Mi0xMS4xMjUtOC45NzktMTcuNzA4LTExLjUzYy02LjM3NS0yLjQ3NC0xMy42NDYtNC4xNi0yNC4yOTItNC42NDdjLTEwLjY2Ny0uNDg1LTE0LjA2My0uNjA0LTQxLjIzLS42MDR6bS04Ljk3MSAxOC4wMjFjMi42NjMtLjAwNCA1LjYzNCAwIDguOTcxIDBjMjYuNzAxIDAgMjkuODY1LjA5NiA0MC40MDkuNTc1YzkuNzUuNDQ2IDE1LjA0MiAyLjA3NSAxOC41NjcgMy40NDRjNC42NjcgMS44MTIgNy45OTQgMy45NzkgMTEuNDkyIDcuNDhjMy41IDMuNSA1LjY2NiA2LjgzMyA3LjQ4MyAxMS41YzEuMzY5IDMuNTIgMyA4LjgxMiAzLjQ0NCAxOC41NjJjLjQ3OSAxMC41NDIuNTgzIDEzLjcwOC41ODMgNDAuMzk2cy0uMTA0IDI5Ljg1NS0uNTgzIDQwLjM5NmMtLjQ0NiA5Ljc1LTIuMDc1IDE1LjA0Mi0zLjQ0NCAxOC41NjNjLTEuODEyIDQuNjY3LTMuOTgzIDcuOTktNy40ODMgMTEuNDg4Yy0zLjUgMy41LTYuODIzIDUuNjY2LTExLjQ5MiA3LjQ3OWMtMy41MjEgMS4zNzUtOC44MTcgMy0xOC41NjcgMy40NDZjLTEwLjU0Mi40NzktMTMuNzA4LjU4My00MC40MDkuNTgzYy0yNi43MDIgMC0yOS44NjctLjEwNC00MC40MDgtLjU4M2MtOS43NS0uNDUtMTUuMDQyLTIuMDc5LTE4LjU3LTMuNDQ4Yy00LjY2Ni0xLjgxMy04LTMuOTc5LTExLjUtNy40NzlzLTUuNjY2LTYuODI1LTcuNDgzLTExLjQ5NGMtMS4zNjktMy41MjEtMy04LjgxMy0zLjQ0NC0xOC41NjNjLS40NzktMTAuNTQyLS41NzUtMTMuNzA4LS41NzUtNDAuNDEzcy4wOTYtMjkuODU0LjU3NS00MC4zOTZjLjQ0Ni05Ljc1IDIuMDc1LTE1LjA0MiAzLjQ0NC0xOC41NjdjMS44MTMtNC42NjcgMy45ODMtOCA3LjQ4NC0xMS41czYuODMzLTUuNjY3IDExLjUtNy40ODNjMy41MjUtMS4zNzUgOC44MTktMyAxOC41NjktMy40NDhjOS4yMjUtLjQxNyAxMi44LS41NDIgMzEuNDM3LS41NjN6bTYyLjM1MSAxNi42MDRjLTYuNjI1IDAtMTIgNS4zNy0xMiAxMS45OTZjMCA2LjYyNSA1LjM3NSAxMiAxMiAxMnMxMi01LjM3NSAxMi0xMnMtNS4zNzUtMTItMTItMTJ6bS01My4zOCAxNC4wMjFjLTI4LjM2IDAtNTEuMzU0IDIyLjk5NC01MS4zNTQgNTEuMzU1czIyLjk5NCA1MS4zNDQgNTEuMzU0IDUxLjM0NGMyOC4zNjEgMCA1MS4zNDctMjIuOTgzIDUxLjM0Ny01MS4zNDRjMC0yOC4zNi0yMi45ODgtNTEuMzU1LTUxLjM0OS01MS4zNTV6bTAgMTguMDIxYzE4LjQwOSAwIDMzLjMzNCAxNC45MjMgMzMuMzM0IDMzLjMzNGMwIDE4LjQwOS0xNC45MjUgMzMuMzM0LTMzLjMzNCAzMy4zMzRzLTMzLjMzMy0xNC45MjUtMzMuMzMzLTMzLjMzNGMwLTE4LjQxMSAxNC45MjMtMzMuMzM0IDMzLjMzMy0zMy4zMzQiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmZmYiIC8+CgkJPGRlZnM+CgkJCTxyYWRpYWxHcmFkaWVudCBpZD0iU1ZHV1JVcWViZWsiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0yNTMuNzE1IDIzNS45NzUgMCA2OCAyNzUuNzE3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJPHN0b3Agc3RvcC1jb2xvcj0iI2ZkNSIgLz4KCQkJCTxzdG9wIG9mZnNldD0iLjEiIHN0b3AtY29sb3I9IiNmZDUiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjZmY1NDNlIiAvPgoJCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgzN2FiIiAvPgoJCQk8L3JhZGlhbEdyYWRpZW50PgoJCQk8cmFkaWFsR3JhZGllbnQgaWQ9IlNWR2ZrTnBsZE1IIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMjIuMjU5NTIgMTExLjIwNjEgLTQ1OC4zOTUxOCA5MS43NTQ0OSAtNDIuODgxIDE4LjQ0MSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiMzNzcxYzgiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9Ii4xMjgiIHN0b3AtY29sb3I9IiMzNzcxYzgiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2MGYiIHN0b3Atb3BhY2l0eT0iMCIgLz4KCQkJPC9yYWRpYWxHcmFkaWVudD4KCQk8L2RlZnM+Cgk8L2c+Cjwvc3ZnPg==",
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
                      <Image
                        src={social.icon}
                        alt="social"
                        width={28}
                        height={28}
                        className="hover:scale-110 transition"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Our Values (Horizontal Stepper) */}
        <section className="py-20 px-6   mx-auto w-full">
          <h2 className="text-3xl font-bold mb-14 text-[#00bcd4] text-center">
            {t("aboutUs.valuesTitle")}
          </h2>
          <div className="flex flex-wrap gap-2  items-center justify-center md:gap-0 relative">
            {[
              {
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxwYXRoIGZpbGw9IiMwMjAyMDIiIGQ9Ik0xOC4yODcgMTEuNjg0YTcuNyA3LjcgMCAwIDAtMS4zMDUtMy43NDhhNi43IDYuNyAwIDAgMC03LjI4Ni0yLjcyYTYuODcgNi44NyAwIDAgMC01LjI2MiA1LjY1YTUuNiA1LjYgMCAwIDAgMCAxLjU4NWMuMDc2LjU0Ny4yNzggMS4wNjguNTg4IDEuNTI1Yy41NDguNzc3IDEuMzk1Ljk5NyAxLjgyNCAxLjYwNGMuMTY2LjIzNS4yNC41MjIuMjA5LjgwOGEuMjcuMjcgMCAwIDAgLjI0OS4yODloLjI4cTEuMDcxLjI5NiAyLjE3Mi40NDhxLjQ3MS4wNi45NDcuMDZoLjk0NmMuNzI4IDAgMS40NDYtLjE0IDIuMTgzLS4yNGEuMzA5LjMwOSAwIDEgMC0uMDMtLjYxN2wtMi4xNTMtLjEySDcuNjAzYzAtLjMzLS4xLS42NTQtLjI4OS0uOTI2Yy0uNDA5LS41ODktMS4yMzYtLjg1OC0xLjc1NC0xLjYzNWEzIDMgMCAwIDEtLjQwOS0xLjI1NmE0LjggNC44IDAgMCAxIC4wMi0xLjQwNWE2LjA1IDYuMDUgMCAwIDEgNC43NTQtNC44MTRhNS43NCA1Ljc0IDAgMCAxIDYuMiAyLjM1MmE2LjcgNi43IDAgMCAxIDEuMTM2IDMuMjJhMy45MiAzLjkyIDAgMCAxLS45OTcgMy4wNjlhNiA2IDAgMCAxLS40NzguNDI5Yy0uNDQ5LjM0OC0uODk3LjYyOC0xLjMzNi45OTZjLS4xNjIuMTYxLS4yODIuMzYtLjM0OS41NzhhOCA4IDAgMCAwLS4yMTkuOTk3Yy0uMDEuMjMtLjA4Ni40NS0uMjIuNjM4YTMuMiAzLjIgMCAwIDEtMi4yMzIuNzY3YTEwLjIgMTAuMiAwIDAgMS0zLjYyOC0uNzg3Yy4wOS0uMTYgMC0uNjQ4IDAtLjk0N2EuMzIuMzIgMCAwIDAtLjMyOS0uMjk5YS4zMS4zMSAwIDAgMC0uMjg5LjMyOWMwIC4zOTktLjA3LjkwNyAwIDEuMTI2YS40My40MyAwIDAgMCAuMjUuMzFjMS4yNzguNTkgMi42Ni45MjggNC4wNjYuOTk2YTMuOTMgMy45MyAwIDAgMCAyLjc5LS45MTdjLjE2LS4xNTUuMjgtLjM0Ny4zNS0uNTU4YTcgNyAwIDAgMCAuMjM5LS45OTdjLS4wMDUtLjE3Ni4wMzMtLjM1LjExLS41MDhjLjQzOC0uMzc5Ljg3Ni0uNjI4IDEuMzE1LS45OTdxLjMxLS4yMjkuNTc4LS41MDhhNC44NCA0Ljg0IDAgMCAwIDEuNDA1LTMuNzc3IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlPSIjMDIwMjAyIiAvPgoJCTxwYXRoIGZpbGw9IiMwYzZmZmYiIGQ9Ik05LjY5NiAxMy45NzZjLjA2LS41NzguMS0xLjE2Ni4xNS0xLjc0NHEuMjM0LjI0Mi41MjguNDA4Yy4zMTguMjAyLjY5LjMwMiAxLjA2Ny4yOWMuMzUtLjAxLjY5Mi0uMTA2Ljk5Ni0uMjh2LjgyN3EtLjAwNS45NzQuMTYgMS45MzRjMCAuMjEuNDk4LjMzOS41OTggMHEtLjA5MS0uOTY3IDAtMS45MzNxLjIwOC0xLjMxNi41ODgtMi41OTJhLjQ0LjQ0IDAgMCAwLS4yLS41MThhLjQ1LjQ1IDAgMCAwLS42MDguMDZhLjcuNyAwIDAgMC0uMS4xNmwtLjEwOS4yMThsLS4yNC4zOWExLjYgMS42IDAgMCAxLS41MDguNDU3YTEuMTQgMS4xNCAwIDAgMS0uNTk3LjE4YTEgMSAwIDAgMS0uNjI4LS4yM2ExLjc1IDEuNzUgMCAwIDEtLjUxOS0uNTk3bC0uMTc5LS40NDljMC0uMDktLjA3LS4zMDktLjA5LS4zNjlhLjUuNSAwIDAgMC0uMzk4LS4xOTlhLjQ2LjQ2IDAgMCAwLS40NDkuMTNjLS4zMTkuMzM5LS4wNyAyLjI1Mi0uMjEgNC40NzVxLjAzOC4zMjMgMCAuNjQ4YzAgLjQxOC40Ny41MzguNTc5LjFjLjEwNi0uNDQ4LjE2My0uOTA2LjE3LTEuMzY2TTMuMDk4IDYuMTgyYTMgMyAwIDAgMC0uNDA4LS40MDlsLS40NTktLjMzOWMtLjM2OS0uMjM5LS43NTctLjQyOC0xLjE0Ni0uNjQ3YS4zMi4zMiAwIDAgMC0uNDM5LjA3YS4zMS4zMSAwIDAgMCAuMDcuNDI4Yy4zLjMwOS41ODguNjE4Ljg5Ny45MTdjLjEzLjEzLjI2LjI1OS4zODkuMzY5Yy4xMy4xMS4yNy4yMjkuNDA5LjMzOHEuNTE4LjM1My45OTYuNzU4YS4yNy4yNyAwIDAgMCAuMzc5IDBhLjI3LjI3IDAgMCAwIC4wNS0uMzg5YTUuOCA1LjggMCAwIDAtLjczOC0xLjA5Nm0zLjk2Ny00LjQ0NXEuMDc1LjI3Ni4xOS41MzhjLjA3LjE3LjEzOS4zMzkuMjI4LjUwOGMuMjEuMzg5LjQ1OS43MzguNjc4IDEuMTM2YS4yOC4yOCAwIDAgMCAuNTE4LS4xODlhMTIgMTIgMCAwIDAtLjI2OS0xLjMyNmMtLjA1LS4xNzktLjEyLS4zNTgtLjE4OS0uNTM4YTQgNCAwIDAgMC0uMjEtLjUwOEM3Ljc1NC45NTkgNy41MTQuNiA3LjI4NS4yMTJhLjMxLjMxIDAgMCAwLS40MDktLjE5YS4zMS4zMSAwIDAgMC0uMTY5LjRjLjEyLjQ2OC4yMi44OTYuMzU5IDEuMzE1bTcuNDQ0IDIuNjIxYS4yNy4yNyAwIDAgMCAuMjk5LS4yNHEuMjEtLjU0My4zNjktMS4xMDZjLjA1LS4yMTkuMDctLjQ0OC4xLS42NjdhNiA2IDAgMCAxIC4xMDktLjk5N2EuMzI4LjMyOCAwIDAgMC0uNTY4LS4zMjlhNC4zIDQuMyAwIDAgMC0uNTA4Ljk5N3EtLjA3NS4yMjUtLjEyLjQ1OHEtLjAxNS4yMzUgMCAuNDY5YzAgLjM3OC4wOC43MTcuMTEgMS4wNTZjLS4wNDQuMTU3LjA1LjMyLjIwOS4zNTltOC41NzIgMy4xMzljLS40NjkgMC0uOTA3LS4wNy0xLjM2Ni0uMDdoLS41ODhjLS4xOSAwLS4zODkuMDctLjU3OC4xMnEtLjY2OS4yMjYtMS4yODYuNTY4YS4yNzkuMjc5IDAgMSAwIC4xOC41MTljLjQ0OC0uMDcuODY3LS4wNyAxLjI5NS0uMWwuNTM4LS4wNmwuNTQ5LS4xYy40MjgtLjA5Ljg0Ny0uMTk5IDEuMjk1LS4yODlhLjMzLjMzIDAgMCAwIC4yOS0uMzM4YS4zMS4zMSAwIDAgMC0uMzMtLjI1IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlPSIjMGM2ZmZmIiAvPgoJCTxwYXRoIGZpbGw9IiMwMjAyMDIiIGQ9Ik0xMi45MTUgMjEuMDAycS0uNDk3LjAzMS0uOTk2IDBjLS4zMiAwLS42MzgtLjA1LS45OTctLjA3bC0uOTk3LS4wNWMtLjY1NyAwLTEuMzA1IDAtMS45OTMtLjA3YS4yOC4yOCAwIDAgMC0uMzI5LjIxYS4yOC4yOCAwIDAgMCAuMjEuMzNhMTAuNCAxMC40IDAgMCAwIDEuNzI0LjUxN3EuMzg1LjA3Ljc3Ny4wOHEuMzkuMDMuNzc3IDBxLjk2Ny0uMDc5IDEuOTA0LS4zMjlhLjMyLjMyIDAgMCAwIC4yNi0uMzU5YS4zMS4zMSAwIDAgMC0uMzQtLjI1OW0tMS4wNzUgMi4wMTRhOCA4IDAgMCAxLS45OTctLjA5YTUgNSAwIDAgMC0uNjU4IDBjLS4zOTkgMC0uNzY4LjEtMS4xNTYuMTRhLjI3LjI3IDAgMCAwLS4zLjIzOWEuMy4zIDAgMCAwIC4yNS4zMDlxLjUwNC4xOTIgMS4wMjYuMzI4cS4yMjMuMDQuNDQ5LjA1cS4yMjkuMDE1LjQ1OCAwQTQuMiA0LjIgMCAwIDAgMTIgMjMuNjI0YS4zMS4zMSAwIDAgMC0uMTMtLjYwOHoiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiMwMjAyMDIiIC8+Cgk8L2c+Cjwvc3ZnPg==",
                title: t("aboutUs.valueCreativityTitle"),
                desc: t("aboutUs.valueCreativityDesc"),
              },
              {
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj4KCQk8cGF0aCBmaWxsPSIjMDIwMjAyIiBkPSJNOS4wNjggMTAuMjYzYy40My4xNy44ODcuMjYxIDEuMzQ5LjI3cS41OC4wMzcgMS4xNiAwYy43OTktLjA2IDEuMzg4LS4yNCAyLjQ3Ny0uMjljLjIyIDAgLjg2LjA3IDEuMjcgMGExLjM2IDEuMzYgMCAwIDAgLjYwOS0uMmMuMzUxLS4yNi42MDgtLjYzLjczLTEuMDVjLjE4LS43NTguMjM3LTEuNTQuMTctMi4zMThjMC0uNTcuMDc5LTEuNjM4IDAtMi41MDhhMy4zIDMuMyAwIDAgMC0uMzItMS4yNTlhNy41IDcuNSAwIDAgMC0uODktMS4yMTlBMTcgMTcgMCAwIDAgMTQuMTA0LjE2YS42My42MyAwIDAgMC0uNDQtLjE2Yy0uMzMgMC0xLjExOS4xNS0xLjI0OS4xNkw5LjUwOC41NWEuMzkuMzkgMCAwIDAtLjMyLjI2YS4zNS4zNSAwIDAgMC0uMzMtLjIzYS4zNC4zNCAwIDAgMC0uMzMuMzVsLS4xIDUuOTM1YzAgLjQ0LS4xNCAxLjE3LS4xNSAxLjc4OWMtLjAxNi4zMi4wMjQuNjQyLjEyLjk1YTEuMTggMS4xOCAwIDAgMCAuNjcuNjU5bTUuNzU2LTcuODk0Yy4yNzUuMzMuNTE3LjY4OS43MiAxLjA2OWMuMDc0LjE4MS4xMTcuMzc0LjEyOS41N2wtLjA2LS4wMWExNSAxNSAwIDAgMC0xLjcwOS0uMjNhMS44IDEuOCAwIDAgMS0uNi0uMmMwLS4xNy4wOC0uNDQuMDgtLjYzdi0uOTVsLS4wNi0uODU5Yy4xNCAwIC4yNiAwIC4zMS0uMXEuNjMyLjYzOCAxLjE5IDEuMzRtLTUuMjI2LTFsMi44NjctLjI2bC0uMTUuODVjMCAuMDgtLjExLjQyLS4xOC44MWE3IDcgMCAwIDAtLjA2Ljg4OWExLjE2IDEuMTYgMCAwIDAgLjM4LjkzOWMuMzIzLjE4LjY4MS4yODUgMS4wNS4zMWMuNjYgMCAxLjM0OS0uMTYgMS45OTgtLjEyYS4zMi4zMiAwIDAgMCAuMTkgMGMwIC43Ni0uMTEgMS41NTktLjExIDEuOTk4cS4wNTcuNzA1IDAgMS40MWMtLjIgMS41NjgtLjkxLjc4OS0xLjU0OS44MTljLTEuMTA5LjA3LTEuNzA5LjI1LTIuNTI4LjMzYTggOCAwIDAgMS0xIDBhNCA0IDAgMCAxLS43NjktLjA2Yy0uMDkgMC0uMTktLjE0LS4yNC0uMDlhMi40IDIuNCAwIDAgMS0uMDgtLjc0YzAtLjU3LjA3LTEuMTguMDUtMS41NTlsLS4yNS01Ljc3NmEuMzguMzggMCAwIDAgLjM4LjJ6bTEyLjIxIDE3Ljc2N2ExLjggMS44IDAgMCAwLS40Ny0uMzZhMyAzIDAgMCAwLS40MjktLjE0YTIuNDcgMi40NyAwIDAgMCAuNjctMi41OThhMi45MyAyLjkzIDAgMCAwLTIuNTY5LTIuMDQ4YTIuMTUgMi4xNSAwIDAgMC0xLjQ3OS40NWEyLjg4IDIuODggMCAwIDAtLjk5OSAxLjc5OGEyLjE4IDIuMTggMCAwIDAgLjc0IDIuMTc4cS0uMzkuMDkzLS43NS4yN2ExLjkgMS45IDAgMCAwLS40NC4zNXEtLjE5MS4yMTUtLjMzLjQ3YTMuMyAzLjMgMCAwIDAtLjM2OSAxLjIzOWEzIDMgMCAwIDAtLjYyLS41OGE1IDUgMCAwIDAtLjc1OS0uMzhhMi43OCAyLjc4IDAgMCAwIC41NC0yLjc1OGEzLjA4IDMuMDggMCAwIDAtMy43ODctMS45NDhhMyAzIDAgMCAwLTEuMyA0LjkwNmMtLjE0LjA2LS4yOS4xMS0uNDIuMThxLS4zNjIuMjI5LS42NjkuNTNjMCAuMDYtLjA4LjEzLS4xMy4xOGEzLjQgMy40IDAgMCAwLS40LTEuMjdhMiAyIDAgMCAwLS4zNjktLjQ3YTIgMiAwIDAgMC0uNDUtLjM0OWE0IDQgMCAwIDAtLjQ1LS4xNGEyLjQ3IDIuNDcgMCAwIDAgLjY3LTIuNjA4YTIuOTMgMi45MyAwIDAgMC0yLjUyOC0xLjk5OGEyLjEyIDIuMTIgMCAwIDAtMS40NjkuNDVhMi44NCAyLjg0IDAgMCAwLS45OTkgMS43OThhMi4xNiAyLjE2IDAgMCAwIC43NCAyLjE3OGEzLjYgMy42IDAgMCAwLS43Ni4yOHEtLjI0My4xNTItLjQ0LjM2YTIuNSAyLjUgMCAwIDAtLjMzLjQ3YTMuNCAzLjQgMCAwIDAtLjQyOSAxLjIxOWEuMzguMzggMCAwIDAgLjI1LjQ4YS4zOS4zOSAwIDAgMCAuNDktLjI0cS4xMzgtLjI1OS4zMy0uNDhxLjE4OC0uMjA2LjM5OS0uMzlsLjM3LS4zOXEuMzY1LS40NzQuNzk5LS44ODlhLjMuMyAwIDAgMCAuMTQtLjE2aC4xN2EuMzUuMzUgMCAwIDAgLjM2LS4zM2EuMzMuMzMgMCAwIDAtLjMxLS4zMWMtLjg2LS4xMS0xLS44OTktLjgxLTEuNTk4cy42Ny0xLjI3IDEuMzgtMS4xOGExLjcyIDEuNzIgMCAwIDEgMS40OTggMS4xMmExLjQ4IDEuNDggMCAwIDEtLjQ2IDEuODA5YTEuMDYgMS4wNiAwIDAgMS0uNDMuMnEtLjI5LjA2LS41ODkuMDhhLjM5LjM5IDAgMCAwLS4zMzYuNTQ2YS4zOC4zOCAwIDAgMCAuMzY2LjIyM2EzLjYgMy42IDAgMCAwIC44Ni0uMDZoLjE0Yy4yNi4yMy40Ny40OC42ODkuN2wuNC4zOTlxLjIyLjE4My40Mi4zOXEuMTk2LjIyNi4zNC40OWEuMzcuMzcgMCAwIDAgLjM0OS4yNWE1LjEgNS4xIDAgMCAwLS42MiAxLjc4OGEuMzkuMzkgMCAxIDAgLjc0LjIyYTUuNSA1LjUgMCAwIDEgMS4zMTktMS43NzlsLjQ3LS40NHEuMzYyLS4zMzEuNzY5LS42MWExIDEgMCAwIDAgLjEgMGMuNTEyLjA5IDEuMDM2LjA5IDEuNTQ5IDBxLjA0NC4wMTUuMDkgMGEuMzkuMzkgMCAwIDAgLjQ2LjE0cS4yMi0uMTAxLjQxOS0uMjRxLjQ0NS4zMzYuODUuNzJjLjE2LjE2LjI5OS4zMi40MjkuNDdhNS44IDUuOCAwIDAgMSAxLjEwOSAxLjk5OGEuMzkuMzkgMCAwIDAgLjQ5LjI2YS40LjQgMCAwIDAgLjI5LS40NmE3LjIgNy4yIDAgMCAwLS40LTEuOTA4YTIuNiAyLjYgMCAwIDAtLjIxLS4zNmEuMzguMzggMCAwIDAgLjQ0LS4yNHEuMTQ4LS4yNTUuMzQtLjQ4Yy4xMS0uMTQuMjYtLjIzOS4zODktLjM3OWMuMTMtLjE0LjI1LS4yNC4zNy0uMzhxLjM2NS0uNDcuOC0uODc5YS4zLjMgMCAwIDAgLjE0OS0uMTZoLjE3YS4zNC4zNCAwIDAgMCAwLS42OGMtLjg1LS4xMS0xLS44OTktLjgxLTEuNTk4cy42OC0xLjI3IDEuMzktMS4xOGExLjcxIDEuNzEgMCAwIDEgMS40ODggMS4xMmExLjQ4IDEuNDggMCAwIDEtLjQxIDEuODM5Yy0uMTMuMDk2LS4yOC4xNjQtLjQzOS4ycS0uMjg3LjA2LS41OC4wOGEuMzkuMzkgMCAwIDAtLjM3LjM5OWEuMzcuMzcgMCAwIDAgLjM5LjM3cS40MzkuMDIxLjg3LS4wNmguMTRjLjI2LjIzLjQ3LjQ3LjY5LjY5cy4yNjkuMjYuMzk5LjM4OWMuMTMuMTMuMjkuMjQuNDIuMzlxLjE5LjIyNS4zNC40OGEuMzguMzggMCAwIDAgLjQ3OS4yNmEuMzkuMzkgMCAwIDAgLjI2LS40OGEzLjMgMy4zIDAgMCAwLS40Mi0xLjNhMiAyIDAgMCAwLS4zOC0uNTJtLTExLjU4MS4zNGExLjkgMS45IDAgMCAxLS4yOS0xLjgyOWExLjc0IDEuNzQgMCAwIDEgMS4xNy0xLjI1OWExLjkzIDEuOTMgMCAwIDEgMi40MjcgMS4wN2MxLjEzIDIuNjk3LTIuNjQ4IDIuNzQ3LTMuMzA3IDIuMDE4IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlPSIjMDIwMjAyIiAvPgoJCTxwYXRoIGZpbGw9IiMwYzZmZmYiIGQ9Ik0yLjUzMyAxMy4xMmMuMTUgMCAuMi4xNC44NzktMS4zMzljLjA5LS4xOS4xNi0uNC4yMy0uNTljLjQ2LTEuMTk4LjYxLTEuMjU4LjM4LTEuNDg4Yy0uNDUtLjQtMS40MS44NS0xLjQyLjg4YTIuMSAyLjEgMCAwIDAtLjQyLjk1OWMtLjA1OS4zLS4xMDkgMS41MzguMzUgMS41NzhtMjAuMjg2LTIuMTI4YTIgMiAwIDAgMC0uMjYtLjQ1cy0xLTEuMjc5LTEuNDItLjg3OWMtLjI0OS4yMy0uMTA5LjMxLjM1IDEuNDg5Yy4wOC4xOS4xNS40LjIzLjU5Yy42OSAxLjQ3OC43MyAxLjM0OC44OSAxLjMzOWMuNDYgMCAuNC0xLjI4LjM2LTEuNThhMiAyIDAgMCAwLS4xNS0uNTA5TTYuMDIgOC43MTRxLjE0NC0uMDY2LjI3LS4xNmExLjEgMS4xIDAgMCAwIC4yNC0uMTljLjc2LS42Ny45LS43Mi43OS0xYzAtLjExLS4xNi0uNDc5LTEuNC0uMDVhMS42IDEuNiAwIDAgMC0uNjQuNDFjLS4xNTkuMTgtLjc0OSAxLS41MDkgMS4yNGMuMDkuMDguMTUuMjUgMS4yNS0uMjVtMTIuNTY5LS4zNXEuMTE0LjEwNS4yNC4xOXEuMTMzLjA5NC4yOC4xNmMxLjExLjUgMS4xNy4zMyAxLjI1LjI0Yy4yNC0uMjYtLjM2LTEuMDYtLjUxLTEuMjRhMS44IDEuOCAwIDAgMC0uNjUtLjQxYy0xLjIyOS0uNDI5LTEuMzU5LS4wNi0xLjM5OS4wNWMtLjEuMjkuMDQuMzQuNzkgMS4wMSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0iIzBjNmZmZiIgLz4KCTwvZz4KPC9zdmc+",
                title: t("aboutUs.valueCollaborationTitle"),
                desc: t("aboutUs.valueCollaborationDesc"),
              },
              {
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KCTxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiNkY2I2N2EiIGQ9Ik0yMS4zNDYgMjQuMDE5SDcuMzA2YTEuMiAxLjIgMCAwIDEtMS4yNDktMS4xNVY0LjkxNWExLjIgMS4yIDAgMCAxIDEuMjQ5LTEuMTVoMTQuMDRhMS4yIDEuMiAwIDAgMSAxLjI1NCAxLjE1djE3Ljk1NGExLjIgMS4yIDAgMCAxLTEuMjU0IDEuMTUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjZGNiNjdhIiAvPgoJPHBhdGggZmlsbD0iIzIzMWYyMCIgZD0iTTIxLjM0NiAyNC4wNDhINy4zMDZhMS4yMyAxLjIzIDAgMCAxLTEuMjc3LTEuMTc5VjQuOTE1YTEuMjMgMS4yMyAwIDAgMSAxLjI3Ny0xLjE3OWgxNC4wNGExLjIzIDEuMjMgMCAwIDEgMS4yNzcgMS4xNzl2MTcuOTU0YTEuMjMgMS4yMyAwIDAgMS0xLjI3NyAxLjE3OU03LjMwNiAzLjc5M2ExLjE3NSAxLjE3NSAwIDAgMC0xLjIyIDEuMTIydjE3Ljk1NGExLjE3NiAxLjE3NiAwIDAgMCAxLjIyIDEuMTIyaDE0LjA0YTEuMTc2IDEuMTc2IDAgMCAwIDEuMjItMS4xMjJWNC45MTVhMS4xNzUgMS4xNzUgMCAwIDAtMS4yMi0xLjEyMloiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjMjMxZjIwIiAvPgoJPHBhdGggZmlsbD0iI2NjY2NjYiIgZD0iTTIzLjU2NiAyMi4ySDkuNTRhMS4yIDEuMiAwIDAgMS0xLjI0OC0xLjE0NVYzLjE3M0ExLjIgMS4yIDAgMCAxIDkuNTQgMi4wMjhoMTQuMDI2YTEuMiAxLjIgMCAwIDEgMS4yNDkgMS4xNDV2MTcuODhhMS4yIDEuMiAwIDAgMS0xLjI0OSAxLjE0N20tMi4xMi01LjQ0M2ExLjE2NyAxLjE2NyAwIDEgMCAxLjE2NyAxLjE2N2ExLjE3IDEuMTcgMCAwIDAtMS4xNjctMS4xNjlaIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iI2NjY2NjYiIgLz4KCTxwYXRoIGZpbGw9IiMyMzFmMjAiIGQ9Ik0yMy41NjYgMjIuMjI2SDkuNTRhMS4yMyAxLjIzIDAgMCAxLTEuMjc2LTEuMTczVjMuMTczQTEuMjMgMS4yMyAwIDAgMSA5LjU0IDJoMTQuMDI2YTEuMjMgMS4yMyAwIDAgMSAxLjI3NyAxLjE3M3YxNy44OGExLjEyIDEuMTIgMCAwIDEtLjM3NS44M2ExLjMyIDEuMzIgMCAwIDEtLjkwMi4zNDNNOS41NCAyLjA1N2ExLjE3NCAxLjE3NCAwIDAgMC0xLjIyIDEuMTE2djE3Ljg4YTEuMTczIDEuMTczIDAgMCAwIDEuMjIgMS4xMTZoMTQuMDI2YTEuMjcgMS4yNyAwIDAgMCAuODY0LS4zMjdhMS4wNiAxLjA2IDAgMCAwIC4zNTYtLjc4OVYzLjE3M2ExLjE3MyAxLjE3MyAwIDAgMC0xLjIyLTEuMTE2Wm0xMS45MDYgMTcuMDZhMS4yIDEuMiAwIDEgMSAxLjE5NS0xLjJhMS4yIDEuMiAwIDAgMS0xLjE5NSAxLjJtMC0yLjMzM2ExLjEzOCAxLjEzOCAwIDEgMCAxLjEzOCAxLjEzOGExLjE0IDEuMTQgMCAwIDAtMS4xMzgtMS4xMzgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjMjMxZjIwIiAvPgoJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIyLjE4OSA2Ljg1OUgxMC44MDZWNS4zMjJoMTEuMzgzWm0wIDEuNTk0SDEwLjgwNnYxLjUzNmgxMS4zODNabTAgMy40MTVIMTAuODA2VjEzLjRoMTEuMzgzWm0tNS4xMjIgMy40MTVoLTYuMjYxdjEuNTM2aDYuMjYxWiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiNmZmYiIC8+Cgk8cGF0aCBmaWxsPSIjMjMxZjIwIiBkPSJNMTcuMSAxNi44NDhoLTYuMzIydi0xLjU5NEgxNy4xWm0tNi4yNjEtLjA1N2g2LjJ2LTEuNDhoLTYuMlptMTEuMzgzLTMuMzU4SDEwLjc3OHYtMS41OTRoMTEuNDRabS0xMS4zODMtLjA1N2gxMS4zMjJWMTEuOUgxMC44MzVabTExLjM4My0zLjM1OEgxMC43NzhWOC40MjRoMTEuNDRabS0xMS4zODctLjA1N2gxMS4zMjZ2LTEuNDhIMTAuODM1Wm0xMS4zODMtMy4wNzNoLTExLjQ0VjUuMjk0aDExLjQ0Wm0tMTEuMzgzLS4wNTdoMTEuMzI2di0xLjQ4SDEwLjgzNVoiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSIjMjMxZjIwIiAvPgoJPHBhdGggZmlsbD0iIzQ3NzhiYyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTkuMjQyIDI0LjAxOWExLjMzNiAxLjMzNiAwIDAgMC0xLjEyMiAxLjQ3NHYzLjA0MUExLjMzIDEuMzMgMCAwIDAgMTkuMjQ1IDMwaDUuNmExLjMyNyAxLjMyNyAwIDAgMCAxLjEyNS0xLjQ2NmwtLjA1Ny0zLjA0MWMwLS44MDgtLjQ0NC0xLjQ3Mi0xLjA2NS0xLjQ3NFYyMC41YTMuMDM0IDMuMDM0IDAgMCAwLTIuNzI0LTMuMzA4YS42LjYgMCAwIDAtLjMzOS4wNzlhLjcxLjcxIDAgMCAwLS4zNjUuNjU3YS42NjUuNjY1IDAgMCAwIC40LjYyMmEuNi42IDAgMCAwIC4yNDUuMDZjLjgxOS4wMTUgMS41MzIuOTc0IDEuNTE4IDIuNzk0djIuNjE0bS0xLjEzNyAyLjY2OXYxLjI2NGEuMjU2LjI1NiAwIDAgMS0uNTExIDB2LTEuMjYzYS43My43MyAwIDAgMS0uNTEtLjY4OWEuNzY3Ljc2NyAwIDAgMSAxLjUzMiAwYS43MzUuNzM1IDAgMCAxLS41MS42ODlaIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzQ3NzhiYyIgLz4KPC9zdmc+",
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
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={48}
                    height={48}
                  />
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
        </section>

        {/* Section 5: Achievements (Circular Stats Carousel) */}
        <section className="py-20 px-6 max-w-5xl mx-auto w-full">
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
        </section>

        {/* Section 6: Contact Us (Split Image + Card) */}
        <section className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
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
