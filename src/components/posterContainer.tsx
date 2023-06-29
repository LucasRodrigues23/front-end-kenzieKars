import {
  Flex,
  VStack,
  Heading,
  Tag,
  Button,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import PosterImageBox from "./posterImageBox";
import AdvertiserInformations from "./advertiserInformations";
import CommentList from "./commentsList";
import CommentForm from "./commentsForm";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ICar } from "../contexts/Interfaces";
import { apiG21 } from "../services/api";
import { UserContext } from "../contexts/userContext";


const PosterContainer = () => {
  const { user } = useContext(UserContext)
  const { carId } = useParams()
  const [car, setCar] = useState<ICar | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("@kenzie-cars:token")

    const getCarById = async () => {
      try {
        setLoading(true)
        const { data } = await apiG21.get(`/car/${carId}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        setCar(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getCarById()
  }, [])

  function setPosterImage(url: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Box
        paddingTop={"40px"}
        pb={{ base: "45px", md: "73px" }}
        w={"100%"}
        bgGradient={{
          base: "linear(to-b, brand.1 0%, brand.1 23%, grey.8 23%, grey.8 100%)",
          md: "linear(to-b, brand.1 0px, brand.1 600px, grey.8 600px, grey.8 100%)",
        }}
      >
        <Flex
          margin={"auto"}
          display={"flex"}
          gap={{ base: "16px", md: "3%" }}
          p={0}
          flexDirection={{ base: "column", md: "row" }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          maxW={"1300px"}
          w={"90%"}
          color={"grey.1"}
        >
          <Flex
            justifyContent={"center"}
            gap={"30px"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Flex
              w={{ base: "100%", md: "62%" }}
              direction={{ base: "column" }}
              gap={"18px"}
            >
              <Flex
                rounded={"4px"}
                overflow={"hidden"}
                align={"center"}
                justify={"center"}
                bg={"grey.10"}
              >
                <Image
                  h={"355px"}
                  src={car?.images.one}
                  w={"auto"}
                  role={"button"}
                  onClick={() => {
                    setPosterImage(car!.images.one);
                  }}
                  maxW={"100%"}
                  objectFit={{ base: "contain", md: "fill" }}
                />
              </Flex>

              {/* DETAILS */}
              <Flex
                bg={"grey.10"}
                rounded={"4px"}
                direction={"column"}
                p={{ base: "44px 28px 28px 28px", md: "44px 44px 28px 44px" }}
                gap={{ base: "32px", md: "24px" }}
              >
                <Flex
                  direction={"column"}
                  align={"right"}
                  gap={{ base: "32px", md: "32px" }}
                >
                  <VStack align={"right"}>
                    {/*                     {!carPoster?.isPublished && (
                      <Text
                        as={"span"}
                        color={"grey.4"}
                        fontSize={"body.2"}
                        lineHeight={"heading.6"}
                        textAlign={"end"}
                        fontWeight={"semibold"}
                      >
                        Anúncio Inativo
                      </Text>
                    )} */}
                    <Heading
                      as={"h2"}
                      fontSize={"heading.6"}
                      lineHeight={"heading.6"}
                    >
                      {`${car?.model
                        .split("")[0]
                        .toUpperCase()}${car?.model.substring(1)}`}
                    </Heading>
                  </VStack>

                  <Flex gap={"12px"}>
                    <Tag
                      fontSize={"body.2"}
                      fontWeight={"semibold"}
                      bgColor={"brand.4"}
                      color={"brand.1"}
                      rounded={"4px"}
                    >
                      {car?.year}
                    </Tag>
                    <Tag
                      fontSize={"body.2"}
                      fontWeight={"semibold"}
                      bgColor={"brand.4"}
                      color={"brand.1"}
                      rounded={"4px"}
                    >
                      {car?.kilometers} KM
                    </Tag>
                  </Flex>
                </Flex>

                <Text fontSize={"body.1"} fontWeight={"bold"}>
                  {car?.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>

                <Box>
                  <Button
                    _disabled={{ _hover: { bg: "grey.5" } }}
                    variant={
                      user ? "brand1" : "disable"
                    }
                  //   onClick={handleBuy}
                  >
                    Comprar
                  </Button>
                </Box>
              </Flex>

              <Flex
                p={{ base: "36px 28px", md: "36px 44px" }}
                bg={"grey.10"}
                rounded={"4px"}
                direction={"column"}
                gap={"32px"}
                mt={{ base: "8px", md: "24px" }}
              >
                <Heading fontSize={"heading.6"} fontWeight={"bold"}>
                  Descrição
                </Heading>
                <Text
                  color={"grey.2"}
                  fontSize={"body.1"}
                  lineHeight={"body.1"}
                >
                  {car?.description}
                </Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection={"column"}
              w={{ base: "100%", md: "35%" }}
              gap={"30px"}
            >
              <PosterImageBox car={car!} />
              <AdvertiserInformations user={user!} />
            </Flex>
          </Flex>
          <Flex
            marginTop={"30px"}
            gap={"30px"}
            flexDirection={"column"}
            w={{ base: "100%", md: "62%" }}
          >
            <CommentList comments={car?.comments} />
            <CommentForm name={user?.name} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default PosterContainer;
