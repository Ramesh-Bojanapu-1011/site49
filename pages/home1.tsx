import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Hedder";
import { ModeToggle } from "@/components/theme/ModeToggle";
import Head from "next/head";
import Image from "next/image";

const Home1 = () => {
  return (
    <>
      <Head>
        <title>Home1 Page</title>
      </Head>
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col">
        <Header />
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col md:flex-row items-center justify-between px-6 py-16   mx-auto w-full  ">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 opacity-50 w-full h-full object-cover z-0"
          >
            <source src="/home1-bg-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0   bg-opacity-30 dark:bg-opacity-50 z-10" />
          <div className="md:w-1/2 text-center md:text-left relative z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-lg">
              Showcase Your Talent
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 drop-shadow">
              Welcome to your Freelancer Portfolio. Build your brand, attract
              clients, and display your best work.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-amber-50 dark:bg-black dark:text-white font-semibold shadow-lg hover:bg-primary-600 transition-colors duration-200 text-lg"
            >
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center relative z-20">
            <img
              src="/globe.svg"
              alt="Portfolio Hero"
              className="w-64 h-64 object-contain"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/about-main.jpg"
                alt="About Me"
                className="w-full h-[400px] rounded-3xl shadow-2xl object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-3xl shadow-2xl p-1">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col   justify-center">
                  <h2 className="text-3xl font-bold mb-4 text-primary-500 text-center">
                    About Us
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-justify  ">
                    As a dedicated freelancer, I specialize in crafting unique
                    digital portfolios and professional websites that help
                    individuals and businesses stand out. My journey is driven
                    by creativity, attention to detail, and a commitment to
                    delivering results that exceed expectations. Whether you
                    need a personal brand, a showcase for your work, or a
                    platform to attract new clients, I bring expertise in web
                    development, design, and branding to every project. Let's
                    build your online presence together and turn your vision
                    into reality.
                  </p>
                  <a
                    href="/about-us"
                    className="inline-block px-8 py-3 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg tracking-wide text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary-500">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                img: "/window.svg",
                desc: "Custom websites and web apps built for your needs.",
              },
              {
                title: "UI/UX Design",
                img: "/next.svg",
                desc: "Beautiful, user-friendly interfaces for all devices.",
              },
              {
                title: "Branding",
                img: "/logo-stackly.png",
                desc: "Logo, colors, and identity to make you stand out.",
              },
              {
                title: "SEO Optimization",
                img: "/vercel.svg",
                desc: "Improve your search rankings and visibility.",
              },
              {
                title: "Content Creation",
                img: "/logo-fav-icon.png",
                desc: "Engaging content for blogs, social, and more.",
              },
              {
                title: "Consulting",
                img: "/globe.svg",
                desc: "Expert advice to grow your business online.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h3 className="font-semibold text-lg mb-2 text-primary-500">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary-500">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={`/portfolio${i}.jpg`}
                  alt={`Project ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">Project {i}</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    A brief description of the project and its impact.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary-500">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "John Doe", text: "Amazing work! Highly recommended." },
              {
                name: "Jane Smith",
                text: "Professional and creative. Will hire again!",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
              >
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "{t.text}"
                </p>
                <div className="font-semibold text-primary-500">- {t.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto w-full">
          <div className="bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-3xl shadow-2xl p-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col items-center justify-center">
              <div className="mb-6 flex justify-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 shadow-lg">
                  <svg
                    width="36"
                    height="36"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 10.5a8.38 8.38 0 01-.9 3.8c-.6 1.2-1.5 2.3-2.6 3.1-1.1.8-2.3 1.3-3.6 1.3s-2.5-.5-3.6-1.3c-1.1-.8-2-1.9-2.6-3.1a8.38 8.38 0 01-.9-3.8V7.5a8.38 8.38 0 01.9-3.8c.6-1.2 1.5-2.3 2.6-3.1C8.5.5 9.7 0 11 0s2.5.5 3.6 1.3c1.1.8 2 1.9 2.6 3.1a8.38 8.38 0 01.9 3.8v3z"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-primary-500">
                Contact
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                Want to discuss your project or have any questions? Reach out
                and let's connect!
              </p>
              <a
                href="/contact-us"
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-xl tracking-wide"
              >
                Go to Contact Us Page
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home1;
