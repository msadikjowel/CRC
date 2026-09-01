"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Network,
  Presentation,
  ShieldCheck,
  Target,
  Users,
  UsersRound,
} from "lucide-react";

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

const services = [
  {
    icon: GraduationCap,
    title: "Professional Training",
    text: "Practical training programs designed to strengthen professional knowledge, technical competencies, and the ability to apply learning in real-world settings.",
  },
  {
    icon: UsersRound,
    title: "Capacity Building",
    text: "Supporting individuals, teams, and organizations to develop the skills, systems, and institutional capabilities required for sustainable performance.",
  },
  {
    icon: Presentation,
    title: "Workshops & Seminars",
    text: "Facilitating focused and interactive learning sessions around organizational, technical, research, development, and professional topics.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Development",
    text: "Developing learning resources, training materials, guidelines, and knowledge products that support continuous organizational learning.",
  },
  {
    icon: Network,
    title: "Institutional Strengthening",
    text: "Helping institutions improve internal systems, processes, roles, structures, and capabilities to achieve stronger and more sustainable outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Technical Learning",
    text: "Delivering specialized learning and technical assistance tailored to organizational requirements, sector needs, and emerging challenges.",
  },
];

const capabilities = [
  "Training needs assessment",
  "Professional skills development",
  "Technical and specialized training",
  "Organizational capacity assessment",
  "Institutional strengthening",
  "Workshops and seminars",
  "Training curriculum development",
  "Training materials and manuals",
  "Facilitation and knowledge sharing",
  "Team development",
  "Leadership and management development",
  "Organizational learning systems",
];

const process = [
  {
    number: "01",
    title: "Assess",
    text: "We identify learning needs, capability gaps, organizational priorities, participant profiles, and the context in which learning will be applied.",
  },
  {
    number: "02",
    title: "Design",
    text: "We develop practical learning approaches, curricula, materials, and activities aligned with the specific needs of participants and institutions.",
  },
  {
    number: "03",
    title: "Engage",
    text: "We facilitate interactive learning experiences that encourage participation, critical thinking, knowledge sharing, and practical application.",
  },
  {
    number: "04",
    title: "Strengthen",
    text: "We focus on lasting capability by connecting learning with organizational systems, practice, continuous improvement, and institutional development.",
  },
];

export default function TrainingCapacityBuildingPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[82vh] lg:min-h-[88vh] overflow-hidden bg-[var(--color-footer)]">

        {/* Background image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/training/training.jpeg')",
          }}
        />

        {/* Overlays */}

        <div className="absolute inset-0 bg-[var(--color-footer)]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-footer)] via-[var(--color-footer)]/90 to-[var(--color-footer)]/30" />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-footer)] via-transparent to-transparent" />


        {/* Decorative glow */}

        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)]/10 blur-[150px]" />


        {/* Hero content */}

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 min-h-[82vh] lg:min-h-[88vh] flex items-center">

          <div className="grid lg:grid-cols-12 gap-12 items-center w-full pt-28 pb-20">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-8 xl:col-span-7"
            >

              <div className="flex items-center gap-3">

                <span className="w-9 h-px bg-[var(--color-secondary)]" />

                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60">
                  Training & Capacity Building
                </span>

              </div>


              <h1
                className="
                  mt-7
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[5.5rem]
                  font-bold
                  tracking-[-0.045em]
                  leading-[0.94]
                  text-white
                "
              >
                Learn.

                <br />

                <span className="text-[var(--color-secondary)]">
                  Build.
                </span>

                <br />

                Lead.
              </h1>


              <p className="mt-8 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/65">
                Strengthening people and institutions through learning.
                We design practical training, capacity-building, and
                institutional development initiatives that turn knowledge
                into capability and lasting organizational strength.
              </p>


              <div className="mt-9 flex flex-col sm:flex-row gap-3">

                <Link
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
                    bg-[var(--color-secondary)]
                    text-white
                    font-semibold
                    hover:bg-[var(--color-secondary-hover)]
                    transition-all
                  "
                >
                  Discuss Your Requirement

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>


                <a
                  href="#expertise"
                  className="
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
                    text-white
                    font-semibold
                    hover:bg-white/10
                    transition-all
                  "
                >
                  Explore Our Expertise
                </a>

              </div>

            </motion.div>


            {/* RIGHT PANEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="hidden lg:block lg:col-span-4 xl:col-span-5"
            >

              <div className="ml-auto max-w-sm">

                <div className="flex items-center justify-end gap-3 mb-5">

                  <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                    CRC-BD
                  </span>

                  <span className="w-10 h-px bg-white/20" />

                </div>


                <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-7">

                  <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/15 border border-[var(--color-secondary)]/20 flex items-center justify-center text-[var(--color-secondary)]">

                    <Users size={23} />

                  </div>


                  <p className="mt-7 text-xs uppercase tracking-[0.18em] text-white/40">
                    Our focus
                  </p>


                  <h2 className="mt-3 text-2xl font-bold text-white">
                    Building capability that lasts beyond the training room.
                  </h2>


                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    We connect learning with practice, organizational systems,
                    and institutional development to create lasting capability.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>


        {/* Bottom label */}

        <div className="absolute bottom-7 left-0 right-0 hidden sm:block">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

            <div className="flex items-center justify-between">

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Learning • Skills • Capacity • Institutions
              </span>

              <span className="text-xs font-mono text-white/25">
                06 / 06
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="lg:col-span-7"
            >

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                People & institutions
              </span>


              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">

                Knowledge creates
                <br />

                <span className="text-[var(--color-primary)]">
                  lasting capability.
                </span>

              </h2>


              <p className="mt-7 text-lg text-gray-600 leading-relaxed max-w-2xl">
                Sustainable organizational performance depends not only on
                systems and resources, but also on the knowledge, skills,
                confidence, and institutional capacity of the people who
                deliver the work.
              </p>


              <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl">
                CRC-BD designs learning and capacity-building initiatives that
                respond to real organizational needs and help individuals,
                teams, and institutions apply knowledge effectively in their
                work.
              </p>

            </motion.div>


            {/* RIGHT CARD */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="lg:col-span-5"
            >

              <div className="relative rounded-3xl bg-gray-50 border border-gray-200 p-7 sm:p-9">

                <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-[60px] bg-[var(--color-secondary)]/10" />


                <div className="relative">

                  <Award
                    size={34}
                    className="text-[var(--color-secondary)]"
                  />


                  <h3 className="mt-7 text-2xl font-bold text-gray-900">
                    Learning with purpose
                  </h3>


                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Our learning approach focuses on practical application,
                    participant engagement, knowledge retention, and the
                    ability to translate learning into improved performance.
                  </p>


                  <div className="mt-7 pt-6 border-t border-gray-200">

                    <div className="flex items-center gap-3">

                      <CheckCircle2
                        size={18}
                        className="text-[var(--color-secondary)]"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        From learning to measurable capability
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="expertise"
        className="py-24 lg:py-32 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="max-w-3xl"
          >

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              What we do
            </span>


            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

              Learning solutions
              <br />

              <span className="text-[var(--color-primary)]">
                designed for real impact.
              </span>

            </h2>


            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              We develop customized learning and institutional strengthening
              solutions that respond to the needs of professionals, teams,
              organizations, and institutions.
            </p>

          </motion.div>


          {/* Cards */}

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  className="
                    group
                    relative
                    bg-white
                    rounded-2xl
                    border
                    border-gray-200
                    p-7
                    hover:border-[var(--color-secondary)]/40
                    hover:shadow-xl
                    transition-all
                    duration-500
                  "
                >

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-[var(--color-primary)]/5
                        text-[var(--color-primary)]
                        flex
                        items-center
                        justify-center
                        group-hover:bg-[var(--color-primary)]
                        group-hover:text-white
                        transition-all
                        duration-300
                      "
                    >

                      <Icon size={21} />

                    </div>


                    <span className="text-xs font-mono text-gray-300">
                      0{index + 1}
                    </span>

                  </div>


                  <h3 className="mt-7 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>


                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {service.text}
                  </p>


                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-opacity">

                    Explore

                    <ArrowUpRight size={14} />

                  </div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-[var(--color-footer)] text-white relative overflow-hidden">

        <div className="absolute -right-60 -top-60 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)]/10 blur-[150px]" />


        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="max-w-3xl"
          >

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              Our approach
            </span>


            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

              Learning that
              <br />

              <span className="text-[var(--color-secondary)]">
                becomes capability.
              </span>
            </h2>


            <p className="mt-6 text-lg text-white/55 leading-relaxed">
              Effective capacity building goes beyond delivering information.
              We focus on creating learning experiences that participants can
              understand, apply, and carry into their organizations.
            </p>

          </motion.div>


          {/* Process */}

          <div className="mt-16 relative">

            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-white/10" />


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

              {process.map((step, index) => (

                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative"
                >

                  <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--color-footer)] border border-white/15 flex items-center justify-center">

                    <span className="text-sm font-mono text-[var(--color-secondary)]">
                      {step.number}
                    </span>

                  </div>


                  <h3 className="mt-7 text-2xl font-bold">
                    {step.title}
                  </h3>


                  <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-[260px]">
                    {step.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-14 items-start">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Areas of expertise
              </span>


              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

                People. Knowledge.
                <br />

                <span className="text-[var(--color-primary)]">
                  Institutional strength.
                </span>

              </h2>


              <p className="mt-6 text-gray-600 leading-relaxed">
                Our capacity-building expertise brings together learning,
                technical knowledge, facilitation, organizational development,
                and institutional strengthening.
              </p>

            </motion.div>


            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
              className="lg:col-span-7"
            >

              <div className="border-t border-gray-200">

                {capabilities.map((capability, index) => (

                  <div
                    key={capability}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      py-5
                      border-b
                      border-gray-200
                      hover:px-2
                      transition-all
                      duration-300
                    "
                  >

                    <span className="text-xs font-mono text-gray-300 w-7">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <CheckCircle2
                      size={18}
                      className="text-[var(--color-secondary)] shrink-0"
                    />


                    <span className="text-gray-700 font-medium group-hover:text-[var(--color-primary)] transition-colors">
                      {capability}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 sm:px-8 lg:px-12 pb-20">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              bg-[var(--color-primary)]
              px-7
              py-16
              md:px-14
              md:py-20
            "
          >

            {/* Glow */}

            <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)]/15 blur-[130px]" />


            <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-end">

              <div className="lg:col-span-8">

                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                  Build stronger capabilities
                </span>


                <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">

                  Ready to invest in
                  <br />

                  <span className="text-[var(--color-secondary)]">
                    people and institutions?
                  </span>

                </h2>


                <p className="mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
                  Tell us about your organizations learning, training, or
                  capacity-building needs. We can help design a practical
                  approach that creates meaningful and lasting capability.
                </p>

              </div>


              <div className="lg:col-span-4 lg:flex lg:justify-end">

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    py-4
                    rounded-xl
                    bg-[var(--color-secondary)]
                    text-white
                    font-semibold
                    hover:bg-[var(--color-secondary-hover)]
                    transition-all
                  "
                >

                  Talk to CRC-BD

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />

                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}