import { motion } from "framer-motion";

import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/portfolio";

/* =========================================================
   CARD CONTAINER ANIMATION
========================================================= */

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/* =========================================================
   REVEAL ANIMATION
========================================================= */

const reveal = {
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
   TECHNOLOGY DATA
========================================================= */

const techStack = [
  {
    name: "Java",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M8.6 3.2c1.7 1.4 2.1 2.4 1.2 3.8-.9 1.4-2.8 2-2.8 3.5 0 1.2 1.2 1.8 2.5 2.2-1.8.3-4.2-.3-4.2-2.2 0-2.3 3.4-3.5 3.4-5.6 0-.6-.1-1.1-.1-1.7Zm4.2 3.3c1.4 1.2 1.7 2.1 1 3.2-.7 1.1-2.2 1.5-2.2 2.6 0 .9 1 1.4 2 1.8-1.5.2-3.4-.2-3.4-1.8 0-1.8 2.6-2.8 2.6-4.5 0-.4 0-.8 0-1.3ZM6.7 15.6c0 1 1.4 1.4 4.8 1.4 3.7 0 5.8-.6 5.8-1.6 0-.6-.8-.9-1.9-1.1 1.9 0 3.8.3 3.8 1.6 0 2.1-5 2.5-8 2.5-3.3 0-6.5-.5-6.5-2.2 0-.8.8-1.4 2-1.7-.1.3 0 .7 0 1.1Zm.8 3.3c.8.7 2.5 1 4.8 1 2.9 0 5-.4 6-1.1-.2 1.6-3 2.4-6.1 2.4-2.8 0-5.2-.5-5.2-1.7 0-.2.1-.4.5-.6Z"
        />
      </svg>
    ),

    tone: "orange",
  },

  {
    name: "Spring Boot",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M11.9 2.2c-1.8 2.9-5.5 4.2-5.5 8.1 0 1.8 1 3.4 2.5 4.4-2.7-.5-4.8-2.8-4.8-5.6 0-2.5 1.8-4.4 4.3-5.5 1.5-.7 2.8-1.1 3.5-2.1ZM13.2 3c2.5 2.1 5.5 4.8 5.5 8.8 0 4.4-3.5 8-8 8-3.3 0-6.1-2-7.3-4.9 1.4 1.1 3.3 1.8 5.3 1.8 4.4 0 7.9-3.1 7.9-7 0-2.8-1.5-5.1-3.4-6.7Z"
        />
      </svg>
    ),

    tone: "green",
  },

  {
    name: "Flutter",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M5.2 12.2 12.9 4.5H21l-7.7 7.7h-8.1Zm0 0 5.1 5.1H18l-4.7-4.7-8.1 8.1H9l7.7-7.7-3.4-3.4-8.1 8.1Zm8.4 1 3.2-3.2 4.2 4.2-3.2 3.2-4.2-4.2Z"
        />
      </svg>
    ),

    tone: "cyan",
  },

  {
    name: "Dart",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M5 4h11l3.5 3.5v9L16 20H7l-3-3V8l3-4Zm2 2-1.7 1.7v8.5L8 18h7.2l1.3-1.3V8.3L15.3 6H7Zm2 2h5.8l1.4 1.4v5.2L15 16h-5l-1-1V9l1-1Z"
        />
      </svg>
    ),

    tone: "sky",
  },

  {
    name: "JavaScript",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="1.5"
          fill="currentColor"
        />

        <path
          fill="rgba(0,0,0,0.85)"
          d="M13 16.2c.4.7 1 1.1 1.8 1.1.8 0 1.3-.4 1.3-.9 0-.6-.5-.8-1.4-1.2l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.5 2.9-2.5 1.3 0 2.2.5 2.8 1.8l-1.5 1c-.3-.6-.7-.9-1.3-.9-.6 0-1 .3-1 .8 0 .5.3.7 1.1 1l.5.2c1.6.7 2.5 1.4 2.5 3s-1.3 2.7-3.2 2.7c-1.8 0-3-.9-3.6-2.1l1.6-1Zm-6.2-6.2h2v5.8c0 1.2.5 1.6 1.3 1.6.7 0 1.1-.4 1.1-1.4v-6h2v6.1c0 2-1.2 3.2-3.2 3.2-2.1 0-3.2-1.2-3.2-3.1V10Z"
        />
      </svg>
    ),

    tone: "yellow",
  },
];
/* =========================================================
   MORE TECHNOLOGIES
========================================================= */

techStack.push(
  {
    name: "React",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <ellipse
          cx="12"
          cy="12"
          rx="3"
          ry="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <ellipse
          cx="12"
          cy="12"
          rx="3"
          ry="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          transform="rotate(60 12 12)"
        />

        <ellipse
          cx="12"
          cy="12"
          rx="3"
          ry="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          transform="rotate(120 12 12)"
        />

        <circle
          cx="12"
          cy="12"
          r="1.8"
          fill="currentColor"
        />
      </svg>
    ),

    tone: "blue",
  },

  {
    name: "PostgreSQL",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M12 3.2c-4.1 0-6.9 1.9-6.9 5.9 0 2.3 1 4.1 2.8 5.2-.3 1.2-.2 2.4.5 3.1 1 1 2.6.7 3.8-.2.9.5 2 .8 3.1.8 2.7 0 4.6-1.5 4.6-3.8 1.6-1 2.6-2.7 2.6-4.7 0-4.4-3.1-6.3-10.5-6.3Zm1.4 9.2c-.7-1.1-1.8-1.7-3-1.7-1.2 0-2.1.6-2.5 1.4-1-.7-1.4-1.8-1.4-3 0-2.6 1.9-4 5.5-4 3.7 0 5.8 1.1 7 2.5-.5-.2-1-.3-1.5-.3-1.6 0-2.8.7-3.5 2-.6 1-.8 2-.6 3.1Zm-3.2 3.9c-.6.5-1.4.8-1.7.5-.3-.3-.2-.9.1-1.7.5.3 1 .6 1.6.8Zm3.1-.5c.7-.8.9-1.9.7-3.2.2-.7.6-1.2 1.1-1.6.2 1.5-.3 2.9-1.8 4.8Z"
        />
      </svg>
    ),

    tone: "violet",
  },

  {
    name: "MySQL",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M4 16c2.7-2.5 5.7-4.2 9.2-4.9 2.4-.5 4.5-1.5 5.8-3.5-.8 2.9-2.7 4.8-5.4 5.9-2 .8-4.2 1.3-6.2 2.5-1.1.6-2.1 1.3-3.4 2.2Zm7.1-8.7c1-.8 2-1.6 2.4-2.8 1.7 1.1 3.1 2.7 3.8 4.7-1.6-.8-3-1-4.8-.9-1.1.1-2.2.3-3.2.6.5-.6 1-1.1 1.8-1.6Z"
        />
      </svg>
    ),

    tone: "blue",
  },

  {
    name: "Git",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M20.8 11.5 12.5 3.2c-.7-.7-1.8-.7-2.5 0L8.3 4.9l2.1 2.1c.5-.2 1.2-.1 1.6.3.4.4.5 1 .3 1.6l2 2c.6-.2 1.2-.1 1.6.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-0.4-.4-.5-1-.3-1.6l-2-2v5.3c.2.1.3.2.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.4-.3.6-.4V9.6c-.2-.1-.4-.2-.6-.4-.4-.4-.5-1-.3-1.6L7.1 5.5l-3.4 3.4c-.7.7-.7 1.8 0 2.5l8.3 8.3c.7.7 1.8.7 2.5 0l6.3-6.3c.7-.7.7-1.8 0-2.4Z"
        />
      </svg>
    ),

    tone: "orange",
  },

  {
    name: "GitHub",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M12 2.8a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.5-1.3-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.5.1 2.7.7.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.3.3.5.8.5 1.7v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.8Z"
        />
      </svg>
    ),

    tone: "slate",
  },

  {
    name: "Postman",

    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />

        <path
          d="M7.5 13.5 11 10l6 6M10 10l4-1.5 2.5 2.5-1.5 4L10 10Zm1 0 3 3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    tone: "amber",
  }
);

/* =========================================================
   SKILLS SECTION
========================================================= */

export default function Skills() {
  const groups = Array.isArray(skillGroups)
    ? skillGroups.filter(
        (group) =>
          group &&
          typeof group.category === "string" &&
          Array.isArray(group.items) &&
          group.items.length > 0
      )
    : [];

  return (
    <section
      id="skills"
      className="
        relative
        w-full
        scroll-mt-24
        overflow-hidden
        bg-transparent
        pt-24
        pb-8
        md:pt-32
        md:pb-10
      "
    >
      {/* =================================================
          AMBIENT BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            right-0
            top-[18%]
            h-80
            w-80
            rounded-full
            bg-blue-600/[0.05]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[12%]
            left-[15%]
            h-72
            w-72
            rounded-full
            bg-cyan-500/[0.035]
            blur-3xl
          "
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          px-6
          md:px-10
        "
      >
        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Work With"
        />

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <motion.p
          variants={reveal}
          className="
            mt-6
            max-w-3xl
            text-base
            leading-7
            text-text-secondary
            sm:text-lg
          "
        >
          A practical technology stack focused on backend engineering,
          application development, mobile platforms, databases, and
          modern web technologies.
        </motion.p>

        {/* =================================================
            SKILL CARDS
        ================================================== */}

        {groups.length > 0 ? (
          <motion.div
            variants={container}
            className="
              mt-12
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {groups.map((group) => (
              <SkillCard
                key={group.category}
                category={group.category}
                items={group.items}
              />
            ))}
          </motion.div>
        ) : (
          <div
            className="
              mt-12
              rounded-2xl
              border
              border-border-subtle
              bg-surface/70
              p-6
              text-sm
              text-text-secondary
              backdrop-blur-md
            "
          >
            No skill data is available in{" "}
            <span className="font-mono text-blue-300">
              src/data/portfolio.js
            </span>
            .
          </div>
        )}

        {/* =================================================
            TECH STACK HEADING
        ================================================== */}

        <motion.div
          variants={reveal}
          className="mt-8"
        >
          <div className="mb-7">
            <div className="flex items-center gap-3">
              <span
                className="
                  h-px
                  w-8
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                "
              />

              <p
                className="
                  font-mono
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-blue-400
                  sm:text-sm
                "
              >
                Tech Stack
              </p>
            </div>

            <h3
              className="
                mt-3
                font-display
                text-3xl
                font-semibold
                tracking-[-0.035em]
                text-text-primary
                sm:text-4xl
                md:text-[2.7rem]
              "
            >
              The Stack Behind My Builds
            </h3>

            <p
              className="
                mt-3
                max-w-3xl
                text-base
                leading-7
                text-text-secondary
                sm:text-lg
                sm:leading-8
              "
            >
              Java, Spring Boot, Flutter, REST APIs, databases, and modern
              web technologies — the core tools I use to turn ideas into
              working applications.
            </p>
          </div>
        </motion.div>
      </motion.div>
            {/* =================================================
          FULL WIDTH TECH RAIL
      ================================================== */}

      <div
        className="
          relative
          left-1/2
          mt-2
          w-screen
          -translate-x-1/2
          overflow-hidden
          py-3
        "
      >
        {/* Rail line */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-1/2
            h-px
            -translate-y-1/2
            bg-gradient-to-r
            from-transparent
            via-blue-500/20
            to-transparent
          "
        />

        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-24
            bg-gradient-to-r
            from-bg
            to-transparent
          "
        />

        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-24
            bg-gradient-to-l
            from-bg
            to-transparent
          "
        />

        {/* Moving content */}

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            items-center
            gap-4
            px-10
            sm:gap-5
            sm:px-16
          "
        >
          {/* Duplicate list for seamless loop */}

          {[...techStack, ...techStack].map(
            (tech, index) => (
              <TechRailItem
                key={`${tech.name}-${index}`}
                tech={tech}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
/* =========================================================
   TECH RAIL ITEM
========================================================= */

function TechRailItem({ tech }) {
  const toneStyles = {
    orange:
      "border-orange-400/20 bg-orange-400/[0.035] text-orange-200 hover:border-orange-300/50 hover:bg-orange-400/[0.08] hover:shadow-[0_0_24px_rgba(251,146,60,0.14)]",

    green:
      "border-emerald-400/20 bg-emerald-400/[0.035] text-emerald-200 hover:border-emerald-300/50 hover:bg-emerald-400/[0.08] hover:shadow-[0_0_24px_rgba(52,211,153,0.14)]",

    cyan:
      "border-cyan-400/20 bg-cyan-400/[0.035] text-cyan-200 hover:border-cyan-300/50 hover:bg-cyan-400/[0.08] hover:shadow-[0_0_24px_rgba(34,211,238,0.14)]",

    blue:
      "border-blue-400/20 bg-blue-400/[0.035] text-blue-200 hover:border-blue-300/50 hover:bg-blue-400/[0.08] hover:shadow-[0_0_24px_rgba(96,165,250,0.14)]",

    sky:
      "border-sky-400/20 bg-sky-400/[0.035] text-sky-200 hover:border-sky-300/50 hover:bg-sky-400/[0.08] hover:shadow-[0_0_24px_rgba(56,189,248,0.14)]",

    yellow:
      "border-yellow-400/20 bg-yellow-400/[0.035] text-yellow-200 hover:border-yellow-300/50 hover:bg-yellow-400/[0.08] hover:shadow-[0_0_24px_rgba(250,204,21,0.14)]",

    violet:
      "border-violet-400/20 bg-violet-400/[0.035] text-violet-200 hover:border-violet-300/50 hover:bg-violet-400/[0.08] hover:shadow-[0_0_24px_rgba(167,139,250,0.14)]",

    amber:
      "border-amber-400/20 bg-amber-400/[0.035] text-amber-200 hover:border-amber-300/50 hover:bg-amber-400/[0.08] hover:shadow-[0_0_24px_rgba(251,191,36,0.14)]",

    slate:
      "border-slate-400/20 bg-slate-400/[0.035] text-slate-200 hover:border-slate-300/50 hover:bg-slate-400/[0.08] hover:shadow-[0_0_24px_rgba(148,163,184,0.12)]",
  };

  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      className={`
        group
        flex
        shrink-0
        items-center
        gap-3
        rounded-2xl
        border
        px-4
        py-3
        backdrop-blur-md
        transition-all
        duration-300
        sm:px-5
        sm:py-3.5
        ${toneStyles[tech.tone]}
      `}
    >
      {/* Technology icon */}

      <span
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-black/10
        "
      >
        {tech.icon}
      </span>

      {/* Technology name */}

      <span
        className="
          whitespace-nowrap
          font-display
          text-sm
          font-semibold
          tracking-wide
          text-text-secondary
          transition-colors
          duration-300
          group-hover:text-text-primary
          sm:text-base
        "
      >
        {tech.name}
      </span>
    </motion.div>
  );
}