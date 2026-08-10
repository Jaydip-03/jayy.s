export default function AboutIllustration() {
  return (
    <div className="flex justify-center lg:justify-end">

      <svg
        width="520"
        height="360"
        viewBox="0 0 520 360"
        className="w-full max-w-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Desk */}

        <line
          x1="40"
          y1="280"
          x2="480"
          y2="280"
          stroke="#d4d4d4"
        />

        {/* Laptop */}

        <rect
          x="150"
          y="70"
          width="220"
          height="160"
          rx="8"
          stroke="#BFBFBF"
          strokeWidth="2"
        />

        <line
          x1="190"
          y1="120"
          x2="330"
          y2="120"
          stroke="#D6D6D6"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <line
          x1="205"
          y1="145"
          x2="315"
          y2="145"
          stroke="#D6D6D6"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <line
          x1="205"
          y1="170"
          x2="300"
          y2="170"
          stroke="#D6D6D6"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Keyboard */}

        <path
          d="M135 230H385L360 245H160L135 230Z"
          stroke="#BFBFBF"
          strokeWidth="2"
        />

        {/* Coffee */}

        <rect
          x="60"
          y="220"
          width="32"
          height="42"
          rx="4"
          stroke="#BFBFBF"
          strokeWidth="2"
        />

        <path
          d="M92 232
             C104 232
             104 248
             92 248"
          stroke="#BFBFBF"
          strokeWidth="2"
        />

        {/* Plant */}

        <rect
          x="430"
          y="230"
          width="42"
          height="32"
          rx="2"
          stroke="#BFBFBF"
          strokeWidth="2"
        />

        <path
          d="M450 228
             C440 210
             438 198
             450 188"

          stroke="#BFBFBF"
          strokeWidth="2"
        />

        <path
          d="M450 228
             C462 210
             464 198
             450 188"

          stroke="#BFBFBF"
          strokeWidth="2"
        />

        <path
          d="M450 210
             C432 214
             432 194
             444 186"

          stroke="#BFBFBF"
          strokeWidth="2"
        />

        <path
          d="M450 210
             C468 214
             468 194
             456 186"

          stroke="#BFBFBF"
          strokeWidth="2"
        />
      </svg>

    </div>
  );
}