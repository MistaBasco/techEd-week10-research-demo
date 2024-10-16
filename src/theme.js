// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light", // Default color mode (can be 'light' or 'dark')
  useSystemColorMode: true, // Set to true if you want to use the system preference by default
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("beige", "gray.800")(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
