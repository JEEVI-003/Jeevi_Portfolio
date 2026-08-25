import { motion } from "framer-motion";

function LetterReveal({ text, nowrap = false }) {
  const letters = Array.from(text);

  return (
    <span
      className={`
        ${nowrap ? "whitespace-nowrap" : ""}
        inline-flex
        items-center
        font-display
        font-semibold
        leading-[1.05]
        tracking-[-0.035em]
        text-text-primary
      `}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          initial={{
            opacity: 0,
            y: 14,
            filter: "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.65,
          }}
          transition={{
            duration: 0.24,
            delay: index * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1, 0, 1],
        }}
        viewport={{ once: true }}
        transition={{
          delay: letters.length * 0.03 + 0.12,
          duration: 0.8,
        }}
        className="
          ml-2
          h-[0.82em]
          w-[3px]
          shrink-0
          rounded-full
          bg-blue-400
          shadow-[0_0_12px_rgba(59,130,246,0.85)]
        "
      />
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}) {
  return (
    <div
      className={`
        ${align === "center" ? "mx-auto text-center" : "text-left"}
        w-full
      `}
    >
      <motion.p
        initial={{
          opacity: 0,
          x: -16,
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
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          mb-4
          font-mono
          text-sm
          font-medium
          uppercase
          tracking-[0.32em]
          text-blue-400
          sm:text-base
        "
      >
        {eyebrow}
      </motion.p>

      <h2
        className="
          w-full
          overflow-visible
          text-[2.4rem]
          sm:text-5xl
          md:text-6xl
          lg:text-[4.25rem]
          xl:text-[4.6rem]
        "
      >
        <div className="overflow-x-visible">
          <LetterReveal text={title} nowrap />
        </div>
      </h2>

      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{
          width: 72,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.7,
        }}
        transition={{
          delay: title.length * 0.03 + 0.18,
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          mt-6
          h-1
          rounded-full
          bg-gradient-to-r
          from-blue-500
          via-blue-400
          to-cyan-300
          shadow-[0_0_18px_rgba(59,130,246,0.45)]
        "
      />
    </div>
  );
}

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
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