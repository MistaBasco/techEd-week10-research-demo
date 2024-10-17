import styles from "./page.module.css";
import ExampleToggle from "@/components/ExampleToggle";
import ExampleCard from "@/components/ExampleCard";
import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex justify="center" className={styles.page}>
      <Box pos="fixed" top="1%" right="1%">
        <ExampleToggle></ExampleToggle>
      </Box>

      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ExampleCard></ExampleCard>
          </TabPanel>
          <TabPanel>
            <h1>This is the 2nd Tab</h1>
          </TabPanel>
          <TabPanel>
            <h1>This is the 3rd Tab!</h1>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
