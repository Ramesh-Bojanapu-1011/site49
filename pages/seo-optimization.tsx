import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const seoStats = [
  {
    icon: "/award.svg",
    label: "Awards",
    value: 5,
    desc: "Recognized for SEO excellence.",
  },
  {
    icon: "/project.svg",
    label: "Projects",
    value: 40,
    desc: "Successful SEO campaigns delivered.",
  },
  {
    icon: "/happy.svg",
    label: "Happy Clients",
    value: 35,
    desc: "Clients delighted with our results.",
  },
  {
    icon: "/globe.svg",
    label: "Countries",
    value: 8,
    desc: "International reach and impact.",
  },
];

const SeoOptimization = () => (
  <>
    <Head>
      <title>SEO Optimization Services</title>
      <meta
        name="description"
        content="Modern, effective SEO optimization services for your brand."
      />
    </Head>
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
      <Header />
      {/* Section 1: Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-primary-500/30 to-cyan-400/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-primary-600 dark:text-primary-400 drop-shadow-lg">
            SEO Optimization That Delivers
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Boost your visibility and rankings with proven SEO strategies
            tailored for your brand.
          </p>
          <Link
            href="/contact-us"
            className="px-8 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide animate-bounce"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Section 2: Awards & Recognition */}
      <section className="mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-10 backdrop-blur-xl">
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-6 text-primary-500 dark:text-primary-400 drop-shadow-lg">
              Achievements & Industry Recognition
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Our SEO expertise is recognized by leading organizations. We
              deliver innovative solutions and outstanding results.
            </p>
            <ul className="list-disc pl-6 text-base space-y-2 text-primary-500 dark:text-cyan-300">
              <li>
                <span className="font-semibold text-primary-600 dark:text-amber-300">
                  Best SEO Agency 2025
                </span>{" "}
                – National Marketing Awards
              </li>
              <li>
                <span className="font-semibold text-primary-600 dark:text-amber-300">
                  Excellence in Client Satisfaction
                </span>{" "}
                – Global Business Review
              </li>
              <li>
                <span className="font-semibold text-primary-600 dark:text-amber-300">
                  Top 50 Digital Companies
                </span>{" "}
                – Tech Innovators
              </li>
              <li>
                <span className="font-semibold text-primary-600 dark:text-amber-300">
                  ISO 9001:2015 Certified
                </span>{" "}
                for Quality Management
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative bg-gradient-to-br from-primary-100 via-cyan-100 to-amber-100 dark:from-primary-900 dark:via-cyan-900 dark:to-amber-900 rounded-2xl shadow-2xl flex items-center justify-center p-2 min-w-[320px] min-h-[220px] group hover:scale-105 hover:shadow-amber-400/40 transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-white/30 dark:bg-gray-900/40 backdrop-blur-md z-0" />
              <Image
                src="/award-star.png"
                alt="Gold Star Award"
                width={340}
                height={220}
                className="rounded-xl object-cover shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 to-primary-500 opacity-0 group-hover:opacity-80 blur-md transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: SEO Process Steps (Vertical Stepper) */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          How We Optimize Your Site
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-cyan-400 to-amber-400 opacity-30 z-0" />
          <div className="flex flex-col gap-14 relative z-10">
            {[
              {
                icon: "/search.svg",
                title: "Audit & Discovery",
                desc: "We analyze your site and understand your goals.",
              },
              {
                icon: "/strategy.svg",
                title: "Strategy",
                desc: "We craft a custom SEO plan for your brand.",
              },
              {
                icon: "/design.svg",
                title: "On-Page Optimization",
                desc: "We optimize content, structure, and keywords.",
              },
              {
                icon: "/dev.svg",
                title: "Technical SEO",
                desc: "We improve site speed, mobile, and indexing.",
              },
              {
                icon: "/launch.svg",
                title: "Off-Page SEO",
                desc: "We build authority and backlinks for your site.",
              },
              {
                icon: "/support.svg",
                title: "Reporting & Support",
                desc: "We provide ongoing help, updates, and analytics.",
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
                  <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: SEO Features (Horizontal Cards) */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          Standout Features
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
          {[
            {
              icon: "/award.svg",
              title: "Award-Winning Results",
              desc: "Our SEO campaigns have received industry recognition.",
            },
            {
              icon: "/next.svg",
              title: "Lightning Fast",
              desc: "Optimized for speed and performance on every device.",
            },
            {
              icon: "/file.svg",
              title: "Content Optimization",
              desc: "Unique content and keywords tailored to your brand.",
            },
            {
              icon: "/window.svg",
              title: "Mobile & Desktop SEO",
              desc: "Seamless experience and ranking on all devices.",
            },
            {
              icon: "/globe.svg",
              title: "Global Reach",
              desc: "SEO for international audiences and accessibility.",
            },
            {
              icon: "/vercel.svg",
              title: "Easy Reporting",
              desc: "Clear analytics and progress tracking for your site.",
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
              <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-2" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Pricing Plans */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          Choose Your Plan
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
          {/* Basic Plan */}
          <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
              Basic
            </span>
            <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
              <div className="mb-4">
                <Image
                  src="/award.svg"
                  alt="Basic"
                  width={48}
                  height={48}
                  className="drop-shadow-lg"
                />
              </div>
              <div className="font-extrabold text-4xl text-primary-500 dark:text-cyan-300 mb-2 text-center drop-shadow-2xl">
                $249
              </div>
              <div className="font-semibold text-lg text-primary-600 dark:text-cyan-200 mb-2 text-center tracking-wide">
                Starter SEO
              </div>
              <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                <li>Site Audit</li>
                <li>Basic On-Page SEO</li>
                <li>Keyword Research</li>
                <li>Email Support</li>
              </ul>
              <Link
                href="/contact-us"
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Advanced Plan */}
          <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
              Advanced
            </span>
            <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
              <div className="mb-4">
                <Image
                  src="/project.svg"
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
                Business SEO
              </div>
              <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                <li>Full On-Page & Technical SEO</li>
                <li>Content Optimization</li>
                <li>Backlink Strategy</li>
                <li>Chat & Contact Forms</li>
              </ul>
              <Link
                href="/contact-us"
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-cyan-400 to-amber-400 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Pro Plan */}
          <div className="relative flex flex-col items-center justify-center w-80 rounded-3xl shadow-2xl bg-gradient-to-br from-cyan-50 via-amber-50 to-white dark:from-cyan-900 dark:via-amber-900 dark:to-gray-900 group hover:scale-[1.07] transition-all duration-300">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-7 py-2 rounded-full bg-gradient-to-tr from-amber-400 to-primary-500 text-white font-bold text-lg shadow-lg tracking-wide border-2 border-white dark:border-gray-900">
              Pro
            </span>
            <div className="flex flex-col items-center justify-center h-full pt-12 pb-10">
              <div className="mb-4">
                <Image
                  src="/happy.svg"
                  alt="Pro"
                  width={48}
                  height={48}
                  className="drop-shadow-lg"
                />
              </div>
              <div className="font-extrabold text-4xl text-amber-400 dark:text-primary-400 mb-2 text-center drop-shadow-2xl">
                $899
              </div>
              <div className="font-semibold text-lg text-amber-600 dark:text-primary-200 mb-2 text-center tracking-wide">
                Premium SEO
              </div>
              <ul className="text-gray-800/80 dark:text-gray-200 text-center mb-2 px-4 space-y-1">
                <li>All SEO Needs</li>
                <li>Full Customization</li>
                <li>Priority Support</li>
                <li>Integrations & Analytics</li>
              </ul>
              <Link
                href="/contact-us"
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-tr from-amber-400 to-primary-500 text-white font-bold shadow-lg hover:scale-105 transition-all duration-200 text-base tracking-wide border-2 border-white dark:border-gray-900"
              >
                Get Started
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
            alt="Contact Us"
            width={400}
            height={400}
            className="rounded-3xl w-96 h-96 shadow-2xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group w-full max-w-lg">
            <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-tr from-primary-500 via-cyan-400 to-amber-400 animate-gradient-x blur-sm opacity-80 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-w-[340px]">
              <div className="flex gap-6 mb-6 animate-float">
                <a
                  href="mailto:hello@site49.com"
                  className="hover:scale-110 transition"
                >
                  <Image src="/mail.svg" alt="Email" width={36} height={36} />
                </a>
                <a
                  href="tel:+1234567890"
                  className="hover:scale-110 transition"
                >
                  <Image src="/phone.svg" alt="Phone" width={36} height={36} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={36}
                    height={36}
                  />
                </a>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-primary-500 text-center drop-shadow-lg">
                Let's Connect!
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                Ready to start your next SEO optimization project? Reach out for
                a free consultation or to discuss your goals!
              </p>
              <a
                href="/contact-us"
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </>
);

export default SeoOptimization;
