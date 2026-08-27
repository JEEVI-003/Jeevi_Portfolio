import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  FileDown,
  Mail,
} from "lucide-react";

import {
  GithubIcon,
  LinkedinIcon,
} from "../components/BrandIcons";

import TypingTechnologies from "../components/TypingTechnologies";
import ProfilePhoto from "../components/ProfilePhoto";

import {
  profile,
  heroTechnologies,
  social,
} from "../data/portfolio";

/* =========================================================
   CONTAINER ANIMATION
========================================================= */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/* =========================================================
   FADE UP
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   FROM LEFT
========================================================= */

const fromLeft = {
  hidden: {
    opacity: 0,
    x: -25,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   FROM RIGHT
========================================================= */

const fromRight = {
  hidden: {
    opacity: 0,
    x: 35,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const emailAddress =
    social?.email ||
    profile?.email ||
    "";
      return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-svh
        w-full
        items-center
        overflow-hidden
        bg-transparent
        pb-16
        pt-24
        md:pt-20
      "
    >
      {/* =================================================
          MAIN HERO GRID
      ================================================== */}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[calc(100svh-72px)]
          w-full
          max-w-[1550px]
          grid-cols-1
          items-center
          gap-10
          px-5
          pt-8
          pb-10
          sm:gap-12
          sm:px-7
          sm:pt-10
          sm:pb-12
          md:min-h-[calc(100vh-80px)]
          md:px-10
          md:pt-0
          md:pb-0
          lg:grid-cols-[minmax(0,1fr)_390px]
          lg:gap-14
          lg:px-8
          xl:grid-cols-[minmax(0,1fr)_430px]
          xl:gap-16
          xl:px-10
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            order-1
            min-w-0
            w-full
            max-w-[1040px]
            md:order-1
          "
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.p
            variants={fadeUp}
            className="
              mb-5
              font-mono
              text-xs
              uppercase
              tracking-[0.28em]
              text-text-muted
              sm:text-sm
            "
          >
            Welcome — I build software
          </motion.p>

          {/* =================================================
              NAME
          ================================================== */}

          <motion.h1
            variants={fromLeft}
            className="
              font-display
              text-[3.15rem]
              font-bold
              leading-[0.92]
              tracking-[-0.055em]
              text-text-primary
              sm:text-[4.4rem]
              md:text-[5.8rem]
              lg:text-[6.6rem]
              xl:text-[7.4rem]
              2xl:text-[8rem]
            "
          >
            JEEVIKESH S N
          </motion.h1>

          {/* =================================================
              ROLE
          ================================================== */}

          <motion.p
            variants={fromLeft}
            className="
              mt-4
              font-display
              text-xl
              font-medium
              leading-tight
              text-blue-glow
              sm:mt-5
              sm:text-3xl
              md:text-4xl
              lg:text-[2.65rem]
            "
          >
            {profile.role}
          </motion.p>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-4
              min-h-8
              sm:mt-5
              sm:min-h-10
            "
          >
            <TypingTechnologies
              technologies={heroTechnologies}
            />
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            variants={fadeUp}
            className="
              mt-6
              max-w-3xl
              text-base
              font-medium
              leading-7
              tracking-[-0.005em]
              text-slate-300
              sm:mt-7
              sm:text-xl
              sm:leading-[1.65]
              md:text-[1.35rem]
              md:leading-[1.7]
            "
          >
            Full-Stack Software Developer building secure
            backend systems with Java & Spring Boot — and
            cross-platform applications with Flutter.
          </motion.p>

          {/* =================================================
              CTA
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-8
              grid
              grid-cols-1
              gap-3
              sm:flex
              sm:flex-wrap
              sm:items-center
              sm:gap-4
              md:mt-9
            "
          >
            {/* =================================================
                EXPLORE MY WORK
            ================================================== */}

            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();

                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-blue-600
                px-5
                py-3
                font-display
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_32px_-10px_rgba(37,99,235,0.7)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-500
                hover:shadow-[0_16px_40px_-10px_rgba(59,130,246,0.85)]
                sm:w-auto
                sm:px-7
                sm:py-3.5
                sm:text-base
              "
            >
              Explore My Work

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* =================================================
                LET'S BUILD TOGETHER
            ================================================== */}

            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();

                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-border-strong
                bg-white/[0.02]
                px-5
                py-3
                font-display
                text-sm
                font-semibold
                text-text-primary
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/60
                hover:bg-blue-500/5
                hover:text-blue-300
                sm:w-auto
                sm:px-7
                sm:py-3.5
                sm:text-base
              "
            >
              Let&apos;s Build Together
            </a>
          </motion.div>
                    {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-7
              w-full
            "
          >
            {/* =================================================
                FOUR APP ICONS

                MOBILE:
                ONE SINGLE ROW

                DESKTOP:
                SAME ROW WITH LABELS
            ================================================== */}

            <div
              className="
                grid
                w-full
                grid-cols-4
                items-center
                gap-3

                sm:gap-4

                md:flex
                md:w-max
                md:flex-nowrap
                md:items-center
                md:gap-5

                lg:gap-6
              "
            >
              {/* =================================================
                  LINKEDIN
              ================================================== */}

              <SocialLink
                href={social.linkedin}
                label="LinkedIn"
                icon={
                  <LinkedinIcon
                    size={22}
                  />
                }
              />

              {/* =================================================
                  GITHUB
              ================================================== */}

              <SocialLink
                href={social.github}
                label="GitHub"
                icon={
                  <GithubIcon
                    size={22}
                  />
                }
              />

              {/* =================================================
                  INSTAGRAM
              ================================================== */}

              <SocialLink
                href="https://www.instagram.com/mr_jeevi_003?igsh=OWoxdjg5ejV0Mjlj"
                label="Instagram"
                instagram
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.8"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                }
              />

              {/* =================================================
                  EMAIL
              ================================================== */}

              <EmailLink
                email={emailAddress}
              />

              {/* =================================================
                  RESUME

                  MOBILE:
                  FULL WIDTH SECOND ROW

                  DESKTOP:
                  SAME SINGLE ROW
              ================================================== */}

              <div
                className="
                  col-span-4
                  mt-5
                  w-full

                  md:col-span-auto
                  md:mt-0
                  md:ml-1
                  md:w-auto
                "
              >
                <ResumeLink />
              </div>
            </div>
          </motion.div>
        </div>
                {/* =================================================
            RIGHT SIDE — PHOTO
        ================================================== */}

        <motion.div
          variants={fromRight}
          className="
            order-2
            flex
            w-full
            items-center
            justify-center
            md:order-2
            lg:justify-self-end
          "
        >
          <div
            className="
              w-full
              max-w-[280px]
              sm:max-w-[320px]
              md:max-w-[390px]
              lg:max-w-[390px]
              xl:max-w-[420px]
            "
          >
            <ProfilePhoto
              name={profile.name}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* =================================================
          BOTTOM FADE
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-32
          w-full
          bg-gradient-to-t
          from-bg
          to-transparent
        "
      />
    </section>
  );
}
/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  label,
  icon,
  instagram = false,
}) {
  const [active, setActive] =
    useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={() => {
        setActive(true);
      }}
      className="
        group
        flex
        w-full
        min-w-0
        shrink-0
        items-center
        justify-center
        md:w-auto
      "
    >
      <motion.span
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          scale: active ? 1.02 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={`
          flex
          h-12
          w-full
          min-w-0
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          px-2
          transition-all
          duration-300

          ${
            active
              ? instagram
                ? "border-pink-300/60 bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-orange-400/15 text-white shadow-[0_0_20px_-8px_rgba(236,72,153,0.85)]"
                : "border-cyan-300/45 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/10 text-white shadow-[0_0_20px_-9px_rgba(34,211,238,0.75)]"
              : instagram
                ? "border-white/[0.10] bg-white/[0.025] text-text-primary hover:border-pink-400/50 hover:bg-pink-500/[0.06] hover:text-pink-200"
                : "border-white/[0.10] bg-white/[0.025] text-text-primary hover:border-blue-400/50 hover:bg-blue-500/[0.06] hover:text-blue-200"
          }

          md:h-10
          md:w-auto
          md:min-w-0
          md:justify-start
          md:px-3
        `}
      >
        {/* =================================================
            ICON
        ================================================== */}

        <span
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
          "
        >
          {icon}
        </span>

        {/* =================================================
            DESKTOP NAME
        ================================================== */}

        <span
          className="
            hidden
            whitespace-nowrap
            font-display
            text-sm
            font-medium
            text-current
            md:inline
          "
        >
          {label}
        </span>
      </motion.span>
    </a>
  );
}
/* =========================================================
   EMAIL LINK
========================================================= */

function EmailLink({
  email,
}) {
  const [active, setActive] =
    useState(false);

  const hasEmail =
    Boolean(email);

  return (
    <a
      href={
        hasEmail
          ? `mailto:${email}`
          : "#"
      }
      aria-label="Email"
      onClick={(event) => {
        if (!hasEmail) {
          event.preventDefault();
        }

        setActive(true);
      }}
      className="
        group
        flex
        w-full
        min-w-0
        shrink-0
        items-center
        justify-center
        md:w-auto
      "
    >
      <motion.span
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          scale: active ? 1.02 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className={`
          flex
          h-12
          w-full
          min-w-0
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          px-2
          transition-all
          duration-300

          ${
            active
              ? "border-cyan-300/45 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/10 text-white shadow-[0_0_20px_-8px_rgba(34,211,238,0.75)]"
              : "border-white/[0.10] bg-white/[0.025] text-text-primary hover:border-blue-400/50 hover:bg-blue-500/[0.06] hover:text-blue-200"
          }

          md:h-10
          md:w-auto
          md:px-3
          md:justify-start
        `}
      >
        <span
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
          "
        >
          <Mail
            size={21}
          />
        </span>

        {/* Desktop name */}

        <span
          className="
            hidden
            whitespace-nowrap
            font-display
            text-sm
            font-medium
            text-current
            md:inline
          "
        >
          Email
        </span>
      </motion.span>
    </a>
  );
}
/* =========================================================
   RESUME LINK
========================================================= */

function ResumeLink() {
  return (
    <a
      href="/assets/JEEVIKESH_S_N_Resume.pdf"
      download="JEEVIKESH_S_N_Resume.pdf"
      aria-label="Download Resume"
      className="
        group
        flex
        w-full
        min-w-0
        shrink-0
        items-center
        justify-center
        md:w-auto
      "
    >
      <motion.span
        whileHover={{
          y: -1,
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="
          relative
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-3
          overflow-hidden
          rounded-xl
          border
          border-cyan-300/50
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-violet-500
          px-4
          text-white
          shadow-[0_10px_30px_-10px_rgba(34,211,238,0.65)]
          transition-all
          duration-300

          hover:border-cyan-200
          hover:shadow-[0_14px_35px_-8px_rgba(34,211,238,0.8)]

          md:h-10
          md:w-auto
          md:px-4
        "
      >
        {/* =================================================
            SHINE EFFECT
        ================================================== */}

        <span
          className="
            pointer-events-none
            absolute
            -left-10
            top-0
            h-full
            w-8
            -skew-x-12
            bg-white/20
            blur-sm
            transition-transform
            duration-700
            group-hover:translate-x-[220px]
          "
        />

        {/* =================================================
            DOWNLOAD ICON
        ================================================== */}

        <FileDown
          size={21}
          className="
            relative
            z-10
            shrink-0
            transition-transform
            duration-300
            group-hover:translate-y-0.5
          "
        />

        {/* =================================================
            TEXT
        ================================================== */}

        <span
          className="
            relative
            z-10
            whitespace-nowrap
            font-display
            text-sm
            font-semibold
            text-white
          "
        >
          Resume
        </span>
      </motion.span>
    </a>
  );
}