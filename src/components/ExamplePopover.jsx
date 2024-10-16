import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  Button,
  Image,
} from "@chakra-ui/react";

export default function ExamplePopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" size="sm" mt="1rem" ml={2}>
          View Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent w="2xl">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Look at all these Snippeths!</PopoverHeader>
        <PopoverBody>
          <Image
            objectFit="cover"
            src="/assets/collapse_sc.png"
            alt="Code Snippet"
            // w="480px"
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
