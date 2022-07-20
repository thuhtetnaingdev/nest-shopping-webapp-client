import { Box, Container, Divider, Stack, Text } from "@mantine/core";
import CartTable from "./CartTable";

export default function CartIndex() {
  return (
    <Box mt="lg" sx={{ height: "100vh" }}>
      <Container size="xl">
        <Text sx={{ fontSize: "2rem" }} weight={400}>
          Shopping Cart
        </Text>
        <Divider
          my="sm"
          size="lg"
          mt={10}
          mb="lg"
          sx={{ width: "20rem" }}
          color="dark"
        />
      </Container>
      <CartTable />
    </Box>
  );
}
