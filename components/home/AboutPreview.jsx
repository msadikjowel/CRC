"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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

export default function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >

            <div className="relative">

              <div className="overflow-hidden rounded-3xl">

                <img
                  src="/images/home/research-team.jpeg"
                  alt="CRC-BD research and consultancy team"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                />

              </div>


              {/* Floating card */}

              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[var(--color-primary)] text-white rounded-2xl px-6 py-5 shadow-2xl">

                <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                  Our philosophy
                </p>

                <p className="mt-2 text-xl font-bold">
                  Evidence → Impact
                </p>

              </div>

            </div>

          </motion.div>


          {/* CONTENT */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-6"
          >

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              Who we are
            </span>


            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

              Research that informs.
              <br />

              <span className="text-[var(--color-primary)]">
                Solutions that matter.
              </span>

            </h2>


            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Credible Research and Consultancy BD (CRC-BD) Limited is a
              research and consultancy company providing professional services
              across social, market, development, humanitarian, corporate,
              and institutional research and consultancy.

            </p>


            <p className="mt-5 text-gray-600 leading-relaxed">

              We bring together research, data, monitoring, evaluation,
              technology, training, and technical expertise to help
              organizations make informed decisions and create sustainable
              impact.

            </p>


            <div className="mt-7 space-y-3">

              {[
                "Evidence-based decision making",
                "Multidisciplinary expertise",
                "Practical and actionable solutions",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >

                  <CheckCircle2
                    size={18}
                    className="text-[var(--color-secondary)]"
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>


            <Link
              href="/about-us"
              className="group inline-flex items-center gap-2 mt-9 font-semibold text-[var(--color-primary)]"
            >

              Discover CRC-BD

              <ArrowUpRight
                size={19}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />

            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}