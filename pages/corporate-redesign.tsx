import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const CorporateRedesign = () => (
  <>
    <Head>
      <title>Corporate Website Redesign | Blog & Insights</title>
      <meta
        name="description"
        content="Discover how a modern UI, fast performance, and clear messaging improved engagement and conversions for a tech company."
      />
    </Head>
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
            Corporate Website Redesign
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            How a tech company transformed its online presence and boosted
            conversions.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <article className="prose dark:prose-invert prose-lg mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da]">
            Redesigning for Results: The Corporate Website Journey
          </h2>
          <Image
            src="/case-study3.jpg"
            alt="Corporate Website Redesign"
            width={800}
            height={400}
            className="rounded-2xl shadow-xl mb-8 object-cover w-full h-64"
          />
          <p>
            In today's competitive tech landscape, a corporate website is more
            than a digital business card—it's a powerful tool for engagement and
            conversion. This blog explores how a tech company revamped its site
            to deliver a modern user experience and drive measurable results.
          </p>
          <blockquote className="bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white rounded-xl p-6 shadow-xl my-8">
            <span className="text-2xl font-bold">
              “Our new website not only looks stunning, but it also converts
              visitors into customers.”
            </span>
            <br />
            <span className="text-base font-semibold">— Company CEO</span>
          </blockquote>
          <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
            Key Elements of a Successful Redesign
          </h3>
          <ul>
            <li>
              <strong>Modern UI:</strong> Clean layouts, bold visuals, and
              intuitive navigation.
            </li>
            <li>
              <strong>Performance Optimization:</strong> Fast load times and
              smooth interactions.
            </li>
            <li>
              <strong>Clear Messaging:</strong> Value propositions and calls to
              action are front and center.
            </li>
            <li>
              <strong>Mobile Responsiveness:</strong> Seamless experience across
              all devices.
            </li>
            <li>
              <strong>SEO & Analytics:</strong> Improved search rankings and
              data-driven decisions.
            </li>
          </ul>
          <h3 className="text-2xl font-bold mt-10 mb-4 text-[#00bcd4]">
            Impact & Insights
          </h3>
          <p>
            After the redesign, user engagement increased, bounce rates dropped,
            and conversions rose significantly. The company now enjoys a website
            that reflects its brand and supports its growth.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow mb-8">
            <h4 className="text-xl font-bold mb-2 text-[#00bcd4]">
              Actionable Tips
            </h4>
            <ul className="list-disc pl-6">
              <li>Prioritize user experience and clarity in design.</li>
              <li>Optimize for speed and mobile devices.</li>
              <li>Craft messaging that resonates with your audience.</li>
              <li>Track performance and iterate based on analytics.</li>
            </ul>
          </div>
          <p>
            Thinking about a redesign?{" "}
            <Link href="/contact">
              <span className="text-[#00bcd4] font-bold hover:underline">
                Contact our team
              </span>
            </Link>{" "}
            for expert advice.
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

export default CorporateRedesign;
