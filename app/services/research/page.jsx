"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Database,
  FileSearch,
  Globe2,
  LineChart,
  MapPin,
  MessageSquare,
  Search,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ResearchSurveysPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[720px] lg:min-h-[800px] flex items-end overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/research/research-hero.jpeg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Yellow glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[var(--color-secondary)]/20 blur-[120px] rounded-full" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 lg:pb-28">

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
                Research & Surveys
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-7 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]"
            >
              Evidence that
              <br />

              <span className="text-[var(--color-secondary)]">
                drives decisions.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed"
            >
              We design and deliver rigorous research, surveys, assessments,
              and data analysis that transform complex information into
              practical insights for better decisions and measurable impact.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#capabilities"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-hover)] transition"
              >
                Explore Our Capabilities

                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white hover:text-black transition"
              >
                Start a Conversation
              </Link>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 text-white/50 text-xs tracking-[0.2em] uppercase"
        >
          <span>Scroll to explore</span>
          <div className="w-10 h-px bg-white/30" />
        </motion.div>

      </section>


      {/* =====================================================
          INTRO / RESEARCH AT A GLANCE
      ===================================================== */}

      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-5"
            >

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                Research with purpose
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Turning questions into{" "}
                <span className="text-[var(--color-primary)]">
                  evidence.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                At CRC, research goes beyond collecting information. We build
                reliable evidence that helps organizations understand people,
                programs, markets, communities, and changing environments.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                From field-level data collection to advanced analysis and
                reporting, our approach combines methodological rigor with
                contextual understanding.
              </p>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
            >

              {[
                {
                  icon: Search,
                  title: "Primary Research",
                  text: "Collecting first-hand evidence directly from communities, institutions and stakeholders.",
                },
                {
                  icon: Database,
                  title: "Data & Analysis",
                  text: "Transforming structured and unstructured data into meaningful findings.",
                },
                {
                  icon: Users,
                  title: "Community Insight",
                  text: "Understanding perspectives, experiences, behaviors and priorities.",
                },
                {
                  icon: LineChart,
                  title: "Actionable Findings",
                  text: "Turning research findings into recommendations that support decisions.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="group p-7 border border-gray-200 rounded-2xl hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500"
                  >

                    <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-secondary)] group-hover:text-black transition">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold">
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

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section
        id="capabilities"
        className="py-24 lg:py-32 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              What we do
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Research capabilities built around{" "}
              <span className="text-[var(--color-primary)]">
                real-world needs.
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our research services can be tailored to the objectives,
              geography, population and decision-making requirements of each
              assignment.
            </p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >

            {[
              {
                icon: ClipboardList,
                title: "Baseline Surveys",
                text: "Establishing reliable starting-point evidence for programs, projects and interventions.",
              },
              {
                icon: BarChart3,
                title: "Endline Surveys",
                text: "Measuring change, outcomes and progress against established baselines.",
              },
              {
                icon: FileSearch,
                title: "Needs Assessments",
                text: "Identifying priorities, gaps, vulnerabilities and emerging needs.",
              },
              {
                icon: Globe2,
                title: "Market Research",
                text: "Understanding customers, markets, behaviors, trends and opportunities.",
              },
              {
                icon: Workflow,
                title: "Feasibility Studies",
                text: "Assessing viability, risks, opportunities and implementation considerations.",
              },
              {
                icon: BarChart3,
                title: "Data Analysis",
                text: "Cleaning, analyzing and interpreting data to produce meaningful insights.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group bg-white border border-gray-200 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:text-black transition-colors duration-300">
                      <Icon size={22} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-gray-300 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />

                  </div>

                  <h3 className="mt-7 text-xl font-bold">
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
          FIELD → DATA → INSIGHT
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="aspect-[4/3] rounded-3xl overflow-hidden">

                <img
                  src="/images/research/research-field.jpeg"
                  alt="CRC field research and data collection"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Floating card */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-7 -right-5 sm:right-8 bg-white text-black p-5 rounded-2xl shadow-2xl max-w-[260px]"
              >

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                    <BarChart3 size={19} />
                  </div>

                  <div>
                    <p className="font-bold">
                      Data → Insight
                    </p>

                    <p className="text-sm text-gray-500">
                      Evidence for action
                    </p>
                  </div>

                </div>

              </motion.div>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Our approach
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                From field reality to{" "}
                <span className="text-[var(--color-secondary)]">
                  strategic insight.
                </span>
              </h2>

              <p className="mt-6 text-white/65 text-lg leading-relaxed">
                Good research begins with understanding the context. Our teams
                combine field engagement, structured data collection and
                analytical rigor to produce evidence that decision-makers can
                trust.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Context-driven research design",
                  "Rigorous field data collection",
                  "Quality assurance and data validation",
                  "Clear analysis and evidence-based recommendations",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={21}
                      className="text-[var(--color-secondary)] mt-0.5 shrink-0"
                    />

                    <span className="text-white/80">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          METHODOLOGY
      ===================================================== */}

      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              Methodology
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold">
              A rigorous process.
              <br />
              <span className="text-[var(--color-primary)]">
                Reliable evidence.
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Every assignment is designed around its research objectives,
              target population, operating environment and required level of
              evidence.
            </p>

          </div>


          <div className="mt-20 relative">

            {/* Connecting line */}

            <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gray-200" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

              {[
                {
                  number: "01",
                  title: "Define",
                  text: "Understand objectives, questions and information needs.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "Develop methodology, sampling strategy and research tools.",
                },
                {
                  number: "03",
                  title: "Collect",
                  text: "Conduct structured fieldwork and stakeholder engagement.",
                },
                {
                  number: "04",
                  title: "Analyze",
                  text: "Clean, validate and analyze quantitative and qualitative data.",
                },
                {
                  number: "05",
                  title: "Deliver",
                  text: "Present findings, insights and practical recommendations.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >

                  <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm font-bold hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] transition-all duration-300">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DATA COLLECTION METHODS
      ===================================================== */}

      <section className="py-24 lg:py-32 bg-gray-50">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                Field methodology
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                The right method for the right question.
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Depending on the research objectives, CRC can combine
                quantitative and qualitative approaches to develop a more
                complete understanding of the issue being studied.
              </p>

            </div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-8 grid sm:grid-cols-2 gap-4"
            >

              {[
                {
                  icon: ClipboardList,
                  title: "Household Surveys",
                  text: "Structured household and individual-level data collection.",
                },
                {
                  icon: MessageSquare,
                  title: "Key Informant Interviews",
                  text: "In-depth engagement with stakeholders and subject-matter experts.",
                },
                {
                  icon: Users,
                  title: "Focus Group Discussions",
                  text: "Exploring perceptions, experiences, attitudes and community priorities.",
                },
                {
                  icon: MapPin,
                  title: "Field Observation",
                  text: "Direct observation to understand real-world conditions and implementation.",
                },
                {
                  icon: Database,
                  title: "Digital Data Collection",
                  text: "Technology-enabled collection, validation and management of field data.",
                },
                {
                  icon: ShieldCheck,
                  title: "Quality Assurance",
                  text: "Processes designed to improve accuracy, consistency and data integrity.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    variants={fadeUp}
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-[var(--color-primary)] transition-all"
                  >

                    <Icon
                      size={25}
                      className="text-[var(--color-primary)]"
                    />

                    <h3 className="mt-5 font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTORS
      ===================================================== */}

      <section className="py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)]">
                Areas of research
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Research across sectors that matter.
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                CRC can support research and assessment assignments across
                humanitarian, development, public and private sector
                environments.
              </p>

            </div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >

              {[
                "Humanitarian",
                "Education",
                "Health",
                "Livelihood",
                "WASH",
                "Climate",
                "Agriculture",
                "Governance",
                "Private Sector",
              ].map((sector, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="p-5 rounded-xl border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  <span className="text-sm font-medium">
                    {sector}
                  </span>
                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 sm:px-8 lg:px-12 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-3xl bg-black px-7 py-16 md:px-14 md:py-20">

            {/* Decorative circle */}

            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />

            <div className="relative z-10 max-w-3xl">

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Lets work together
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-bold text-white leading-tight">
                Have a research question?
                <br />
                <span className="text-[var(--color-secondary)]">
                  Lets find the answer.
                </span>
              </h2>

              <p className="mt-6 text-white/60 text-lg max-w-2xl leading-relaxed">
                Tell us about your research objectives, geographic scope and
                information needs. Our team can help develop an appropriate
                approach for your assignment.
              </p>

              <div className="mt-9">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[var(--color-primary)] text-white font-semibold px-7 py-4 rounded-lg hover:bg-[var(--color-primary-hover)] transition"
                >
                  Discuss Your Research

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