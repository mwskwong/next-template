"use client";

import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
      colorPalette: "red",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-orbitron)" },
        body: { value: "var(--font-inter)" },
      },
    },
  },
});
