import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const mouse = useRef({
    x: -100,
    y: -100,
  });

  const current = useRef({
    x: -100,
    y: -100,
  });

  const isHovering = useRef(false);

  useEffect(() => {
    // Don't run custom cursor on touch devices.
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!finePointer.matches) {
      return undefined;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      cursor.style.opacity = "1";
      ring.style.opacity = "1";

      const target = event.target;

      isHovering.current = Boolean(
        target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      );
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    };

    let animationFrameId;

    const animate = () => {
      // Fast-following center dot.
      current.current.x +=
        (mouse.current.x - current.current.x) * 0.35;

      current.current.y +=
        (mouse.current.y - current.current.y) * 0.35;

      // Slightly slower outer ring.
      const ringX =
        current.current.x;
      const ringY =
        current.current.y;

      cursor.style.transform = `
        translate3d(
          ${current.current.x}px,
          ${current.current.y}px,
          0
        )
        translate(-50%, -50%)
      `;

      ring.style.transform = `
        translate3d(
          ${ringX}px,
          ${ringY}px,
          0
        )
        translate(-50%, -50%)
      `;

      if (isHovering.current) {
        ring.style.width = "24px";
        ring.style.height = "24px";
        ring.style.borderColor =
          "rgba(103, 232, 249, 0.75)";
        ring.style.boxShadow =
          "0 0 12px rgba(34, 211, 238, 0.22)";
      } else {
        ring.style.width = "18px";
        ring.style.height = "18px";
        ring.style.borderColor =
          "rgba(147, 197, 253, 0.58)";
        ring.style.boxShadow =
          "0 0 8px rgba(59, 130, 246, 0.16)";
      }

      animationFrameId =
        requestAnimationFrame(animate);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    animationFrameId =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, []);

  return (
    <>
      {/* Main tiny cursor */}

      <span
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "5px",
          height: "5px",
          borderRadius: "9999px",
          background: "#ffffff",
          boxShadow:
            "0 0 7px rgba(103, 232, 249, 0.75)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          transform:
            "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition:
            "width 150ms ease, height 150ms ease, border-color 150ms ease, box-shadow 150ms ease, opacity 120ms ease",
          willChange:
            "transform, width, height, opacity",
        }}
      />

      {/* Outer ring */}

      <span
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "18px",
          height: "18px",
          borderRadius: "9999px",
          border:
            "1px solid rgba(147, 197, 253, 0.58)",
          background:
            "rgba(59, 130, 246, 0.02)",
          boxShadow:
            "0 0 8px rgba(59, 130, 246, 0.16)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0,
          transform:
            "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
          transition:
            "width 150ms ease, height 150ms ease, border-color 150ms ease, box-shadow 150ms ease, opacity 120ms ease",
          willChange:
            "transform, width, height, opacity",
        }}
      />
    </>
  );
}