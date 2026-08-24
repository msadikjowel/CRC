"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Compass,
  Gauge,
  ShieldCheck,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Evidence-Based",
    text: "Our recommendations are grounded in credible data, rigorous research, and analytical insight.",
  },
  {
    icon: BrainCircuit,
    title: "Multidisciplinary",
    text: "We bring together research, technology, finance, monitoring, evaluation, and technical expertise.",
  },
  {
    icon: Compass,
    title: "Context Driven",
    text: "We design our approach around the realities, needs, and priorities of every assignment.",
  },
  {
    icon: Gauge,
    title: "Action Oriented",
    text: "Our work goes beyond reporting to provide practical recommendations and usable solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    text: "We maintain professional standards through accuracy, transparency, and quality assurance.",
  },
  {
    icon: Target,
    title: "Impact Focused",
    text: "Our ultimate goal is to help organizations translate knowledge into meaningful results.",
  },
];

export default function WhyCrc() {
  return (
    <section className="py-24 lg:py-32 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >

          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
            Why CRC-BD
          </span>


          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">

            Built around
            <br />

            <span className="text-[var(--color-primary)]">
              credibility and purpose.
            </span>

          </h2>


          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            We combine technical capability with a practical understanding of
            the environments in which organizations operate.
          </p>

        </motion.div>


        {/* GRID */}

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {reasons.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="group border border-gray-200 rounded-2xl p-7 hover:border-[var(--color-secondary)]/40 hover:shadow-xl transition-all duration-500"
              >

                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">

                  <Icon size={21} />

                </div>


                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>


                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}