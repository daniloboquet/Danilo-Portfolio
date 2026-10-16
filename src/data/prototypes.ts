// External interactive prototypes (Figma Make builds).
// Each entry carries an `enabled` switch: set false and the surface disappears
// everywhere — the one-edit removal path if a destination rots or is unpublished.
// Publish gates (see workplan): demo-data click-through, naming/permission for the
// pilot, and destination title/meta polish — re-check after every Figma republish.

export interface PrototypeConfig {
  enabled: boolean;
  href: string;
}

// AI-Commerce pitch prototype — the original artifact used to pitch the idea;
// referenced inline in Act 1 of the AI-Commerce study. Provenance confirmed by
// Danilo 2026-10-15.
export const pitchPrototype: PrototypeConfig = {
  enabled: true,
  href: "https://boat-pink-61139600.figma.site/merchant/dashboard",
};

// Shipping-provider portal pilot — a side-project designed to extend the
// AI-Commerce platform into delivery (piloted in the KWC area with a local
// delivery co-operative); referenced in the AI-Commerce study (Act 5).
export const shippingPilotPrototype: PrototypeConfig = {
  enabled: true,
  href: "https://snare-nicks-88556603.figma.site",
};
