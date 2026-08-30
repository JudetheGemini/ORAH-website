// Facebook (Meta) Pixel helpers
// Pixel base code lives in components/facebook-pixel.tsx

export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FB_PIXEL_ID || "2162276977974326";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fire a PageView hit (used for client-side route changes). */
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

/**
 * Fire a standard or custom event.
 * Standard events: https://www.facebook.com/business/help/402791146561655
 * e.g. event("Lead"), event("Contact"), event("CompleteRegistration")
 */
export const event = (
  name: string,
  options: Record<string, unknown> = {}
) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, options);
  }
};
