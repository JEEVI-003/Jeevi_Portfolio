import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const fullName = profile.name;

  const [typedName, setTypedName] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Navbar name typing
  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index += 1;

      setTypedName(fullName.slice(0, index));

      if (index >= fullName.length) {
        clearInterval(timer);

        setTimeout(() => {
          setIsTypingDone(true);
        }, 350);
      }
    }, 85);

    return () => clearInterval(timer);
  }, [fullName]);

  // Scroll + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    const navHeight = 76;

    const y =
      target.getBoundingClientRect().top +
      window.scrollY -
      navHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-white/[0.05] bg-[#05070D]/88 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          flex
          h-[76px]
          w-full
          items-center
          px-5
          sm:px-6
          md:px-8
          lg:px-9
          xl:px-10
        "
      >
        {/* ================================
            LOGO
        ================================= */}

        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          aria-label="Go to home"
          className="
            group
            flex
            shrink-0
            items-center
            focus:outline-none
          "
        >
          <span
            className="
              font-display
              text-[1.05rem]
              font-bold
              tracking-[-0.03em]
              text-white
              sm:text-[1.12rem]
              md:text-[1.2rem]
            "
          >
            {typedName}
          </span>

          {!isTypingDone ? (
            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                ml-1
                h-[0.95em]
                w-[2px]
                rounded-full
                bg-blue-400
                shadow-[0_0_10px_rgba(59,130,246,0.9)]
              "
            />
          ) : (
            <motion.span
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
                ml-1
                h-1
                w-1
                rounded-full
                bg-blue-400
                shadow-[0_0_10px_rgba(59,130,246,0.9)]
                sm:h-[5px]
                sm:w-[5px]
              "
            />
          )}
        </button>

        {/* ================================
            RIGHT SIDE
        ================================= */}

        <div className="ml-auto flex items-center">
          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-7 lg:gap-8 xl:gap-9">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "");

                return (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="
                        group
                        relative
                        py-2.5
                        font-display
                        text-[0.95rem]
                        font-medium
                        text-gray-400
                        transition-colors
                        duration-200
                        hover:text-white
                        focus:outline-none
                        lg:text-base
                      "
                    >
                      <span
                        className={
                          isActive
                            ? "text-blue-400"
                            : "text-gray-400 group-hover:text-white"
                        }
                      >
                        {link.label}
                      </span>

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          rounded-full
                          bg-gradient-to-r
                          from-blue-500
                          via-cyan-400
                          to-blue-500
                          shadow-[0_0_11px_rgba(59,130,246,0.7)]
                          transition-all
                          duration-300
                          ease-out
                          ${
                            isActive
                              ? "w-full opacity-100"
                              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                          }
                        `}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ================================
              HIRE ME CTA
          ================================= */}

          <motion.button
            type="button"
            onClick={() => handleNavClick("#contact")}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              ml-7
              hidden
              items-center
              gap-2
              rounded-lg
              border
              border-blue-400/30
              bg-blue-500/10
              px-4
              py-2.5
              font-display
              text-sm
              font-semibold
              text-blue-300
              shadow-[0_8px_28px_-14px_rgba(59,130,246,0.8)]
              transition-all
              duration-300
              hover:border-blue-400/60
              hover:bg-blue-500/15
              hover:text-white
              hover:shadow-[0_12px_30px_-12px_rgba(59,130,246,0.85)]
              lg:ml-8
              lg:inline-flex
            "
          >
            Hire Me

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </motion.button>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              ml-3
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.02]
              text-gray-300
              transition-all
              duration-200
              hover:border-blue-500/40
              hover:bg-blue-500/5
              hover:text-blue-300
              md:hidden
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ================================
          MOBILE MENU
      ================================= */}

      <AnimatePresence>
        {isOpen && (
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
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              overflow-hidden
              border-t
              border-white/[0.05]
              bg-[#05070D]/96
              backdrop-blur-xl
              md:hidden
            "
          >
            <nav className="px-5 py-5">
              <ul className="flex flex-col gap-1.5">
                {navLinks.map((link, index) => {
                  const isActive =
                    activeSection === link.href.replace("#", "");

                  return (
                    <motion.li
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleNavClick(link.href)
                        }
                        className="
                          group
                          relative
                          w-full
                          rounded-lg
                          px-3
                          py-3.5
                          text-left
                          font-display
                          text-base
                          font-medium
                          text-gray-400
                          transition-all
                          duration-200
                          hover:bg-white/[0.03]
                          hover:text-white
                        "
                      >
                        <span
                          className={
                            isActive
                              ? "text-blue-400"
                              : "text-gray-400"
                          }
                        >
                          {link.label}
                        </span>

                        <span
                          className={`
                            absolute
                            bottom-1.5
                            left-3
                            h-[2px]
                            rounded-full
                            bg-gradient-to-r
                            from-blue-500
                            to-cyan-400
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "w-10 opacity-100"
                                : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"
                            }
                          `}
                        />
                      </button>
                    </motion.li>
                  );
                })}

                {/* Mobile Hire Me */}
                <motion.li
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: navLinks.length * 0.04,
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      handleNavClick("#contact")
                    }
                    className="
                      mt-2
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-blue-600
                      px-4
                      py-3.5
                      font-display
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-200
                      hover:bg-blue-500
                    "
                  >
                    Hire Me
                    <ArrowUpRight size={16} />
                  </button>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}