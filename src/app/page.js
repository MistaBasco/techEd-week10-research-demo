import styles from "./page.module.css";
import ExampleToggle from "@/components/ExampleToggle";
import ExampleCard from "@/components/ExampleCard";
import Toast from "@/components/ExampleToast";
import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ImagesOne from "@/components/ImagesOne";
import ImagesTwo from "@/components/ImagesTwo";

export default function Home() {
  return (
    <Flex justify="center" className={styles.page}>
      <Box pos="fixed" top="1%" right="1%">
        <ExampleToggle></ExampleToggle>
      </Box>
      <Toast />
      <Tabs>
        <TabList>
          <Tab>Card</Tab>
          <Tab>Images@4:3</Tab>
          <Tab>Images@16:9</Tab>
          <Tab>?</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ExampleCard></ExampleCard>
          </TabPanel>
          <TabPanel>
            <ImagesOne></ImagesOne>
          </TabPanel>
          <TabPanel>
            <ImagesTwo></ImagesTwo>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
