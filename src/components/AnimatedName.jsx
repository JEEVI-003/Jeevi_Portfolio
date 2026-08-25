import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "JEEVIKESH S N";

const textStyles = [
  {
    color: "text-white",
    font: "font-display",
  },
  {
    color: "text-blue-400",
    font: "font-display",
  },
  {
    color: "text-cyan-300",
    font: "font-mono",
  },
  {
    color: "text-blue-300",
    font: "font-display",
  },
];

export default function AnimatedName() {
  const [text, setText] = useState("");
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timerId;

    const animateTyping = () => {
      if (!deleting) {
        index += 1;
        setText(NAME.slice(0, index));

        if (index >= NAME.length) {
          timerId = setTimeout(() => {
            deleting = true;
            animateTyping();
          }, 1600);

          return;
        }

        timerId = setTimeout(animateTyping, 105);
      } else {
        index -= 1;
        setText(NAME.slice(0, index));

        if (index <= 0) {
          deleting = false;

          setStyleIndex(
            (current) => (current + 1) % textStyles.length
          );

          timerId = setTimeout(animateTyping, 450);

          return;
        }

        timerId = setTimeout(animateTyping, 60);
      }
    };

    animateTyping();

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const currentStyle = textStyles[styleIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full overflow-visible"
    >
      <h1
        className={`
          ${currentStyle.font}
          ${currentStyle.color}
          whitespace-nowrap
          text-[4rem]
          font-bold
          leading-[0.92]
          tracking-[-0.055em]
          transition-colors
          duration-500

          sm:text-[5rem]
          md:text-[6.2rem]
          lg:text-[7.4rem]
          xl:text-[8.5rem]
          2xl:text-[9.5rem]
        `}
      >
        {text}

        <motion.span
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.75,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            ml-2
            inline-block
            h-[0.72em]
            w-[4px]
            translate-y-[2px]
            rounded-full
            bg-blue-400
            align-middle
            shadow-[0_0_16px_rgba(59,130,246,0.95)]
          "
        />
      </h1>
    </motion.div>
  );
}