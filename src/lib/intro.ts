export const INTRO_EXIT_DELAY_S = 3.4;
export const INTRO_EXIT_DURATION_S = 0.85;

export const INTRO_COMPLETE_MS =
  (INTRO_EXIT_DELAY_S + INTRO_EXIT_DURATION_S) * 1000;

export const INTRO_COMPLETE_EVENT = "intro-complete";

export const INTRO_SEEN_KEY = "jaydip-intro-seen";
export const INTRO_ACTIVE_ATTR = "data-intro-active";

export const INTRO_BOOT_SCRIPT = `
try {
  var seen = sessionStorage.getItem("${INTRO_SEEN_KEY}") === "1";
  if (seen) {
    document.documentElement.removeAttribute("${INTRO_ACTIVE_ATTR}");
  } else {
    document.documentElement.setAttribute("${INTRO_ACTIVE_ATTR}", "true");
  }
} catch (e) {}

window.addEventListener("pageshow", function () {
  try {
    if (sessionStorage.getItem("${INTRO_SEEN_KEY}") === "1") {
      document.documentElement.removeAttribute("${INTRO_ACTIVE_ATTR}");
    }
  } catch (e) {}
});
`.trim();

export function dispatchIntroComplete() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(INTRO_COMPLETE_EVENT));
}

export function hasIntroBeenSeen() {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch (e) {
    return false;
  }
}

export function markIntroSeen() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    // Clear any persistent cookie so intro runs normally per browser session
    document.cookie = `${INTRO_SEEN_KEY}=; path=/; max-age=0;`;
  } catch (e) {}
}

export function clearIntroActive() {
  if (typeof document === "undefined") return;
  document.documentElement.removeAttribute(INTRO_ACTIVE_ATTR);
}

export function beginIntroExit() {
  markIntroSeen();
  clearIntroActive();
  dispatchIntroComplete();
}
