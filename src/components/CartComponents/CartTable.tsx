import {
  ActionIcon,
  Box,
  Group,
  Image,
  LoadingOverlay,
  Table,
  Text,
} from "@mantine/core";
import { useMemo, useState } from "react";
import Matches from "../../cors/MediaQuery";
import { CartData, Product } from "../../cors/types/CartType";
import {
  cartUpdateValue,
  fetchData,
  IncDec$,
} from "../../utilis/rxjs/cartRxStore";

export default function CartTable() {
  const smMatch = Matches().smMatches;

  const LINK = "https://fakestoreapi.com/carts/1";
  const source = useMemo(() => fetchData<CartData>(LINK), []);
  const [finalValue, loading, errorMessage] = cartUpdateValue(source, IncDec$);

  function updateQuantity(productId: number, quantity: number) {
    const initialVal = IncDec$.value;
    const findVal = IncDec$.value.find((prod) => prod.productId === productId);
    if (findVal) {
      const getIndex = IncDec$.value.findIndex(
        (prod) => prod.productId === productId
      );
      initialVal[getIndex].quantity = quantity;
      IncDec$.next(initialVal);
    } else {
      IncDec$.next([...IncDec$.value, { productId, quantity }]);
    }
  }

  const TableBody =
    finalValue.products &&
    finalValue.products.map((value: Product) => (
      <tr key={value.productId}>
        <td>
          <Image width={smMatch ? 30 : 70} src={value.img} />
        </td>
        <td>
          <Text
            weight="bold"
            size="sm"
            sx={{ fontSize: smMatch ? "0.6rem" : "" }}
            lineClamp={2}
          >
            {value.title}
          </Text>
          <Text
            lineClamp={2}
            size="xs"
            sx={{ fontSize: smMatch ? "0.6rem" : "" }}
          >
            {value.description}
          </Text>
          {smMatch && (
            <Text size="xs" color="orange">
              {value.price}$
            </Text>
          )}
        </td>
        {!smMatch && (
          <td>
            <Text weight={600} size="sm">
              {value.price}$
            </Text>
          </td>
        )}
        <td>
          <IncDecBtn
            quantity={value.quantity}
            productId={value.productId}
            updateQuantity={updateQuantity}
          />
        </td>
        <td>
          <Text
            weight={600}
            size="sm"
            sx={{ fontSize: smMatch ? "0.6rem" : "" }}
          >
            {value.total?.toFixed(2)}$
          </Text>
        </td>
      </tr>
    ));
  return (
    <Box>
      <LoadingOverlay visible={loading} />
      <Table horizontalSpacing={smMatch ? "xs" : "xl"}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Image</th>
            <th style={{ width: "60%" }}>Product</th>
            {!smMatch && <th>Price</th>}
            <th style={{ width: "2%" }}>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        {finalValue.products && <tbody>{TableBody}</tbody>}
      </Table>
      <Text weight={600}>
        {finalValue.total ? finalValue.total.toFixed(2) : 0}$
      </Text>
    </Box>
  );
}

function IncDecBtn({
  quantity,
  productId,
  updateQuantity,
}: {
  quantity: number;
  productId: number;
  updateQuantity: Function;
}) {
  const smMatch = Matches().smMatches;
  return (
    <Group
      sx={{
        flexWrap: "nowrap",
      }}
    >
      <ActionIcon
        variant="transparent"
        color="dark"
        size={smMatch ? "xs" : "md"}
        onClick={() =>
          updateQuantity(productId, quantity > 1 ? quantity - 1 : quantity)
        }
      >
        -
      </ActionIcon>
      <Text size="sm" sx={{ fontSize: smMatch ? "0.6rem" : "" }}>
        {quantity}
      </Text>
      <ActionIcon
        variant="transparent"
        color="dark"
        size={smMatch ? "xs" : "md"}
        onClick={() => updateQuantity(productId, quantity + 1)}
      >
        +
      </ActionIcon>
    </Group>
  );
}
