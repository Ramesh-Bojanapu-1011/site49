import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Hedder";
import Footer from "@/components/Footer";
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
      <main className=" max-h-screen flex flex-col overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
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
          <div className="py-20 px-6 mx-auto w-full  ">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("contactUs.locationsTitle")}
            </h2>
            <div className="flex flex-wrap gap-10 justify-center items-center pb-4">
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
          className=" caret-transparent
          bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
          <div className="py-20 px-6 mx-auto w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("contactUs.teamTitle")}
            </h2>
            <div className="flex gap-8 flex-wrap  justify-center pb-4">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="min-w-[320px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full w-30 h-30 object-cover object-top mb-4 border-4 border-[#00bcd4] shadow-lg"
                  />
                  <div className="font-bold text-xl text-[#00bcd4] mb-1 text-center">
                    {member.name}
                  </div>
                  <div className="text-base text-gray-500 dark:text-gray-400 mb-2 text-center">
                    {member.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: FAQs (Accordion) */}
        <section className=" caret-transparent bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ">
          <div className="py-20 px-6 mx-auto w-full  ">
            <h2 className="text-3xl font-bold mb-10 text-[#00bcd4] text-center">
              {t("contactUs.faqsTitle")}
            </h2>
            <div className="  mx-auto">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="mb-6 bg-white dark:bg-gray-900 rounded-xl shadow p-6"
                >
                  <summary className="font-bold text-[#00bcd4] cursor-pointer text-lg mb-2">
                    {faq.q}
                  </summary>
                  <div className="text-gray-700 dark:text-gray-300 mt-2">
                    {faq.a}
                  </div>
                </details>
              ))}
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
                <Link
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="#"
                  className="text-[#00bcd4] hover:text-cyan-400 text-3xl"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>
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
