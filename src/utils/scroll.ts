const DISABLED_SCROLL_CLASSNAME = "disabled_scroll";

export function handleDisableBodyScroll() {
  const root = document.querySelector<HTMLDivElement>("#root");
  const app = document.querySelector<HTMLDivElement>("#app");

  if (root?.classList.contains(DISABLED_SCROLL_CLASSNAME)) {
    return;
  }
  root?.classList.add(DISABLED_SCROLL_CLASSNAME);

  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const hasScroll =
    document.documentElement.scrollHeight >
    document.documentElement.clientHeight;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflowY = hasScroll ? "scroll" : "hidden";
  document.body.style.overflowX = "hidden";
  document.body.style.position = "absolute";
  document.body.style.width = "100%";
  document.body.style.height = "100%";

  if (app) {
    app.style.minHeight = "100%";
    app.style.height = "fit-content";
  }

  if (root) {
    root.style.overflow = "hidden";
    root.scrollTop = scrollTop;
  }

  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflowY = "";
    document.body.style.overflowX = "";
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.height = "";

    if (app) {
      app.style.minHeight = "";
      app.style.height = "";
    }

    if (root) {
      root.style.overflow = "";
      root.scrollTop = 0;
    }

    document.documentElement.scrollTop = scrollTop;
    root?.classList.remove(DISABLED_SCROLL_CLASSNAME);
  };
}
