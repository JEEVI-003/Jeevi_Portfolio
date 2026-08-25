import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  ChevronDown,
  ExternalLink,
  Play,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { GithubIcon } from "../components/BrandIcons";
import { projects } from "../data/portfolio";

/* =========================================================
   SECTION ANIMATION
========================================================= */

const sectionVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

/* =========================================================
   PROJECT CARD ANIMATION
========================================================= */

const cardVariants = {
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

/* =========================================================
   URL CHECK
========================================================= */

function isRealUrl(value) {
  return (
    typeof value === "string" &&
    value.trim() !== "" &&
    value !== "#" &&
    !value.startsWith("YOUR_") &&
    !value.startsWith("PLACEHOLDER_") &&
    /^https?:\/\//i.test(value)
  );
}

/* =========================================================
   CLEAN ARRAY
========================================================= */

function cleanItems(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.filter(
    (item) =>
      typeof item === "string" &&
      item.trim() !== ""
  );
}
/* =========================================================
   TECHNOLOGY PILL
========================================================= */

function TechPill({ children, index }) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2 + index * 0.06,
        duration: 0.35,
      }}
      className="
        rounded-full
        border
        border-blue-300/15
        bg-blue-500/[0.05]
        px-3.5
        py-1.5
        font-mono
        text-xs
        text-blue-100/90
        backdrop-blur-sm
        transition-all
        duration-200
        hover:border-blue-300/40
        hover:bg-blue-500/10
        hover:text-white
      "
    >
      {children}
    </motion.span>
  );
}

/* =========================================================
   INFORMATION GROUP
========================================================= */

function InfoGroup({ title, items }) {
  const safeItems = cleanItems(items);

  if (safeItems.length === 0) {
    return null;
  }

  return (
    <div>
      <p
        className="
          mb-3
          font-mono
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-blue-400
        "
      >
        {title}
      </p>

      <ul className="space-y-2">
        {safeItems.map((item, index) => (
          <li
            key={`${title}-${item}-${index}`}
            className="
              relative
              pl-4
              text-sm
              leading-relaxed
              text-text-secondary
            "
          >
            <span
              className="
                absolute
                left-0
                top-[0.68em]
                h-1.5
                w-1.5
                rounded-full
                bg-blue-500
                shadow-[0_0_10px_rgba(59,130,246,0.8)]
              "
            />

            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
/* =========================================================
   PROJECT BANNER
========================================================= */

function ProjectBanner({ project }) {
  const [open, setOpen] = useState(false);

  const stack = cleanItems(project.stack);

  const overviewItems =
    cleanItems(project.platforms).length > 0
      ? cleanItems(project.platforms)
      : cleanItems(project.category).length > 0
        ? [project.category]
        : [];

  const backendItems = cleanItems(
    project.backend
  );

  const featureItems = cleanItems(
    project.features
  );

  return (
    <motion.article
      variants={cardVariants}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-blue-500/20
        bg-[#05060D]
        shadow-[0_30px_90px_-45px_rgba(37,99,235,0.7)]
      "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* =================================================
          FUTURISTIC BANNER
      ================================================== */}

      <div
        className="
          relative
          min-h-[290px]
          overflow-hidden
          bg-[#05060D]
          sm:min-h-[320px]
        "
        onClick={() =>
          setOpen((value) => !value)
        }
      >
        {/* Background */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_12%_50%,rgba(0,210,255,0.14),transparent_32%),radial-gradient(circle_at_52%_48%,rgba(95,70,255,0.12),transparent_34%),radial-gradient(circle_at_88%_50%,rgba(255,30,160,0.1),transparent_34%)]
          "
        />

        {/* Cyan light */}

        <motion.div
          animate={{
            x: ["-8%", "5%", "-8%"],
            opacity: [0.45, 0.8, 0.45],
            scaleX: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-10%]
            top-[18%]
            h-[2px]
            w-[78%]
            rotate-[-8deg]
            rounded-full
            bg-gradient-to-r
            from-cyan-400/0
            via-cyan-300/80
            to-pink-500/0
            blur-[1px]
          "
        />

        {/* Violet light */}

        <motion.div
          animate={{
            x: ["-6%", "8%", "-6%"],
            y: [0, -10, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 6.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-[35%]
            h-[3px]
            w-[90%]
            rotate-[6deg]
            rounded-full
            bg-gradient-to-r
            from-blue-500/0
            via-violet-400/80
            to-pink-500/0
            blur-[2px]
          "
        />

        {/* Pink light */}

        <motion.div
          animate={{
            x: ["0%", "-7%", "0%"],
            opacity: [0.2, 0.55, 0.2],
          }}
          transition={{
            duration: 7.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[10%]
            top-[50%]
            h-[2px]
            w-[84%]
            rotate-[-4deg]
            rounded-full
            bg-gradient-to-r
            from-cyan-400/0
            via-fuchsia-400/75
            to-blue-400/0
            blur-[2px]
          "
        />

        {/* Bright focal beam */}

        <motion.div
          animate={{
            scaleX: [0.92, 1.08, 0.92],
            opacity: [0.35, 0.8, 0.35],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[7%]
            top-[52%]
            h-[4px]
            w-[30%]
            origin-left
            rounded-full
            bg-gradient-to-r
            from-cyan-300
            via-white/90
            to-pink-400
            blur-[2px]
          "
        />

        {/* Ambient glows */}

        <div
          className="
            absolute
            left-[10%]
            top-1/2
            h-28
            w-28
            -translate-y-1/2
            rounded-full
            bg-cyan-400/15
            blur-[70px]
          "
        />

        <div
          className="
            absolute
            left-[45%]
            top-[45%]
            h-36
            w-36
            rounded-full
            bg-violet-500/10
            blur-[85px]
          "
        />

        <div
          className="
            absolute
            right-[10%]
            top-[50%]
            h-32
            w-32
            rounded-full
            bg-pink-500/10
            blur-[80px]
          "
        />

        {/* Particles */}

        <div className="pointer-events-none absolute inset-0">
          {[...Array(16)].map((_, index) => (
            <motion.span
              key={index}
              animate={{
                x: [0, 12, -6, 0],
                y: [0, -8, 6, 0],
                opacity: [0.12, 0.65, 0.18, 0.12],
              }}
              transition={{
                duration: 4 + index * 0.22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className="
                absolute
                h-1
                w-1
                rounded-full
                bg-blue-300
                shadow-[0_0_10px_rgba(96,165,250,0.85)]
              "
              style={{
                left: `${8 + ((index * 19) % 84)}%`,
                top: `${10 + ((index * 23) % 74)}%`,
              }}
            />
          ))}
        </div>

        {/* Vignette */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_26%,rgba(2,4,10,0.76)_100%)]
          "
        />
                {/* =================================================
            PROJECT CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[290px]
            flex-col
            justify-center
            px-7
            py-8
            sm:min-h-[320px]
            sm:px-10
            lg:px-14
          "
        >
          {/* Project badge */}

          <span
            className="
              mb-4
              inline-flex
              w-fit
              rounded-full
              border
              border-blue-400/25
              bg-blue-500/5
              px-3
              py-1.5
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-blue-300
              backdrop-blur-sm
            "
          >
            {project.featured
              ? "Featured Project"
              : "Project"}
          </span>

          {/* Project title */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpen((value) => !value);
            }}
            className="
              group/title
              flex
              w-fit
              items-center
              gap-3
              text-left
              focus:outline-none
            "
          >
            <h3
              className="
                font-display
                text-5xl
                font-semibold
                leading-none
                tracking-tight
                text-white
                transition-colors
                duration-300
                group-hover/title:text-blue-300
                sm:text-6xl
                lg:text-7xl
              "
            >
              {project.title}
            </h3>

            <motion.span
              animate={{
                rotate: open ? 180 : 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="text-blue-400"
            >
              <ChevronDown size={28} />
            </motion.span>
          </button>

          {/* Subtitle */}

          <p
            className="
              mt-3
              font-mono
              text-sm
              uppercase
              tracking-[0.18em]
              text-blue-200/75
              sm:text-base
            "
          >
            {project.subtitle ||
              "Application Development"}
          </p>

          {/* Technology pills */}

          {stack.length > 0 && (
            <div
              className="
                mt-7
                flex
                max-w-4xl
                flex-wrap
                gap-2.5
              "
            >
              {stack
                .slice(0, 8)
                .map((tech, index) => (
                  <TechPill
                    key={`${tech}-${index}`}
                    index={index}
                  >
                    {tech}
                  </TechPill>
                ))}
            </div>
          )}

          <p
            className="
              mt-6
              text-sm
              text-white/40
            "
          >
            Hover anywhere on the project
            banner to explore
          </p>
        </div>
      </div>
            {/* =========================================================
          DATA-DRIVEN DROPDOWN
      ========================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-20
              border-t
              border-blue-500/10
              bg-[#080D18]/95
              backdrop-blur-xl
            "
          >
            <div
              className="
                grid
                gap-7
                p-6
                sm:grid-cols-2
                sm:p-7
                lg:grid-cols-4
              "
            >
              {/* Overview */}

              <InfoGroup
                title="Overview"
                items={overviewItems}
              />

              {/* Backend */}

              <InfoGroup
                title="Backend"
                items={backendItems}
              />

              {/* Features */}

              <InfoGroup
                title="Features"
                items={featureItems}
              />

              {/* Technology */}

              <InfoGroup
                title="Technology"
                items={stack}
              />
            </div>

            {/* Full overview */}

            {project.overview && (
              <div
                className="
                  border-t
                  border-blue-500/10
                  px-6
                  py-4
                  sm:px-7
                "
              >
                <p
                  className="
                    text-sm
                    leading-relaxed
                    text-text-secondary
                    sm:text-base
                  "
                >
                  {project.overview}
                </p>
              </div>
            )}

            {/* =================================================
                GITHUB ACTION
            ================================================== */}

            {isRealUrl(project.github) && (
              <div
                className="
                  flex
                  items-center
                  border-t
                  border-blue-500/10
                  px-6
                  py-4
                  sm:px-7
                "
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) =>
                    event.stopPropagation()
                  }
                  className="
                    group/github
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-xl
                    border
                    border-blue-400/25
                    bg-blue-500/[0.05]
                    px-5
                    py-2.5
                    font-display
                    text-sm
                    font-semibold
                    text-blue-300
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-blue-400/55
                    hover:bg-blue-500/[0.10]
                    hover:text-white
                    hover:shadow-[0_12px_32px_-14px_rgba(59,130,246,0.8)]
                  "
                >
                  <GithubIcon
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover/github:scale-110
                    "
                  />

                  <span>
                    View on GitHub
                  </span>

                  <span
                    className="
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover/github:translate-x-0.5
                      group-hover/github:-translate-y-0.5
                    "
                  >
                    ↗
                  </span>
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
            {/* =========================================================
          BOTTOM BAR
      ========================================================== */}

      <div
        className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-4
          bg-[#080B14]
          px-6
          py-5
          sm:px-8
        "
      >
        <div>
          <p className="text-xs text-text-muted">
            {project.category}
          </p>

          <p
            className="
              mt-1
              text-sm
              font-medium
              text-text-primary
            "
          >
            {project.subtitle ||
              "Application Development"}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* GitHub */}

          {isRealUrl(project.github) && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-border-strong
                px-4
                py-2.5
                text-sm
                font-semibold
                text-text-primary
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-blue-500
                hover:bg-blue-500/10
              "
            >
              <GithubIcon size={16} />

              GitHub
            </a>
          )}

          {/* Live Demo */}

          {isRealUrl(project.demo) && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-blue-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-500
              "
            >
              <Play size={15} />

              Live Demo
            </a>
          )}

          {(isRealUrl(project.github) ||
            isRealUrl(project.demo)) && (
            <span
              className="
                hidden
                items-center
                gap-1.5
                self-center
                text-xs
                text-text-muted
                sm:inline-flex
              "
            >
              <ExternalLink size={13} />

              New tab
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
export default function Projects() {
  return (
    <section
      id="projects"
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
      {/* =================================================
          AMBIENT SECTION GLOW
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-blue-600/8
            blur-[110px]
          "
        />
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================== */}

      <motion.div
        variants={sectionVariants}
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
          max-w-6xl
          px-6
          md:px-10
        "
      >
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
        />

        <motion.p
          variants={cardVariants}
          className="
            mt-6
            max-w-3xl
            text-base
            leading-relaxed
            text-text-secondary
            sm:text-lg
          "
        >
          Selected applications and development
          work focused on practical products,
          scalable backend services, polished
          interfaces, and real-world software
          engineering.
        </motion.p>

        {/* =================================================
            PROJECT LIST
        ================================================== */}

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <ProjectBanner
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}