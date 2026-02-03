export function gaEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export function getAppContext() {
  const isStandalone =
    window.matchMedia?.("(display-mode: standalone)")?.matches ||
    window.navigator?.standalone === true;
  return isStandalone ? "pwa" : "browser";
}

export function trackReveal() {
  gaEvent("reveal_click", { app_context: getAppContext() });
}

export function trackNext() {
  gaEvent("next_click", { app_context: getAppContext() });
}

export function trackAutoplayToggle(state) {
  gaEvent("autoplay_toggle", { app_context: getAppContext(), state });
}
