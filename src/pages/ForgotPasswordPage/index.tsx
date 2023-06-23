import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { UserContext } from "../../contexts/userContext";
import { IForgotPassword } from "../../interfaces/forgotPassword.interfaces";
import forgotPasswordSchema from "../../schemas/forgotPassword.schema";

const ForgotPasswordPage = () => {
  const [sendEmailLoading, setSendEmailLoading] = useState<boolean>(false);
    const { sendResetPassworEmail } = useContext(UserContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (formData: IForgotPassword) => {
    setSendEmailLoading(true);
    await sendResetPassworEmail(formData);
    setSendEmailLoading(false);
  };

  return (
    <>
      <Header />
      <Flex
        p={"auto"}
        w={"100%"}
        justify={"center"}
        align={"flex-start"}
        bg={"grey.8"}
        minH={"100vh"}
      >
        <Box
          maxW={"560px"}
          w={"90%"}
          p={{ base: "30px 20px", sm: "40px 42px" }}
          bg={"grey.10"}
          rounded={"4px"}
          fontWeight={"semibold"}
          margin={"auto"}
        >
          <Heading textAlign={"center"} mb={"32px"} fontSize={"heading.5"}>
            Esqueceu sua senha?
          </Heading>
          <VStack
            as={"form"}
            onSubmit={handleSubmit(onSubmit)}
            spacing={"24px"}
            direction={"column"}
          >
            <Text fontSize={"body.1"} textAlign={"justify"}>
              Preencha com o e-mail que você usou para se cadastrar. Você
              receberá em instantes um e-mail com instruções sobre como
              redefinir sua senha.
            </Text>
            <FormControl id="email" isInvalid={!!errors.email?.message}>
              <FormLabel fontWeight={"semibold"} fontSize={"body.2"}>
                Email
              </FormLabel>
              <Input
                type="email"
                {...register("email")}
                placeholder="Ex: example@mail.com"
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <Box w={"100%"}>
              <Button
                mt={"20px"}
                size={"lg"}
                type="submit"
                variant={"brand1"}
                alignSelf={"center"}
                w={"100%"}
                isLoading={sendEmailLoading}
                loadingText="Enviando email"
              >
                Enviar email
              </Button>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;

