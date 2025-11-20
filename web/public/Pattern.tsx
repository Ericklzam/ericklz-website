import React from "react";

export const Pattern: React.FC = () => {
  return (
    <svg
      width="360"
      height="600"
      viewBox="0 0 360 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <style>
        {`
          /* Outer levitation + scale */
          @keyframes levitate1 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
          }
          @keyframes levitate2 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-6px) scale(1.04); }
          }
          @keyframes levitate3 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-4px) scale(1.03); }
          }
          @keyframes levitate4 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.045); }
          }
          @keyframes levitate5 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-7px) scale(1.048); }
          }

          .levitate1, .levitate2, .levitate3, .levitate4, .levitate5 {
            transform-origin: center;
          }

          .levitate1 { animation: levitate1 5s ease-in-out infinite; }
          .levitate2 { animation: levitate2 6s ease-in-out infinite; }
          .levitate3 { animation: levitate3 4.5s ease-in-out infinite; }
          .levitate4 { animation: levitate4 5.5s ease-in-out infinite; }
          .levitate5 { animation: levitate5 6.5s ease-in-out infinite; }

          /* Inner square independent scale (subtle) */
          @keyframes innerScale1 {
            0%, 100% { transform: scale(0.94); }
            50% { transform: scale(0.99); }
          }
          @keyframes innerScale2 {
            0%, 100% { transform: scale(0.93); }
            50% { transform: scale(1.0); }
          }
          @keyframes innerScale3 {
            0%, 100% { transform: scale(.98); }
            50% { transform: scale(1.02); }
          }
          @keyframes innerScale4 {
            0%, 100% { transform: scale(0.98); }
            50% { transform: scale(1.02); }
          }
          @keyframes innerScale5 {
            0%, 100% { transform: scale(1.02); }
            50% { transform: scale(0.95); }
          }

          .inner1, .inner2, .inner3, .inner4, .inner5 {
            transform-origin: center;
          }

          .inner1 { animation: innerScale1 3.5s ease-in-out infinite; }
          .inner2 { animation: innerScale2 4s ease-in-out infinite; }
          .inner3 { animation: innerScale3 3s ease-in-out infinite; }
          .inner4 { animation: innerScale4 3.8s ease-in-out infinite; }
          .inner5 { animation: innerScale5 4.2s ease-in-out infinite; }
        `}
      </style>

      {/* Large central square */}
      <g className="levitate1">
        <rect x="37.9392" y="274.413" width="192.917" height="192.917" transform="rotate(-45 37.9392 274.413)" fill="black" stroke="white" />
        <g className="inner1">
          <rect x="58.1473" y="274.093" width="164.111" height="164.111" transform="rotate(-45 58.1473 274.093)" stroke="white" />
        </g>
      </g>

      {/* Upper-middle square */}
      <g className="levitate2">
        <rect x="183.765" y="128.562" width="115.35" height="115.35" transform="rotate(-45 183.765 128.562)" fill="black" stroke="white" />
        <g className="inner2">
          <rect x="199.366" y="128.022" width="94.5905" height="94.5905" transform="rotate(-45 199.366 128.022)" stroke="white" />
        </g>
      </g>

      {/* Top square */}
      <g className="levitate3">
        <rect x="176.784" y="41.136" width="57.1751" height="57.1751" transform="rotate(-45 176.784 41.136)" fill="#040000" stroke="white" />
        <g className="inner3">
          <rect x="187.5" y="41.3006" width="42.4502" height="42.4502" transform="rotate(-45 187.5 41.3006)" stroke="white" />
        </g>
      </g>

      {/* Bottom square */}
      <g className="levitate4">
        <rect x="88.3576" y="508.864" width="57.1751" height="57.1751" transform="rotate(-45 88.3576 508.864)" fill="black" stroke="white" />
        <g className="inner4">
          <rect x="99.074" y="509.029" width="42.4502" height="42.4502" transform="rotate(-45 99.074 509.029)" stroke="white" />
        </g>
      </g>

      {/* Lower-middle square */}
      <g className="levitate5">
        <rect x="0.707107" y="420.989" width="115.35" height="115.35" transform="rotate(-45 0.707107 420.989)" fill="#010000" stroke="white" />
        <g className="inner5">
          <rect x="15.439" y="421.318" width="94.5905" height="94.5905" transform="rotate(-45 15.439 421.318)" stroke="white" />
        </g>
      </g>
    </svg>
  );
};
