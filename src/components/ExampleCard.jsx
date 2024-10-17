"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Heading,
  Box,
  Text,
  IconButton,
  Image,
  Button,
  Collapse,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import ExampleModal from "./ExampleModal";

export default function ExampleCard() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Card maxW="sm" position="relative" zIndex="base">
      <CardHeader>
        <Flex spacing="2">
          <Flex flex="1" gap="1" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Collapse startingHeight={75} in={show}>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequuntur id corporis sit ratione hic
            accusantium debitis fugit cum placeat nemo adipisci eos natus ex
            sunt blanditiis, nihil dolorem optio quae! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Placeat similique soluta
            voluptate optio impedit vitae iusto veniam tempora provident error
            laboriosam sapiente, dolorum odio harum. Repudiandae, consequuntur
            tempora laboriosam repellat, deserunt veritatis suscipit est a
            molestias quidem recusandae cum tenetur nostrum sunt voluptatum
            eveniet aperiam.
          </Text>
        </Collapse>
        <Flex>
          <Button size="sm" onClick={handleToggle} mt="1rem">
            Show {show ? "Less" : "More"}
          </Button>
          <Spacer></Spacer>
          <ExampleModal></ExampleModal>
        </Flex>
      </CardBody>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
