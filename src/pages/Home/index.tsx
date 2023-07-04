import {
  Image,
  Container,
  Flex,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomeBg from "../../assets/HomeBg.png";
import SideBar from "../../components/sideBar";
import CarPostList from "./../../components/carPosterListComponet";
import { useContext, useEffect, useState } from "react";
import { CarContext } from "../../contexts/CarsContext";
import { apiG21 } from "../../services/api";
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filteredCarList, setFilteredCarList } = useContext(CarContext);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    prev: null,
    next: null,
    count: 0,
    cars: [],
  });

  const getCarsByPage = async (page: number) => {
    try{
      const { data } = await apiG21.get(`/car/paging?page=${page}&perpage=9`)

      setFilteredCarList(data.cars)
      setPagination(data)
      const totalPages = Math.ceil(data.count / 9)
      setTotalPages(totalPages)
    }catch(error) {
      console.error(error)
    }
  }

  useEffect(() =>{
    getCarsByPage(currentPage)
  }, [currentPage])

  const handlePrevPage = () =>{
    if(pagination.prev){
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if(pagination.next){
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      <Header />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="white" width={"full"}>
          <ModalHeader>Filtros</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SideBar />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Image
        src={HomeBg}
        alt={"homepage image"}
        w={"100%"}
        h={"55vh"}
        objectFit={"cover"}
      />
      <Container as={"section"} p={0} maxWidth={"1600px"}>
        <Flex
          gap={"25px"}
          p={"40px 10px"}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent={"space-evenly"}
        >
          <Box display={{ base: "none", md: "flex" }} flex={{ md: 1 }}>
            <SideBar />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={{ base: "100%", md: "auto" }}
          >
            <CarPostList carsList={filteredCarList} isOwner={false}/>
            <Button
              marginTop={5}
              display={{ base: "block", md: "none" }}
              width="248px"
              onClick={onOpen}
            >
              Filtro
            </Button>
            <Flex
              fontSize={"heading.3"}
              fontFamily={"heading"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}
              p={{ base: "10px", md: "70px" }}
            >
              {currentPage > 1 && (
                <Flex>
                  <Button 
                  color={"brand.1"} 
                  fontWeight="light" 
                  bg={"transparent"} 
                  outline={"none"}
                  variant={"link"} 
                  onClick={handlePrevPage}>
                    <MdNavigateBefore/> Anterior
                  </Button>
                </Flex>
              )}
                {currentPage} de {totalPages}
              {currentPage < totalPages && (
                <Flex color={"brand.1"}>
                  <Button 
                  color={"brand.1"} 
                  fontWeight="light" 
                  bg={"transparent"} 
                  outline={"none"}
                  variant={"link"}
                  onClick={handleNextPage}> 
                  Seguinte <MdNavigateNext/> 
                  </Button>
                </Flex>
              )}
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
