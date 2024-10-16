import { Image, AspectRatio, Flex, Slide } from "@chakra-ui/react";

export default function ExampleSlide({ isOpen }) {
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Flex w="100%" justifyContent="center">
        <AspectRatio w="90%" maxW="960px" ratio={4 / 3}>
          <Image
            src="https://preview.redd.it/funny-horror-crazy-results-v0-vbutvwek5jyb1.jpg?width=1024&format=pjpg&auto=webp&s=299ee9eb16ec02f55e608c321a096c89203edb10"
            alt="Funny Horror"
            objectFit="cover"
          />
        </AspectRatio>
      </Flex>
    </Slide>
  );
}
