/* Theme switch: three logical modes — system / light / dark, plus an accent color.
   Loaded synchronously in <head> so the theme is set before first paint (no flash).
   The chosen mode persists in localStorage; "system" resolves the OS preference
   and keeps following it live. CSS only needs html[data-theme="dark"]. */
(() => {
  const KEY = "qil.theme";
  const MODES = ["system", "light", "dark"];
  const mq = window.matchMedia("(prefers-color-scheme: dark)");

  let mode = "system";
  try {
    const saved = localStorage.getItem(KEY);
    if (MODES.includes(saved)) mode = saved;
  } catch { /* no storage */ }

  const root = document.documentElement;
  const resolve = () => (mode === "system" ? (mq.matches ? "dark" : "light") : mode);

  function apply() {
    root.dataset.themeMode = mode;
    root.dataset.theme = resolve();
  }
  apply();
  mq.addEventListener("change", () => { if (mode === "system") apply(); });

  window.qilTheme = {
    get mode() { return mode; },
    set(m) {
      if (!MODES.includes(m)) return;
      mode = m;
      try { localStorage.setItem(KEY, m); } catch { /* no storage */ }
      apply();
      window.dispatchEvent(new Event("themechange"));
    },
    cycle() { this.set(MODES[(MODES.indexOf(mode) + 1) % MODES.length]); },
    labelKey() { return "theme" + mode[0].toUpperCase() + mode.slice(1); },
  };

  // Accent color, independent of light/dark. CSS keys off html[data-accent].
  const AKEY = "qil.accent";
  const ACCENTS = ["mono", "blue", "green", "violet", "orange"];
  let accent = "mono";
  try {
    const saved = localStorage.getItem(AKEY);
    if (ACCENTS.includes(saved)) accent = saved;
  } catch { /* no storage */ }
  root.dataset.accent = accent;

  window.qilAccent = {
    get name() { return accent; },
    cycle() {
      accent = ACCENTS[(ACCENTS.indexOf(accent) + 1) % ACCENTS.length];
      root.dataset.accent = accent;
      try { localStorage.setItem(AKEY, accent); } catch { /* no storage */ }
      window.dispatchEvent(new Event("themechange"));
    },
    labelKey() { return "accent" + accent[0].toUpperCase() + accent.slice(1); },
  };
})();
