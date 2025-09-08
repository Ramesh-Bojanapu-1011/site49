import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const EcommerceSuccess = () => (
  <>
    <Head>
      <title>E-Commerce Success | Case Study & Insights</title>
      <meta
        name="description"
        content="Discover how we built a scalable online store, increased sales, and delivered results for a local business."
      />
    </Head>
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-primary-500/30 to-cyan-400/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-primary-600 dark:text-primary-400 drop-shadow-lg">
            E-Commerce Success
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            How we helped a local business grow online and boost sales by 300%
            in 6 months.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full">
        <article className="prose dark:prose-invert prose-lg mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-primary-600 dark:text-primary-400">
            How E-Commerce Transformed a Local Business
          </h2>
          <Image
            src="/case-study1.jpg"
            alt="E-Commerce Success"
            width={800}
            height={400}
            className="rounded-2xl shadow-xl mb-8 object-cover w-full h-64"
          />
          <p>
            In today's digital age, having an online store is more than a
            convenience—it's a necessity. Our client, a local retailer, wanted
            to reach new customers and modernize their business. This blog
            explores the journey, challenges, and strategies that led to their
            e-commerce success.
          </p>
          <blockquote className="bg-gradient-to-tr from-primary-500 to-cyan-400 text-white rounded-xl p-6 shadow-xl my-8">
            <span className="text-2xl font-bold">
              “Launching our online store was the best decision we made. Sales
              soared and our brand reached new heights.”
            </span>
            <br />
            <span className="text-base font-semibold">— Store Owner</span>
          </blockquote>
          <h3 className="text-2xl font-bold mt-10 mb-4 text-primary-500">
            Key Steps to E-Commerce Success
          </h3>
          <ul>
            <li>
              <strong>Custom Storefront:</strong> Designed for brand identity
              and user experience.
            </li>
            <li>
              <strong>Mobile Optimization:</strong> Ensured seamless shopping on
              any device.
            </li>
            <li>
              <strong>Secure Payments:</strong> Integrated trusted gateways for
              customer confidence.
            </li>
            <li>
              <strong>SEO & Marketing:</strong> Boosted visibility and attracted
              organic traffic.
            </li>
            <li>
              <strong>Analytics:</strong> Tracked growth and customer behavior
              for ongoing improvement.
            </li>
          </ul>
          <h3 className="text-2xl font-bold mt-10 mb-4 text-primary-500">
            Results & Insights
          </h3>
          <p>
            Within six months, sales increased by{" "}
            <span className="font-extrabold">300%</span>. Customer engagement
            and repeat purchases grew dramatically. The business now enjoys a
            scalable platform ready for future growth.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow mb-8">
            <h4 className="text-xl font-bold mb-2 text-primary-500">
              Actionable Takeaways
            </h4>
            <ul className="list-disc pl-6">
              <li>Invest in a user-friendly, mobile-ready website.</li>
              <li>Focus on secure payments and easy checkout.</li>
              <li>Leverage SEO and digital marketing for visibility.</li>
              <li>Use analytics to guide business decisions.</li>
            </ul>
          </div>
          <p>
            Ready to transform your business?{" "}
            <Link href="/contact">
              <span className="text-primary-500 font-bold hover:underline">
                Contact our team
              </span>
            </Link>{" "}
            for a free consultation.
          </p>
          <div className="mt-10">
            <div
              onClick={() => window.history.back()}
              className="inline-block  cursor-default px-8 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 transition-all duration-200 text-lg tracking-wide"
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

export default EcommerceSuccess;
