import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Hedder";
import Head from "next/head";
import Image from "next/image";
import {
  AwardIcon,
  Clock10,
  FolderKanban,
  Star,
  StarHalfIcon,
  User2,
} from "lucide-react";

const Home1 = () => {
  return (
    <>
      <Head>
        <title>Home1 Page</title>
      </Head>
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
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
              href="/contact-us"
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

        {/* Why Choose Me Section */}
        <section className="py-16 px-6 mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary-500">
            Why Choose Me?
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Stats Cards */}
            {[
              {
                label: "Projects Completed",
                value: "120+",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-primary-500 to-cyan-400 shadow-lg mb-4">
                    <FolderKanban />
                  </span>
                ),
              },
              {
                label: "Happy Clients",
                value: "80+",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-primary-500 shadow-lg mb-4">
                    <User2 />
                  </span>
                ),
              },
              {
                label: "Years Experience",
                value: "5+",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-primary-500 shadow-lg mb-4">
                    <Clock10 />
                  </span>
                ),
              },
              {
                label: "Awards Won",
                value: "10",
                icon: (
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-pink-400 to-primary-500 shadow-lg mb-4">
                    <AwardIcon />
                  </span>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="min-w-[220px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center mx-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {stat.icon}
                <div className="text-4xl font-extrabold text-primary-500 mb-2 animate-pulse">
                  {stat.value}
                </div>
                <div className="font-semibold text-lg text-gray-700 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Success Stories Section */}
        <section className="py-16 px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary-500">
            Featured Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Launch",
                img: "/success-ecommerce.jpg",
                desc: "Helped a local business launch their online store, increasing sales by 300% in the first quarter.",
              },
              {
                title: "Personal Brand Transformation",
                img: "/success-brand.jpg",
                desc: "Revamped a freelancer's portfolio and personal brand, leading to new international clients.",
              },
              {
                title: "Nonprofit Awareness",
                img: "/success-nonprofit.jpg",
                desc: "Created a campaign site for a nonprofit, boosting donations and community engagement.",
              },
            ].map((story) => (
              <div
                key={story.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <Image
                  src={story.img}
                  alt={story.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-bold text-lg mb-2 text-primary-500">
                    {story.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {story.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Reviews Section */}
        <section className="py-16 px-6   mx-auto w-full">
          <h2 className="text-3xl  font-bold mb-6 text-center text-primary-500">
            Client Reviews
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between   gap-8 pb-4  ">
            {[
              {
                name: "Priya Sharma",
                avatar: "/review1.jpg",
                rating: 5,
                text: "Working with this freelancer was a game-changer for my business. The website looks stunning and works flawlessly!",
              },
              {
                name: "David Lee",
                avatar: "/review2.jpg",
                rating: 4.5,
                text: "Great communication and creative ideas. My portfolio now truly reflects my brand. Highly recommended!",
              },
              {
                name: "Sara Cohen",
                avatar: "/review3.jpg",
                rating: 5,
                text: "Professional, timely, and very talented. The branding work helped me attract new clients quickly.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="min-w-[320px] max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center mx-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="rounded-full mb-4 w-20 h-20 object-cover object-top border-4 border-primary-500"
                />
                <div className="flex items-center justify-center mb-2">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-6 h-6" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <StarHalfIcon className="text-yellow-400 w-6 h-6" />
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "{review.text}"
                </p>
                <div className="font-semibold text-primary-500">
                  - {review.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Let's Collaborate Section */}
        <section className="py-16 px-6   mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-gradient-to-tr from-primary-500 to-cyan-400 rounded-3xl shadow-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4 text-primary-500 text-center">
                  Let's Collaborate
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                  Ready to bring your ideas to life? Whether you have a project
                  in mind or just want to connect, I'm here to help you achieve
                  your goals. Let's work together to create something amazing!
                </p>
                <a
                  href="/contact-us"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-xl tracking-wide"
                >
                  Start Your Project
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

export default Home1;
