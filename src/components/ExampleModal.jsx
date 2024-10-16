import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
} from "@chakra-ui/react";
import ExamplePopover from "./ExamplePopover";

export default function ExampleModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button size="sm" mt="1rem" onClick={onOpen}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Code Snippet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              objectFit="cover"
              src="/assets/modal_sc.png"
              alt="Code Snippet"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              size="sm"
              mt="1rem"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <ExamplePopover></ExamplePopover>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
