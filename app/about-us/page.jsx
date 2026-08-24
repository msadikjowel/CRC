"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  GraduationCap,
  Handshake,
  Lightbulb,
  LineChart,
  Search,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

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
    x: -45,
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
    x: 45,
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

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-end overflow-hidden bg-[var(--color-footer)]">

        {/* Background image */}

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('/images/about/about-hero.jpeg')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-[var(--color-footer)]/75" />

        {/* Subtle gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-footer)] via-[var(--color-footer)]/90 to-transparent" />

        {/* Decorative glow */}

        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)]/15 blur-[120px]" />

        {/* Content */}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 lg:pb-24">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl"
          >

            {/* Eyebrow */}

            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />

                About CRC-BD
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]"
            >
              Research with
              <br />

              <span className="text-[var(--color-secondary)]">
                purpose.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed"
            >
              Credible evidence, practical insight, and professional solutions
              designed to help organizations make better decisions and create
              sustainable impact.
            </motion.p>

          </motion.div>

        </div>

        {/* Bottom label */}

        <div className="absolute bottom-7 right-8 hidden lg:flex items-center gap-3 text-white/40 text-xs uppercase tracking-[0.2em]">
          <span>Who we are</span>
          <span className="w-10 h-px bg-white/20" />
        </div>

      </section>


      {/* =====================================================
          CAPACITY STATEMENT
      ===================================================== */}

      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left heading */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              className="lg:col-span-4"
            >

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Capacity Statement
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
                Credibility built on{" "}
                <span className="text-[var(--color-primary)]">
                  evidence.
                </span>
              </h2>

              <div className="mt-8 w-16 h-1 bg-[var(--color-secondary)]" />

            </motion.div>


            {/* Right content */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
              className="lg:col-span-8"
            >

              <div className="space-y-7 text-gray-600 text-lg leading-relaxed">

                <p>
                  <strong className="text-gray-900">
                    Credible Research and Consultancy BD (CRC-BD) Limited
                  </strong>{" "}
                  is a research and consultancy company providing professional
                  services in social, market, development, humanitarian,
                  corporate, and institutional research and consultancy.
                </p>

                <p>
                  The Company is committed to generating credible evidence,
                  providing practical insights, and delivering innovative
                  solutions to support informed decision-making and sustainable
                  impact.
                </p>

                <p>
                  CRC-BD brings together research, data, consultancy,
                  monitoring, evaluation, technology, training, and technical
                  expertise to respond to the diverse needs of Government
                  agencies, non-government organizations, international
                  organizations, development partners, academic institutions,
                  and private-sector organizations.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE BRING TOGETHER
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-gray-50">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              Our capabilities
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Different disciplines.
              <br />

              <span className="text-[var(--color-primary)]">
                One integrated approach.
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              CRC-BD brings together multidisciplinary expertise to address
              complex research, development, humanitarian, institutional, and
              business challenges.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >

            {[
              {
                icon: Search,
                title: "Research",
                text: "Rigorous research and surveys designed around real-world questions.",
              },
              {
                icon: BarChart3,
                title: "Data",
                text: "Reliable data collection, management, analysis, and interpretation.",
              },
              {
                icon: LineChart,
                title: "Consultancy",
                text: "Practical technical advice that supports better organizational decisions.",
              },
              {
                icon: GraduationCap,
                title: "Capacity Building",
                text: "Training and knowledge development that strengthen people and institutions.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group bg-white border border-gray-200 rounded-2xl p-7 hover:-translate-y-1 hover:border-[var(--color-secondary)] hover:shadow-xl transition-all duration-500"
                >

                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                </motion.div>
              );

            })}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SERVICES / EXPERTISE
      ===================================================== */}

      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Heading */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              className="lg:col-span-4"
            >

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                What we do
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Expertise that responds to{" "}
                <span className="text-[var(--color-primary)]">
                  real needs.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Our services are designed to provide organizations with the
                evidence, technical support, systems, and expertise they need
                to move from challenges to practical solutions.
              </p>

            </motion.div>


            {/* Services */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-8"
            >

              {[
                "Research & Surveys",
                "Data Collection & Analysis",
                "Market Research",
                "Feasibility Studies",
                "Baseline & End-line Surveys",
                "Needs Assessments",
                "Monitoring & Evaluation",
                "Third-Party Monitoring",
                "Verification & Quality Assurance",
                "Financial & Compliance Advisory",
                "Digital & MIS Solutions",
                "Training & Capacity Building",
                "Project Management",
                "Technical Assistance",
              ].map((service, index) => (

                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group flex items-center gap-4 pb-5 border-b border-gray-200"
                >

                  <div className="w-9 h-9 shrink-0 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors duration-300">

                    <CheckCircle2 size={18} />

                  </div>

                  <span className="font-medium text-gray-800 group-hover:text-[var(--color-primary)] transition-colors">
                    {service}
                  </span>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE + APPROACH
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-[var(--color-footer)] text-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              className="relative"
            >

              <div className="aspect-[4/3] rounded-3xl overflow-hidden">

                <img
                  src="/images/about/about-field.jpeg"
                  alt="CRC-BD research and consultancy fieldwork"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Floating card */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="absolute -bottom-6 -right-4 sm:right-8 bg-white text-gray-900 rounded-2xl p-5 shadow-2xl"
              >

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center">
                    <ShieldCheck size={21} />
                  </div>

                  <div>

                    <p className="font-bold">
                      Evidence-led
                    </p>

                    <p className="text-sm text-gray-500">
                      Professional approach
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>


            {/* Content */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
            >

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Our approach
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Evidence first.
                <br />

                <span className="text-[var(--color-secondary)]">
                  Impact always.
                </span>
              </h2>

              <p className="mt-6 text-white/65 text-lg leading-relaxed">
                With a multidisciplinary and evidence-based approach, CRC-BD
                is committed to delivering credible research, actionable
                insights, professional solutions, and measurable impact across
                Bangladesh.
              </p>

              <div className="mt-9 space-y-5">

                {[
                  {
                    icon: Target,
                    title: "Evidence-based",
                    text: "We place credible evidence at the foundation of our work.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Practical",
                    text: "Our recommendations are designed to be useful, realistic, and actionable.",
                  },
                  {
                    icon: Handshake,
                    title: "Collaborative",
                    text: "We work closely with clients, partners, communities, and stakeholders.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Professional",
                    text: "We maintain rigor, integrity, quality, and accountability throughout our assignments.",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >

                      <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-[var(--color-secondary)]">
                        <Icon size={19} />
                      </div>

                      <div>

                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-white/50 leading-relaxed">
                          {item.text}
                        </p>

                      </div>

                    </div>
                  );

                })}

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE SERVE
      ===================================================== */}

      <section className="py-24 lg:py-28">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              Our clients & partners
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Expertise across{" "}
              <span className="text-[var(--color-primary)]">
                sectors.
              </span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              CRC-BD responds to the diverse needs of organizations working
              across public, development, humanitarian, academic, and private
              sectors.
            </p>

          </div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >

            {[
              "Government",
              "NGOs",
              "International Organizations",
              "Development Partners",
              "Academic Institutions",
              "Private Sector",
            ].map((item, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                className="min-h-[120px] flex items-center justify-center text-center px-4 rounded-2xl border border-gray-200 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/5 transition-all duration-300"
              >

                <span className="text-sm font-semibold text-gray-700">
                  {item}
                </span>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FOUR WORDS
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-gray-50">

        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
              Our philosophy
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-bold">
              Four words.
              <br />

              <span className="text-[var(--color-primary)]">
                One commitment.
              </span>
            </h2>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >

            {[
              {
                number: "01",
                title: "Research",
              },
              {
                number: "02",
                title: "Insight",
              },
              {
                number: "03",
                title: "Solution",
              },
              {
                number: "04",
                title: "Impact",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl bg-[var(--color-primary)] p-7 min-h-[190px] flex flex-col justify-between hover:bg-[var(--color-footer)] transition-colors duration-500"
              >

                <span className="text-sm font-medium text-white/40">
                  {item.number}
                </span>

                <div className="flex items-end justify-between">

                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <ArrowUpRight
                    size={23}
                    className="text-[var(--color-secondary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 sm:px-8 lg:px-12 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-footer)] px-7 py-16 md:px-14 md:py-20">

            {/* Glow */}

            <div className="absolute -right-32 -top-32 w-[450px] h-[450px] rounded-full bg-[var(--color-secondary)]/15 blur-[110px]" />

            <div className="relative z-10 max-w-3xl">

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Work with CRC-BD
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
                Lets turn evidence into{" "}
                <span className="text-[var(--color-secondary)]">
                  impact.
                </span>
              </h2>

              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-2xl">
                Whether you need research, consultancy, monitoring and
                evaluation, digital solutions, or technical assistance, CRC-BD
                is ready to work with you.
              </p>

              <div className="mt-9">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-lg bg-[var(--color-secondary)] text-white font-semibold hover:bg-[var(--color-secondary-hover)] transition"
                >
                  Start a Conversation

                  <ArrowRight
                    size={19}
                    className="group-hover:translate-x-1 transition-transform"
                  />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}