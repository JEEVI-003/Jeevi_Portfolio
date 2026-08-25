import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { contact } from "../data/portfolio";

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
        py-24
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
            h-96
            w-96
            rounded-full
            bg-cyan-500/[0.035]
            blur-[120px]
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
            mt-8
            grid
            gap-8
            lg:grid-cols-[1fr_0.8fr]
            lg:items-end
          "
        >
          <div>
            <h3
              className="
                max-w-4xl
                font-display
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                text-text-primary
                sm:text-4xl
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
                mt-6
                max-w-3xl
                text-base
                leading-7
                text-text-secondary
                sm:text-lg
                sm:leading-8
              "
            >
              Whether you have a project, an opportunity, or simply want to
              talk about software development, I’m open to meaningful
              conversations and new challenges.
            </p>
          </div>

          {/* Availability panel */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-blue-500/15
              bg-surface/[0.45]
              p-5
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
                h-28
                w-28
                rounded-full
                bg-blue-500/[0.08]
                blur-3xl
              "
            />

            <div className="relative flex items-start gap-4">
              <div
                className="
                  mt-0.5
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-emerald-400/20
                  bg-emerald-400/[0.05]
                  text-emerald-300
                "
              >
                <MessageCircle size={19} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-2
                      w-2
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
                      tracking-[0.2em]
                      text-emerald-300
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
                  Software opportunities, application development,
                  collaboration, and interesting product ideas.
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
            mt-12
            grid
            gap-4
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
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-surface/[0.78]
                    ${style.glow}
                    sm:p-6
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
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-4
                      "
                    >
                      <span
                        className={`
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition-all
                          duration-300
                          ${style.icon}
                        `}
                      >
                        <Icon size={20} />
                      </span>

                      <div className="min-w-0">
                        <p
                          className="
                            font-mono
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-text-muted
                          "
                        >
                          {label}
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-base
                            font-semibold
                            text-text-primary
                            sm:text-lg
                          "
                        >
                          {value}
                        </p>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-text-muted
                            sm:text-sm
                          "
                        >
                          {description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="
                        shrink-0
                        text-text-muted
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-blue-300
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
            mt-10
            overflow-hidden
            rounded-[28px]
            border
            border-blue-500/20
            bg-gradient-to-br
            from-blue-600/[0.09]
            via-surface/[0.65]
            to-cyan-500/[0.04]
            p-7
            backdrop-blur-xl
            sm:p-9
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
              h-64
              w-64
              rounded-full
              bg-blue-500/[0.08]
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-1/3
              h-56
              w-56
              rounded-full
              bg-cyan-400/[0.05]
              blur-[90px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-blue-400
                  sm:text-xs
                "
              >
                Let’s Talk
              </p>

              <h3
                className="
                  mt-2
                  font-display
                  text-2xl
                  font-semibold
                  tracking-[-0.025em]
                  text-text-primary
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
                "
              >
                Start with a conversation. I’d be happy to hear about the
                idea, problem, or opportunity you're working on.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={scrollToProjects}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-xl
                  bg-blue-600
                  px-6
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