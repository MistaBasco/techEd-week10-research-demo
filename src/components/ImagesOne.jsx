import imagesData from "@/utilities/images.json";
import { SimpleGrid, Image, AspectRatio } from "@chakra-ui/react";

export default function Images() {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
      {imagesData.images.map((url, index) => (
        <AspectRatio key={index} minW="240px" ratio={4 / 3}>
          <Image src={url} alt={`Random image ${index + 1}`} />
        </AspectRatio>
      ))}
    </SimpleGrid>
  );
}
