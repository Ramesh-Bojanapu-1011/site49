import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const Blog = () => (
  <>
    <Head>
      <title>Blog | Insights & Inspiration</title>
      <meta
        name="description"
        content="Read our latest articles, tips, and creative insights."
      />
    </Head>
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
      <Header />
      {/* Section 1: Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
            Our Blog
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Insights, inspiration, and tips from our creative team.
          </p>
          <Link
            href="#latest"
            className="px-8 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide animate-bounce"
          >
            Explore Latest Posts
          </Link>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#00bcd4]">
          Reader's Picks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Success",
              img: "/case-study1.jpg",
              desc: "Built a scalable online store for a local business, increasing sales by 300% in 6 months. Custom design, payment integration, and SEO optimization delivered results.",
              link: "/ecommerce-success",
            },
            {
              title: "Personal Brand Launch",
              img: "/case-study2.jpg",
              desc: "Helped a creative professional launch their personal brand with a stunning portfolio site, blog, and social media strategy. Resulted in new client leads and media features.",
              link: "/personal-brand",
            },
            {
              title: "Corporate Website Redesign",
              img: "/case-study3.jpg",
              desc: "Redesigned a corporate website for a tech company, improving user experience and engagement. Modern UI, fast performance, and clear messaging boosted conversions.",
              link: "/corporate-redesign",
            },
          ].map((study) => (
            <div
              key={study.title}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              <Image
                src={study.img}
                alt={study.title}
                width={500}
                height={220}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h4 className="font-bold text-xl mb-2 text-[#00bcd4]">
                  {study.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  {study.desc}
                </p>
                <a
                  href={study.link}
                  className="inline-block mt-auto px-6 py-2 rounded-lg bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 text-base"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Explore Blog Categories */}
      <section className="py-20 px-6 mx-auto w-full flex flex-col md:flex-row md:items-start gap-12">
        <div className="md:w-1/2 flex  flex-col justify-center mb-10 md:mb-0">
          <h2 className="text-4xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da]">
            Explore by Blog Categories
          </h2>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Discover articles tailored to your interests—whether it's design
            inspiration, SEO tips, branding strategies, content writing, or
            marketing insights.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Browse through our categories and find blog posts crafted to help
            you grow your skills, boost your business, and stay inspired. Enjoy
            expert advice, creative ideas, and actionable tips—all in one place.
          </p>
        </div>
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "Design Inspiration",
              desc: "Fresh ideas, creative showcases, and design trends.",
              color: "bg-gradient-to-tr from-pink-400 to-fuchsia-500",
            },
            {
              title: "SEO & Marketing",
              desc: "Tips and strategies to boost your online presence.",
              color: "bg-gradient-to-tr from-cyan-400 to-blue-500",
            },
            {
              title: "Branding",
              desc: "Building memorable brands and visual identities.",
              color: "bg-gradient-to-tr from-yellow-400 to-orange-500",
            },
            {
              title: "Content Writing",
              desc: "Copywriting, storytelling, and content strategy.",
              color: "bg-gradient-to-tr from-green-400 to-teal-500",
            },
          ].map((cat, idx) => (
            <div
              key={idx}
              className={`group ${cat.color} rounded-2xl shadow-xl p-8 flex flex-col items-start hover:scale-105 transition-all duration-300`}
            >
              <div className="font-bold text-2xl text-white mb-2">
                {cat.title}
              </div>
              <div className="text-white/90 text-base mb-2">{cat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Author Spotlight (Vertical Cards) */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
          Author Spotlight
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
          {[
            {
              name: "Ramesh B.",
              bio: "Lead Designer & Creative Writer. Passionate about design and storytelling.",
              img: "/avatars/ramesh.jpg",
              link: "/authors/ramesh-b",
            },
            {
              name: "Priya S.",
              bio: "Frontend Developer & Blogger. Loves React and sharing tech tips.",
              img: "/avatars/priya.jpg",
              link: "/authors/priya-s",
            },
            {
              name: "David L.",
              bio: "Brand Strategist & Content Creator. Traveler and branding enthusiast.",
              img: "/avatars/david.jpg",
              link: "/authors/david-l",
            },
          ].map((author, idx) => (
            <Link
              key={idx}
              href={author.link}
              className="w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <Image
                src={author.img}
                alt={author.name}
                width={80}
                height={80}
                className="rounded-full mb-6 border-4 border-[#00bcd4] shadow-lg"
              />
              <div className="font-bold text-xl text-[#00bcd4] mb-1 text-center">
                {author.name}
              </div>
              <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                {author.bio}
              </div>
              <span className="text-cyan-500 font-bold hover:underline">
                View Profile
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 5: Quick Tips (Masonry Grid) */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-4xl font-extrabold mb-10 text-[#0097a7] dark:text-[#26c6da] text-left md:text-center">
          Quick Tips for Creators
        </h2>
        <div className="flex gap-8 flex-wrap justify-center pb-4">
          {[
            {
              tip: "Use whitespace to create focus and clarity in your designs.",
              author: "Ramesh B.",
              color: "from-pink-400 to-fuchsia-500",
              icon: "💡",
            },
            {
              tip: "Write for your audience, not just for search engines.",
              author: "Priya S.",
              color: "from-cyan-400 to-blue-500",
              icon: "📝",
            },
            {
              tip: "Consistency in branding builds trust and recognition.",
              author: "David L.",
              color: "from-yellow-400 to-orange-500",
              icon: "🎨",
            },
            {
              tip: "Optimize images for faster website performance.",
              author: "Priya S.",
              color: "from-green-400 to-teal-500",
              icon: "🚀",
            },
            {
              tip: "Tell a story with every piece of content you create.",
              author: "Ramesh B.",
              color: "from-purple-400 to-indigo-500",
              icon: "📖",
            },
            {
              tip: "Engage with your audience on social media regularly.",
              author: "David L.",
              color: "from-red-400 to-pink-500",
              icon: "🤝",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`min-w-[320px] max-w-xs bg-gradient-to-tr ${item.color} rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all duration-300 text-white relative`}
            >
              <div className="absolute top-6 left-6 text-4xl drop-shadow-lg">
                {item.icon}
              </div>
              <div className="text-lg font-semibold mb-4 mt-8 text-center">
                {item.tip}
              </div>
              <div className="text-sm font-bold text-cyan-100 text-center">
                {item.author}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Subscribe CTA (Gradient Card) */}
      <section className="py-20   mx-auto w-full flex flex-col items-center justify-center">
        <div className="relative group w-full  ">
          <div className="relative bg-white dark:bg-gray-900     p-12 flex flex-col items-center justify-center min-w-[340px]">
            <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center drop-shadow-lg">
              Stay Inspired!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
              Subscribe to our newsletter for the latest articles, tips, and
              creative inspiration delivered to your inbox.
            </p>
            <form className="w-full flex max-w-2xl  justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-3 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                required
              />
              <button
                type="submit"
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105   text-xl tracking-wide  "
              >
                Subscribe
              </button>
            </form>
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
        `}</style>
      </section>
      <Footer />
    </main>
  </>
);

export default Blog;
