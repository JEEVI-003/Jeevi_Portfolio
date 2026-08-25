import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

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

export default function Hero() {
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
          BACKGROUND
      ================================================== */}

      

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
          min-h-[calc(100vh-80px)]
          w-full
          max-w-[1550px]
          grid-cols-1
          items-center
          gap-10
          px-5
          sm:px-7
          md:px-10
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
            order-2
            min-w-0
            w-full
            max-w-[1040px]
            md:order-1
          "
        >
          {/* Eyebrow */}

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
              STABLE NAME
          ================================================== */}

          <motion.h1
            variants={fromLeft}
            className="
              whitespace-nowrap
              font-display
              text-[3.9rem]
              font-bold
              leading-[0.92]
              tracking-[-0.06em]
              text-text-primary
              sm:text-[4.8rem]
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
              mt-5
              font-display
              text-2xl
              font-medium
              text-blue-glow
              sm:text-3xl
              md:text-4xl
              lg:text-[2.65rem]
            "
          >
            {profile.role}
          </motion.p>

          {/* =================================================
              TECHNOLOGY TYPING
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="mt-5 min-h-10"
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
              mt-7
              max-w-3xl
              text-lg
              font-medium
              leading-[1.65]
              tracking-[-0.01em]
              text-slate-300
              sm:text-xl
              md:text-[1.35rem]
              md:leading-[1.7]
            "
          >
            Full-Stack Software Developer building secure backend systems with
            Java & Spring Boot — and cross-platform applications with Flutter.
          </motion.p>

          {/* =================================================
              CTA
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            {/* Explore My Work */}

            <a
              href="#projects"
              onClick={(event) => {
                event.preventDefault();

                document
                  .querySelector("#projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-xl
                bg-blue-600
                px-6
                py-3.5
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
                sm:px-7
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

            {/* Let's Build Together */}

            <a
  href="#contact"
  onClick={(event) => {
    event.preventDefault();

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className="
    inline-flex
    items-center
    gap-2
    rounded-xl
    border
    border-border-strong
    bg-white/[0.02]
    px-6
    py-3.5
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
    sm:px-7
    sm:text-base
  "
>
  Let&apos;s Build Together
</a>
          </motion.div>
                    {/* =================================================
              SOCIAL LINKS + INSTAGRAM + RESUME
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-4
            "
          >
            {/* LinkedIn */}

            <SocialLink
              href={social.linkedin}
              label="LinkedIn"
              icon={<LinkedinIcon size={18} />}
            />

            {/* GitHub */}

            <SocialLink
              href={social.github}
              label="GitHub"
              icon={<GithubIcon size={18} />}
            />

            {/* Instagram */}

            <SocialLink
              href="https://www.instagram.com/mr_jeevi_003?igsh=OWoxdjg5ejV0Mjlj"
              label="Instagram"
              instagram
              icon={
                <svg
                  width="18"
                  height="18"
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

            {/* Resume */}

            <a
              href="/resume.pdf"
              download="JEEVIKESH_S_N_Resume.pdf"
              aria-label="Download Resume"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-display
                text-sm
                font-medium
                text-text-secondary
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:text-blue-300
              "
            >
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border-subtle
                  bg-white/[0.02]
                  transition-all
                  duration-300
                  group-hover:border-blue-500/60
                  group-hover:bg-blue-500/5
                  group-hover:shadow-[0_8px_20px_-10px_rgba(59,130,246,0.8)]
                "
              >
                <FileDown
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </span>

              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* =================================================
            RIGHT SIDE — PHOTO
        ================================================== */}

        <motion.div
          variants={fromRight}
          className="
            order-1
            flex
            w-full
            items-center
            justify-end
            md:order-2
            lg:justify-self-end
          "
        >
          <div
            className="
              w-full
              max-w-[330px]
              sm:max-w-[360px]
              md:max-w-[390px]
              lg:max-w-[390px]
              xl:max-w-[420px]
            "
          >
            <ProfilePhoto
              src={profile.photo}
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
   SOCIAL LINK COMPONENT
========================================================= */

function SocialLink({
  href,
  label,
  icon,
  instagram = false,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`
        group
        inline-flex
        items-center
        gap-2
        font-display
        text-sm
        font-medium
        text-text-secondary
        transition-all
        duration-300
        hover:-translate-y-0.5
        ${
          instagram
            ? "hover:text-pink-300"
            : "hover:text-blue-300"
        }
      `}
    >
      <span
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-border-subtle
          bg-white/[0.02]
          transition-all
          duration-300
          ${
            instagram
              ? "group-hover:border-pink-500/50 group-hover:bg-pink-500/5 group-hover:shadow-[0_8px_20px_-10px_rgba(236,72,153,0.7)]"
              : "group-hover:border-blue-500/60 group-hover:bg-blue-500/5 group-hover:shadow-[0_8px_20px_-10px_rgba(59,130,246,0.8)]"
          }
        `}
      >
        {icon}
      </span>

      <span>{label}</span>
    </a>
  );
}