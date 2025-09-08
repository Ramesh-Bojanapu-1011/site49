import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";

const ContactUs = () => (
  <>
    <Head>
      <title>Contact Us | Get in Touch</title>
      <meta
        name="description"
        content="Reach out to our team for inquiries, support, or collaboration."
      />
    </Head>
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex flex-col caret-transparent">
      <Header />
      {/* Section 1: Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-primary-500/30 to-cyan-400/30" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 text-primary-600 dark:text-primary-400 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            We're here to help! Reach out for project inquiries, support, or
            creative collaboration.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section className="py-16 px-6   mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-primary-500 text-center">
          Send Us a Message
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <Image
              src="/contact-form-side.jpg"
              alt="Contact Us"
              width={350}
              height={350}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
          <form className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 md:w-1/2 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
              required
            />
            <button
              type="submit"
              className="px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 text-xl tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Section 3: Our Locations (Map & Cards) */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          Our Locations
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
          {[
            {
              city: "New York",
              address: "123 Madison Ave, NY 10010",
              img: "/public/location-ny.jpg",
            },
            {
              city: "London",
              address: "45 Oxford St, London W1D 2DZ",
              img: "/public/location-london.jpg",
            },
            {
              city: "Sydney",
              address: "88 George St, Sydney NSW 2000",
              img: "/public/location-sydney.jpg",
            },
          ].map((loc, idx) => (
            <div
              key={idx}
              className="w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 flex flex-col items-center"
            >
              <Image
                src={loc.img}
                alt={loc.city}
                width={80}
                height={80}
                className="rounded-xl mb-6 shadow-lg"
              />
              <div className="font-bold text-xl text-primary-500 mb-1 text-center">
                {loc.city}
              </div>
              <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                {loc.address}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Meet the Team (Horizontal Scroll) */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          Meet the Team
        </h2>
        <div className="flex gap-8 overflow-x-auto pb-4">
          {[
            {
              name: "Ramesh B.",
              role: "Lead Designer",
              img: "/avatars/ramesh.jpg",
            },
            {
              name: "Priya S.",
              role: "Frontend Developer",
              img: "/avatars/priya.jpg",
            },
            {
              name: "David L.",
              role: "Brand Strategist",
              img: "/avatars/david.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="min-w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full mb-4 border-4 border-primary-500 shadow-lg"
              />
              <div className="font-bold text-xl text-primary-500 mb-1 text-center">
                {member.name}
              </div>
              <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: FAQs (Accordion) */}
      <section className="py-20 px-6 mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-primary-500 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          {[
            {
              q: "How can I start a project?",
              a: "Just fill out the contact form above and our team will get in touch with you soon.",
            },
            {
              q: "Do you offer support after launch?",
              a: "Yes, we provide ongoing support and maintenance for all our clients.",
            },
            {
              q: "Can I visit your office?",
              a: "Absolutely! Check our locations above and schedule a visit.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="mb-6 bg-white dark:bg-gray-900 rounded-xl shadow p-6"
            >
              <summary className="font-bold text-primary-500 cursor-pointer text-lg mb-2">
                {faq.q}
              </summary>
              <div className="text-gray-700 dark:text-gray-300 mt-2">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Section 6: Social & Newsletter CTA (Gradient Card) */}
      <section className="py-20 mx-auto w-full flex flex-col items-center justify-center">
        <div className="relative group w-full">
          <div className="relative bg-white dark:bg-gray-900 p-12 flex flex-col items-center justify-center min-w-[340px]">
            <h2 className="text-3xl font-bold mb-4 text-primary-500 text-center drop-shadow-lg">
              Stay Connected!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
              Follow us on social media and subscribe to our newsletter for
              updates, tips, and inspiration.
            </p>
            <div className="flex gap-6 mb-8">
              <a
                href="#"
                className="text-primary-500 hover:text-cyan-400 text-3xl"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-primary-500 hover:text-cyan-400 text-3xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-primary-500 hover:text-cyan-400 text-3xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <form className="w-full flex max-w-2xl justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-3 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
                required
              />
              <button
                type="submit"
                className="px-10 py-4 rounded-xl bg-gradient-to-tr from-primary-500 to-cyan-400 text-white font-bold shadow-xl hover:scale-105 text-xl tracking-wide"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </>
);

export default ContactUs;
