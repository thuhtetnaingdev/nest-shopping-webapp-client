import { Divider, Stack, Text } from "@mantine/core";
import CartTable from "./CartTable";

export default function CartIndex() {
  return (
    <Stack mt="lg">
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
      <CartTable />
    </Stack>
  );
}
