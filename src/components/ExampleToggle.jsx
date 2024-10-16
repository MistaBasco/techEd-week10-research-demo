"use client";

import {
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import ExampleSlide from "./ExampleSlide";
import { Grey_Qo } from "next/font/google";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure(); // Control the image slide transition

  return (
    <>
      <FormControl
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        h={20}
        w={60}
        zIndex={"tooltip"}
      >
        {/* Color Mode Toggle */}
        <HStack>
          <FormLabel htmlFor="color-mode-toggle" mb="0">
            {colorMode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
          </FormLabel>
          <Switch
            id="color-mode-toggle"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
        </HStack>

        {colorMode === "dark" && (
          <HStack>
            <FormLabel htmlFor="extra-switch" mb="0">
              ?
            </FormLabel>
            <Switch id="extra-switch" onChange={onToggle} />
          </HStack>
        )}
      </FormControl>
      <ExampleSlide isOpen={isOpen}></ExampleSlide>
    </>
  );
}
