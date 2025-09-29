import React, { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Hedder";
import { CodeIcon, DessertIcon, RocketIcon, SearchIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Reusable section heading with accent line
const SectionHeading: React.FC<{
  children: React.ReactNode;
  small?: boolean;
}> = ({ children, small }) => (
  <div className="mb-14 text-center">
    <h2
      className={`${
        small ? "text-3xl" : "text-4xl md:text-5xl"
      } font-black tracking-tight bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-600 bg-clip-text text-transparent inline-block`}
    >
      {children}
    </h2>
    <span className="block w-28 h-[3px] mx-auto mt-5 rounded-full bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500" />
  </div>
);

const skills = (t: (k: string) => string) => [
  {
    name: t("home2.skillReact"),
    key: "react",
    color: "from-[#00bcd4] to-cyan-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#0a0f1a" rx={60}></rect>
          <path
            fill="#00d8ff"
            d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
          />
          <path
            stroke="#00d8ff"
            strokeWidth={9}
            d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
          />
          <path
            stroke="#00d8ff"
            strokeWidth={9}
            d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
          />
          <path
            stroke="#00d8ff"
            strokeWidth={9}
            d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: t("home2.skillFigma"),
    key: "figma",
    color: "from-pink-500 to-fuchsia-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width={256} height={256} fill="#111827" rx={60}></rect>
          <path
            fill="#0acf83"
            d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"
          />
          <path
            fill="#a259ff"
            d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"
          />
          <path
            fill="#f24e1e"
            d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"
          />
          <path
            fill="#ff7262"
            d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"
          />
          <path
            fill="#1abcfe"
            d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"
          />
        </g>
      </svg>
    ),
  },
  {
    name: t("home2.skillNodejs"),
    key: "node",
    color: "from-emerald-400 to-teal-500",
    icon: <span className="text-3xl font-black text-emerald-300">JS</span>,
  },
  {
    name: t("home2.skillTypescript"),
    key: "ts",
    color: "from-blue-500 to-sky-500",
    icon: <span className="text-2xl font-black text-sky-300">TS</span>,
  },
  {
    name: t("home2.skillTailwind"),
    key: "tailwind",
    color: "from-cyan-400 to-teal-400",
    icon: <span className="text-2xl font-black text-cyan-300">TW</span>,
  },
  {
    name: t("home2.skillSEO"),
    key: "seo",
    color: "from-indigo-400 to-violet-500",
    icon: (
      <span className="text-xl font-extrabold text-violet-200 tracking-wider">
        SEO
      </span>
    ),
  },
];

const processSteps = (t: (k: string) => string) => [
  {
    step: t("home2.processDiscovery"),
    desc: t("home2.processDiscoveryDesc"),
    icon: SearchIcon,
  },
  {
    step: t("home2.processDesign"),
    desc: t("home2.processDesignDesc"),
    icon: DessertIcon,
  },
  {
    step: t("home2.processDevelopment"),
    desc: t("home2.processDevelopmentDesc"),
    icon: CodeIcon,
  },
  {
    step: t("home2.processLaunch"),
    desc: t("home2.processLaunchDesc"),
    icon: RocketIcon,
  },
];

const stories = (t: (k: string) => string) => [
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
];

const milestones = (t: (k: string) => string) => [
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
];

const HomePage2: React.FC = () => {
  const { t } = useTranslation();

  // Testimonial carousel logic
  const [activeStory, setActiveStory] = useState(0);
  const storyList = stories(t);
  useEffect(() => {
    const id = setInterval(
      () => setActiveStory((p) => (p + 1) % storyList.length),
      6000,
    );
    return () => clearInterval(id);
  }, [storyList.length]);

  // Scroll snap container ref for manual nav
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const goTo = (idx: number) => {
    setActiveStory(idx);
    if (carouselRef.current) {
      const child = carouselRef.current.children[idx] as
        | HTMLElement
        | undefined;
      child?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <>
      <Head>
        <title>{t("home2.pageTitle")}</title>
        <meta name="description" content={t("home2.pageDesc")} />
      </Head>
      <main className="max-h-screen flex flex-col caret-transparent overflow-auto [&::-webkit-scrollbar]:hidden bg-gradient-to-b from-white via-white/60 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative">
        {/* Global ambient orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-32 -left-32 w-[620px] h-[620px] bg-gradient-to-br from-[#00bcd4]/20 via-cyan-400/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/15 via-[#00bcd4]/10 to-blue-500/5 rounded-full blur-3xl" />
        </div>
        <Header />

        {/* Hero */}
        <section className="relative flex flex-col justify-center items-center min-h-[90vh] px-6 md:px-10 pt-24 text-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          >
            <source src="/home2-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-transparent dark:from-gray-950/80 dark:via-gray-900/70 dark:to-gray-900/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 opacity-[0.3] [background:radial-gradient(circle_at_25%_20%,rgba(0,188,212,0.55),transparent_65%),radial-gradient(circle_at_85%_70%,rgba(6,182,212,0.35),transparent_60%)]" />
          <div className="relative max-w-5xl flex flex-col justify-center items-center mx-auto z-10">
            <span className="inline-flex mb-6 px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide bg-gradient-to-r from-[#00bcd4] to-cyan-400 text-white shadow-lg/40 ring-1 ring-cyan-400/40">
              {t("home2.heroBtn")}
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-[#00bcd4] via-cyan-500 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              {t("home2.heroTitle")}
            </h1>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-medium">
              {t("home2.heroDesc")}
            </p>
            <div className=" ">
              <a
                href="/about-us"
                className="relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-semibold text-[#00bcd4] dark:text-cyan-300 text-lg bg-white/80 dark:bg-gray-900/70 backdrop-blur border border-cyan-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                {t("home2.heroBtn")}
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="relative py-28 px-6 md:px-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-100/40 dark:via-cyan-900/10 to-transparent" />
          <div className="relative max-w-7xl mx-auto">
            <SectionHeading>{t("home2.skillsTitle")}</SectionHeading>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {skills(t).map((skill, i) => (
                <div
                  key={skill.key}
                  className="group relative rounded-2xl p-6 flex flex-col items-center justify-center bg-white/65 dark:bg-gray-900/65 backdrop-blur-xl border border-cyan-100/60 dark:border-gray-800 shadow-sm hover:shadow-2xl transition duration-500 overflow-hidden"
                >
                  <div
                    className={`relative mb-5 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00bcd4]/10 via-cyan-400/10 to-blue-500/10 transition" />
                  <div className="absolute -bottom-10 group-hover:bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 rounded-t-xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline - vertical line style */}
        <section className="relative py-28 px-6 md:px-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 dark:via-gray-900/40 to-transparent" />
          <div className="relative max-w-5xl mx-auto">
            <SectionHeading>{t("home2.processTitle")}</SectionHeading>
            <div className="relative pl-4 md:pl-10">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00bcd4] via-cyan-400 to-blue-500" />
              <div className="space-y-14">
                {processSteps(t).map((s, idx) => (
                  <div key={s.step} className="relative flex gap-6 md:gap-12">
                    <div className="absolute left-[6px] -translate-x-1/2 top-2">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00bcd4] to-cyan-400 flex items-center justify-center shadow-lg ring-4 ring-white/60 dark:ring-gray-900/60">
                          <s.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-cyan-600 dark:text-cyan-300 tracking-wider">
                          {idx + 1}
                        </span>
                      </div>
                    </div>
                    <div className="ml-16 md:ml-8 flex-1 bg-white/75 dark:bg-gray-900/70 border border-cyan-100/60 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition">
                      <h3 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-[#00bcd4] to-cyan-500 bg-clip-text text-transparent mb-3">
                        {s.step}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories Carousel */}
        <section className="relative py-28 px-6 md:px-10  ">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-100/40 dark:via-cyan-900/10 to-transparent" />
          <div className="relative  mx-auto">
            <SectionHeading>{t("home2.clientStoriesTitle")}</SectionHeading>
            <div
              ref={carouselRef}
              className="flex flex-wrap justify-center gap-8 pb-4    "
            >
              {storyList.map((client, idx) => {
                const active = idx === activeStory;
                return (
                  <div
                    key={client.name}
                    className={`relative w-[320px] shrink-0 snap-center rounded-3xl p-8 flex flex-col items-center border transition-all duration-500 backdrop-blur-xl ${
                      active
                        ? "bg-white/90 dark:bg-gray-900/80 border-cyan-300/60 shadow-2xl shadow-cyan-500/20 scale-[1.04]"
                        : "bg-white/60 dark:bg-gray-800/60 border-cyan-100/40 dark:border-gray-700/40 hover:shadow-xl"
                    }`}
                  >
                    {active && (
                      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#00bcd4]/40 via-cyan-400/30 to-blue-500/30 blur-xl opacity-80 pointer-events-none" />
                    )}
                    <div className="relative mb-5">
                      <Image
                        src={client.avatar}
                        alt={client.name}
                        width={92}
                        height={92}
                        className="rounded-full w-24 h-24 object-cover border-4 border-white dark:border-gray-900 shadow"
                      />
                      <span className="absolute -bottom-1 -right-1 px-2 py-[2px] rounded-full text-[10px] font-semibold bg-gradient-to-r from-[#00bcd4] to-cyan-400 text-white shadow ring-1 ring-white/60 dark:ring-gray-900/80">
                        {idx + 1}/{storyList.length}
                      </span>
                    </div>
                    <p className="relative text-gray-700 dark:text-gray-300 text-sm leading-relaxed italic mb-6">
                      “{client.quote}”
                    </p>
                    <div className="text-lg font-bold bg-gradient-to-r from-[#00bcd4] to-cyan-500 bg-clip-text text-transparent mb-1">
                      {client.name}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                      {client.role}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex items-center justify-center gap-3">
              {storyList.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show story ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeStory
                      ? "bg-gradient-to-r from-[#00bcd4] to-cyan-400 w-8"
                      : "bg-cyan-300/40 hover:bg-cyan-400/70 w-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="relative py-28 px-6 md:px-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white dark:via-gray-900 to-transparent" />
          <div className="relative max-w-7xl mx-auto">
            <SectionHeading>{t("home2.timelineTitle")}</SectionHeading>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 md:gap-8">
              {milestones(t).map((m) => (
                <div
                  key={m.year}
                  className="group relative rounded-2xl p-6 bg-white/65 dark:bg-gray-900/65 backdrop-blur-xl border border-cyan-100/60 dark:border-gray-800 shadow-sm hover:shadow-2xl transition duration-500 overflow-hidden flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00bcd4] to-cyan-400 flex items-center justify-center shadow ring-4 ring-white/60 dark:ring-gray-900/60">
                      <Image
                        src={m.icon}
                        alt={m.title}
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="font-black text-lg bg-gradient-to-r from-[#00bcd4] to-cyan-500 bg-clip-text text-transparent">
                      {m.year}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-gray-900 dark:text-gray-100 mb-2 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {m.desc}
                  </p>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#00bcd4]/10 via-cyan-400/10 to-blue-500/10 transition" />
                  <div className="absolute -bottom-10 group-hover:bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 rounded-t-xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 px-6 md:px-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-100/40 dark:via-cyan-900/10 to-transparent" />
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-[2px] bg-gradient-to-br from-[#00bcd4] via-cyan-400 to-blue-500">
              <div className="relative grid md:grid-cols-3 gap-10 bg-white dark:bg-gray-950 rounded-3xl p-10 md:p-14 shadow-xl">
                <div className="md:col-span-2 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6 bg-gradient-to-r from-[#00bcd4] to-cyan-500 bg-clip-text text-transparent">
                    {t("home2.ctaTitle")}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                    {t("home2.ctaDesc")}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/contact-us"
                      className="group relative inline-flex items-center justify-center px-9 py-4 rounded-2xl font-semibold text-white text-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00bcd4] via-cyan-400 to-blue-500 group-hover:scale-105 transition-transform" />
                      <span className="relative">{t("home2.ctaBtn")}</span>
                    </a>
                    <a
                      href="/services"
                      className="relative inline-flex items-center justify-center px-9 py-4 rounded-2xl font-semibold text-[#00bcd4] dark:text-cyan-300 text-lg bg-white/80 dark:bg-gray-900/70 backdrop-blur border border-cyan-100 dark:border-gray-800 hover:-translate-y-0.5 hover:shadow-xl transition"
                    >
                      {t("home2.heroBtn")}
                    </a>
                  </div>
                </div>
                <div className="relative flex md:items-center">
                  <ul className="space-y-5 text-sm font-medium w-full">
                    {[
                      t("home2.processDiscovery"),
                      t("home2.processDesign"),
                      t("home2.processDevelopment"),
                      t("home2.processLaunch"),
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

export default HomePage2;
