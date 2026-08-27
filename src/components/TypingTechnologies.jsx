import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TypingTechnologies({
  technologies = [],
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!technologies.length) return;

    const current = technologies[index];

    let timer;

    /* =================================================
       TYPING
    ================================================== */

    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => {
          setText(
            current.slice(0, text.length + 1)
          );
        }, 90);
      } else {
        timer = setTimeout(() => {
          setDeleting(true);
        }, 1500);
      }
    }

    /* =================================================
       DELETING
    ================================================== */

    else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 55);
      } else {
        setDeleting(false);

        setIndex(
          (prev) =>
            (prev + 1) % technologies.length
        );
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, technologies]);

  /* =================================================
     COLOR THEMES
  ================================================== */

  const themes = [
    {
      text:
        "from-blue-300 via-cyan-300 to-blue-400",
      accent: "bg-cyan-300",
      glow:
        "rgba(34,211,238,0.95)",
    },

    {
      text:
        "from-violet-300 via-purple-300 to-blue-400",
      accent: "bg-violet-300",
      glow:
        "rgba(167,139,250,0.95)",
    },

    {
      text:
        "from-cyan-300 via-blue-300 to-indigo-400",
      accent: "bg-blue-300",
      glow:
        "rgba(96,165,250,0.95)",
    },

    {
      text:
        "from-fuchsia-300 via-pink-300 to-purple-400",
      accent: "bg-fuchsia-300",
      glow:
        "rgba(232,121,249,0.95)",
    },

    {
      text:
        "from-emerald-300 via-cyan-300 to-blue-400",
      accent: "bg-emerald-300",
      glow:
        "rgba(52,211,153,0.95)",
    },
  ];

  const theme =
    themes[index % themes.length];

  return (
    <div
      className="
        relative
        flex
        min-h-[52px]
        items-center
        overflow-visible
        sm:min-h-[58px]
      "
    >
      {/* =================================================
          SOFT AMBIENT GLOW
      ================================================== */}

      <motion.div
        animate={{
          opacity: [0.08, 0.22, 0.08],
          scaleX: [0.92, 1.05, 0.92],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-10
          -right-12
          top-1/2
          h-12
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.04]
          blur-3xl
        "
      />

      {/* =================================================
          LEFT ROTATING TRIANGLE ARROW
      ================================================== */}

      <div
        className="
          relative
          mr-3
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          sm:mr-4
          sm:h-9
          sm:w-9
        "
      >
        {/* Small glow */}

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: [0.1, 0.45, 0.12],
            scale: [0.65, 1.15, 0.85],
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-cyan-400/20
            blur-lg
          "
        />

        {/* Triangle */}

        <AnimatePresence mode="wait">
          <motion.span
  key={`arrow-${index}`}
  initial={{
    opacity: 0,
    rotate: -140,
    scale: 0.65,
    x: -4,
  }}
  animate={{
    opacity: 1,
    rotate: 0,
    scale: 1,
    x: 0,
  }}
  exit={{
    opacity: 0,
    rotate: 140,
    scale: 0.65,
    x: 4,
  }}
  transition={{
    duration: 0.55,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative
    z-10
    block
    h-0
    w-0
    border-y-[8px]
    border-l-[15px]
    border-y-transparent
    border-l-cyan-300
    sm:border-y-[9px]
    sm:border-l-[17px]
  "
  style={{
    filter: `
      drop-shadow(0 0 4px ${theme.glow})
      drop-shadow(0 0 9px ${theme.glow})
    `,
  }}
/>
        </AnimatePresence>
      </div>

      {/* =================================================
          TYPING CONTENT
      ================================================== */}

      <div
        className="
          relative
          flex
          min-w-0
          items-center
        "
      >
        {/* =================================================
            TYPING TEXT
        ================================================== */}

        <motion.span
          key={`text-${index}`}
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(3px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`
            relative
            z-10
            font-display
            text-[1.8rem]
            font-semibold
            leading-none
            tracking-[-0.03em]
            text-transparent
            bg-gradient-to-r
            bg-clip-text
            ${theme.text}
            sm:text-[2.15rem]
            md:text-[2.3rem]
          `}
        >
          {text}
        </motion.span>

        {/* =================================================
            TYPING CURSOR
        ================================================== */}

        <motion.span
          animate={{
            opacity: [1, 0, 1],
            scaleY: [1, 0.7, 1],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            ml-2
            h-7
            w-[2px]
            shrink-0
            rounded-full
            bg-cyan-300
            shadow-[0_0_14px_rgba(103,232,249,0.95)]
            sm:h-8
          "
        />
      </div>

      {/* =================================================
          SUBTLE UNDERLINE
      ================================================== */}

      <motion.div
        key={`line-${index}`}
        initial={{
          opacity: 0,
          width: "0%",
        }}
        animate={{
          opacity: [0.1, 0.5, 0.15],
          width: ["10%", "65%", "30%"],
        }}
        transition={{
          duration: 2.8,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[3px]
          left-[48px]
          h-px
          rounded-full
          bg-gradient-to-r
          from-blue-500/0
          via-cyan-300/70
          to-purple-400/0
          blur-[1px]
          sm:left-[58px]
        "
      />
    </div>
  );
}