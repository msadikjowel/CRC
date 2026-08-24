"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartHandshake,
  Globe2,
  BriefcaseBusiness,
} from "lucide-react";

const sectors = [
  {
    icon: Landmark,
    title: "Government",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & INGOs",
  },
  {
    icon: Globe2,
    title: "Development Partners",
  },
  {
    icon: Building2,
    title: "Humanitarian Organizations",
  },
  {
    icon: GraduationCap,
    title: "Academic Institutions",
  },
  {
    icon: BriefcaseBusiness,
    title: "Private Sector",
  },
];

export default function Sectors() {
  return (
    <section className="py-24 lg:py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              Who we support
            </span>


            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">

              Supporting organizations
              <br />

              <span className="text-[var(--color-primary)]">
                across sectors.
              </span>

            </h2>


            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              CRC-BD works with organizations that need credible evidence,
              technical expertise, practical solutions, and informed
              decision-making.
            </p>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-3"
          >

            {sectors.map((sector, index) => {

              const Icon = sector.icon;

              return (
                <div
                  key={sector.title}
                  className="group flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-5 hover:border-[var(--color-secondary)] hover:shadow-md transition-all duration-300"
                >

                  <div className="w-11 h-11 shrink-0 rounded-lg bg-[var(--color-primary)]/5 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-all duration-300">

                    <Icon size={19} />

                  </div>


                  <span className="font-semibold text-gray-800">
                    {sector.title}
                  </span>

                </div>
              );

            })}

          </motion.div>

        </div>

      </div>

    </section>
  );
}