import { Image, AspectRatio, Flex, Slide, Portal } from "@chakra-ui/react";

export default function ExampleSlide({ isOpen }) {
  return (
    <>
      <Slide direction="bottom" in={isOpen}>
        <Flex w="100%" justifyContent="center" position="relative">
          <AspectRatio w="90%" maxW="960px" ratio={4 / 3}>
            <Image
              zIndex={"popover"}
              src="https://preview.redd.it/funny-horror-crazy-results-v0-vbutvwek5jyb1.jpg?width=1024&format=pjpg&auto=webp&s=299ee9eb16ec02f55e608c321a096c89203edb10"
              alt="Funny Horror"
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
      </Slide>
    </>
  );
}
