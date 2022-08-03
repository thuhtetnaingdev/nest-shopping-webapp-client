import {
  Box,
  Container,
  Divider,
  LoadingOverlay,
  MantineProvider,
  Text,
} from "@mantine/core";
import { useMemo } from "react";
import { CartData } from "../../cors/types/CartType";
import {
  cartUpdateValue,
  fetchData,
  IncDec$,
} from "../../utilis/rxjs/cartRxStore";
import CartTable from "./CartTable";
import TotalCash from "./TotalCash";

export default function CartIndex() {
  const LINK = "https://fakestoreapi.com/carts/1";
  const source = useMemo(() => fetchData<CartData>(LINK), []);
  const [finalValue, loading, errorMessage] = cartUpdateValue(source, IncDec$);

  return (
    <Box mt="lg">
      <Container size="xl">
        <LoadingOverlay visible={loading} />
        <MantineProvider theme={{ fontFamily: "Poppins, sans-serif" }}>
          <Text sx={{ fontSize: "2rem" }} weight={400}>
            Shopping Cart
          </Text>
        </MantineProvider>
        <Divider
          my="sm"
          size="lg"
          mt={10}
          mb="lg"
          sx={{ width: "20rem" }}
          color="dark"
        />
      </Container>
      <Box mb={200}>
        <CartTable value={finalValue} />
      </Box>
      {finalValue.total && <TotalCash total={finalValue.total} />}
    </Box>
  );
}
