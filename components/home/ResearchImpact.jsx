"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Lightbulb,
  Search,
  Target,
} from "lucide-react";

const stages = [
  {
    icon: Search,
    title: "Research",
    description: "Discovering credible evidence.",
  },
  {
    icon: Lightbulb,
    title: "Insight",
    description: "Understanding what the evidence means.",
  },
  {
    icon: BarChart3,
    title: "Solution",
    description: "Turning knowledge into practical action.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Creating measurable and sustainable results.",
  },
];

export default function ResearchImpact() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
            Our philosophy
          </span>


          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">

            Research.
            <span className="text-[var(--color-secondary)]">
              {" "}Insight.
            </span>

            <br />

            Solution.
            <span className="text-[var(--color-primary)]">
              {" "}Impact.
            </span>

          </h2>


          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We believe research creates its greatest value when evidence is
            transformed into insight, insight into action, and action into
            meaningful impact.
          </p>

        </motion.div>


        {/* PROCESS */}

        <div className="relative mt-16">

          {/* Desktop connecting line */}

          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gray-200" />


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

            {stages.map((stage, index) => {

              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >

                  {/* Icon */}

                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-[var(--color-primary)] group-hover:text-white">

                    <Icon size={26} />

                  </div>


                  {/* Number */}

                  <span className="block mt-6 text-xs font-mono tracking-widest text-[var(--color-secondary)]">
                    0{index + 1}
                  </span>


                  <h3 className="mt-2 text-2xl font-bold">
                    {stage.title}
                  </h3>


                  <p className="mt-3 text-gray-500 max-w-[220px] mx-auto leading-relaxed">
                    {stage.description}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>


        {/* Bottom statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5"
        >

          <p className="text-gray-500 text-sm">
            Credible evidence. Practical thinking. Meaningful results.
          </p>


          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">

            CRC-BD

            <ArrowRight size={16} />

          </div>

        </motion.div>

      </div>

    </section>
  );
}