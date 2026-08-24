"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative bg-[var(--color-footer)] text-white overflow-hidden"
    >

      {/* =====================================================
          ORGANIZATION SCHEMA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Credible Research and Consultancy BD (CRC-BD) Limited",
            url: "https://www.crc-bd.com",
            email: "contact@crc-bd.com",
            telephone: "+8801629014416",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Motel Road",
              addressLocality: "Cox's Bazar",
              addressCountry: "BD",
            },
            sameAs: [
              "https://facebook.com/msadikjowel",
              "https://x.com/msadikjowel",
              "https://instagram.com/msadikjowel",
            ],
          }),
        }}
      />


      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="absolute -top-60 -right-60 w-[650px] h-[650px] rounded-full bg-[var(--color-secondary)]/10 blur-[150px] pointer-events-none" />

      <div className="absolute -bottom-80 -left-60 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/40 blur-[160px] pointer-events-none" />


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
      >

        {/* =================================================
            BIG CLOSING STATEMENT
        ================================================= */}

        <motion.div
          variants={item}
          className="pt-20 sm:pt-24 lg:pt-28 pb-16"
        >

          <div className="grid lg:grid-cols-12 gap-10 items-end">

            {/* Heading */}

            <div className="lg:col-span-8">

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
                Lets create meaningful impact
              </span>


              <h2
                className="
                  mt-5
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  tracking-[-0.04em]
                  leading-[0.95]
                "
              >
                Evidence.

                <br />

                <span className="text-[var(--color-secondary)]">
                  Insight.
                </span>

                {" "}Impact.
              </h2>

            </div>


            {/* Statement */}

            <div className="lg:col-span-4">

              <p className="text-base sm:text-lg leading-relaxed text-white/55">
                Credible research, practical consultancy, and technical
                solutions designed to help organizations make informed
                decisions and achieve sustainable results.
              </p>

            </div>

          </div>

        </motion.div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className="h-px bg-white/10" />


        {/* =================================================
            INFORMATION GRID
        ================================================= */}

        <div className="py-14 lg:py-16 grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* BRAND */}

          <motion.div
            variants={item}
            className="lg:col-span-4"
          >

            <Link
              href="/"
              className="inline-block"
            >

              <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                CRC
                <span className="text-[var(--color-secondary)]">.</span>
              </span>

            </Link>


            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Credible Research and Consultancy BD (CRC-BD) Limited brings
              together research, data, consultancy, monitoring, evaluation,
              technology, training, and technical expertise.
            </p>


            {/* Social */}

            <div className="mt-7 flex gap-2">

              <SocialIcon
                href="#"
                label="Facebook"
                icon={<FaFacebookF />}
              />

              <SocialIcon
                href="#"
                label="X"
                icon={<FaXTwitter />}
              />

              <SocialIcon
                href="#"
                label="Instagram"
                icon={<FaInstagram />}
              />

              <SocialIcon
                href="https://wa.me/8801629014416"
                label="WhatsApp"
                icon={<FaWhatsapp />}
              />

            </div>

          </motion.div>


          {/* QUICK LINKS */}

          <motion.nav
            variants={item}
            aria-label="Footer navigation"
            className="lg:col-span-2"
          >

            <FooterHeading>
              Explore
            </FooterHeading>


            <ul className="space-y-3 text-sm text-white/50">

              <FooterLink href="/">
                Home
              </FooterLink>

              <FooterLink href="/about-us">
                About Us
              </FooterLink>

              <FooterLink href="/#services">
                Services
              </FooterLink>

              <FooterLink href="/contact">
                Contact
              </FooterLink>

              <FooterLink href="#">
                News & Insights
              </FooterLink>

            </ul>

          </motion.nav>


          {/* CONTACT */}

          <motion.div
            variants={item}
            className="lg:col-span-3"
          >

            <FooterHeading>
              Contact
            </FooterHeading>


            <div className="space-y-5">

              {/* Address */}

              <ContactItem
                icon={<MapPin size={18} />}
                title="Office"
              >

                <span>
                  Motel Road,
                  <br />
                  Coxs Bazar, Bangladesh
                </span>

              </ContactItem>


              {/* Email */}

              <ContactItem
                icon={<Mail size={18} />}
                title="Email"
              >

                <a
                  href="mailto:contact@crc-bd.com"
                  className="hover:text-[var(--color-secondary)] transition-colors"
                >
                  contact@crc-bd.com
                </a>

              </ContactItem>


              {/* Phone */}

              <ContactItem
                icon={<Phone size={18} />}
                title="Phone"
              >

                <a
                  href="tel:+8801629014416"
                  className="hover:text-[var(--color-secondary)] transition-colors"
                >
                  +88 01629 014 416
                </a>

              </ContactItem>

            </div>

          </motion.div>


          {/* MAP */}

          <motion.div
            variants={item}
            className="lg:col-span-3"
          >

            <FooterHeading>
              Find Us
            </FooterHeading>


            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">

              {/* Google Maps */}

              <iframe
                title="CRC-BD location in Cox's Bazar"
                src="https://www.google.com/maps?q=Cox%27s%20Bazar%2C%20Bangladesh&output=embed"
                className="w-full h-56 border-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />


              {/* Map label */}

              <div className="absolute bottom-3 left-3 right-3">

                <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--color-footer)]/90 backdrop-blur-md border border-white/10 px-3 py-2">

                  <div className="flex items-center gap-2">

                    <MapPin
                      size={14}
                      className="text-[var(--color-secondary)]"
                    />

                    <span className="text-xs text-white/70">
                      Coxs Bazar, Bangladesh
                    </span>

                  </div>


                  <a
                    href="https://www.google.com/maps?q=Cox%27s%20Bazar%2C%20Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[var(--color-secondary)] hover:text-white transition-colors"
                  >
                    Open
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =================================================
            CONTACT CTA STRIP
        ================================================= */}

        <motion.div
          variants={item}
          className="
            mb-12
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-sm
            px-5
            sm:px-7
            py-5
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-5
          "
        >

          <div>

            <p className="font-semibold text-white">
              Have a research or consultancy requirement?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Lets discuss how CRC-BD can support your objectives.
            </p>

          </div>


          <Link
            href="/contact"
            className="
              group
              shrink-0
              inline-flex
              items-center
              gap-2
              px-5
              py-3
              rounded-lg
              bg-[var(--color-secondary)]
              text-sm
              font-semibold
              text-white
              hover:bg-[var(--color-secondary-hover)]
              transition-all
            "
          >

            Get in Touch

            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />

          </Link>

        </motion.div>

      </motion.div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-5
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-3
            text-xs
            text-white/35
          "
        >

          <p className="text-center md:text-left">

            © {year} CRC-BD Limited. All rights reserved.

          </p>


          <div className="flex items-center gap-5">

            <Link
              href="#"
              className="hover:text-white/70 transition-colors"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="hover:text-white/70 transition-colors"
            >
              Terms
            </Link>

            <span className="hidden sm:block w-px h-3 bg-white/10" />

            <span>
              Developed by{" "}
              <a
                href="https://www.facebook.com/msadikjowel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-[var(--color-secondary)] transition-colors"
              >
                Aimers Software
              </a>
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({ children }) {
  return (
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
      {children}
    </h3>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ href, children }) {
  return (
    <li>

      <Link
        href={href}
        className="
          group
          inline-flex
          items-center
          gap-1.5
          hover:text-white
          transition-colors
        "
      >

        <span>{children}</span>

        <ArrowUpRight
          size={12}
          className="
            opacity-0
            -translate-x-1
            translate-y-1
            group-hover:opacity-70
            group-hover:translate-x-0
            group-hover:translate-y-0
            transition-all
          "
        />

      </Link>

    </li>
  );
}


/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-secondary)]">
        {icon}
      </div>


      <div>

        <p className="text-xs uppercase tracking-wider text-white/30">
          {title}
        </p>

        <div className="mt-1 text-sm text-white/55 leading-relaxed">
          {children}
        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SOCIAL ICON
========================================================= */

function SocialIcon({ href, label, icon }) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-white/60
        hover:bg-[var(--color-secondary)]
        hover:border-[var(--color-secondary)]
        hover:text-white
        transition-all
        duration-300
      "
    >
      {icon}
    </a>
  );
}