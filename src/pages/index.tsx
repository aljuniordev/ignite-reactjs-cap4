import {
  Flex,
  Button,
  Stack
} from "@chakra-ui/react";
import {Input} from "../components/Form/Input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        bgColor="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="Email"/>
          <Input type="password" name="password" label="Password"/>
          <Button type="submit" colorScheme="pink">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
