"use client";

import { useEffect } from "react";

/** Axiom key-aperture: limestone mask, keyhole centred on the Lane mark, 1.4s, no bounce. */
export function Aperture() {
  useEffect(() => {
    if (document.documentElement.dataset.aperture !== "play") return;
    const timer = window.setTimeout(() => {
      document.documentElement.dataset.aperture = "done";
    }, 1580);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="aperture-root" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="lane-keyhole" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
            <rect width="100" height="100" fill="white" />
            <g transform="translate(50 46)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  from="1"
                  to="16"
                  dur="1.4s"
                  fill="freeze"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.22 1 0.36 1"
                />
                <ellipse cx="0" cy="0" rx="8.4" ry="6.1" fill="black" />
                <path d="M -2.15 3.4 L 2.15 3.4 L 1.35 12.2 L -1.35 12.2 Z" fill="black" />
              </g>
            </g>
          </mask>
        </defs>
        <rect width="100" height="100" fill="#F4F1EC" mask="url(#lane-keyhole)" />
      </svg>
      <img src="/media/logo.png" alt="" className="aperture-mark" />
    </div>
  );
}
