import {
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  ModalCloseButton,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { CarContext } from "../../contexts/CarsContext";

interface IDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  deleteFunction: () => Promise<void>;
  headingText: string;
  title: string;
  description: string;
  buttonText?: string;
}

const DeleteModal = ({
  isOpen,
  onClose,
  deleteFunction,
  headingText,
  title,
  description,
  buttonText,
}: IDeleteModalProps) => {
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg={"white"}
          color={"grey.1"}
          w={"90%"}
          maxW={"420px"}
          p={"18px 24px 32px 24px"}
        >
          <Heading mb={"58px"} fontSize={"heading.4"}>
            {headingText}
          </Heading>

          <ModalCloseButton color={"grey.4"} />

          <Flex direction={"column"} align={"flex-start"} gap={"18px"}>
            <Heading mb={"20px"} fontSize={"heading.2"}>
              {title}
            </Heading>
            <Text fontSize={"body.1"} color={"grey.2"}>
              {description}
            </Text>

            <Flex
              direction={{ base: "column", sm: "row" }}
              w={"100%"}
              gap={"8px"}
              justify={"right"}
              mt={{ base: "24px" }}
            >
              <Button
                onClick={onClose}
                w={{ base: "100%", sm: "auto" }}
                size={"lg"}
                variant={"negative"}
              >
                Cancelar
              </Button>
              <Button
                onClick={async () => {
                  setDeleteLoading(true);
                  await deleteFunction();
                  setDeleteLoading(false);
                }}
                w={{ base: "100%", sm: "auto" }}
                size={"lg"}
                variant={"alert"}
                isLoading={deleteLoading}
                loadingText="Excluindo"
              >
                {buttonText ? buttonText : "Sim, confirmar exclusão"}
              </Button>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
