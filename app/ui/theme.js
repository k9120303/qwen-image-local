/* Theme switch: three logical modes — system / light / dark.
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
})();
