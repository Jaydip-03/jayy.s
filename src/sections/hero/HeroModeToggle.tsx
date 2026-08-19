"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_BLUE = "#008dcc";

export default function HeroModeToggle() {
  const { isSpideyMode, toggleMode } = useTheme();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /*
   * Create the audio object once.
   * We don't render an <audio> element because we only need
   * background music for Spidey Mode.
   */
  useEffect(() => {
    const audio = new Audio("/audio/sunflower.mp3");

    audio.loop = true;
    audio.volume = 0.45;
    audio.preload = "auto";

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  /*
   * Keep audio synchronized with the current theme.
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!isSpideyMode) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isSpideyMode]);

  const handleToggle = () => {
    const audio = audioRef.current;

    /*
     * We are currently in Normal Mode.
     * The click will switch us to Spidey Mode,
     * so start the song directly from this user interaction.
     */
    if (!isSpideyMode && audio) {
      audio.play().catch((error) => {
        console.warn("Could not play Spidey theme:", error);
      });
    }

    /*
     * If we're currently in Spidey Mode,
     * ThemeContext will switch to Normal Mode.
     * The effect above will stop the song.
     */
    toggleMode();
  };

  return (
    <div
      className="
        absolute
        bottom-3
        right-3
        z-30

        sm:bottom-[8rem]
        sm:right-[8%]

        lg:bottom-[8.2rem]
        lg:right-[9%]

        xl:right-[10%]
      "
    >
      <div className="relative">
        {/* =========================
            Handwritten annotation
        ========================== */}
        <div
          className="
            pointer-events-none
            absolute

            /* Mobile */
            bottom-1
            right-12
            w-[125px]

            /* Desktop */
            sm:bottom-7
            sm:right-9
            sm:w-[170px]
          "
          aria-hidden="true"
        >
          <p
            className="
              font-handwritten
              text-[17px]
              leading-[1.05]
              tracking-wide

              sm:text-[21px]
            "
            style={{ color: SPIDEY_BLUE }}
          >
            want u
            <br />
            change mode?
          </p>

          {/* Hand-drawn arrow */}
          <svg
            width="105"
            height="34"
            viewBox="0 0 105 34"
            fill="none"
            className="
              absolute
              -bottom-5
              right-[-4px]

              sm:-bottom-6
              sm:right-0
            "
          >
            <path
              d="M3 25C27 30 57 26 92 7"
              stroke={SPIDEY_BLUE}
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            <path
              d="M84 7L93 7L89 14"
              stroke={SPIDEY_BLUE}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* =========================
            Mode toggle
        ========================== */}
        <button
          type="button"
          onClick={handleToggle}
          aria-label={
            isSpideyMode
              ? "Switch to normal mode"
              : "Switch to Spidey mode"
          }
          title={
            isSpideyMode
              ? "Switch to normal mode"
              : "Switch to Spidey mode"
          }
          className="
            group
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-black/40
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-white/30
            hover:bg-white/[0.04]
            active:scale-95
          "
        >
          {/* Subtle outer ring */}
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              border
              border-transparent
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:border-white/10
            "
          />

          {/* =========================
              Spidey mode → Sun icon
          ========================== */}
          {isSpideyMode ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="
                transition-transform
                duration-500
                group-hover:rotate-[-18deg]
              "
            >
              <path
                d="M12 3V5"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M12 19V21"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M3 12H5"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M19 12H21"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M5.64 5.64L7.05 7.05"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M16.95 16.95L18.36 18.36"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M16.95 7.05L18.36 5.64"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M5.64 18.36L7.05 16.95"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <circle
                cx="12"
                cy="12"
                r="3.5"
                stroke={SPIDEY_BLUE}
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            /* Normal mode → Moon icon */
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="
                transition-transform
                duration-500
                group-hover:rotate-[-12deg]
              "
            >
              <path
                d="M20.5 14.5C19.1 16.2 17 17.2 14.7 17.2C10.6 17.2 7.3 13.9 7.3 9.8C7.3 7.5 8.3 5.4 10 4C5.9 4.9 3 8.5 3 12.7C3 17.5 6.9 21.4 11.7 21.4C15.9 21.4 19.5 18.5 20.5 14.5Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {/* Tiny center accent */}
          <span
            className="
              pointer-events-none
              absolute
              h-1
              w-1
              rounded-full
              bg-white/50
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />
        </button>
      </div>
    </div>
  );
}