"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[570px] lg:min-h-[620px] flex items-end overflow-hidden bg-[var(--color-footer)]">
        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: "url('/images/contact/contact.jpeg')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-[var(--color-footer)]/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-footer)] via-[var(--color-footer)]/90 to-transparent" />

        {/* Teal Glow */}

        <div className="absolute -right-40 -top-40 w-[550px] h-[550px] rounded-full bg-[var(--color-secondary)]/15 blur-[130px]" />

        {/* Hero Content */}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            {/* Eyebrow */}

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                Contact CRC-BD
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]"
            >
              Lets start a
              <br />
              <span className="text-[var(--color-secondary)]">
                conversation.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed"
            >
              Have a research requirement, consultancy need, or project you
              would like to discuss? Our team would be pleased to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DIRECT CONTACT
      ===================================================== */}

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              className="lg:col-span-5"
            >
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Get in touch
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Lets talk about
                <br />
                <span className="text-[var(--color-primary)]">
                  your next project.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
                Whether you are planning a research study, looking for
                monitoring and evaluation support, or need technical
                consultancy, our team is ready to discuss your requirements.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed max-w-lg">
                Choose whichever way is most convenient for you. You can email
                us directly, call us, or start a conversation on WhatsApp.
              </p>

              {/* Reassurance */}

              <div className="mt-8 flex items-center gap-3 text-sm text-gray-600">
                <CheckCircle2
                  size={18}
                  className="text-[var(--color-secondary)]"
                />
                We aim to respond to inquiries promptly.
              </div>
            </motion.div>

            {/* RIGHT CONTACT OPTIONS */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
            >
              {/* =================================================
                  EMAIL
              ================================================= */}

              <motion.a
                variants={fadeUp}
                href="mailto:info@crc-bd.com"
                className="group rounded-2xl border border-gray-200 p-7 hover:border-[var(--color-secondary)] hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                  <Mail size={22} />
                </div>

                <p className="mt-6 text-sm text-gray-500">Email us</p>

                <h3 className="mt-1 text-lg font-bold text-gray-900 break-all">
                  info@crc-bd.com
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                  Send an email
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>

              {/* =================================================
                  WHATSAPP
              ================================================= */}

              <motion.a
                variants={fadeUp}
                href="https://wa.me/8801629014416"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5 p-7 hover:border-[var(--color-secondary)] hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center group-hover:bg-[var(--color-secondary-hover)] transition-colors duration-300">
                  <FaWhatsapp size={24} />
                </div>

                <p className="mt-6 text-sm text-gray-500">WhatsApp</p>

                <h3 className="mt-1 text-lg font-bold text-gray-900">
                  Start a conversation
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                  Chat on WhatsApp
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>

              {/* =================================================
                  PHONE
              ================================================= */}

              <motion.a
                variants={fadeUp}
                href="tel:+8801629014416"
                className="group rounded-2xl border border-gray-200 p-7 hover:border-[var(--color-secondary)] hover:shadow-xl transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                  <Phone size={22} />
                </div>

                <p className="mt-6 text-sm text-gray-500">Call us</p>

                <h3 className="mt-1 text-lg font-bold text-gray-900">
                  +880 1629-014416
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                  Call now
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>

              {/* =================================================
                  OFFICE
              ================================================= */}

              <motion.div
                variants={fadeUp}
                className="rounded-2xl bg-gray-50 border border-gray-200 p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center">
                  <MapPin size={22} />
                </div>

                <p className="mt-6 text-sm text-gray-500">Registered Office</p>

                <h3 className="mt-1 text-lg font-bold text-gray-900">
                  Coxs Bazar
                </h3>

                <p className="mt-1 text-gray-500">Bangladesh</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE CAN HELP
      ===================================================== */}

      <section className="py-24 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              How we can help
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Tell us what you are
              <br />
              <span className="text-[var(--color-primary)]">
                trying to achieve.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Our multidisciplinary capabilities allow us to support
              organizations across research, development, humanitarian,
              institutional, and private-sector assignments.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              "Research & Surveys",
              "Monitoring & Evaluation",
              "Consultancy Services",
              "Financial Consultancy",
              "Digital Solutions",
              "Training & Capacity Building",
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between hover:border-[var(--color-secondary)] hover:shadow-lg transition-all duration-300"
              >
                <span className="font-semibold text-gray-800 group-hover:text-[var(--color-primary)] transition-colors">
                  {service}
                </span>

                <ArrowRight
                  size={18}
                  className="text-[var(--color-secondary)] group-hover:translate-x-1 transition-transform"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {/* Heading */}

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                  Find us
                </span>

                <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                  Our location
                </h2>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={19} className="text-[var(--color-secondary)]" />

                <span>Coxs Bazar, Bangladesh</span>
              </div>
            </div>

            {/* Map */}

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
              <iframe
                title="CRC-BD location in Cox's Bazar"
                src="https://www.google.com/maps?q=Cox%27s%20Bazar%2C%20Bangladesh&output=embed"
                className="w-full h-[450px] md:h-[550px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Location Card */}

              <div className="absolute left-5 bottom-5 sm:left-7 sm:bottom-7">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">CRC-BD</p>

                    <p className="text-sm text-gray-500">
                      Coxs Bazar, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          OFFICE INFORMATION
      ===================================================== */}

      <section className="px-5 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-3xl bg-gray-50 border border-gray-200 p-8 md:p-10"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* OFFICE */}

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-secondary)]">
                  Registered Office
                </p>

                <h3 className="mt-2 text-2xl font-bold">Coxs Bazar</h3>

                <p className="mt-1 text-gray-500">Bangladesh</p>
              </div>

              {/* EMAIL */}

              <div className="md:border-l md:border-gray-200 md:pl-8">
                <div className="flex items-center gap-2 text-gray-500">
                  <Mail size={17} />

                  <span className="text-sm">Email</span>
                </div>

                <a
                  href="mailto:info@crc-bd.com"
                  className="mt-2 inline-block font-semibold text-gray-900 hover:text-[var(--color-secondary)] transition"
                >
                  info@crc-bd.com
                </a>
              </div>

              {/* HOURS */}

              <div className="md:border-l md:border-gray-200 md:pl-8">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock3 size={17} />

                  <span className="text-sm">Office Hours</span>
                </div>

                <p className="mt-2 font-semibold text-gray-900">
                  Sunday – Thursday
                </p>

                <p className="mt-1 text-sm text-gray-500">9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 sm:px-8 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-[var(--color-footer)] px-7 py-16 md:px-14 md:py-20"
          >
            {/* Glow */}

            <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)]/15 blur-[120px]" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                CRC-BD
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
                Have a project in mind?
                <br />
                <span className="text-[var(--color-secondary)]">
                  Lets talk.
                </span>
              </h2>

              <p className="mt-6 text-white/60 text-lg max-w-2xl leading-relaxed">
                Meaningful partnerships often begin with a simple conversation.
                Reach out to discuss your research, consultancy, or technical
                requirements.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {/* WhatsApp */}

                <a
                  href="https://wa.me/8801629014416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[var(--color-secondary)] text-white font-semibold hover:bg-[var(--color-secondary-hover)] transition"
                >
                  <FaWhatsapp size={20} />
                  WhatsApp Us
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>

                {/* Email */}

                <a
                  href="mailto:info@crc-bd.com"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
