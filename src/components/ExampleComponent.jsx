"use client";

import {
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useDisclosure,
  Slide,
  Box,
  Image,
} from "@chakra-ui/react";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure(); // Control the image slide transition

  return (
    <FormControl display="flex" flexDirection="column" alignItems="center">
      {/* Color Mode Toggle */}
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={4}
      >
        <FormLabel htmlFor="color-mode-toggle" mb="0">
          {colorMode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
        </FormLabel>
        <Switch
          id="color-mode-toggle"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </FormControl>

      {colorMode === "dark" && (
        <>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
          >
            <FormLabel htmlFor="extra-switch" mb="0">
              ?
            </FormLabel>
            <Switch id="extra-switch" onChange={onToggle} />
          </FormControl>

          <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
            <Box>
              <Image
                src="https://preview.redd.it/funny-horror-crazy-results-v0-vbutvwek5jyb1.jpg?width=1024&format=pjpg&auto=webp&s=299ee9eb16ec02f55e608c321a096c89203edb10"
                alt="Funny Horror"
                boxSize="900px"
                objectFit="cover"
              />
            </Box>
          </Slide>
        </>
      )}
    </FormControl>
  );
}

export default ColorModeToggle;
