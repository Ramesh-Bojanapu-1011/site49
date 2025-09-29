import Footer from "@/components/Footer";
import Header from "@/components/Hedder";
import i18n from "@/i18n";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const locations = [
    {
      city: t("contactUs.locations.ny.city"),
      address: t("contactUs.locations.ny.address"),
      img: "/new_york.jpg",
    },
    {
      city: t("contactUs.locations.london.city"),
      address: t("contactUs.locations.london.address"),
      img: "/london.jpg",
    },
    {
      city: t("contactUs.locations.sydney.city"),
      address: t("contactUs.locations.sydney.address"),
      img: "/sydney.jpg",
    },
  ];
  const team = [
    {
      name: t("contactUs.team.ramesh.name"),
      role: t("contactUs.team.ramesh.role"),
      img: "/avatar2.jpg",
    },
    {
      name: t("contactUs.team.priya.name"),
      role: t("contactUs.team.priya.role"),
      img: "/avatar1.jpg",
    },
    {
      name: t("contactUs.team.david.name"),
      role: t("contactUs.team.david.role"),
      img: "/avatar3.jpg",
    },
  ];
  const faqs = [
    {
      q: t("contactUs.faqs.q1"),
      a: t("contactUs.faqs.a1"),
    },
    {
      q: t("contactUs.faqs.q2"),
      a: t("contactUs.faqs.a2"),
    },
    {
      q: t("contactUs.faqs.q3"),
      a: t("contactUs.faqs.a3"),
    },
  ];
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = React.useState(false);
  const handleCloseSuccess = () => setSuccess(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert("Form action URL not found.");
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const content = await response.json();
      console.log("Form submission successful:", content);

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <>
      <Head>
        <title>{t("contactUs.pageTitle")}</title>
        <meta name="description" content={t("contactUs.pageDesc")} />
      </Head>
      <main className=" max-h-screen flex flex-col overflow-auto  [&::-webkit-scrollbar]:hidden ">
        <Header />
        {/* Section 1: Hero */}
        <section className="relative flex flex-col items-center justify-center min-h-[100vh] text-center">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          >
            <source src="/contact-us-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 bg-gradient-to-tr from-[#00bcd4]/30 to-cyan-400/30" />
          <div className="relative z-10 mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-[#0097a7] dark:text-[#26c6da] drop-shadow-lg">
              {t("contactUs.heroTitle")}
            </h1>
            <p className="text-xl  dark:text-gray-300 mb-8">
              {t("contactUs.heroDesc")}
            </p>
          </div>
        </section>

        {/* Section 2: Contact Form */}
        <section className=" bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="py-20 px-6 mx-auto w-full  ">
            <h2 className="text-3xl font-bold mb-8 text-[#00bcd4] text-center">
              {t("contactUs.formTitle")}
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
                <Image
                  src="/contact-form-side.jpg"
                  alt={t("contactUs.formImgAlt")}
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl object-cover"
                />
              </div>

              {success && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 flex flex-col items-center relative min-w-[320px] animate-popin">
                    <button
                      onClick={handleCloseSuccess}
                      className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-2xl font-bold focus:outline-none"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 mb-2 shadow-lg flex items-center justify-center animate-bounce">
                      <svg
                        className="w-10 h-10 text-green-600 dark:text-green-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-green-700 dark:text-green-300 font-bold text-lg text-center">
                      {t("Contact_Form_Success")}
                    </p>
                  </div>
                </div>
              )}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xovlekvg"
                method="POST"
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 md:w-1/2 w-full"
              >
                <input
                  type="text"
                  name="name"
                  placeholder={t("contactUs.formName")}
                  className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t("contactUs.formEmail")}
                  className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                  required
                />
                <textarea
                  placeholder={t("contactUs.formMessage")}
                  rows={5}
                  name="message"
                  className="px-6 py-4 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 text-xl tracking-wide"
                >
                  {t("contactUs.formBtn")}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Section 3: Our Locations (Map & Cards) */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 caret-transparent ">
          <div className="py-20   mx-auto w-full  ">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("contactUs.locationsTitle")}
            </h2>
            <div className="flex flex-wrap gap-8 justify-center items-center pb-4">
              {locations.map((loc, idx) => (
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
                  <div className="font-bold text-xl text-[#00bcd4] mb-1 text-center">
                    {loc.city}
                  </div>
                  <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                    {loc.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Meet the Team (Horizontal Scroll) */}
        <section
          className=" caret-transparent py-20 px-6 mx-auto w-full
    bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white text-center">
              <span className="text-[#00bcd4]">{t("contactUs.teamTitle")}</span>
            </h2>

            {/* NEW: Replaced flex-wrap with a responsive grid */}
            <div className="grid grid-cols-1   lg:grid-cols-3 gap-10">
              {/* NOTE: Ensure 'team' data is available in the component scope */}
              {team.map((member, idx) => (
                <div
                  key={idx}
                  // NEW: No background or shadow on the element itself.
                  // Added: Relative positioning and clean padding
                  className="relative p-6 flex items-center bg-transparent group transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* NEW: Vertical Accent Bar (The "new look" structural element) */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#00bcd4]/50 group-hover:bg-gradient-to-b group-hover:from-[#00bcd4] group-hover:to-cyan-400 transition-all duration-300" />

                  <Image
                    src={member.img}
                    alt={member.name}
                    // Increased image size for better presence
                    width={120}
                    height={120}
                    className={`rounded-full w-24 h-24 object-cover object-top ${
                      i18n.language == "en" ? "mr-6" : "ml-6"
                    } border-4 border-[#00bcd4] shadow-lg flex-shrink-0`}
                  />

                  {/* Text Content Block */}
                  <div className={`${i18n.language == "en"}`}>
                    <div className="font-extrabold text-xl text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </div>
                    {/* Role uses primary color and stronger font weight */}
                    <div className="text-lg text-[#00bcd4] font-semibold mb-2">
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: FAQs (Modern Interactive Cards) */}
        <section className="relative caret-transparent bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-indigo-900 dark:to-slate-900 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

          <div className="py-24 px-6 mx-auto w-full relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00bcd4] to-cyan-400 rounded-2xl mb-6 shadow-xl">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#00bcd4] via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {t("contactUs.faqsTitle")}
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-[#00bcd4] to-cyan-400 mx-auto rounded-full mb-4"></div>
              </div>

              {/* FAQ Cards Grid */}
              <div className="space-y-6">
                {faqs.map((faq, idx) => {
                  return (
                    <div
                      key={idx}
                      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                    >
                      <details className="peer">
                        <summary className="flex items-center justify-between p-8 cursor-pointer list-none group-hover:bg-gradient-to-r group-hover:from-[#00bcd4]/5 group-hover:to-cyan-400/5 transition-all duration-300">
                          <div className="flex items-center space-x-4 flex-1">
                            {/* Question Number Badge */}
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#00bcd4] to-cyan-400 text-white font-bold rounded-full text-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {String(idx + 1).padStart(2, "0")}
                            </div>

                            {/* Question Text */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#00bcd4] dark:group-hover:text-cyan-300 transition-colors duration-300 flex-1 pr-4">
                              {faq.q}
                            </h3>
                          </div>

                          {/* Expand/Collapse Icon */}
                          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-[#00bcd4] group-hover:text-white transition-all duration-300">
                            <svg
                              className="w-5 h-5 transform peer-open:rotate-180 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </summary>

                        {/* Answer Content */}
                        <div className="px-8 pb-8 pt-0">
                          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 border-l-4 border-[#00bcd4]">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </details>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Social & Newsletter CTA (Gradient Card) */}
        <section className=" bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900  mx-auto w-full flex flex-col items-center justify-center">
          <div className=" py-4  relative group ">
            <div className="relative shadow-2xl rounded-4xl   p-12 flex flex-col items-center justify-center  ">
              <h2 className="text-3xl font-bold mb-4 text-[#00bcd4] text-center drop-shadow-lg">
                {t("contactUs.stayConnectedTitle")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                {t("contactUs.stayConnectedDesc")}
              </p>
              <div className="flex gap-6 mb-8">
                <a
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <form className="w-full flex not-md:flex-wrap max-w-2xl justify-center items-center gap-4">
                <input
                  type="email"
                  placeholder={t("contactUs.newsletterPlaceholder")}
                  className="w-full px-6 py-3 rounded-xl border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4] text-lg"
                  required
                />
                <button
                  type="submit"
                  className="px-10 py-4 rounded-xl bg-gradient-to-tr from-[#00bcd4] to-cyan-400 text-white font-bold shadow-xl hover:scale-105 text-xl tracking-wide"
                >
                  {t("contactUs.newsletterBtn")}
                </button>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ContactUs;
