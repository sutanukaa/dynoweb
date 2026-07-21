"use client";

import { createContext, useContext, useState } from "react";

// The one piece of state two tiles share: approving DynoAgent's rewrite has to
// visibly change the product copy in the heatmap tile's storefront mockup.
// Anything tile-local stays in that tile — this is not a general app store.
const Ctx = createContext<{ copyApplied: boolean; setCopyApplied: (v: boolean) => void }>({
  copyApplied: false,
  setCopyApplied: () => {},
});

export const ORIGINAL_COPY = "100% RWS-certified merino, 19.5 micron. Breathable, odor-resistant.";
export const REWRITTEN_COPY =
  "The impossibly soft layer you'll live in all winter — breathes, resists odor, never pills.";

export function InteractiveProvider({ children }: { children: React.ReactNode }) {
  const [copyApplied, setCopyApplied] = useState(false);
  return <Ctx.Provider value={{ copyApplied, setCopyApplied }}>{children}</Ctx.Provider>;
}

export const useInteractive = () => useContext(Ctx);
