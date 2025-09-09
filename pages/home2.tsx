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

const HomePage2 = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home2.pageTitle")}</title>
        <meta name="description" content={t("home2.pageDesc")} />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
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
            <a
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl"
            >
              {t("home2.heroBtn")}
            </a>
          </div>
        </section>

        {/* Section 2: Featured Skills */}
        <section className="py-24 px-6 max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#00bcd4]">
            {t("home2.skillsTitle")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3   gap-10">
            {[
              {
                name: t("home2.skillReact"),
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMjQyOTM4IiByeD0iNjAiIC8+CgkJPHBhdGggZmlsbD0iIzAwZDhmZiIgZD0iTTEyOC4wMDEgMTQ2Ljk1MWMxMC4zMDQgMCAxOC42NTYtOC4zNTMgMTguNjU2LTE4LjY1NnMtOC4zNTItMTguNjU2LTE4LjY1Ni0xOC42NTZzLTE4LjY1NiA4LjM1My0xOC42NTYgMTguNjU2czguMzUzIDE4LjY1NiAxOC42NTYgMTguNjU2IiAvPgoJCTxwYXRoIHN0cm9rZT0iIzAwZDhmZiIgc3Ryb2tlLXdpZHRoPSI4LjkxMSIgZD0iTTEyOC4wMDIgOTAuMzYzYzI1LjA0OCAwIDQ4LjMxNyAzLjU5NCA2NS44NjIgOS42MzVDMjE1LjAwMyAxMDcuMjc1IDIyOCAxMTguMzA2IDIyOCAxMjguMjk1YzAgMTAuNDA5LTEzLjc3NCAyMi4xMjgtMzYuNDc1IDI5LjY0OWMtMTcuMTYyIDUuNjg2LTM5Ljc0NiA4LjY1NC02My41MjMgOC42NTRjLTI0LjM3OCAwLTQ3LjQ2My0yLjc4Ni02NC44MTktOC43MTdDNDEuMjI1IDE1MC4zNzYgMjggMTM4LjUwNiAyOCAxMjguMjk1YzAtOS45MDggMTIuNDEtMjAuODU0IDMzLjI1Mi0yOC4xMmMxNy42MS02LjE0IDQxLjQ1My05LjgxMiA2Ni43NDYtOS44MTJ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIC8+CgkJPHBhdGggc3Ryb2tlPSIjMDBkOGZmIiBzdHJva2Utd2lkdGg9IjguOTExIiBkPSJNOTQuOTgxIDEwOS40MzhjMTIuNTE0LTIxLjY5OCAyNy4yNTEtNDAuMDYgNDEuMjQ5LTUyLjI0YzE2Ljg2NC0xNC42NzcgMzIuOTE0LTIwLjQyNSA0MS41NjYtMTUuNDM2YzkuMDE3IDUuMiAxMi4yODggMjIuOTg4IDcuNDYzIDQ2LjQxYy0zLjY0NSAxNy43MDctMTIuMzU5IDM4Ljc1My0yNC4yMzggNTkuMzUxYy0xMi4xNzkgMjEuMTE4LTI2LjEyNCAzOS43MjQtMzkuOTMxIDUxLjc5MmMtMTcuNDcxIDE1LjI3Mi0zNC4zNjIgMjAuNzk5LTQzLjIwNyAxNS42OThjLTguNTgzLTQuOTQ2LTExLjg2NS0yMS4xNjctNy43NDctNDIuODUyYzMuNDc5LTE4LjMyMyAxMi4yMS00MC44MTIgMjQuODQxLTYyLjcyM3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCQk8cGF0aCBzdHJva2U9IiMwMGQ4ZmYiIHN0cm9rZS13aWR0aD0iOC45MTEiIGQ9Ik05NS4wMTIgMTQ3LjU3OGMtMTIuNTQ5LTIxLjY3NC0yMS4wOTMtNDMuNjE2LTI0LjY1OS02MS44MjZjLTQuMjkzLTIxLjk0MS0xLjI1OC0zOC43MTYgNy4zODctNDMuNzJjOS4wMDktNS4yMTYgMjYuMDUyLjgzNCA0My45MzQgMTYuNzEyYzEzLjUyIDEyLjAwNCAyNy40MDMgMzAuMDYxIDM5LjMxNiA1MC42MzljMTIuMjE0IDIxLjA5OCAyMS4zNjggNDIuNDczIDI0LjkyOSA2MC40NjFjNC41MDYgMjIuNzY0Ljg1OSA0MC4xNTctNy45NzggNDUuMjcyYy04LjU3NCA0Ljk2NC0yNC4yNjUtLjI5MS00MC45OTYtMTQuNjg5Yy0xNC4xMzYtMTIuMTY0LTI5LjI2LTMwLjk1OS00MS45MzMtNTIuODQ5WiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgoJPC9nPgo8L3N2Zz4=",
              },

              {
                name: t("home2.skillFigma"),
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMzg0IiB2aWV3Qm94PSIwIDAgMjU2IDM4NCI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjM4NCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMwYWNmODMiIGQ9Ik02NCAzODRjMzUuMzI4IDAgNjQtMjguNjcyIDY0LTY0di02NEg2NGMtMzUuMzI4IDAtNjQgMjguNjcyLTY0IDY0czI4LjY3MiA2NCA2NCA2NCIgc3Ryb2tlLXdpZHRoPSI5LjUiIHN0cm9rZT0iIzBhY2Y4MyIgLz4KCTxwYXRoIGZpbGw9IiNhMjU5ZmYiIGQ9Ik0wIDE5MmMwLTM1LjMyOCAyOC42NzItNjQgNjQtNjRoNjR2MTI4SDY0Yy0zNS4zMjggMC02NC0yOC42NzItNjQtNjQiIHN0cm9rZS13aWR0aD0iOS41IiBzdHJva2U9IiNhMjU5ZmYiIC8+Cgk8cGF0aCBmaWxsPSIjZjI0ZTFlIiBkPSJNMCA2NEMwIDI4LjY3MiAyOC42NzIgMCA2NCAwaDY0djEyOEg2NEMyOC42NzIgMTI4IDAgOTkuMzI4IDAgNjQiIHN0cm9rZS13aWR0aD0iOS41IiBzdHJva2U9IiNmMjRlMWUiIC8+Cgk8cGF0aCBmaWxsPSIjZmY3MjYyIiBkPSJNMTI4IDBoNjRjMzUuMzI4IDAgNjQgMjguNjcyIDY0IDY0cy0yOC42NzIgNjQtNjQgNjRoLTY0eiIgc3Ryb2tlLXdpZHRoPSI5LjUiIHN0cm9rZT0iI2ZmNzI2MiIgLz4KCTxwYXRoIGZpbGw9IiMxYWJjZmUiIGQ9Ik0yNTYgMTkyYzAgMzUuMzI4LTI4LjY3MiA2NC02NCA2NHMtNjQtMjguNjcyLTY0LTY0czI4LjY3Mi02NCA2NC02NHM2NCAyOC42NzIgNjQgNjQiIHN0cm9rZS13aWR0aD0iOS41IiBzdHJva2U9IiMxYWJjZmUiIC8+Cjwvc3ZnPg==",
              },
              {
                name: t("home2.skillNodejs"),
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMjQyOTM4IiByeD0iNjAiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiMyNDI5MzgiIC8+CgkJPHBhdGggZmlsbD0iIzgxY2QzOSIgZD0iTTExOS44NzggMzEuMTE2YzQuOTE5LTIuODE1IDExLjMyNS0yLjgyOCAxNi4yMzkgMGMyNC43MjIgMTMuOTcgNDkuNDUyIDI3LjkxNyA3NC4xNyA0MS44OTVjNC42NSAyLjYxOSA3Ljc1OSA3Ljc5MyA3LjcxMiAxMy4xNXY4NC4wNDVjLjAzNSA1LjU3OS0zLjM4MiAxMC44NzctOC4yODcgMTMuNDM2Yy0yNC42NDEgMTMuODkzLTQ5LjI3IDI3LjgwMi03My45MDcgNDEuNjk1Yy01LjAxOSAyLjg3LTExLjU1NCAyLjY0OS0xNi40MTgtLjQ1N2MtNy4zODctNC4yODItMTQuNzg3LTguNTQ0LTIyLjE3NS0xMi44MjJjLTEuNTEtLjktMy4yMTItMS42MTYtNC4yNzgtMy4wOGMuOTQzLTEuMjcgMi42MjgtMS40MjggMy45OTctMS45ODNjMy4wODMtLjk4MSA1LjkxNi0yLjU1NSA4Ljc0OC00LjA4MmMuNzE3LS40OSAxLjU5MS0uMzAyIDIuMjc4LjEzNmM2LjMxNyAzLjYyMiAxMi41NzkgNy4zNSAxOC45MTcgMTAuOTM3YzEuMzUyLjc4MSAyLjcyMS0uMjU2IDMuODc3LS45YzI0LjE4LTEzLjY2NyA0OC4zOS0yNy4yODEgNzIuNTY3LTQwLjk1MmMuODk2LS40MzEgMS4zOTEtMS4zODIgMS4zMTgtMi4zNjNjLjAxNy0yNy43MjUuMDA0LTU1LjQ1NC4wMDktODMuMThjLjEwMi0xLjExMi0uNTQyLTIuMTM2LTEuNTQ5LTIuNTkyYy0yNC41NTUtMTMuODI5LTQ5LjA5OS0yNy42NzgtNzMuNjUtNDEuNTFhMi41NiAyLjU2IDAgMCAwLTIuODkyLS4wMDVjLTI0LjU1MiAxMy44MzctNDkuMDkgMjcuNy03My42NDIgNDEuNTI3Yy0xLjAwMy40NTctMS42NzYgMS40NjQtMS41NTcgMi41OGMuMDA1IDI3LjcyNiAwIDU1LjQ1NSAwIDgzLjE4NGEyLjM1IDIuMzUgMCAwIDAgMS4zMzYgMi4zMzRjNi41NTEgMy43MTUgMTMuMTExIDcuNDA0IDE5LjY2NyAxMS4xMDdjMy42OTQgMS45ODcgOC4yMjggMy4xNjkgMTIuMjk4IDEuNjQ2YzMuNTktMS4yODggNi4xMDctNC45NTMgNi4wMzktOC43NjVjLjAzNC0yNy41NjMtLjAxNy01NS4xMy4wMjUtODIuNjljLS4wOS0xLjIyMyAxLjA3MS0yLjIzNCAyLjI2MS0yLjExOGMzLjE0OC0uMDIyIDYuMy0uMDQzIDkuNDQ4LjAwOGMxLjMxNC0uMDMgMi4yMTggMS4yODggMi4wNTYgMi41MmMtLjAxMyAyNy43MzguMDM0IDU1LjQ3Ni0uMDIxIDgzLjIxM2MuMDA4IDcuMzkzLTMuMDI5IDE1LjQzNy05Ljg2NyAxOS4wNTRjLTguNDIzIDQuMzYzLTE4LjgzNSAzLjQzOC0yNy4xNTctLjc0NmMtNy4yMDQtMy41OTYtMTQuMDgtNy44NC0yMS4xNTYtMTEuNjkyYy00LjkxOC0yLjU0NS04LjMxOC03Ljg2NC04LjI4My0xMy40MzlWODYuMTYxYy0uMDUyLTUuNDY4IDMuMTgyLTEwLjczNiA3Ljk3NS0xMy4zMTdjMjQuNjM3LTEzLjkwMyA0OS4yNy0yNy44MTggNzMuOTAyLTQxLjcyOCIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iIzgxY2QzOSIgLz4KCQk8cGF0aCBmaWxsPSIjODFjZDM5IiBkPSJNMTQxLjM3MiA4OS4zMzVjMTAuNzQ1LS42OTIgMjIuMjQ4LS40MSAzMS45MTcgNC44ODRjNy40ODcgNC4wNTYgMTEuNjM3IDEyLjU3IDExLjc2OSAyMC44ODdjLS4yMDkgMS4xMjEtMS4zODIgMS43NC0yLjQ1MyAxLjY2M2MtMy4xMTctLjAwNC02LjIzNi4wNDMtOS4zNTMtLjAyMWMtMS4zMjMuMDUxLTIuMDkxLTEuMTY4LTIuMjU3LTIuMzM3Yy0uODk2LTMuOTgtMy4wNjctNy45MjEtNi44MTItOS44NDFjLTUuNzUtMi44NzgtMTIuNDE2LTIuNzMzLTE4LjY4Ni0yLjY3M2MtNC41NzcuMjQyLTkuNDk5LjYzOS0xMy4zNzcgMy4zM2MtMi45NzcgMi4wMzktMy44ODEgNi4xNTUtMi44MTkgOS40N2MxLjAwMiAyLjM4IDMuNzQ5IDMuMTQ4IDUuOTk4IDMuODU2YzEyLjk0OSAzLjM4NyAyNi42NzEgMy4wNDkgMzkuMzczIDcuNTA2YzUuMjU5IDEuODE3IDEwLjQwMyA1LjM1IDEyLjIwMyAxMC44NTZjMi4zNTUgNy4zOCAxLjMyMyAxNi4yLTMuOTI4IDIyLjEyNGMtNC4yNTggNC44NzUtMTAuNDU5IDcuNTI5LTE2LjY0NCA4Ljk3Yy04LjIyOCAxLjgzNS0xNi43NjcgMS44ODItMjUuMTIzIDEuMDY3Yy03Ljg1Ny0uODk2LTE2LjAzNC0yLjk2LTIyLjA5OS04LjMxM2MtNS4xODctNC41MDQtNy43Mi0xMS41MjItNy40NjktMTguMjk0Yy4wNi0xLjE0NCAxLjE5OS0xLjk0MiAyLjI5NS0xLjg0OGMzLjEzOS0uMDI1IDYuMjc5LS4wMzQgOS40MTguMDA1YzEuMjU1LS4wOSAyLjE4NC45OTQgMi4yNDkgMi4xNzZjLjU3OCAzLjc5MSAyLjAwMyA3Ljc3MSA1LjMxIDEwLjAxOGM2LjM4IDQuMTE3IDE0LjM4NyAzLjgzNSAyMS42OTMgMy45NWM2LjA1My0uMjY4IDEyLjg0OC0uMzQ5IDE3Ljc4Ny00LjM1YzIuNjA2LTIuMjgyIDMuMzc4LTYuMSAyLjY3NC05LjM4NGMtLjc2My0yLjc3My0zLjY2NC00LjA2NS02LjE1NS00LjkxYy0xMi43ODMtNC4wNDMtMjYuNjU5LTIuNTc2LTM5LjMxOC03LjE0OWMtNS4xNC0xLjgxNi0xMC4xMS01LjI1LTEyLjA4NC0xMC41M2MtMi43NTUtNy40NzMtMS40OTMtMTYuNzE3IDQuMzA4LTIyLjQ0YzUuNjU2LTUuNjk1IDEzLjgyLTcuODg4IDIxLjU4My04LjY3MiIgc3Ryb2tlLXdpZHRoPSI2LjUiIHN0cm9rZT0iIzgxY2QzOSIgLz4KCTwvZz4KPC9zdmc+",
              },
              {
                name: t("home2.skillTypescript"),
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgdmlld0JveD0iMCAwIDcyIDcyIj4KCTxyZWN0IHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiM5MmQzZjUiIGQ9Ik01OS4wMzUgNjBoLTQ2LjA3YS45Ny45NyAwIDAgMS0uOTY1LS45NjV2LTQ2LjA3YS45Ny45NyAwIDAgMSAuOTY1LS45NjVoNDYuMDdhLjk3Ljk3IDAgMCAxIC45NjUuOTY1djQ2LjA3YS45Ny45NyAwIDAgMS0uOTY1Ljk2NSIgLz4KCTxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIj4KCQk8cGF0aCBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01OS4wMzUgNjBoLTQ2LjA3YS45Ny45NyAwIDAgMS0uOTY1LS45NjV2LTQ2LjA3YS45Ny45NyAwIDAgMSAuOTY1LS45NjVoNDYuMDdhLjk3Ljk3IDAgMCAxIC45NjUuOTY1djQ2LjA3YS45Ny45NyAwIDAgMS0uOTY1Ljk2NVoiIC8+CgkJPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNC40NTMiIGQ9Ik01My44MiA0MS4zNGMtLjQ1Ni0xLjc3Ny0yLjQyOS0zLjExLTQuNzkzLTMuMTFjLTIuNzAzIDAtNC44OTMgMS43NDMtNC44OTMgMy44OTZjMCAyLjE1MSAyLjE5MSAzLjg5NiA0Ljg5MyAzLjg5NmwtLjEuMDEzYzIuNzAzIDAgNC44OTMgMS43NDUgNC44OTMgMy44OTZjMCAyLjE1My0yLjE5MSAzLjg5Ni00Ljg5MyAzLjg5NmMtMi4zNjQgMC00LjMzNy0xLjMzNi00Ljc5My0zLjExMiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgoJCTxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjQuNDU2IiBkPSJNMzQuMDk2IDM4LjIzdjE1LjU5Nk0yOS42NCAzOC4yM2g4LjkxMiIgY2xpcC1ydWxlPSJldmVub2RkIiAvPgoJPC9nPgo8L3N2Zz4=",
              },
              {
                name: t("home2.skillTailwind"),
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+Cgk8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgLz4KCTxnIGZpbGw9Im5vbmUiPgoJCTxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZjRmMmVkIiByeD0iNjAiIHN0cm9rZS13aWR0aD0iNi41IiBzdHJva2U9IiNmNGYyZWQiIC8+CgkJPHBhdGggZmlsbD0idXJsKCNTVkdZQ003eGR5bikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTgzIDExMHE5LTM2IDQ1LTM2YzM2IDAgNDAuNSAyNyA1OC41IDMxLjVxMTggNC41MDIgMzEuNS0xMy41cS05IDM2LTQ1IDM2Yy0zNiAwLTQwLjUtMjctNTguNS0zMS41UTk2LjUgOTIgODMgMTEwbS00NSA1NHE5LTM2IDQ1LTM2YzM2IDAgNDAuNSAyNyA1OC41IDMxLjVxMTggNC41MDIgMzEuNS0xMy41cS05IDM2LTQ1IDM2Yy0zNiAwLTQwLjUtMjctNTguNS0zMS41cS0xOC00LjUwMi0zMS41IDEzLjUiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCQk8ZGVmcz4KCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdZQ003eGR5biIgeDE9Ijg2LjUiIHgyPSIxNjMuNSIgeTE9Ijc0IiB5Mj0iMTg1LjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxzdG9wIHN0b3AtY29sb3I9IiMzMmIxYzEiIC8+CgkJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxNGM2YjciIC8+CgkJCTwvbGluZWFyR3JhZGllbnQ+CgkJPC9kZWZzPgoJPC9nPgo8L3N2Zz4=",
              },
              {
                name: t("home2.skillSEO"),
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0Ij4KCTxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgLz4KCTxwYXRoIGZpbGw9IiMwMDY2ZDEiIGQ9Ik04LjkzOCA2LjU4NWMtLjUxIDAtLjkyLjE0Ny0xLjIwOC40NjJjLS4yODYuMzA2LS40MTguNzMyLS40MTggMS4yNTRxLS4wMDEuNTg0LjI2MiAxLjA2MnYuMDAyYy4xNzQuMzA5LjQ3My42NDYuODg3IDEuMDF2LjAwMWMuMzIuMjc5LjUyOC41MDkuNjM2LjY5MnYuMDAycS4xNTguMjU1LjE1OS42MTVjMCAuMjA3LS4wNDMuMzI1LS4wOTguMzg3Yy0uMDQ3LjA1NC0uMTI2LjA5My0uMjY1LjA5M2MtLjE0IDAtLjIyLS4wNC0uMjctLjFjLS4wNTMtLjA2My0uMDkzLS4xNzUtLjA5My0uMzYydi0uNTgySDcuMjk0di41MWMwIC41MzMuMTI5Ljk2Ni40MDcgMS4yNzlsLjAwMS4wMDFjLjI4My4zMS42OTIuNDU0IDEuMi40NTRjLjUxNCAwIC45MjktLjE0NyAxLjIxNy0uNDYyYy4yOTItLjMxMy40MjctLjc1LjQyNy0xLjI5cS4wMDItLjYyNS0uMjUyLTEuMTA1Yy0uMTY4LS4zMTgtLjQ2OS0uNjU5LS44ODktMS4wMjRjLS4zMi0uMjc4LS41MzEtLjUwNy0uNjQ2LS42ODZhMS4wNiAxLjA2IDAgMCAxLS4xNTctLjU2YzAtLjE4NC4wMzgtLjI5NS4wOS0uMzU3Yy4wNDYtLjA1Ny4xMjItLjA5Ni4yNTUtLjA5NmMuMTI4IDAgLjIwNC4wMzkuMjUzLjA5OGwuMDAzLjAwNGMuMDQ4LjA1NS4wODkuMTY2LjA4OS4zNjl2LjQ3NGgxLjIzNnYtLjQxMWMwLS41MzItLjEyOC0uOTYzLS40MDctMS4yN2MtLjI3Ni0uMzE3LS42OC0uNDY0LTEuMTgzLS40NjQiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiMwMDY2ZDEiIC8+Cgk8cGF0aCBmaWxsPSIjMDA2NmQxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4wMjQgNi41ODVjLS41MTUgMC0uOTMyLjE0Ny0xLjIyNi40NjJjLS4yOTEuMzEyLS40MjcuNzQzLS40MjcgMS4yNzJ2My4zMTJjMCAuNTI5LjEzNi45Ni40MjggMS4yNzJjLjI5My4zMTUuNzEuNDYyIDEuMjI1LjQ2MnMuOTMyLS4xNDcgMS4yMjYtLjQ2MmMuMjkxLS4zMTIuNDI3LS43NDMuNDI3LTEuMjcyVjguMzE5YzAtLjUzLS4xMzYtLjk2LS40MjctMS4yNzJjLS4yOTQtLjMxNS0uNzEtLjQ2Mi0xLjIyNi0uNDYybS0uMzYzIDEuNjcxYzAtLjE5LjA0LS4zMDUuMDk0LS4zN2MuMDUtLjA2LjEzLS4xMDEuMjctLjEwMWMuMTM5IDAgLjIxOS4wNC4yNjguMWMuMDU0LjA2Ni4wOTQuMTguMDk0LjM3MXYzLjQzOGMwIC4xOS0uMDQuMzA1LS4wOTQuMzdjLS4wNS4wNi0uMTMuMTAxLS4yNjkuMTAxYy0uMTQgMC0uMjItLjA0LS4yNjktLjFjLS4wNTQtLjA2Ni0uMDk0LS4xOC0uMDk0LS4zNzF6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiMwMDY2ZDEiIC8+Cgk8cGF0aCBmaWxsPSIjMDA2NmQxIiBkPSJNMTMuOTk0IDYuNjc1aC0zdjYuNmgzdi0xLjJoLTEuNzFWMTAuNDRoMS4zNTl2LTEuMmgtMS4zNlY3Ljg3NWgxLjcxeiIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZT0iIzAwNjZkMSIgLz4KCTxwYXRoIGZpbGw9IiMwMDY2ZDEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNzg3IDQuMTcyYTIuMjUgMi4yNSAwIDAgMC0yLjI1IDIuMjV2Ny40MDZhMi4yNSAyLjI1IDAgMCAwIDIuMjUgMi4yNWg3djIuMjVoLTIuMjVhLjc1Ljc1IDAgMCAwIDAgMS41aDZhLjc1Ljc1IDAgMSAwIDAtMS41aC0yLjI1di0yLjI1aDdhMi4yNSAyLjI1IDAgMCAwIDIuMjUtMi4yNVY2LjQyMmEyLjI1IDIuMjUgMCAwIDAtMi4yNS0yLjI1em0tLjc1IDIuMjVhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMTUuNWEuNzUuNzUgMCAwIDEgLjc1Ljc1djcuNDA2YS43NS43NSAwIDAgMS0uNzUuNzVoLTE1LjVhLjc1Ljc1IDAgMCAxLS43NS0uNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2U9IiMwMDY2ZDEiIC8+Cjwvc3ZnPg==",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-8 flex flex-col items-center justify-center bg-gradient-to-br from-white/60 to-[#b3eaf2]/40 dark:from-gray-800/60 dark:to-[#002d32]/40 backdrop-blur-xl border-2 border-[#26c6da] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                {/* Floating Icon Circle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-[#00bcd4] to-cyan-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 z-20">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={36}
                    height={36}
                    className=""
                  />
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
        </section>

        {/* Section 3: Process Timeline (Zigzag Layout) */}
        <section className="py-20 px-6   mx-auto w-full">
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
        </section>

        {/* Section 4: Client Success Stories (Animated Carousel) */}
        <section className="py-16 px-6  mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#00bcd4]">
            {t("home2.clientStoriesTitle")}
          </h2>
          <div className="relative">
            <div className="flex   gap-8 pb-4   snap-x snap-mandatory">
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
                  className="min-w-[320px] max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center snap-center transition-transform duration-300 hover:scale-105"
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
        </section>

        {/* Section 5: Interactive Timeline (Career Milestones) */}
        <section className="py-20 px-6   mx-auto w-full">
          <h2 className="text-4xl font-bold mb-16 text-center text-[#00bcd4]">
            {t("home2.timelineTitle")}
          </h2>
          <span className="flex h-20 w-20 rounded-full bg-amber-50 mx-auto mb-4" />
          <div className="flex gap-10  pb-4 hide-scrollbar">
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
                className="min-w-[260px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center relative border-t-4 border-[#26c6da] hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
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
        </section>

        {/* Section 6: Call to Action */}
        <section className="py-16   mx-auto w-full">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center">
              {t("home2.ctaTitle")}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
              {t("home2.ctaDesc")}
            </p>
            <a
              href="/contact-us"
              className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide"
            >
              {t("home2.ctaBtn")}
            </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default HomePage2;
