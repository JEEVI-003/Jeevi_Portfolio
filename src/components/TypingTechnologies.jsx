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

    if (!deleting) {
      if (text.length < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => {
          setDeleting(true);
        }, 1400);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 55);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % technologies.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, technologies]);

  return (
    <div className="relative inline-flex min-h-[52px] items-center">
      {/* soft moving glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scaleX: [0.92, 1.05, 0.92],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -inset-x-6
          top-1/2
          h-10
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-2xl
        "
      />

      <AnimatePresence mode="wait">
        <motion.span
          key={`${index}-${deleting ? "delete" : "type"}`}
          initial={{ opacity: 0.75 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.75 }}
          transition={{ duration: 0.2 }}
          className="
            relative
            z-10
            font-display
            text-[1.7rem]
            font-medium
            tracking-[-0.02em]
            bg-gradient-to-r
            from-blue-300
            via-cyan-300
            to-blue-400
            bg-clip-text
            text-transparent
            sm:text-[2rem]
            md:text-[2.15rem]
          "
        >
          {text}
        </motion.span>
      </AnimatePresence>

      {/* thin futuristic cursor */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-10
          ml-1.5
          h-7
          w-[2px]
          rounded-full
          bg-cyan-300
          shadow-[0_0_12px_rgba(103,232,249,0.9)]
          md:h-8
        "
      />

      {/* subtle underline */}
      <motion.div
        animate={{
          width: ["25%", "100%", "45%"],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-1
          left-0
          h-px
          rounded-full
          bg-gradient-to-r
          from-blue-500/0
          via-cyan-300/60
          to-blue-500/0
          blur-[1px]
        "
      />
    </div>
  );
}