"use client";
import { useEffect, useRef } from "react";

const colors = ["#ff4d4d", "#4dff88", "#4da6ff", "#ffcc4d", "#5555ff"];

const Cursor = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const particles = [];

    const move = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    const createParticle = (x, y) => {
      const el = document.createElement("div");

      const size = Math.random() * 6 + 4;
      const color = colors[Math.floor(Math.random() * colors.length)];

      el.style.position = "fixed";
      el.style.left = x + "px";
      el.style.top = y + "px";
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.background = color;
      el.style.borderRadius = "50%";
      el.style.pointerEvents = "none";
      el.style.zIndex = 9999;
      el.style.transform = "translate(-50%, -50%)";
      el.style.boxShadow = `0 0 10px ${color}`;

      document.body.appendChild(el);

      // animation
      let opacity = 1;
      let yMove = 0;

      const fade = () => {
        opacity -= 0.03;
        yMove += 1;

        el.style.opacity = opacity;
        el.style.transform = `translate(-50%, -50%) translateY(${yMove}px) scale(${opacity})`;

        if (opacity <= 0) {
          el.remove();
        } else {
          requestAnimationFrame(fade);
        }
      };

      fade();
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
};

export default Cursor;
