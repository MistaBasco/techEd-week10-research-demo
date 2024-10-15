// providers.jsx
"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";

export function Providers({ children }) {
  return (
    <>
      {/* Add ColorModeScript to enable correct initial color mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
