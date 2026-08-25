import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Smartphone,
  Server,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { about } from "../data/portfolio";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 22,
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

const focusCards = [
  {
    title: "Backend Engineering",
    label: "SERVER SIDE",
    icon: Server,
    description:
      "Building backend services and REST APIs with Java and Spring Boot, with attention to clean structure and maintainable application logic.",
    tags: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Mobile Development",
    label: "APPLICATIONS",
    icon: Smartphone,
    description:
      "Developing cross-platform applications with Flutter and Dart, including mobile and TV-oriented application experiences.",
    tags: ["Flutter", "Dart", "Mobile", "TV"],
  },
  {
    title: "Data & Web",
    label: "APPLICATION LAYER",
    icon: Database,
    description:
      "Working with databases and web technologies to connect interfaces, application logic, APIs, and persistent data into usable products.",
    tags: ["PostgreSQL", "HTML", "CSS", "JavaScript"],
  },
];



export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        scroll-mt-24
        overflow-hidden
        bg-transparent
        py-24
        md:py-32
      "
    >
      {/* =========================================
          AMBIENT LIGHT
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[8%]
            top-[12%]
            h-80
            w-80
            rounded-full
            bg-blue-600/[0.05]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            bottom-[8%]
            right-[5%]
            h-72
            w-72
            rounded-full
            bg-cyan-500/[0.035]
            blur-[100px]
          "
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          md:px-10
          xl:px-12
        "
      >
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
        />

        {/* =========================================
            INTRO / STORY
        ========================================== */}

        <div
  className="
    mt-10
    grid
    gap-6
    sm:mt-12
    sm:gap-8
    lg:grid-cols-[0.78fr_1.22fr]
    lg:gap-10
  "
>
          {/* LEFT — PROFILE SUMMARY */}

          <motion.div
  variants={reveal}
  className="
    relative
    overflow-hidden
    rounded-[24px]
    border
    border-blue-500/15
    bg-surface/[0.68]
    p-5
    backdrop-blur-xl
    sm:rounded-[28px]
    sm:p-7
    lg:p-9
  "
>
            {/* Accent line */}

            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[2px]
                bg-gradient-to-b
                from-blue-400
                via-cyan-400/50
                to-transparent
              "
            />

            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              Software Engineer
            </p>

            <h3
  className="
    mt-3
    max-w-md
    font-display
    text-2xl
    font-semibold
    leading-[1.15]
    tracking-[-0.03em]
    text-text-primary
    sm:mt-4
    sm:text-3xl
    lg:text-4xl
  "
>
  Building practical software across backend and application
  development.
</h3>

            <p
  className="
    mt-5
    text-sm
    leading-6
    text-text-secondary
    sm:mt-6
    sm:text-base
    sm:leading-7
    lg:text-lg
    lg:leading-8
  "
>
  I’m a Software Engineer with hands-on internship experience in
  Flutter and Spring Boot development. My work is focused on
  building applications, backend services, REST APIs, database
  driven workflows, and user-facing software.
</p>

            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-3
              "
            >
              <StatBlock
                value="6 Months"
                label="Internship"
              />

              <StatBlock
                value="Flutter + Java"
                label="Core Stack"
              />

              <StatBlock
                value="Spring Boot"
                label="Backend"
              />

              <StatBlock
                value="REST APIs"
                label="API Development"
              />
            </div>
          </motion.div>

          {/* RIGHT — STORY */}

          <motion.div
  variants={reveal}
  className="
    rounded-[24px]
    border
    border-border-subtle
    bg-surface/[0.55]
    p-5
    backdrop-blur-xl
    sm:rounded-[28px]
    sm:p-7
    lg:p-10
  "
>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-blue-400
                  "
                >
                  My Story
                </p>

                <h3
                  className="
                    mt-2
                    font-display
                    text-2xl
                    font-semibold
                    text-text-primary
                    sm:text-3xl
                  "
                >
                  From learning to building
                </h3>
              </div>

              <div
                className="
                  hidden
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-blue-500/20
                  bg-blue-500/[0.05]
                  text-blue-400
                  sm:flex
                "
              >
                <Code2 size={18} />
              </div>
            </div>

<div className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
                {about.paragraphs?.slice(0, 3).map(
                (paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={reveal}
                    className="
                     text-sm
                     leading-6
                         text-text-secondary
                       sm:text-base
                      sm:leading-7
                      lg:text-lg
                       lg:leading-8
                        "
                  >
                    {paragraph}
                  </motion.p>
                )
              )}
            </div>

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-border-subtle
                bg-bg-alt/[0.45]
                p-5
              "
            >
              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-text-muted
                "
              >
                What I enjoy working on
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-text-secondary
                  sm:text-base
                "
              >
                Application development, backend services, API integration,
                database-backed workflows, authentication, and software that
                solves practical problems for users.
              </p>
            </div>
          </motion.div>
        </div>

       {/* =========================================
    CORE AREAS
========================================= */}

<motion.div
  variants={reveal}
  className="
  mt-12
  sm:mt-16
  lg:mt-20
"
>
  {/* =========================================
      CORE AREAS TOP ROW
  ========================================== */}

  <div
    className="
      px-1
      py-3
      sm:px-2
      sm:py-4
    "
  >
    <div
  className="
    flex
    flex-col
    gap-4
    sm:gap-5
    lg:flex-row
    lg:items-center
    lg:gap-10
  "
>
      {/* =====================================
          LEFT — STATIC CORE AREAS
      ====================================== */}

      <div
        className="
          flex
          shrink-0
          items-center
          gap-3
          lg:w-[210px]
        "
      >
        <span
          className="
            h-px
            w-8
            shrink-0
            bg-gradient-to-r
            from-blue-500
            to-cyan-400
            sm:w-10
          "
        />

        <p
          className="
            whitespace-nowrap
            font-mono
            text-xs
            font-semibold
            uppercase
            tracking-[0.28em]
            text-blue-400
            sm:text-sm
          "
        >
          Core Areas
        </p>
      </div>

      {/* =====================================
          RIGHT — MOVING TECH TRAIN
      ====================================== */}

      <div
        className="
          relative
          min-w-0
          flex-1
          overflow-hidden
        "
      >
        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-12
            bg-gradient-to-r
            from-bg
            via-bg/70
            to-transparent
            sm:w-16
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
            w-12
            bg-gradient-to-l
            from-bg
            via-bg/70
            to-transparent
            sm:w-16
          "
        />

        {/* Subtle center guide */}

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
            via-blue-500/10
            to-transparent
          "
        />

        {/* Moving row */}

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            relative
            z-10
            flex
            w-max
            flex-nowrap
            items-center
            gap-3
            py-2
            sm:gap-4
          "
        >
          {[
            {
              name: "Java",
              color:
                "border-orange-300/25 bg-orange-400/[0.04] text-orange-200 hover:border-orange-300/60 hover:bg-orange-400/[0.09] hover:shadow-[0_0_22px_rgba(251,146,60,0.18)]",
            },
            {
              name: "Spring Boot",
              color:
                "border-emerald-300/25 bg-emerald-400/[0.04] text-emerald-200 hover:border-emerald-300/60 hover:bg-emerald-400/[0.09] hover:shadow-[0_0_22px_rgba(52,211,153,0.18)]",
            },
            {
              name: "REST APIs",
              color:
                "border-blue-300/25 bg-blue-400/[0.04] text-blue-200 hover:border-blue-300/60 hover:bg-blue-400/[0.09] hover:shadow-[0_0_22px_rgba(96,165,250,0.18)]",
            },
            {
              name: "Flutter",
              color:
                "border-cyan-300/25 bg-cyan-400/[0.04] text-cyan-200 hover:border-cyan-300/60 hover:bg-cyan-400/[0.09] hover:shadow-[0_0_22px_rgba(34,211,238,0.18)]",
            },
            {
              name: "Dart",
              color:
                "border-sky-300/25 bg-sky-400/[0.04] text-sky-200 hover:border-sky-300/60 hover:bg-sky-400/[0.09] hover:shadow-[0_0_22px_rgba(56,189,248,0.18)]",
            },
            {
              name: "PostgreSQL",
              color:
                "border-violet-300/25 bg-violet-400/[0.04] text-violet-200 hover:border-violet-300/60 hover:bg-violet-400/[0.09] hover:shadow-[0_0_22px_rgba(167,139,250,0.18)]",
            },
            {
              name: "HTML",
              color:
                "border-rose-300/25 bg-rose-400/[0.04] text-rose-200 hover:border-rose-300/60 hover:bg-rose-400/[0.09] hover:shadow-[0_0_22px_rgba(251,113,133,0.18)]",
            },
            {
              name: "CSS",
              color:
                "border-indigo-300/25 bg-indigo-400/[0.04] text-indigo-200 hover:border-indigo-300/60 hover:bg-indigo-400/[0.09] hover:shadow-[0_0_22px_rgba(129,140,248,0.18)]",
            },
            {
              name: "JavaScript",
              color:
                "border-yellow-300/25 bg-yellow-400/[0.04] text-yellow-200 hover:border-yellow-300/60 hover:bg-yellow-400/[0.09] hover:shadow-[0_0_22px_rgba(250,204,21,0.18)]",
            },

            /* Duplicate set for seamless loop */

            {
              name: "Java",
              color:
                "border-orange-300/25 bg-orange-400/[0.04] text-orange-200 hover:border-orange-300/60 hover:bg-orange-400/[0.09] hover:shadow-[0_0_22px_rgba(251,146,60,0.18)]",
            },
            {
              name: "Spring Boot",
              color:
                "border-emerald-300/25 bg-emerald-400/[0.04] text-emerald-200 hover:border-emerald-300/60 hover:bg-emerald-400/[0.09] hover:shadow-[0_0_22px_rgba(52,211,153,0.18)]",
            },
            {
              name: "REST APIs",
              color:
                "border-blue-300/25 bg-blue-400/[0.04] text-blue-200 hover:border-blue-300/60 hover:bg-blue-400/[0.09] hover:shadow-[0_0_22px_rgba(96,165,250,0.18)]",
            },
            {
              name: "Flutter",
              color:
                "border-cyan-300/25 bg-cyan-400/[0.04] text-cyan-200 hover:border-cyan-300/60 hover:bg-cyan-400/[0.09] hover:shadow-[0_0_22px_rgba(34,211,238,0.18)]",
            },
            {
              name: "Dart",
              color:
                "border-sky-300/25 bg-sky-400/[0.04] text-sky-200 hover:border-sky-300/60 hover:bg-sky-400/[0.09] hover:shadow-[0_0_22px_rgba(56,189,248,0.18)]",
            },
            {
              name: "PostgreSQL",
              color:
                "border-violet-300/25 bg-violet-400/[0.04] text-violet-200 hover:border-violet-300/60 hover:bg-violet-400/[0.09] hover:shadow-[0_0_22px_rgba(167,139,250,0.18)]",
            },
            {
              name: "HTML",
              color:
                "border-rose-300/25 bg-rose-400/[0.04] text-rose-200 hover:border-rose-300/60 hover:bg-rose-400/[0.09] hover:shadow-[0_0_22px_rgba(251,113,133,0.18)]",
            },
            {
              name: "CSS",
              color:
                "border-indigo-300/25 bg-indigo-400/[0.04] text-indigo-200 hover:border-indigo-300/60 hover:bg-indigo-400/[0.09] hover:shadow-[0_0_22px_rgba(129,140,248,0.18)]",
            },
            {
              name: "JavaScript",
              color:
                "border-yellow-300/25 bg-yellow-400/[0.04] text-yellow-200 hover:border-yellow-300/60 hover:bg-yellow-400/[0.09] hover:shadow-[0_0_22px_rgba(250,204,21,0.18)]",
            },
          ].map((tech, index) => (
            <motion.span
              key={`${tech.name}-${index}`}
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              className={`
  shrink-0
  rounded-full
  border
  px-3
  py-1.5
  font-mono
  text-[10px]
  font-semibold
  tracking-wide
  backdrop-blur-md
  transition-all
  duration-300
  sm:px-4
  sm:py-2
  sm:text-xs
  lg:px-5
  lg:py-2.5
  lg:text-sm
  ${tech.color}
`}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  </div>

  {/* =========================================
      MAIN HEADING
  ========================================== */}

  <h3
  className="
    mt-6
    font-display
    text-2xl
    font-semibold
    tracking-[-0.035em]
    text-text-primary
    sm:mt-8
    sm:text-3xl
    md:text-[2.6rem]
  "
>
  What I work with
</h3>

  {/* =========================================
      CORE AREA CARDS
  ========================================== */}

  <div
    className="
      mt-8
      grid
      gap-5
      md:grid-cols-2
      lg:grid-cols-3
    "
  >
    {focusCards.map((card, index) => {
      const Icon = card.icon;

      return (
        <motion.article
          key={card.title}
          variants={reveal}
          whileHover={{
            y: -6,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
  group
  relative
  flex
  min-h-[270px]
  flex-col
  overflow-hidden
  rounded-[24px]
  border
  border-border-subtle
  bg-surface/[0.68]
  p-5
  backdrop-blur-xl
  transition-all
  duration-300
  hover:border-blue-500/45
  hover:bg-surface/[0.82]
  hover:shadow-[0_24px_70px_-32px_rgba(37,99,235,0.7)]
  sm:min-h-[300px]
  sm:p-6
  lg:min-h-[330px]
  lg:rounded-[26px]
  lg:p-7
"
>
          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-blue-500/0
              blur-3xl
              transition-all
              duration-500
              group-hover:bg-blue-500/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-24
              w-44
              -translate-x-1/2
              rounded-full
              bg-cyan-400/0
              blur-3xl
              transition-all
              duration-500
              group-hover:bg-cyan-400/[0.04]
            "
          />

          {/* Card number */}

          <span
            className="
              absolute
              right-6
              top-6
              font-mono
              text-[10px]
              tracking-[0.2em]
              text-text-muted/60
            "
          >
            0{index + 1}
          </span>

          {/* Icon */}

          <div
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-blue-500/20
              bg-blue-500/[0.05]
              text-blue-400
              transition-all
              duration-300
              group-hover:border-blue-400/40
              group-hover:bg-blue-500/[0.08]
              group-hover:text-cyan-300
              group-hover:shadow-[0_10px_28px_-14px_rgba(59,130,246,0.9)]
            "
          >
            <Icon
              size={21}
              strokeWidth={1.7}
            />
          </div>

          {/* Label */}

          <p
  className="
    relative
    mt-5
    font-mono
    text-[10px]
    uppercase
    tracking-[0.24em]
    text-text-muted
    sm:mt-7
  "
>
  {card.label}
</p>

          {/* Title */}

          <h4
  className="
    relative
    mt-2
    font-display
    text-xl
    font-semibold
    tracking-[-0.025em]
    text-text-primary
    sm:text-2xl
  "
>
  {card.title}
</h4>

          {/* Description */}

          <p
            className="
              relative
              mt-4
              text-sm
              leading-6
              text-text-secondary
              sm:text-base
              sm:leading-7
            "
          >
            {card.description}
          </p>

          {/* Technology tags */}

          <div
            className="
              relative
              mt-auto
              flex
              flex-wrap
              gap-2
              pt-7
            "
          >
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-lg
                  border
                  border-border-subtle
                  bg-bg-alt/[0.55]
                  px-2.5
                  py-1.5
                  font-mono
                  text-[11px]
                  text-text-secondary
                  transition-all
                  duration-200
                  group-hover:border-blue-500/25
                  group-hover:text-text-primary
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      );
    })}
  </div>
</motion.div>

    



  

  

        {/* =========================================
            EXPERIENCE SNAPSHOT
        ========================================== */}

        <motion.div
          variants={reveal}
          className="
            mt-12
            grid
            gap-6
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* Internship */}

          <div
  className="
    relative
    overflow-hidden
    rounded-3xl
    border
    border-blue-500/20
    bg-gradient-to-br
    from-blue-500/[0.08]
    via-surface/[0.68]
    to-surface/[0.48]
    p-5
    backdrop-blur-xl
    sm:p-7
    lg:p-9
  "
>
            <div
              className="
                absolute
                right-0
                top-0
                h-40
                w-40
                rounded-full
                bg-blue-500/[0.06]
                blur-3xl
              "
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-blue-400
                    "
                  >
                    Professional Experience
                  </p>

                  <h3
                    className="
                      mt-2
                      font-display
                      text-2xl
                      font-semibold
                      text-text-primary
                      sm:text-3xl
                    "
                  >
                    RGreen Technologies
                  </h3>

                  <p className="mt-2 text-sm text-blue-300">
                    Flutter &amp; Spring Boot Developer Intern
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-blue-400/20
                    bg-blue-500/[0.05]
                    px-3
                    py-1.5
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-blue-300
                  "
                >
                  6 Months
                </span>
              </div>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-text-secondary
                  sm:text-lg
                  sm:leading-8
                "
              >
                Gained practical experience in Flutter and Spring Boot
                development, working across mobile applications, backend
                services, REST APIs, application workflows, and
                database-backed development.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm text-text-muted">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                Madurai
              </div>
            </div>
          </div>

          {/* Current Focus */}

          <div
            className="
              rounded-3xl
              border
              border-border-subtle
              bg-surface/[0.65]
              p-7
              backdrop-blur-xl
              sm:p-9
            "
          >
            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              Current Focus
            </p>

            <h3
              className="
                mt-2
                font-display
                text-2xl
                font-semibold
                text-text-primary
                sm:text-3xl
              "
            >
              Becoming a stronger full-stack engineer
            </h3>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-text-secondary
                sm:text-lg
              "
            >
              I’m continuing to strengthen my fundamentals in Java,
              Spring Boot, REST APIs, Flutter, databases, application
              architecture, and software engineering practices while
              building real-world projects.
            </p>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Spring Boot",
                  "REST APIs",
                  "Flutter",
                  "Dart",
                  "PostgreSQL",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border
                      border-border-subtle
                      bg-bg-alt/[0.6]
                      px-3
                      py-1.5
                      font-mono
                      text-xs
                      text-text-secondary
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#projects"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-blue-300
                transition-colors
                duration-200
                hover:text-white
              "
            >
              Explore my work

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatBlock({ value, label }) {
  return (
    <div
      className="
        min-w-0
        rounded-xl
        border
        border-border-subtle
        bg-bg-alt/[0.55]
        p-3.5
        sm:rounded-2xl
        sm:p-4
      "
    >
      <p
        className="
          truncate
          font-display
          text-sm
          font-semibold
          text-text-primary
          sm:text-base
          lg:text-lg
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          font-mono
          text-[9px]
          uppercase
          tracking-[0.12em]
          text-text-muted
          sm:text-[10px]
          sm:tracking-[0.14em]
        "
      >
        {label}
      </p>
    </div>
  );
}