import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const triggerRippleEffect = (event: MouseEvent) => {
  const link = event.currentTarget as HTMLElement;

  // Create ripple element
  const ripple = document.createElement("span");
  ripple.classList.add("ripple-effect");

  // Get click coordinates relative to the element
  const rect = link.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  // Apply size and position
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Append to the link element
  link.appendChild(ripple);

  // Remove after animation ends
  setTimeout(() => ripple.remove(), 600);
};

// Expose it globally
// Extend the Window interface to include triggerRippleEffect
declare global {
  interface Window {
    triggerRippleEffect: (event: MouseEvent) => void;
  }
}

window.triggerRippleEffect = triggerRippleEffect;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
