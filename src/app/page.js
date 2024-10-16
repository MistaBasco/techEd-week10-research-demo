import styles from "./page.module.css";
import ExampleToggle from "@/components/ExampleToggle";
import ExampleCard from "@/components/ExampleCard";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex justify="center" className={styles.page}>
      <Box pos="fixed" top="1%" right="1%">
        <ExampleToggle></ExampleToggle>
      </Box>
      <ExampleCard></ExampleCard>
    </Flex>
  );
}
