import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-[var(--color-primary)] text-white
                    text-[13px] sm:text-[14px]
                    h-[42px]">

      {/* INNER CONTAINER */}
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-3">

        {/* LEFT */}
        <div className="flex items-center gap-4 leading-none">

          <span className="hidden lg:flex items-center gap-1 hover:text-[var(--color-secondary)] transition">
            <FaMapMarkerAlt />
            Motel Road, Coxs Bazar
          </span>

          <a
            href="tel:+8801629014416"
            className="flex items-center gap-1 hover:text-[var(--color-secondary)] transition"
          >
            <FaPhoneAlt />
            <span className="hidden sm:inline">+88 01629 014 416</span>
          </a>

          <a
            href="mailto:msadikjowel@gmail.com"
            className="hidden md:flex items-center gap-1 hover:text-[var(--color-secondary)] transition"
          >
            <FaEnvelope />
            contact@crc-bd.com
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 leading-none">

          <span className="hidden sm:flex items-center gap-1">
            <MdArrowForward className="text-[var(--color-secondary)]"/>
            FOLLOW US -
          </span>

          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition flex items-center"
          >
            <FaFacebookF />
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition flex items-center"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-secondary)] transition flex items-center"
          >
            <FaTwitter />
          </Link>

        </div>

      </div>
    </div>
  );
}