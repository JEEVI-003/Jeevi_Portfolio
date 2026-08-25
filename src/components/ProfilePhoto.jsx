import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProfilePhoto({ src, name }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const text = "OPEN TO WORK";

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      if (displayText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[420px]
        md:mx-0
      "
    >
      {/* =================================================
          SOFT OUTER GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-[34px]
          bg-blue-500/[0.07]
          blur-3xl
        "
      />

      {/* =================================================
          MOVING OUTLINE
      ================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[30px]
          p-[1.5px]
        "
      >
        <motion.div
          className="
            pointer-events-none
            absolute
            -inset-[120%]
            rounded-full
            bg-[conic-gradient(from_0deg,transparent_0deg,transparent_235deg,#2563eb_275deg,#22d3ee_315deg,#60a5fa_340deg,transparent_360deg)]
        "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =================================================
            PHOTO CONTAINER
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[29px]
            bg-[#05070d]
          "
        >
          {/* Photo */}

          <img
            src={src}
            alt={name}
            className="
              block
              h-auto
              w-full
              select-none
              object-cover
              object-top
            "
            draggable="false"
          />

          {/* Bottom fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-44
              bg-gradient-to-t
              from-[#05070d]
              via-[#05070d]/55
              to-transparent
            "
          />

          {/* =================================================
              OPEN TO WORK — TRANSPARENT
          ================================================== */}

          <div
            className="
              absolute
              left-5
              top-5
              z-20
              flex
              items-center
              gap-2
              bg-transparent
            "
          >
            {/* Small status light */}

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_9px_rgba(52,211,153,0.85)]
              "
            />

            {/* Typing text */}

            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-emerald-300
                drop-shadow-[0_0_8px_rgba(52,211,153,0.28)]
                sm:text-[11px]
              "
            >
              {displayText}
              <span
                className="
                  ml-0.5
                  inline-block
                  h-3
                  w-px
                  translate-y-[1px]
                  bg-emerald-300
                  animate-pulse
                "
              />
            </span>
          </div>

          {/* Bottom ambient blue light */}

          <motion.div
            className="
              pointer-events-none
              absolute
              -bottom-12
              left-1/2
              h-36
              w-72
              -translate-x-1/2
              rounded-full
              bg-blue-500/[0.09]
              blur-3xl
            "
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [0.96, 1.04, 0.96],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}