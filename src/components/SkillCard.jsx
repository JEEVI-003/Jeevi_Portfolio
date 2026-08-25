import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Smartphone,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

const CATEGORY_ICONS = {
  Languages: Code2,
  Backend: Server,
  Frontend: Layout,
  Mobile: Smartphone,
  Database: Database,
  Tools: Wrench,
  Concepts: Brain,
};

const cardVariant = {
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

export default function SkillCard({
  category,
  items = [],
}) {
  const Icon = CATEGORY_ICONS[category] ?? Code2;

  const safeItems = Array.isArray(items)
    ? items.filter(
        (item) =>
          typeof item === "string" &&
          item.trim().length > 0
      )
    : [];

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border-subtle
        bg-surface/[0.78]
        p-4
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-blue-500/60
        hover:bg-surface/[0.88]
        hover:shadow-[0_20px_55px_-28px_rgba(37,99,235,0.7)]
        sm:p-5
        md:p-6
      "
    >
      {/* =================================================
          TOP-RIGHT AMBIENT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-blue-600/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-blue-600/[0.18]
          sm:h-36
          sm:w-36
        "
      />

      {/* =================================================
          BOTTOM AMBIENT GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          left-1/2
          h-24
          w-40
          -translate-x-1/2
          rounded-full
          bg-cyan-500/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-cyan-500/[0.05]
          sm:h-28
          sm:w-44
        "
      />

      {/* =================================================
          CATEGORY
      ================================================== */}

      <div className="relative flex items-center gap-3">
        <motion.span
          whileHover={{
            scale: 1.06,
            rotate: -2,
          }}
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-border-subtle
            bg-bg-alt/80
            text-blue-glow
            transition-all
            duration-300
            group-hover:border-blue-500/50
            group-hover:bg-blue-500/[0.06]
            group-hover:shadow-[0_8px_22px_-12px_rgba(59,130,246,0.8)]
            sm:h-11
            sm:w-11
          "
        >
          <Icon
            size={18}
            strokeWidth={1.75}
            className="sm:h-[19px] sm:w-[19px]"
          />
        </motion.span>

        <h3
          className="
            font-display
            text-base
            font-semibold
            text-text-primary
            sm:text-lg
          "
        >
          {category}
        </h3>
      </div>

      {/* =================================================
          DIVIDER
      ================================================== */}

      <div
        className="
          mt-4
          h-px
          w-full
          bg-gradient-to-r
          from-blue-500/25
          via-border-subtle
          to-transparent
          sm:mt-5
        "
      />

      {/* =================================================
          SKILL PILLS
      ================================================== */}

      {safeItems.length > 0 ? (
        <ul
          className="
            relative
            mt-4
            flex
            flex-wrap
            gap-1.5
            sm:mt-5
            sm:gap-2
          "
        >
          {safeItems.map((item, index) => (
            <motion.li
              key={`${item}-${index}`}
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
                amount: 0.7,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -2,
              }}
              className="
                rounded-lg
                border
                border-border-subtle
                bg-bg-alt/[0.72]
                px-2.5
                py-1.5
                font-mono
                text-[11px]
                text-text-secondary
                backdrop-blur-sm
                transition-all
                duration-200
                hover:border-blue-500/50
                hover:bg-blue-500/[0.06]
                hover:text-text-primary
                sm:px-3
                sm:text-xs
              "
            >
              {item}
            </motion.li>
          ))}
        </ul>
      ) : (
        <p
          className="
            mt-4
            text-sm
            text-text-muted
            sm:mt-5
          "
        >
          No skills listed in this category.
        </p>
      )}
    </motion.article>
  );
}