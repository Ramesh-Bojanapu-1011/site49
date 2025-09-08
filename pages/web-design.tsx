import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const webDesignStats = [
  {
    icon: "/award.svg",
    label: "Awards",
    value: 8,
    desc: "Recognized for creative excellence.",
  },
  {
    icon: "/project.svg",
    label: "Projects",
    value: 60,
    desc: "Diverse web design projects delivered.",
  },
  {
    icon: "/happy.svg",
    label: "Happy Clients",
    value: 45,
    desc: "Clients delighted with our work.",
  },
  {
    icon: "/globe.svg",
    label: "Countries",
    value: 10,
    desc: "International reach and impact.",
  },
];

const WebDesign = () => (
  <>
    <Head>
      <title>Web Design Services</title>
      <meta
        name="description"
        content="Modern, creative web design services for your brand."
      />
    </Head>
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
      <Header />
      {/* Section 1: Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-primary-500/30 to-cyan-400/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-primary-600 dark:text-primary-400 drop-shadow-lg">
            Web Design That Inspires
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Elevate your brand with stunning, responsive websites crafted for
            impact.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide animate-bounce"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Section 2: Web Design Awards & Recognition */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-primary-500 text-center">
          Awards & Recognition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "Best UI/UX 2024",
              img: "/award.svg",
              desc: "Awarded for outstanding user experience and interface design.",
            },
            {
              title: "Top Web Agency",
              img: "/logo-stackly.png",
              desc: "Recognized as a leading web design agency in the region.",
            },
            {
              title: "Innovation in Design",
              img: "/next.svg",
              desc: "Honored for creative and innovative web solutions.",
            },
            {
              title: "Client Choice Award",
              img: "/happy.svg",
              desc: "Voted favorite by clients for exceptional service.",
            },
            {
              title: "Global Impact",
              img: "/globe.svg",
              desc: "Celebrated for international reach and successful projects.",
            },
            {
              title: "Tech Excellence",
              img: "/vercel.svg",
              desc: "Recognized for technical expertise and performance.",
            },
          ].map((award, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center rounded-3xl shadow-2xl p-8 bg-gradient-to-br from-primary-500 via-cyan-400 to-amber-400 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-full shadow-lg border-4 border-white dark:border-gray-900 mb-4 animate-float">
                <Image
                  src={award.img}
                  alt={award.title}
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="font-bold text-xl text-primary-500 mb-2 text-center drop-shadow-lg">
                {award.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
                {award.desc}
              </p>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-primary-500 opacity-0 group-hover:opacity-80 blur-sm transition-all duration-300" />
            </div>
          ))}
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

      {/* Section 3: Web Design Process Steps (Vertical Stepper) */}
      <section className="py-20 px-6   mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          How We Build Your Website
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-cyan-400 to-amber-400 opacity-30 z-0" />
          <div className="flex flex-col gap-14 relative z-10">
            {[
              {
                icon: "/search.svg",
                title: "Discovery",
                desc: "We start by understanding your goals, audience, and vision.",
              },
              {
                icon: "/strategy.svg",
                title: "Strategy",
                desc: "We craft a custom plan and sitemap for your brand.",
              },
              {
                icon: "/design.svg",
                title: "Design",
                desc: "We create beautiful, user-friendly layouts and graphics.",
              },
              {
                icon: "/dev.svg",
                title: "Development",
                desc: "We build your site with modern tech for speed and reliability.",
              },
              {
                icon: "/launch.svg",
                title: "Launch",
                desc: "We deploy your new website and ensure everything works perfectly.",
              },
              {
                icon: "/support.svg",
                title: "Support",
                desc: "We provide ongoing help, updates, and optimization.",
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
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          Standout Features
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
          {[
            {
              icon: "/award.svg",
              title: "Award-Winning Quality",
              desc: "Our designs have received industry recognition for creativity and impact.",
            },
            {
              icon: "/next.svg",
              title: "Lightning Fast",
              desc: "Optimized for speed and performance on every device.",
            },
            {
              icon: "/file.svg",
              title: "Custom Graphics",
              desc: "Unique illustrations and icons tailored to your brand.",
            },
            {
              icon: "/window.svg",
              title: "Dark & Light Modes",
              desc: "Seamless experience in any environment, day or night.",
            },
            {
              icon: "/globe.svg",
              title: "Global Reach",
              desc: "Websites built for international audiences and accessibility.",
            },
            {
              icon: "/vercel.svg",
              title: "Easy Deployment",
              desc: "Launch your site quickly with modern hosting solutions.",
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
              <div className="font-extrabold text-xl text-white mb-2 text-center drop-shadow-lg">
                {feature.title}
              </div>
              <div className="text-white/80 dark:text-gray-200 text-center mb-2">
                {feature.desc}
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mt-2" />
            </div>
          ))}
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

      {/* Section 5: Web Design Stats */}
      <section className="py-20 px-6   mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          Our Web Design Impact
        </h2>
        <div className="flex flex-wrap gap-16 justify-center items-center pb-4">
          {webDesignStats.map((fact, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col items-center justify-center w-70 h-70 rounded-4xl shadow-2xl bg-gradient-to-tr from-0% via-cyan-400 to-amber-400 hover:scale-105 transition-all duration-300 group animate-popin`}
              style={{ animationDelay: `${idx * 0.18}s` }}
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-full shadow-lg border-4 border-white dark:border-gray-900 animate-float z-10">
                <Image
                  src={fact.icon}
                  alt={fact.label}
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex flex-col items-center justify-center h-full pt-16">
                <div className="font-extrabold text-5xl text-white mb-2 text-center drop-shadow-lg animate-count">
                  {fact.value}
                </div>
                <div className="font-semibold text-lg text-white mb-2 text-center">
                  {fact.label}
                </div>
                <div className="text-white/80 dark:text-gray-200 text-center mb-2  px-2">
                  {fact.desc}
                </div>
              </div>
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-primary-500 opacity-0 group-hover:opacity-80 blur-sm transition-all duration-300" />
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
                  animation: popin 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                @keyframes count {
                  0% {
                    opacity: 0;
                    transform: scale(0.7);
                  }
                  80% {
                    opacity: 1;
                    transform: scale(1.1);
                  }
                  100% {
                    opacity: 1;
                    transform: scale(1);
                  }
                }
                .animate-count {
                  animation: count 1.2s cubic-bezier(0.23, 1, 0.32, 1);
                }
              `}</style>
            </div>
          ))}
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
                Ready to start your next web design project? Reach out for a
                free consultation or to discuss your goals!
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

export default WebDesign;
