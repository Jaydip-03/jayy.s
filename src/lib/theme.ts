


export const THEME_BOOT_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem("portfolio-theme");

    if (saved === "normal" || saved === "spidey") {
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = "normal";
    }
  } catch (e) {
    document.documentElement.dataset.theme = "normal";
  }
})();
`;