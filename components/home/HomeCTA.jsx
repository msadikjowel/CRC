"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HomeCTA() {
  return (
    <section className="px-5 sm:px-8 lg:px-12 pb-20">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-3xl bg-[var(--color-footer)] px-7 py-16 md:px-14 md:py-20"
        >

          {/* Decorative glow */}

          <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)]/15 blur-[130px]" />

          <div className="absolute -left-40 -bottom-40 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/40 blur-[120px]" />


          <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-end">

            {/* TEXT */}

            <div className="lg:col-span-8">

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Start a conversation
              </span>


              <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">

                Have a project
                <br />

                <span className="text-[var(--color-secondary)]">
                  in mind?
                </span>

              </h2>


              <p className="mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
                Whether you need research, monitoring and evaluation,
                consultancy, digital solutions, or technical assistance,
                lets explore how CRC-BD can support your objectives.
              </p>

            </div>


            {/* ACTIONS */}

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">

              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-4 rounded-xl bg-[var(--color-secondary)] text-white font-semibold hover:bg-[var(--color-secondary-hover)] transition-all duration-300"
              >

                Talk to CRC-BD

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </a>


              <div className="flex gap-3 w-full sm:w-auto">

                <a
                  href="mailto:info@crc-bd.com"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition"
                >

                  <Mail size={17} />

                  Email

                </a>


                <a
                  href="https://wa.me/8801629014416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/15 text-white/80 hover:bg-white/10 hover:text-white transition"
                >

                  <FaWhatsapp size={18} />

                  WhatsApp

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}