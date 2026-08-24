"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Layers3,
  Target,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Research",
    text: "We gather credible evidence through rigorous research, fieldwork, data collection, and analysis.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Insight",
    text: "We transform data into meaningful insights that clarify challenges, opportunities, and priorities.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Solution",
    text: "We translate evidence and insight into practical strategies, recommendations, and technical solutions.",
  },
  {
    number: "04",
    icon: Target,
    title: "Impact",
    text: "We help organizations turn informed decisions into measurable and sustainable results.",
  },
];

export default function Approach() {
  return (
    <section className="relative py-24 lg:py-32 bg-[var(--color-footer)] text-white overflow-hidden">

      {/* Glow */}

      <div className="absolute -right-60 -top-60 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)]/10 blur-[140px]" />


      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >

          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
            Our approach
          </span>


          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

            From evidence to
            <br />

            <span className="text-[var(--color-secondary)]">
              meaningful impact.
            </span>

          </h2>


          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Our approach combines rigorous research, contextual understanding,
            technical expertise, and practical thinking to deliver results that
            organizations can act upon.
          </p>

        </motion.div>


        {/* STEPS */}

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group bg-[var(--color-footer)] p-7 lg:p-8 hover:bg-white/[0.04] transition-colors duration-500"
              >

                <div className="flex items-start justify-between">

                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] transition-all duration-300">

                    <Icon size={21} />

                  </div>


                  <span className="text-xs font-mono text-white/25">
                    {step.number}
                  </span>

                </div>


                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>


                <p className="mt-4 text-sm text-white/55 leading-relaxed">
                  {step.text}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>

    </section>
  );
}