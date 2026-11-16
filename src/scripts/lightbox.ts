let initialized = false;

/**
 * One dialog for every enlarged figure. Triggers opt in with:
 * data-lightbox, data-lightbox-src, optional data-lightbox-alt/caption.
 * Without JS the trigger is a normal link to the full-size image.
 */
export function initLightbox() {
  if (initialized) return;
  initialized = true;

  const triggers = document.querySelectorAll<HTMLAnchorElement>("[data-lightbox]");
  if (!triggers.length) return;

  let dialog: HTMLDialogElement | null = null;
  let opener: HTMLElement | null = null;

  const ensureDialog = () => {
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.className = "zoom-dialog";

    const inner = document.createElement("div");
    inner.className = "zoom-inner";

    const close = document.createElement("button");
    close.type = "button";
    close.className = "zoom-close";
    close.setAttribute("aria-label", "Close image");
    close.textContent = "✕";

    const img = document.createElement("img");
    img.alt = "";

    const caption = document.createElement("p");
    caption.className = "zoom-caption";

    inner.append(close, img, caption);
    dialog.append(inner);
    document.body.append(dialog);

    close.addEventListener("click", () => dialog?.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog?.close();
    });
    dialog.addEventListener("close", () => {
      if (opener) opener.focus();
    });

    return dialog;
  };

  for (const trigger of triggers) {
    trigger.addEventListener("click", (event) => {
      if (typeof HTMLDialogElement === "undefined") return; // fall back to the link
      event.preventDefault();

      const d = ensureDialog();
      const img = d.querySelector("img");
      const caption = d.querySelector<HTMLElement>(".zoom-caption");
      if (!img || !caption) return;

      const source = trigger.querySelector("img");
      const alt = trigger.dataset.lightboxAlt || (source ? source.alt : "");
      const captionText = trigger.dataset.lightboxCaption || "";

      img.src = trigger.dataset.lightboxSrc || trigger.href;
      img.alt = alt;
      caption.textContent = captionText;
      caption.hidden = !captionText;
      d.setAttribute("aria-label", alt || captionText || "Full-size image");

      opener = trigger;
      d.showModal();
      d.querySelector<HTMLButtonElement>(".zoom-close")?.focus();
    });
  }
}
