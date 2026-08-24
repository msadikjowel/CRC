"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";

export default function HeroSlider() {
  return (
    <section className="pb-3 relative min-h-screen overflow-hidden bg-[var(--color-footer)]">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/hero.webp)`,
        }}
      />

      {/* =====================================================
          PREMIUM OVERLAY
      ===================================================== */}

      {/* Dark overall layer */}
      <div className="absolute inset-0 bg-[var(--color-footer)]/65" />

      {/* Stronger left-side gradient for typography */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-footer)] via-[var(--color-footer)]/85 to-[var(--color-footer)]/25" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-footer)] to-transparent" />

      {/* =====================================================
          SUBTLE TEAL LIGHT
      ===================================================== */}

      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)]/10 blur-[140px]" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="
    relative
    z-10
    min-h-screen
    max-w-7xl
    mx-auto
    px-5
    sm:px-8
    lg:px-12
    flex
    items-center
    pt-[50px]
    lg:pt-[70px]
  ">

        <div className="w-full grid lg:grid-cols-12 gap-12 items-center">

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8 xl:col-span-7 pt-10 lg:pt-10"
          >

            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="flex items-center gap-3"
            >

              <span className="w-8 h-px bg-[var(--color-secondary)]" />

              <span className="text-sm sm:text-base font-medium tracking-[0.18em] uppercase text-white/70">
                Research • Consultancy • Solutions
              </span>

            </motion.div>


            {/* Heading */}

            <h1
              className="
                mt-7
                text-[3.3rem]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.5rem]
                xl:text-[6.5rem]
                font-bold
                tracking-[-0.04em]
                leading-[0.95]
                text-white
              "
            >

              Evidence.

              <br />

              <span className="text-[var(--color-secondary)]">
                Insight.
              </span>

              <br />

              Impact.

            </h1>


            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                sm:text-lg
                lg:text-xl
                leading-relaxed
                text-white/65
              "
            >
              Delivering high-quality research, consultancy, financial
              advisory, and digital solutions that empower organizations to
              make informed decisions and achieve sustainable development.
            </p>


            {/* Buttons */}

            <div className="mt-9 flex flex-col sm:flex-row gap-3">

              <a
                href="#services"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3.5
                  rounded-lg
                  bg-[var(--color-secondary)]
                  text-white
                  font-semibold
                  hover:bg-[var(--color-secondary-hover)]
                  transition-all
                  duration-300
                "
              >

                Explore Services

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </a>


              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3.5
                  rounded-lg
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-sm
                  text-white
                  font-semibold
                  hover:bg-white/10
                  hover:border-white/30
                  transition-all
                  duration-300
                "
              >

                Contact Us

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />

              </a>

            </div>


            {/* Trust points */}

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">

              {[
                "Evidence-based",
                "Multidisciplinary",
                "Impact-focused",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/55"
                >

                  <CheckCircle2
                    size={15}
                    className="text-[var(--color-secondary)]"
                  />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE — SMALL INFORMATION PANEL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end"
          >

            <div className="w-[280px] xl:w-[320px]">

              {/* Top line */}

              <div className="flex items-center justify-end gap-3 mb-5">

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  CRC-BD
                </span>

                <span className="w-10 h-px bg-white/20" />

              </div>


              {/* Glass panel */}

              <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6">

                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                  Our focus
                </p>


                <div className="mt-5 space-y-4">

                  {[
                    "Research & Surveys",
                    "Monitoring & Evaluation",
                    "Consultancy",
                    "Digital Solutions",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                    >

                      <span className="text-xs text-white/30 font-mono">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-white/75">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* Location */}

              <div className="mt-4 flex items-center justify-end gap-2 text-xs text-white/40">

                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />

               Coxs Bazar, Bangladesh

              </div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ===================================================== */}

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          hidden
          sm:flex
          flex-col
          items-center
          gap-2
          text-white/40
          hover:text-white/70
          transition-colors
        "
      >

        <span className="text-[10px] uppercase tracking-[0.25em]">
          Explore
        </span>

        <ArrowDown
          size={16}
          className="animate-bounce"
        />

      </motion.a>

    </section>
  );
}