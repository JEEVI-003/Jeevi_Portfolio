import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
  Code2,
  CheckCircle2,
  Trophy,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const responsibilities = [
  "Developed and maintained cross-platform application features using Flutter and Dart.",
  "Worked on backend application development using Java and Spring Boot.",
  "Integrated and worked with REST APIs across application workflows.",
  "Worked with database-backed application functionality and data flows.",
  "Collaborated across mobile and backend development tasks to support application requirements.",
];

const achievements = [
  "Gained hands-on experience working across both mobile and backend development.",
  "Contributed to practical application development using Flutter and Spring Boot.",
  "Strengthened experience with REST API integration and application workflows.",
  "Built a stronger understanding of how frontend, backend, APIs, and databases work together.",
];

const technologies = [
  "Flutter",
  "Dart",
  "Java",
  "Spring Boot",
  "REST APIs",
];

export default function Experience() {
  return (
    <section
      id="experience"
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
      {/* Ambient light */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[8%]
            top-[12%]
            h-80
            w-80
            rounded-full
            bg-blue-600/[0.06]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[8%]
            h-72
            w-72
            rounded-full
            bg-cyan-500/[0.04]
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
          eyebrow="Experience"
          title="My Professional Journey"
        />

        {/* =========================================
            TIMELINE
        ========================================== */}

        <div className="relative mt-14">
          {/* Timeline line */}

          <div
            className="
              absolute
              left-[11px]
              top-8
              hidden
              h-[calc(100%-40px)]
              w-px
              bg-gradient-to-b
              from-blue-500
              via-blue-500/30
              to-transparent
              md:block
            "
          />

          {/* Timeline dot */}

          <div
            className="
              absolute
              left-0
              top-8
              hidden
              h-[23px]
              w-[23px]
              items-center
              justify-center
              rounded-full
              border
              border-blue-400/50
              bg-bg
              md:flex
            "
          >
            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-blue-400
                shadow-[0_0_15px_rgba(59,130,246,0.9)]
              "
            />
          </div>

          {/* Experience item */}

          <motion.article
            variants={reveal}
            className="
              relative
              md:ml-12
            "
          >
            {/* Main experience card */}

            <div
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-border-subtle
                bg-surface/[0.68]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-blue-500/35
                hover:shadow-[0_25px_70px_-35px_rgba(37,99,235,0.7)]
              "
            >
              {/* =====================================
                  EXPERIENCE HEADER
              ====================================== */}

              <div
                className="
                  border-b
                  border-border-subtle
                  p-7
                  sm:p-9
                  lg:p-10
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-6
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                  "
                >
                  <div className="min-w-0">
                    {/* Company label */}

                    <div className="flex items-center gap-3">
                      <BriefcaseBusiness
                        size={17}
                        className="text-blue-400"
                      />

                      <p
                        className="
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          text-blue-400
                          sm:text-xs
                        "
                      >
                        RGreen Technologies
                      </p>
                    </div>

                    {/* Role */}

                    <h3
                      className="
                        mt-4
                        font-display
                        text-2xl
                        font-semibold
                        tracking-[-0.025em]
                        text-text-primary
                        sm:text-3xl
                        lg:text-4xl
                      "
                    >
                      Flutter &amp; Spring Boot Developer Intern
                    </h3>

                    {/* Location */}

                    <div
                      className="
                        mt-4
                        flex
                        flex-wrap
                        items-center
                        gap-x-5
                        gap-y-2
                        text-sm
                        text-text-muted
                      "
                    >
                      <span className="inline-flex items-center gap-2">
                        <MapPin
                          size={15}
                          className="text-blue-400"
                        />
                        Madurai, Tamil Nadu
                      </span>
                    </div>
                  </div>

                  {/* Duration */}

                  <div
                    className="
                      shrink-0
                      rounded-2xl
                      border
                      border-blue-500/20
                      bg-blue-500/[0.04]
                      px-4
                      py-3
                    "
                  >
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={15}
                        className="text-blue-400"
                      />

                      <span
                        className="
                          font-mono
                          text-xs
                          font-medium
                          text-text-secondary
                        "
                      >
                        December — June
                      </span>
                    </div>

                    <p
                      className="
  rounded-full
  border
  border-blue-400/25
  bg-blue-500/[0.06]
  px-3
  py-1.5
  font-mono
  text-[10px]
  uppercase
  tracking-[0.15em]
  text-blue-200
"
                    >
                      6 Months
                    </p>
                  </div>
                </div>

                {/* Role summary */}

                <p
                  className="
                    mt-7
                    max-w-4xl
                    text-base
                    leading-7
                    text-text-secondary
                    sm:text-lg
                    sm:leading-8
                  "
                >
                  Worked across Flutter and Spring Boot development,
                  contributing to mobile application features, backend
                  services, REST API integration, application workflows,
                  and database-backed functionality.
                </p>
              </div>

              

              {/* =====================================
    RESPONSIBILITIES + ACHIEVEMENTS
====================================== */}

<div
  className="
    grid
    divide-y
    divide-border-subtle
    lg:grid-cols-2
    lg:divide-x
    lg:divide-y-0
  "
>
  {/* =====================================
      RESPONSIBILITIES
  ====================================== */}

  <div
    className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-blue-500/[0.045]
      via-transparent
      to-transparent
      p-7
      sm:p-9
    "
  >
    {/* Accent glow */}

    <div
      className="
        pointer-events-none
        absolute
        -right-16
        -top-16
        h-40
        w-40
        rounded-full
        bg-blue-500/[0.08]
        blur-3xl
      "
    />

    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-blue-400/25
            bg-blue-500/[0.07]
            text-blue-300
            shadow-[0_0_24px_-12px_rgba(59,130,246,0.8)]
          "
        >
          <Code2
            size={19}
            strokeWidth={1.8}
          />
        </div>

        <div>
          <p
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.24em]
              text-blue-400
            "
          >
            Responsibilities
          </p>

          <h4
            className="
              mt-1
              font-display
              text-xl
              font-semibold
              text-text-primary
              sm:text-2xl
            "
          >
            What I worked on
          </h4>
        </div>
      </div>

      <ul className="mt-8 space-y-4">
        {responsibilities.map((item, index) => (
          <motion.li
            key={item}
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.7,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.06,
            }}
            className="
              group
              flex
              items-start
              gap-3
              text-sm
              leading-6
              text-text-secondary
              sm:text-base
            "
          >
            <span
              className="
                mt-[8px]
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-blue-400
                shadow-[0_0_12px_rgba(59,130,246,0.8)]
                transition-all
                duration-200
                group-hover:scale-125
                group-hover:bg-cyan-300
              "
            />

            <span className="transition-colors duration-200 group-hover:text-text-primary">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  </div>

  {/* =====================================
      KEY ACHIEVEMENTS
  ====================================== */}

  <div
    className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-cyan-400/[0.035]
      via-transparent
      to-purple-500/[0.025]
      p-7
      sm:p-9
    "
  >
    {/* Accent glow */}

    <div
      className="
        pointer-events-none
        absolute
        -right-16
        top-0
        h-44
        w-44
        rounded-full
        bg-cyan-400/[0.06]
        blur-3xl
      "
    />

    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        left-1/2
        h-32
        w-40
        -translate-x-1/2
        rounded-full
        bg-purple-500/[0.05]
        blur-3xl
      "
    />

    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-300/25
            bg-cyan-400/[0.06]
            text-cyan-300
            shadow-[0_0_24px_-12px_rgba(34,211,238,0.8)]
          "
        >
          <Trophy
            size={19}
            strokeWidth={1.8}
          />
        </div>

        <div>
          <p
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.24em]
              text-cyan-300
            "
          >
            Key Achievements
          </p>

          <h4
            className="
              mt-1
              font-display
              text-xl
              font-semibold
              text-text-primary
              sm:text-2xl
            "
          >
            Growth &amp; Contributions
          </h4>
        </div>
      </div>

      <ul className="mt-8 space-y-4">
        {achievements.map((item, index) => (
          <motion.li
            key={item}
            initial={{
              opacity: 0,
              x: 10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.7,
            }}
            transition={{
              duration: 0.35,
              delay: index * 0.06,
            }}
            className="
              group
              flex
              items-start
              gap-3
              text-sm
              leading-6
              text-text-secondary
              sm:text-base
            "
          >
            <CheckCircle2
              size={17}
              className="
                mt-1
                shrink-0
                text-emerald-300
                transition-all
                duration-200
                group-hover:scale-110
                group-hover:text-emerald-200
                group-hover:drop-shadow-[0_0_8px_rgba(110,231,183,0.6)]
              "
            />

            <span className="transition-colors duration-200 group-hover:text-text-primary">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  </div>
</div>

{/* =====================================
    TECHNOLOGY STACK
====================================== */}

<div
  className="
    border-t
    border-border-subtle
    bg-gradient-to-r
    from-blue-500/[0.025]
    via-transparent
    to-cyan-500/[0.025]
    px-7
    py-6
    sm:px-9
  "
>
  <div
    className="
      flex
      flex-wrap
      items-center
      gap-3
    "
  >
    <span
      className="
        mr-1
        font-mono
        text-[10px]
        uppercase
        tracking-[0.22em]
        text-text-muted
      "
    >
      Technology
    </span>

    {technologies.map((technology, index) => (
      <motion.span
        key={technology}
        initial={{
          opacity: 0,
          y: 8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
        transition={{
          duration: 0.3,
          delay: index * 0.05,
        }}
        whileHover={{
          y: -2,
        }}
        className="
          rounded-xl
          border
          border-blue-400/15
          bg-white/[0.02]
          px-3.5
          py-1.5
          font-mono
          text-xs
          font-medium
          text-text-secondary
          backdrop-blur-sm
          transition-all
          duration-300
          hover:border-blue-400/40
          hover:bg-blue-500/[0.06]
          hover:text-blue-200
          hover:shadow-[0_8px_24px_-14px_rgba(59,130,246,0.7)]
        "
      >
        {technology}
      </motion.span>
    ))}
  </div>
</div>

             

             
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}