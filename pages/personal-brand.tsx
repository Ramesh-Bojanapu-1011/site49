import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const PersonalBrand = () => (
  <>
    <Head>
      <title>Personal Brand Launch | Blog & Insights</title>
      <meta
        name="description"
        content="Learn how to launch your personal brand with a stunning portfolio, blog, and social media strategy."
      />
    </Head>
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
            Personal Brand Launch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            How to build your personal brand online and attract new
            opportunities.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <article className="prose dark:prose-invert prose-lg mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da]">
            Launching Your Personal Brand: A Step-by-Step Guide
          </h2>
          <Image
            src="/case-study2.jpg"
            alt="Personal Brand Launch"
            width={800}
            height={400}
            className="rounded-2xl shadow-xl mb-8 object-cover w-full h-64"
          />
          <p>
            In a world where everyone is online, your personal brand is your
            digital identity. Whether you're a creative professional,
            entrepreneur, or freelancer, launching a personal brand can open
            doors to new clients, collaborations, and media features.
          </p>
          <blockquote className="bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white rounded-xl p-6 shadow-xl my-8">
            <span className="text-2xl font-bold">
              “My portfolio site and blog helped me connect with clients and
              showcase my work globally.”
            </span>
            <br />
            <span className="text-base font-semibold">
              — Creative Professional
            </span>
          </blockquote>
          <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
            Key Steps to Launch Your Brand
          </h3>
          <ul>
            <li>
              <strong>Define Your Niche:</strong> Identify your strengths and
              target audience.
            </li>
            <li>
              <strong>Create a Portfolio:</strong> Showcase your best work and
              achievements.
            </li>
            <li>
              <strong>Start a Blog:</strong> Share insights, stories, and
              expertise.
            </li>
            <li>
              <strong>Leverage Social Media:</strong> Build your network and
              engage with followers.
            </li>
            <li>
              <strong>Optimize for Search:</strong> Use SEO to increase
              visibility.
            </li>
          </ul>
          <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
            Results & Opportunities
          </h3>
          <p>
            A strong personal brand leads to new client leads, media features,
            and professional growth. Your online presence becomes a magnet for
            opportunities.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow mb-8">
            <h4 className="text-xl font-bold mb-2 text-[#00bcd4]">
              Actionable Tips
            </h4>
            <ul className="list-disc pl-6">
              <li>Update your portfolio regularly with new projects.</li>
              <li>Write blog posts that showcase your expertise.</li>
              <li>Engage with your audience on social platforms.</li>
              <li>Collaborate with others in your field.</li>
            </ul>
          </div>
          <p>
            Ready to launch your brand?{" "}
            <Link href="/contact">
              <span className="text-[#00bcd4] font-bold hover:underline">
                Contact our team
              </span>
            </Link>{" "}
            for a free strategy session.
          </p>
          <div className="mt-10">
            <div
              onClick={() => window.history.back()}
              className="inline-block  cursor-default px-8 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide"
            >
              Back to Blog
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  </>
);

export default PersonalBrand;
