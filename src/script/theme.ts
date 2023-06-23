export function WatchAnimation() {
  function UpAndDown(el: string, mode: number): void {
    const element = document.querySelector(el)?.classList;
    if (mode === 1) {
      element?.add("Up2Top");
    } else if (mode === 2) {
      element?.remove("Up2Top");
    }
  }

  // 上升
  const up = new MutationObserver((mutations: any) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement && node.classList.contains("g-single")) {
          UpAndDown(".better-ncm-manager", 1);
          UpAndDown(".g-sd", 1);
          UpAndDown(".g-mn", 1);
          UpAndDown(".g-ft", 1);
          UpAndDown(".user", 1);
          up.disconnect();
          down.observe(document.querySelector(".g-single"), { attributes: true });
        }
      }
    }
  });

  // 下落
  const down = new MutationObserver((mutations: any) => {
    for (const mutation of mutations) {
      if (!mutation.target.classList.contains("z-show")) {
        UpAndDown(".better-ncm-manager", 2);
        UpAndDown(".g-sd", 2);
        UpAndDown(".g-mn", 2);
        UpAndDown(".g-ft", 2);
        UpAndDown(".user", 2);
        up.observe(document.body, { childList: true });
        down.disconnect();
      }
    }
  });

  up.observe(document.body, { childList: true });
}