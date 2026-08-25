import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import {
  GithubIcon,
  LinkedinIcon,
} from "../components/BrandIcons";
import { contact } from "../data/portfolio";

/* =========================================================
   ANIMATIONS
========================================================= */

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
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   CONTACT ITEMS
========================================================= */

const contactItems = [
  {
    label: "Email",
    value: contact.email,
    description: "Best way to reach me",
    href: `mailto:${contact.email}`,
    icon: Mail,
    accent: "blue",
  },

  {
    label: "Phone",
    value: contact.phone,
    description: "Available for direct conversations",
    href: `tel:${contact.phone.replace(/\s+/g, "")}`,
    icon: Phone,
    accent: "cyan",
  },

  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeevikesh-s-n",
    description: "Connect professionally",
    href: contact.linkedin,
    icon: LinkedinIcon,
    accent: "sky",
  },

  {
    label: "GitHub",
    value: "github.com/JEEVI-003",
    description: "Explore my code and projects",
    href: contact.github,
    icon: GithubIcon,
    accent: "violet",
  },
];

/* =========================================================
   ACCENT STYLES
========================================================= */

const accentStyles = {
  blue: {
    icon:
      "border-blue-400/20 bg-blue-500/[0.06] text-blue-300 group-hover:border-blue-400/45 group-hover:bg-blue-500/[0.1]",

    line:
      "from-transparent via-blue-400/60 to-transparent",

    glow:
      "group-hover:shadow-[0_0_35px_-16px_rgba(59,130,246,0.8)]",
  },

  cyan: {
    icon:
      "border-cyan-400/20 bg-cyan-500/[0.06] text-cyan-300 group-hover:border-cyan-400/45 group-hover:bg-cyan-500/[0.1]",

    line:
      "from-transparent via-cyan-400/60 to-transparent",

    glow:
      "group-hover:shadow-[0_0_35px_-16px_rgba(34,211,238,0.8)]",
  },

  sky: {
    icon:
      "border-sky-400/20 bg-sky-500/[0.06] text-sky-300 group-hover:border-sky-400/45 group-hover:bg-sky-500/[0.1]",

    line:
      "from-transparent via-sky-400/60 to-transparent",

    glow:
      "group-hover:shadow-[0_0_35px_-16px_rgba(56,189,248,0.8)]",
  },

  violet: {
    icon:
      "border-violet-400/20 bg-violet-500/[0.06] text-violet-300 group-hover:border-violet-400/45 group-hover:bg-violet-500/[0.1]",

    line:
      "from-transparent via-violet-400/60 to-transparent",

    glow:
      "group-hover:shadow-[0_0_35px_-16px_rgba(167,139,250,0.8)]",
  },
};

/* =========================================================
   CONTACT SECTION
========================================================= */

export default function Contact() {
  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        scroll-mt-24
        overflow-hidden
        bg-transparent
        py-16
        sm:py-20
        md:py-32
      "
    >
      {/* =================================================
          AMBIENT BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[10%]
            top-[20%]
            h-64
            w-64
            rounded-full
            bg-blue-600/[0.06]
            blur-[100px]
            sm:h-80
            sm:w-80
            sm:blur-[110px]
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
            bg-cyan-500/[0.035]
            blur-[100px]
            sm:h-96
            sm:w-96
            sm:blur-[120px]
          "
        />
      </div>

      {/* =================================================
          MAIN CONTAINER
      ================================================== */}

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
          px-5
          sm:px-6
          md:px-10
          xl:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div variants={reveal}>
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
          />
        </motion.div>

        {/* =================================================
            INTRO
        ================================================== */}

        <motion.div
          variants={reveal}
          className="
            mt-7
            grid
            gap-6
            sm:mt-8
            sm:gap-8
            lg:grid-cols-[1fr_0.8fr]
            lg:items-end
          "
        >
          <div>
            <h3
              className="
                max-w-4xl
                font-display
                text-2xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-text-primary
                sm:text-3xl
                md:text-5xl
              "
            >
              Let’s turn your next idea into
              <span className="text-blue-400">
                {" "}
                something real.
              </span>
            </h3>

            <p
              className="
                mt-4
                max-w-3xl
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
              Whether you have a project, an opportunity,
              or simply want to talk about software
              development, I’m open to meaningful
              conversations and new challenges.
            </p>
          </div>

          {/* =================================================
              AVAILABILITY PANEL
          ================================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-blue-500/15
              bg-surface/[0.45]
              p-4
              backdrop-blur-md
              sm:p-6
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-24
                w-24
                rounded-full
                bg-blue-500/[0.08]
                blur-3xl
                sm:h-28
                sm:w-28
              "
            />

            <div className="relative flex items-start gap-3 sm:gap-4">
              <div
                className="
                  mt-0.5
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-emerald-400/20
                  bg-emerald-400/[0.05]
                  text-emerald-300
                  sm:h-11
                  sm:w-11
                "
              >
                <MessageCircle size={18} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-emerald-400
                      shadow-[0_0_12px_rgba(52,211,153,0.8)]
                    "
                  />

                  <p
                    className="
                      font-mono
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-emerald-300
                      sm:tracking-[0.2em]
                    "
                  >
                    Open To Conversations
                  </p>
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-text-secondary
                  "
                >
                  Software opportunities,
                  application development,
                  collaboration, and interesting
                  product ideas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
                {/* =================================================
            CONTACT CHANNELS
        ================================================== */}

        <motion.div
          variants={reveal}
          className="
            mt-8
            grid
            gap-3
            sm:mt-10
            sm:gap-4
            md:grid-cols-2
          "
        >
          {contactItems.map(
            ({
              label,
              value,
              description,
              href,
              icon: Icon,
              accent,
            }) => {
              const style =
                accentStyles[accent] ??
                accentStyles.blue;

              const isExternal =
                label !== "Email" &&
                label !== "Phone";

              return (
                <motion.a
                  key={label}
                  variants={reveal}
                  whileHover={{
                    y: -4,
                  }}
                  href={href}
                  target={
                    isExternal
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    isExternal
                      ? "noreferrer"
                      : undefined
                  }
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border-subtle
                    bg-surface/[0.65]
                    p-4
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-surface/[0.78]
                    ${style.glow}
                    sm:p-5
                    md:p-6
                  `}
                >
                  {/* Top accent */}

                  <div
                    className={`
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      ${style.line}
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    `}
                  />

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      sm:gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                        sm:gap-4
                      "
                    >
                      {/* Icon */}

                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition-all
                          duration-300
                          ${style.icon}
                          sm:h-12
                          sm:w-12
                        `}
                      >
                        <Icon
                          size={18}
                          className="sm:h-5 sm:w-5"
                        />
                      </span>

                      {/* Text */}

                      <div className="min-w-0">
                        <p
                          className="
                            font-mono
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-text-muted
                            sm:text-[10px]
                            sm:tracking-[0.2em]
                          "
                        >
                          {label}
                        </p>

                        <p
                          className="
                            mt-1
                            break-all
                            text-sm
                            font-semibold
                            leading-5
                            text-text-primary
                            sm:text-base
                            sm:leading-6
                            lg:text-lg
                          "
                        >
                          {value}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            leading-5
                            text-text-muted
                            sm:text-xs
                            sm:leading-6
                            sm:text-sm
                          "
                        >
                          {description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="
                        shrink-0
                        text-text-muted
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-blue-300
                        sm:h-[19px]
                        sm:w-[19px]
                      "
                    />
                  </div>
                </motion.a>
              );
            }
          )}
        </motion.div>
                {/* =================================================
            FINAL CTA
        ================================================== */}

        <motion.div
          variants={reveal}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[24px]
            border
            border-blue-500/20
            bg-gradient-to-br
            from-blue-600/[0.09]
            via-surface/[0.65]
            to-cyan-500/[0.04]
            p-5
            backdrop-blur-xl
            sm:mt-10
            sm:rounded-[28px]
            sm:p-7
            lg:p-10
          "
        >
          {/* Decorative glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-52
              w-52
              rounded-full
              bg-blue-500/[0.08]
              blur-[80px]
              sm:h-64
              sm:w-64
              sm:blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-1/3
              h-48
              w-48
              rounded-full
              bg-cyan-400/[0.05]
              blur-[80px]
              sm:h-56
              sm:w-56
              sm:blur-[90px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
              md:gap-6
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-blue-400
                  sm:text-xs
                  sm:tracking-[0.24em]
                "
              >
                Let’s Talk
              </p>

              <h3
                className="
                  mt-2
                  font-display
                  text-xl
                  font-semibold
                  leading-tight
                  tracking-[-0.025em]
                  text-text-primary
                  sm:text-2xl
                  sm:text-3xl
                "
              >
                Have something worth building?
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-text-secondary
                  sm:text-base
                  sm:leading-7
                "
              >
                Start with a conversation. I’d be
                happy to hear about the idea,
                problem, or opportunity you're
                working on.
              </p>
            </div>

            {/* CTA */}

            <div
              className="
                w-full
                shrink-0
                md:w-auto
              "
            >
              <button
                type="button"
                onClick={scrollToProjects}
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
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_14px_35px_-14px_rgba(37,99,235,0.8)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-500
                  hover:shadow-[0_18px_40px_-12px_rgba(59,130,246,0.8)]
                  sm:px-6
                  md:w-auto
                "
              >
                Explore My Work

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}