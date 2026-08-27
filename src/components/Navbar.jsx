import { useEffect, useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import {
  navLinks,
  profile,
} from "../data/portfolio";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const [scrolled, setScrolled] =
    useState(false);

  /* =========================================================
     HIRE ME SELECTED STATE
  ========================================================== */

  const [hireMeClicked, setHireMeClicked] =
    useState(false);

  const fullName = profile.name;

  /* =========================================================
     HIDE HOME FROM VISIBLE NAVIGATION
     
     #home is still kept internally for
     active-section detection.
  ========================================================== */

  const visibleNavLinks =
    navLinks.filter(
      (link) => link.href !== "#home"
    );

  /* =========================================================
     LOGO TYPING
  ========================================================== */

  const [typedName, setTypedName] =
    useState("");

  const [isTypingDone, setIsTypingDone] =
    useState(false);

  /* =========================================================
     NAME TYPING
  ========================================================== */

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index += 1;

      setTypedName(
        fullName.slice(0, index)
      );

      if (index >= fullName.length) {
        clearInterval(timer);

        setTimeout(() => {
          setIsTypingDone(true);
        }, 350);
      }
    }, 85);

    return () => {
      clearInterval(timer);
    };
  }, [fullName]);

  /* =========================================================
     SCROLL + ACTIVE SECTION
  ========================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20
      );

      const sections = navLinks
        .map((link) =>
          document.querySelector(
            link.href
          )
        )
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        if (rect.top <= 140) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================== */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================================
     NAVIGATION
  ========================================================== */

  const handleNavClick = (href) => {
    setIsOpen(false);

    /*
      Any normal navigation item resets
      the Hire Me selected state.

      #contact keeps Hire Me highlighted.
    */

    if (href !== "#contact") {
      setHireMeClicked(false);
    }

    const target =
      document.querySelector(href);

    if (!target) {
      return;
    }

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
        z-[100]
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#05070D]/90 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      {/* =====================================================
          NAVBAR CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          h-[68px]
          w-full
          max-w-[1440px]
          items-center
          px-5
          sm:h-[72px]
          sm:px-6
          md:h-[76px]
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =================================================
            LEFT — LOGO
        ================================================== */}

        <button
          type="button"
          onClick={() =>
            handleNavClick("#home")
          }
          aria-label="Go to home"
          className="
            group
            flex
            min-w-0
            shrink-0
            items-center
            focus:outline-none
          "
        >
          <span
            className="
              max-w-[220px]
              truncate
              font-display
              text-base
              font-bold
              tracking-[-0.03em]
              text-white
              sm:text-[1.08rem]
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
                h-[0.9em]
                w-[2px]
                shrink-0
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
                shrink-0
                rounded-full
                bg-blue-400
                shadow-[0_0_10px_rgba(59,130,246,0.9)]
                sm:h-[5px]
                sm:w-[5px]
              "
            />
          )}
        </button>

        {/* =================================================
            RIGHT GROUP
        ================================================== */}

        <div
          className="
            ml-auto
            flex
            items-center
          "
        >
          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden md:block">
            <ul
              className="
                flex
                items-center
                gap-5
                lg:gap-6
                xl:gap-7
              "
            >
              {visibleNavLinks.map(
                (link) => {
                  const isActive =
                    activeSection ===
                    link.href.replace(
                      "#",
                      ""
                    );

                  return (
                    <li
                      key={link.href}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleNavClick(
                            link.href
                          )
                        }
                        className="
                          group
                          relative
                          py-2.5
                          font-display
                          text-sm
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

                        {/* Active / hover line */}

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
                }
              )}
            </ul>
          </nav>
                    {/* =================================================
              DESKTOP HIRE ME
          ================================================== */}

          <motion.button
            type="button"
            onClick={() => {
              setHireMeClicked(true);

              handleNavClick(
                "#contact"
              );
            }}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={`
              group
              relative
              ml-4
              hidden
              h-12
              shrink-0
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-xl
              border
              px-5
              font-display
              text-sm
              font-semibold
              shadow-[0_8px_28px_-14px_rgba(59,130,246,0.8)]
              transition-all
              duration-300
              active:scale-[0.97]
              lg:inline-flex

              ${
                hireMeClicked
                  ? "border-cyan-300/70 text-white shadow-[0_0_30px_-8px_rgba(34,211,238,0.8)]"
                  : "border-blue-400/40 bg-blue-500/10 text-blue-300 hover:border-cyan-300/60 hover:text-white hover:shadow-[0_12px_32px_-10px_rgba(34,211,238,0.7)]"
              }
            `}
          >
            {/* =================================================
                CLICK COLOR POP
            ================================================== */}

            <motion.span
              initial={false}
              animate={{
                opacity:
                  hireMeClicked
                    ? 1
                    : 0,

                scale:
                  hireMeClicked
                    ? 1
                    : 0.82,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-xl
                bg-gradient-to-br
                from-blue-600
                via-cyan-500
                to-violet-500
              "
            />

            {/* =================================================
                POP GLOW
            ================================================== */}

            {hireMeClicked && (
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                animate={{
                  opacity: [
                    0,
                    0.8,
                    0,
                  ],
                  scale: [
                    0.7,
                    1.08,
                    1.15,
                  ],
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-xl
                  bg-white/20
                  blur-md
                "
              />
            )}

            {/* =================================================
                HOVER SHINE
            ================================================== */}

            <span
              className="
                pointer-events-none
                absolute
                -left-8
                top-0
                h-full
                w-8
                -skew-x-12
                bg-white/20
                blur-sm
                transition-transform
                duration-700
                group-hover:translate-x-[150px]
              "
            />

            {/* =================================================
                TEXT
            ================================================== */}

            <span
              className="
                relative
                z-10
              "
            >
              Hire Me
            </span>

            {/* =================================================
                ARROW
            ================================================== */}

            <ArrowUpRight
              size={16}
              className="
                relative
                z-10
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-0.5
              "
            />
          </motion.button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              setIsOpen(
                (value) => !value
              )
            }
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="
              ml-3
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.10]
              bg-white/[0.035]
              text-gray-300
              transition-all
              duration-200
              hover:border-blue-500/50
              hover:bg-blue-500/[0.08]
              hover:text-blue-300
              active:scale-95
              md:hidden
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
            {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* =================================================
                BACKGROUND OVERLAY
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                fixed
                inset-0
                -z-10
                bg-black/45
                backdrop-blur-[2px]
                md:hidden
              "
              onClick={() =>
                setIsOpen(false)
              }
            />

            {/* =================================================
                MOBILE MENU PANEL
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
              className="
                border-t
                border-white/[0.06]
                bg-[#05070D]/97
                shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]
                backdrop-blur-2xl
                md:hidden
              "
            >
              <nav
                className="
                  mx-auto
                  w-full
                  max-w-7xl
                  px-4
                  py-4
                  sm:px-6
                "
              >
                <ul
                  className="
                    flex
                    flex-col
                    gap-1
                  "
                >
                  {/* =================================================
                      MOBILE NAV LINKS
                  ================================================== */}

                  {visibleNavLinks.map(
                    (link, index) => {
                      const isActive =
                        activeSection ===
                        link.href.replace(
                          "#",
                          ""
                        );

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
                            delay:
                              index * 0.04,
                            duration: 0.25,
                          }}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              handleNavClick(
                                link.href
                              )
                            }
                            className="
                              group
                              relative
                              flex
                              w-full
                              items-center
                              justify-between
                              rounded-xl
                              px-4
                              py-3.5
                              text-left
                              font-display
                              text-[15px]
                              font-medium
                              text-gray-400
                              transition-all
                              duration-200
                              hover:bg-white/[0.04]
                              hover:text-white
                              active:scale-[0.99]
                              sm:text-base
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

                            <ArrowUpRight
                              size={15}
                              className="
                                text-gray-600
                                transition-all
                                duration-200
                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                                group-hover:text-blue-400
                              "
                            />

                            {/* Active line */}

                            <span
                              className={`
                                absolute
                                bottom-1
                                left-4
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
                                    : "w-0 opacity-0"
                                }
                              `}
                            />
                          </button>
                        </motion.li>
                      );
                    }
                  )}

                  {/* =================================================
                      MOBILE HIRE ME
                  ================================================== */}

                  <motion.li
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        visibleNavLinks.length *
                        0.04,
                      duration: 0.25,
                    }}
                    className="pt-2"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        handleNavClick(
                          "#contact"
                        )
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-3.5
                        font-display
                        text-sm
                        font-semibold
                        text-white
                        shadow-[0_10px_30px_-12px_rgba(37,99,235,0.7)]
                        transition-all
                        duration-200
                        hover:bg-blue-500
                        active:scale-[0.99]
                      "
                    >
                      Hire Me

                      <ArrowUpRight
                        size={16}
                      />
                    </button>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}