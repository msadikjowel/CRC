"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/* ⚡ Lazy loaded map (STEP 2) */
const CoxsBazarMap = dynamic(() => import("./CoxsBazarMap"), {
  ssr: false,
});

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative text-white bg-[var(--color-footer)]"
    >
      {/* SEO Schema (UNCHANGED) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CRC Cox's Bazar",
            url: "https://www.crc-bd.com",
            email: "contact@crc-bd.com",
            telephone: "+8801629014416",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Motel Road",
              addressLocality: "Coxs Bazar",
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

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <motion.div variants={item}>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-secondary)]">
            CRC<span className="text-white">.</span>
          </h2>

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            We combine research excellence, technical expertise, and innovative solutions to support organizations in designing, implementing, and evaluating programs that create measurable and lasting impact across humanitarian, development, and private sectors.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaXTwitter />} />
            <SocialIcon icon={<FaInstagram />} />
          </div>
        </motion.div>

        {/* Links */}
        <motion.nav variants={item} aria-label="Footer navigation">
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#" className="hover:text-[var(--color-secondary)]">About Us</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-secondary)]">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-secondary)]">FAQ</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-secondary)]">News & Insights</Link></li>
            
            <li><Link href="#" className="hover:text-[var(--color-secondary)]">Team</Link></li>
          </ul>
        </motion.nav>

        {/* Contact */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">
            Contact
          </h3>

          <address className="not-italic space-y-4 text-sm text-gray-300">
            <p>
              <span className="text-white font-medium">Address:</span>
              <br />
              Motel Road, Coxs Bazar, Bangladesh
            </p>

            <p>
              <span className="text-white font-medium">Email:</span>
              <br />
              <a href="mailto:msadikjowel@gmail.com" className="hover:text-[var(--color-secondary)]">
                contact@crc-bd.com
              </a>
            </p>

            <p>
              <span className="text-white font-medium">Phone:</span>
              <br />
              <a href="tel:+8801629014416" className="hover:text-[var(--color-secondary)]">
                +88 01629 014 416
              </a>
            </p>
          </address>
        </motion.div>

        {/* 🗺️ MAP SECTION (ONLY CHANGE MADE) */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">
            Our Location
          </h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-64 rounded-lg overflow-hidden border border-gray-700"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Loading map...
                </div>
              }
            >
              <CoxsBazarMap />
            </Suspense>
          </motion.div>

          {/* CTA */}
          <a
            href="https://www.google.com/maps/place/Fame+Service/@21.4476747,91.977143,17.31z/data=!4m6!3m5!1s0x30adc9002cbf5cbf:0x5048e97839f807b3!8m2!3d21.4484829!4d91.9803732!16s%2Fg%2F11mcnd3tn0?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 text-sm rounded-md bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)] transition"
          >
            Get Directions
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Fame. All rights reserved. Developed by{" "}
            <a
              href="https://www.facebook.com/msadikjowel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-secondary)] transition"
            >
              Aimers Software
            </a>
          </p>

          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="#" className="hover:text-[var(--color-secondary)] transition">About</Link>
            <Link href="#" className="hover:text-[var(--color-secondary)] transition">News</Link>
            <Link href="#" className="hover:text-[var(--color-secondary)] transition">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Components ---------------- */

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      aria-label="social link"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-secondary)] hover:text-white transition"
    >
      {icon}
    </a>
  );
}