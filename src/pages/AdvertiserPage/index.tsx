import { Avatar, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { MockedCarPostList, mockedUser2 } from "../../mocks";
<<<<<<< HEAD
import CarPostList from './../../components/carPosterListComponet';
import PosterCreateModal from "../../components/posterCreateModal";
=======
import CardPoster from "../../components/cardPoster";
import CarPostList from "./../../components/carPosterListComponet";
>>>>>>> b3ed87a9aa910e6beb49be49f256a51551428f02

const AdvertiserPage = () => {
  const { isOpen, onOpen, onClose} = useDisclosure()
  const user = mockedUser2;

  return (
    <Flex
      flexDirection={"column"}
      bgGradient={{
        base: "linear(to-b, brand.1 0%, brand.1 12%, grey.8 12%, grey.8 100%)",
        md: "linear(to-b, brand.1 0px, brand.1 300px, grey.8 300px, grey.8 100%)",
      }}
      minH={"100vh"}
    >
      <Header />
      <Flex flexDirection={"column"} alignItems={"center"} padding={"50px 3%"}>
        <Flex
          flexDirection={"column"}
          bg="white"
          maxW={"1200px"}
          borderRadius={"4px"}
          padding={"40px"}
          gap={"20px"}
          w={{ base: "100%", md: "80%" }}
        >
          <Avatar name={user.name} size={"xl"} color="white" />
          <Flex alignItems={"center"} gap={"15px"}>
            <Text color="grey.1" fontWeight={"semibold"} fontSize={"heading.3"}>
              {user.name}
            </Text>
            <Text
              color="brand.1"
              bg="brand.4"
              padding={"5px"}
              borderRadius={"4px"}
              fontWeight={"medium"}
            >
              Anunciante
            </Text>
          </Flex>
          <Text fontSize={"body.3"} color={"grey.2"}>
            {user.description}
          </Text>
          <Button w={"max-content"} variant={"outlineBrand1"} onClick={() => { onOpen() }}>
            Criar anuncio
          </Button>
          <PosterCreateModal isOpen={isOpen} onClose={onClose}/>
        </Flex>
        <CarPostList carsList={MockedCarPostList} isOwner={true} />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default AdvertiserPage;
