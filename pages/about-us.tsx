import React from "react";
import Image from "next/image";
import Header from "@/components/Hedder";
import Head from "next/head";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company, mission, and team."
        />
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
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-cyan-400/30 z-0" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-primary-600 dark:text-primary-400 drop-shadow-lg">
              About Us
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Discover our journey, values, and the passionate team behind our
              success.
            </p>
          </div>
        </section>

        {/* Section 2: Our Story (Split Image + Content) */}
        <section className="py-20 px-6   mx-auto w-full flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/about-main.jpg"
              alt="Our Story"
              width={400}
              height={400}
              className="rounded-3xl w-150 h-150 shadow-2xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-500">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300  ">
              From humble beginnings as a small group of passionate freelancers,
              we've grown into a creative collective serving clients worldwide.
              Our journey is defined by innovation, collaboration, and a
              relentless pursuit of excellence.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
              We believe that every project is an opportunity to learn, grow,
              and make a positive impact. Our team thrives on creative
              challenges and values building long-term relationships with our
              clients.
            </p>
            <ul className="space-y-4">
              {[
                { year: "2017", desc: "Founded as a creative team" },
                { year: "2018", desc: "Launched our first digital campaign" },
                { year: "2019", desc: "First major client success" },
                { year: "2020", desc: "Expanded our team and skillset" },
                { year: "2021", desc: "Awarded for creative excellence" },
                { year: "2022", desc: "Reached 100+ successful projects" },
                { year: "2024", desc: "Global expansion to 12+ countries" },
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
          <h2 className="text-3xl font-bold mb-12 text-primary-500 text-center">
            Meet the Team
          </h2>
          <div className="flex flex-wrap gap-10 pb-4">
            {[
              {
                name: "Ramesh B.",
                role: "Lead Designer",
                img: "/avatars/ramesh.jpg",
                fun: "Loves sketching and coffee",
                socials: [
                  { icon: "/linkedin.svg", url: "#" },
                  { icon: "/twitter.svg", url: "#" },
                ],
              },
              {
                name: "Priya S.",
                role: "Frontend Developer",
                img: "/avatars/priya.jpg",
                fun: "React wizard & music lover",
                socials: [
                  { icon: "/linkedin.svg", url: "#" },
                  { icon: "/github.svg", url: "#" },
                ],
              },
              {
                name: "David L.",
                role: "Brand Strategist",
                img: "/avatars/david.jpg",
                fun: "Branding guru & traveler",
                socials: [
                  { icon: "/linkedin.svg", url: "#" },
                  { icon: "/instagram.svg", url: "#" },
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
                  className="rounded-full mb-6 border-4 border-primary-500 shadow-lg"
                />
                <div className="font-bold text-2xl text-primary-500 mb-1 text-center">
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
          <h2 className="text-3xl font-bold mb-14 text-primary-500 text-center">
            Our Values
          </h2>
          <div className="flex flex-wrap gap-2  items-center justify-center md:gap-0 relative">
            {[
              {
                icon: "/creativity.svg",
                title: "Creativity",
                desc: "We believe in original ideas and innovative solutions.",
              },
              {
                icon: "/collaboration.svg",
                title: "Collaboration",
                desc: "Teamwork and open communication drive our success.",
              },
              {
                icon: "/integrity.svg",
                title: "Integrity",
                desc: "Honesty and transparency in every project.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className=" flex  flex-col  items-center bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 mx-6 z-10 hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg border-4 ${
                    idx === 1 ? "border-cyan-400" : "border-primary-500"
                  } bg-gradient-to-tr from-primary-500 to-cyan-400 animate-pulse`}
                >
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="font-bold text-xl text-primary-500 mb-2 text-center">
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
          <h2 className="text-3xl font-bold mb-14 text-primary-500 text-center">
            Achievements
          </h2>
          <div className="flex gap-10 justify-center items-center flex-wrap">
            {[
              {
                icon: "/award.svg",
                label: "Awards",
                value: 7,
                percent: 70,
              },
              {
                icon: "/project.svg",
                label: "Projects",
                value: 54,
                percent: 90,
              },
              {
                icon: "/happy.svg",
                label: "Happy Clients",
                value: 38,
                percent: 80,
              },
              {
                icon: "/globe.svg",
                label: "Countries",
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

        {/* Section 6: Contact Us (Split Image + Card) */}
        <section className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <Image
              src="/contact-main.jpg"
              alt="Contact Us"
              width={400}
              height={400}
              className="rounded-3xl w-96 h-96 shadow-2xl object-cover"
            />
          </div>
          {/* Right Side Contact Card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-lg">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-tr from-primary-500 via-cyan-400 to-amber-400 animate-gradient-x blur-sm opacity-80 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-w-[340px]">
                {/* Floating Contact Icons */}
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
                  Have a project in mind or just want to say hello? Reach out
                  for a free consultation or to discuss your next big idea.
                  We're excited to collaborate!
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
