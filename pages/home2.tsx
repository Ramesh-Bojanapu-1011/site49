import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const HomePage2 = () => {
  return (
    <>
      <Head>
        <title>Home2 - Freelancer Portfolio</title>
        <meta name="description" content="Freelancer Portfolio Home2" />
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
          <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
          <div className="relative z-20 max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
              Elevate Your Freelance Journey
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover new opportunities, connect with clients, and showcase
              your expertise in a vibrant portfolio.
            </p>
            <a
              href="/contact-us"
              className="inline-block px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Section 2: Featured Skills */}
        <section className="py-24 px-6 max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-16 text-center text-primary-500">
            Featured Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {[
              { name: "React", icon: "/skills/react.svg" },
              { name: "Next.js", icon: "/skills/nextjs.svg" },
              { name: "Figma", icon: "/skills/figma.svg" },
              { name: "Node.js", icon: "/skills/nodejs.svg" },
              { name: "TypeScript", icon: "/skills/typescript.svg" },
              { name: "Tailwind", icon: "/skills/tailwind.svg" },
              { name: "SEO", icon: "/skills/seo.svg" },
              { name: "Branding", icon: "/skills/branding.svg" },
            ].map((skill, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-8 flex flex-col items-center justify-center bg-gradient-to-br from-white/60 to-primary-100/40 dark:from-gray-800/60 dark:to-primary-900/40 backdrop-blur-xl border-2 border-primary-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                {/* Floating Icon Circle */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 z-20">
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
                  <span className="font-bold text-xl text-primary-600 dark:text-primary-300 mb-2 text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Process Timeline (Zigzag Layout) */}
        <section className="py-20 px-6   mx-auto w-full">
          <h2 className="text-4xl font-bold mb-16 text-center text-primary-500">
            My Process
          </h2>
          <div className="relative">
            {[
              {
                step: "Discovery",
                desc: "Understanding your goals and vision.",
                icon: "/icons/search.svg",
              },
              {
                step: "Design",
                desc: "Crafting wireframes and visual concepts.",
                icon: "/icons/design.svg",
              },
              {
                step: "Development",
                desc: "Building robust, scalable solutions.",
                icon: "/icons/code.svg",
              },
              {
                step: "Launch",
                desc: "Deploying and celebrating your success!",
                icon: "/icons/rocket.svg",
              },
            ].map((item, idx, _arr) => (
              <div
                key={item.step}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Icon */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900 mx-6 z-10">
                  <Image
                    src={item.icon}
                    alt={item.step}
                    width={40}
                    height={40}
                  />
                </div>
                {/* Step Content */}
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                  <h3 className="font-bold text-2xl text-primary-500 mb-2">
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
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-500">
            Client Success Stories
          </h2>
          <div className="relative">
            <div className="flex   gap-8 pb-4   snap-x snap-mandatory">
              {[
                {
                  name: "Priya Sharma",
                  avatar: "/avatars/priya.jpg",
                  quote:
                    "Working with you was a game-changer! My brand now stands out and my website gets more leads than ever.",
                  role: "Startup Founder",
                },
                {
                  name: "David Lee",
                  avatar: "/avatars/david.jpg",
                  quote:
                    "The UI kit you designed made our e-commerce launch smooth and visually stunning. Highly recommended!",
                  role: "E-commerce Manager",
                },
                {
                  name: "Sara Cohen",
                  avatar: "/avatars/sara.jpg",
                  quote:
                    "Your mobile app design is intuitive and beautiful. Our users love the new experience!",
                  role: "Product Lead",
                },
                {
                  name: "Alex Kim",
                  avatar: "/avatars/alex.jpg",
                  quote:
                    "Professional, creative, and always on time. My portfolio website is now my best asset.",
                  role: "Freelancer",
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
                    className="rounded-full mb-4 border-2  shadow-lg"
                  />
                  <p className="italic text-lg text-gray-700 dark:text-gray-300 text-center mb-4">
                    "{client.quote}"
                  </p>
                  <div className="font-bold text-primary-500 text-xl mb-1">
                    {client.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {client.role}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer opacity-70 hover:opacity-100 transition duration-200"
              style={{ display: "none" }}
            >
              {/* Left arrow for future carousel controls */}
              &#8592;
            </div>
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer opacity-70 hover:opacity-100 transition duration-200"
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
          <h2 className="text-4xl font-bold mb-16 text-center text-primary-500">
            Our Journey Timeline
          </h2>
          <span className="flex h-20 w-20 rounded-full bg-amber-50 mx-auto mb-4" />
          <div className="flex gap-10  pb-4 hide-scrollbar">
            {[
              {
                year: "2018",
                title: "Started Freelancing",
                desc: "Began my journey as a freelance designer & developer.",
                icon: "/icons/start.svg",
              },
              {
                year: "2019",
                title: "First Major Project",
                desc: "Completed a full branding and website for a startup.",
                icon: "/icons/project.svg",
              },
              {
                year: "2021",
                title: "Award Winner",
                desc: "Received a national award for creative web design.",
                icon: "/icons/award.svg",
              },
              {
                year: "2023",
                title: "Global Clients",
                desc: "Worked with clients from 10+ countries worldwide.",
                icon: "/icons/globe.svg",
              },
              {
                year: "2025",
                title: "50+ Projects",
                desc: "Celebrated 50+ successful freelance projects.",
                icon: "/icons/rocket.svg",
              },
            ].map((milestone, idx) => (
              <div
                key={idx}
                className="min-w-[260px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center relative border-t-4 border-primary-400 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg mb-4">
                  <Image
                    src={milestone.icon}
                    alt={milestone.title}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="font-bold text-lg text-primary-500 mb-1">
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
          <div className="bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-3xl shadow-2xl p-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-4 text-primary-500 text-center">
                Ready to Work Together?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                Let's connect and turn your ideas into reality. Reach out for a
                free consultation or to discuss your next big project!
              </p>
              <a
                href="/contact-us"
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-xl tracking-wide"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default HomePage2;
