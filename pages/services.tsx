import React from "react";
import Image from "next/image";
import Header from "@/components/Hedder";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";

const servicesList = [
  {
    name: "Web Design",
    icon: "/web-design.svg",
    desc: "Modern, responsive websites tailored to your brand.",
    link: "/web-design",
  },
  {
    name: "Development",
    icon: "/development.svg",
    desc: "Robust web and mobile app development solutions.",
    link: "/development",
  },
  {
    name: "Branding",
    icon: "/branding.svg",
    desc: "Distinctive branding and identity creation.",
    link: "/branding",
  },
  {
    name: "SEO & Marketing",
    icon: "/seo.svg",
    desc: "Boost your online presence and reach your audience.",
    link: "/seo",
  },
  {
    name: "UI/UX Design",
    icon: "/uiux.svg",
    desc: "Intuitive interfaces and seamless user experiences.",
    link: "/uiux",
  },
  {
    name: "Consulting",
    icon: "/consulting.svg",
    desc: "Expert advice to elevate your digital strategy.",
    link: "/consulting",
  },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta
          name="description"
          content="Explore our full range of creative and digital services."
        />
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          >
            <source src="/services-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-cyan-400/30 z-0" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-primary-600 dark:text-primary-400 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Discover the creative solutions we offer to help your business
              grow and thrive.
            </p>
          </div>
        </section>

        {/* Section 2: Services Grid */}
        <section className="py-20 px-6 max-w-6xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-primary-500 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center rounded-3xl shadow-2xl p-10 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-cyan-200 dark:border-cyan-900 hover:scale-105 hover:shadow-2xl transition-all duration-300 group  "
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
              >
                {/* Floating Icon */}
                <div className="absolute  -top-8 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-full shadow-lg border-4 border-white dark:border-gray-900 animate-bounce duration-1000 transform    ">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="pt-12 pb-2 flex flex-col items-center">
                  <h4 className="font-bold text-xl text-primary-500 mb-2 text-center group-hover:text-cyan-400 transition drop-shadow-lg">
                    {service.name}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                    {service.desc}
                  </p>
                  <Link
                    href={service.link}
                    className="text-sm text-cyan-500 dark:text-cyan-300 font-semibold group-hover:underline transition"
                  >
                    Learn More
                  </Link>
                </div>
                {/* Animated highlight */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-primary-500 opacity-0 group-hover:opacity-80 blur-sm transition-all duration-300" />
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
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Zig-Zag Timeline (Modern Look) */}
        <section className="py-20 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
            How We Work
          </h2>
          <div className="relative   mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-cyan-400 to-amber-400 opacity-40 z-0" />
            <div className="flex flex-col gap-16 relative z-10">
              {[
                {
                  label: "Discovery",
                  icon: "/search.svg",
                  desc: "We start by understanding your goals and challenges.",
                },
                {
                  label: "Strategy",
                  icon: "/strategy.svg",
                  desc: "We craft a custom plan for your success.",
                },
                {
                  label: "Design",
                  icon: "/design.svg",
                  desc: "We create stunning visuals and user experiences.",
                },
                {
                  label: "Development",
                  icon: "/dev.svg",
                  desc: "We build robust, scalable solutions.",
                },
                {
                  label: "Launch",
                  icon: "/launch.svg",
                  desc: "We deploy and celebrate your new product.",
                },
                {
                  label: "Support",
                  icon: "/support.svg",
                  desc: "We provide ongoing help and optimization.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-center w-full ${
                    idx % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="relative w-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-cyan-100 dark:border-cyan-900">
                    <div
                      className={`absolute ${
                        idx % 2 != 0 ? "-left-8" : "-right-8"
                      } top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900`}
                    >
                      <Image
                        src={step.icon}
                        alt={step.label}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="font-bold text-xl text-primary-500 mb-2 text-center">
                      {step.label}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 text-center mb-2">
                      {step.desc}
                    </div>
                    <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Service Highlights (Horizontal Scroll Cards) */}
        <section className="py-20 px-6   mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
            Why Choose Us
          </h2>
          <div className="flex gap-8 justify-center items-center   pb-4  ">
            {[
              "Expert Team",
              "Cutting-Edge Tech",
              "Personalized Approach",
              "Proven Results",
            ].map((highlight, idx) => (
              <div
                key={idx}
                className="relative min-w-[260px] rounded-2xl shadow-xl p-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-500 via-cyan-400 to-amber-400 hover:scale-105 transition-all duration-300 group overflow-visible perspective-[1000px]"
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
              >
                {/* Stacked Card with Flip Effect */}
                <div
                  className="relative w-full h-full"
                  style={{ minHeight: "180px" }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-10 transition-transform duration-700 group-hover:rotate-y-180"
                    style={{ backfaceVisibility: "hidden", padding: "2rem" }}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-full shadow-lg mb-4">
                        <span className="font-extrabold text-2xl text-white">
                          {highlight[0]}
                        </span>
                      </div>
                      <div className="font-extrabold text-xl text-primary-500 mb-2 text-center">
                        {highlight}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 text-center mb-2">{`We deliver ${highlight.toLowerCase()} for every client.`}</div>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-primary-500 flex items-center justify-center rotate-y-180 transition-transform duration-700 group-hover:rotate-y-0"
                    style={{ backfaceVisibility: "hidden", padding: "2rem" }}
                  >
                    <div className="font-bold text-lg text-white text-center">
                      Experience the difference with our{" "}
                      {highlight.toLowerCase()}!
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .rotate-y-180 {
                    transform: rotateY(180deg);
                  }
                  .group:hover .rotate-y-180 {
                    transform: rotateY(0deg);
                  }
                  .group:hover .group-hover\:rotate-y-180 {
                    transform: rotateY(180deg);
                  }
                `}</style>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Service Stats (Animated Circular Grid) */}
        <section className="py-20 px-6 max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
            Our Impact
          </h2>
          <div className="flex gap-10 justify-center items-center flex-wrap">
            {[
              { icon: "/award.svg", label: "Awards", value: 12, percent: 80 },
              {
                icon: "/project.svg",
                label: "Projects",
                value: 120,
                percent: 95,
              },
              {
                icon: "/happy.svg",
                label: "Happy Clients",
                value: 85,
                percent: 90,
              },
              {
                icon: "/globe.svg",
                label: "Countries",
                value: 18,
                percent: 70,
              },
            ].map((fact, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center justify-center min-w-[180px] max-w-xs"
              >
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
                <div className="absolute top-10 left-1/2 -translate-x-1/2">
                  <Image
                    src={fact.icon}
                    alt={fact.label}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="font-extrabold text-3xl text-primary-500 mb-2 mt-2">
                  {fact.value}
                </div>
                <div className="font-semibold text-lg text-gray-700 dark:text-gray-300 text-center">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Contact CTA (Split Image + Card) */}
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
                    <Image
                      src="/phone.svg"
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
                  Ready to start your next project or have questions? Reach out
                  for a free consultation or to discuss your goals!
                </p>
                <a
                  href="/contact"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide animate-bounce"
                >
                  Get in Touch
                </a>
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

export default Services;
