import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact, profile } from "../data/portfolio";

const instagramUrl =
  "https://www.instagram.com/mr_jeevi_003?igsh=OWoxdjg5ejV0Mjlj";
  export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const phoneHref = contact.phone
    ? `tel:${contact.phone.replace(/\s+/g, "")}`
    : "#";

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-border-subtle
        bg-transparent
      "
    >
      {/* =========================================
          AMBIENT FOOTER GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            left-[10%]
            top-0
            h-32
            w-64
            rounded-full
            bg-blue-500/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[15%]
            h-36
            w-72
            rounded-full
            bg-cyan-500/[0.025]
            blur-3xl
          "
        />
      </div>

      {/* =========================================
          FOOTER MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-6
          px-6
          py-7
          sm:px-8
          md:grid-cols-[1fr_auto_1fr]
          md:gap-8
          md:px-10
          md:py-8
          xl:px-12
        "
      >
        {/* =========================================
            LEFT — NAME
        ========================================== */}

        <div
          className="
            w-full
            shrink-0
            text-left
            md:w-auto
            md:justify-self-start
          "
        >
          <p
            className="
              font-display
              text-base
              font-semibold
              tracking-tight
              text-text-primary
              sm:text-lg
              md:text-xl
            "
          >
            {profile.name}
            <span className="text-blue-400">.</span>
          </p>

          <p
            className="
              mt-1
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-text-muted
              sm:text-[10px]
            "
          >
            {profile.role}
          </p>
        </div>
                {/* =========================================
            CENTER — SOCIAL / CONTACT BUTTONS
        ========================================== */}

        <div
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-start
            gap-2
            md:w-auto
            md:justify-center
          "
        >
          {/* LinkedIn */}

          <ExpandableLink
            href={contact.linkedin}
            label="LinkedIn"
            icon={<LinkedinIcon size={17} />}
            accent="blue"
            external
          />

          {/* GitHub */}

          <ExpandableLink
            href={contact.github}
            label="GitHub"
            icon={<GithubIcon size={17} />}
            accent="violet"
            external
          />

          {/* Instagram */}

          <ExpandableLink
            href={instagramUrl}
            label="Instagram"
            icon={<InstagramIcon />}
            accent="pink"
            external
          />

          {/* Email */}

          <ExpandableLink
            href={`mailto:${contact.email}`}
            label="Email"
            icon={<Mail size={17} />}
            accent="cyan"
          />

          {/* Call */}

          <ExpandableLink
            href={phoneHref}
            label="Call"
            icon={<Phone size={17} />}
            accent="emerald"
          />
        </div>

        {/* =========================================
            RIGHT — COPYRIGHT + GO TO TOP
        ========================================== */}

        <div
          className="
            flex
            w-full
            flex-wrap
            items-center
            justify-start
            gap-3
            md:w-auto
            md:justify-self-end
            md:gap-4
          "
        >
          <p
            className="
              whitespace-nowrap
              text-[10px]
              text-text-muted
              sm:text-xs
            "
          >
            © {new Date().getFullYear()} {profile.name}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Go to top"
            title="Go to top"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/40
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-4
              py-2.5
              font-display
              text-sm
              font-semibold
              tracking-wide
              text-white
              shadow-[0_10px_30px_-12px_rgba(59,130,246,0.8)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:from-blue-500
              hover:to-cyan-400
              hover:shadow-[0_14px_36px_-10px_rgba(34,211,238,0.7)]
              sm:px-5
            "
          >
            <span>Go to Top</span>

            <ArrowUp
              size={16}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
/* =========================================================
   EXPANDABLE SOCIAL / CONTACT LINK
========================================================= */

function ExpandableLink({
  href,
  label,
  icon,
  accent,
  external = false,
}) {
  const accentStyles = {
    blue: {
      border: "hover:border-blue-400/50",
      bg: "hover:bg-blue-500/[0.07]",
      text: "group-hover:text-blue-300",
      glow:
        "hover:shadow-[0_12px_30px_-15px_rgba(59,130,246,0.8)]",
    },

    violet: {
      border: "hover:border-violet-400/50",
      bg: "hover:bg-violet-500/[0.07]",
      text: "group-hover:text-violet-300",
      glow:
        "hover:shadow-[0_12px_30px_-15px_rgba(167,139,250,0.8)]",
    },

    pink: {
      border: "hover:border-pink-400/50",
      bg: "hover:bg-pink-500/[0.07]",
      text: "group-hover:text-pink-300",
      glow:
        "hover:shadow-[0_12px_30px_-15px_rgba(236,72,153,0.75)]",
    },

    cyan: {
      border: "hover:border-cyan-400/50",
      bg: "hover:bg-cyan-500/[0.07]",
      text: "group-hover:text-cyan-300",
      glow:
        "hover:shadow-[0_12px_30px_-15px_rgba(34,211,238,0.8)]",
    },

    emerald: {
      border: "hover:border-emerald-400/50",
      bg: "hover:bg-emerald-500/[0.07]",
      text: "group-hover:text-emerald-300",
      glow:
        "hover:shadow-[0_12px_30px_-15px_rgba(52,211,153,0.75)]",
    },
  };

  const style =
    accentStyles[accent] ?? accentStyles.blue;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={`
        group
        inline-flex
        h-10
        w-10
        shrink-0
        items-center
        overflow-hidden
        rounded-xl
        border
        border-border-subtle
        bg-surface/[0.35]
        text-text-secondary
        backdrop-blur-md
        transition-all
        duration-300
        hover:w-[112px]
        ${style.border}
        ${style.bg}
        ${style.glow}
        sm:hover:w-[122px]
      `}
    >
      {/* Icon */}

      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
        "
      >
        {icon}
      </span>

      {/* Text */}

      <span
        className={`
          whitespace-nowrap
          pr-3
          font-mono
          text-[11px]
          font-semibold
          opacity-0
          transition-all
          duration-200
          group-hover:opacity-100
          ${style.text}
        `}
      >
        {label}
      </span>
    </a>
  );
}

/* =========================================================
   INSTAGRAM ICON
========================================================= */

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}