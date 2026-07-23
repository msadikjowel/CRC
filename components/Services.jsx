"use client";

import Image from "next/image";
import research from "../public/services/ResearchNsurveys.jpg";
import monitoring from "../public/services/monitoring.jpg";
import consultancy from "../public/services/Consultancy.webp";
import financial from "../public/services/Financial.jpg";
import digital from "../public/services/digital.png";
import training from "../public/services/capacity.avif";
import MotionWrapper from "./MotionWrapper";
import {
  Search,
  ClipboardCheck,
  BriefcaseBusiness,
  Calculator,
  MonitorCog,
  GraduationCap
} from "lucide-react";

const iconMap = {
  Search,
  ClipboardCheck,
  BriefcaseBusiness,
  Calculator,
  MonitorCog,
  GraduationCap
};

export default function Services() {
  const servicesData = [
    {
  id: 1,
  image: research,
  icon: "Search",
  title: "Research & Surveys",
  description: "Evidence-based research and comprehensive data collection.",
  details:
    "We conduct baseline and endline surveys, needs assessments, market research, feasibility studies, socio-economic assessments, and advanced data analysis to support informed decision-making.",
  link: "#"
},
{
  id: 2,
  image: monitoring,
  icon: "ClipboardCheck",
  title: "Monitoring & Evaluation",
  description: "Measuring project performance and impact with precision.",
  details:
    "Our monitoring and evaluation services include third-party monitoring, project evaluations, verification, quality assurance, performance tracking, and impact assessments aligned with international standards.",
  link: "#"
},
{
  id: 3,
  image: consultancy,
  icon: "BriefcaseBusiness",
  title: "Consultancy Services",
  description: "Strategic advisory for sustainable organizational growth.",
  details:
    "We provide expert consultancy in project design, proposal development, strategic planning, policy advisory, institutional strengthening, and organizational development for public and private sector clients.",
  link: "#"
},
{
  id: 4,
  image: financial,
  icon: "Calculator",
  title: "Financial Consultancy",
  description: "Reliable financial advisory and compliance solutions.",
  details:
    "Our financial experts deliver audit support, taxation, VAT consultancy, financial compliance, internal controls, risk management, and regulatory advisory services.",
  link: "#"
},
{
  id: 5,
  image: digital,
  icon: "MonitorCog",
  title: "Digital Solutions",
  description: "Innovative technology solutions for modern organizations.",
  details:
    "We develop management information systems (MIS), databases, dashboards, digital platforms, mobile data collection tools, and customized IT solutions to improve operational efficiency.",
  link: "#"
},
{
  id: 6,
  image: training,
  icon: "GraduationCap",
  title: "Training & Capacity Building",
  description: "Strengthening people and institutions through learning.",
  details:
    "We design and deliver professional training, workshops, coaching, technical facilitation, and capacity-building programs that enhance organizational performance and long-term sustainability.",
  link: "#"
},
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* decorative background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[var(--color-primary)] opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[var(--color-danger)] opacity-10 blur-3xl rounded-full" />
      </div>

      {/* heading */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Expertise That Drives Impact
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          We combine research excellence, technical expertise, and innovative solutions to support organizations in designing, implementing, and evaluating programs that create measurable and lasting impact across humanitarian, development, and private sectors.
        </p>

        {/* underline accent */}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-danger)]" />
        </div>
      </div>

      {/* grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6 relative">
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <MotionWrapper key={service.id} delay={index * 0.1}>
              <div className="tilt-card group relative">

                {/* glass card */}
                <div className="glass p-8 rounded-2xl border border-white/40 backdrop-blur-xl transition-all duration-300">

                  {/* image */}
                  <div className="relative w-full h-44 mb-5 overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[var(--color-primary)]">
                      {Icon && <Icon size={26} />}
                    </div>
                    <div className="h-[2px] w-10 rounded-full bg-[var(--color-danger)]" />
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  {/* description */}
                  <p className="text-gray-600 mt-2 text-sm">
                    {service.description}
                  </p>

                  {/* details */}
                  {/* <p className="text-gray-500 mt-2 text-xs line-clamp-2">
                    {service.details}
                  </p> */}

                  {/* link */}
                  <a
                    href={service.link}
                    className="inline-block mt-5 font-medium text-[var(--color-primary)] hover:text-[var(--color-danger)] transition"
                  >
                    See more →
                  </a>
                </div>
              </div>
            </MotionWrapper>
          );
        })}
      </div>

      {/* styles */}
      <style jsx>{`
        /* real glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        /* 3D tilt */
        .tilt-card {
          perspective: 1200px;
        }

        .glass {
          transform-style: preserve-3d;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .tilt-card:hover .glass {
          transform: rotateX(6deg) rotateY(-6deg) scale(1.03);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
        }
      `}</style>
    </section>
  );
}