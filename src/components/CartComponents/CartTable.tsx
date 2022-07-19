import {
  ActionIcon,
  Box,
  Button,
  Group,
  Image,
  LoadingOverlay,
  Table,
  Text,
} from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Matches from "../../cors/MediaQuery";
import {
  cartData$,
  IncDec$,
  loading$,
  rawData$,
  total$,
} from "../../utilis/store";

interface Product {
  productId: number;
  quantity: number;
  description?: string;
  img?: string;
  price?: number;
  title?: string;
  total?: number;
}

interface CartData {
  id: number;
  userId: number;
  date: Date;
  products: Product[];
  __v: number;
}

export default function CartTable() {
  const [cartData, setCartData] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const smMatch = Matches().smMatches;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/1")
      .then((res) => {
        total$.next(res.data);
        return res.data.products;
      })
      .then((res) => rawData$.next(res));
    const loading = loading$.subscribe(setLoading);
    const cartData = cartData$.subscribe(
      (val) => {
        setCartData(val.products);
        setTotal(val.total);
      },
      (err) => console.log(err)
    );

    return () => {
      cartData.unsubscribe();
      loading.unsubscribe();
    };
  }, []);

  function updateQuantity(productId: number, quantity: number) {
    const initialVal = IncDec$.value;
    if (IncDec$.value.find((prod) => prod.productId === productId)) {
      const getIndex = IncDec$.value.findIndex(
        (prod) => prod.productId === productId
      );
      initialVal[getIndex].quantity = quantity;
      IncDec$.next(initialVal);
    }
    IncDec$.next([...IncDec$.value, { productId, quantity }]);
  }

  const TableBody = cartData.map((value, i) => (
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
          <Text weight={600} size="xs">
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
        <Text weight={600} size="sm" sx={{ fontSize: smMatch ? "0.6rem" : "" }}>
          {value.total?.toFixed(2)}$
        </Text>
      </td>
    </tr>
  ));
  return (
    <Box>
      <LoadingOverlay visible={loading} />
      <Table horizontalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>Image</th>
            <th style={{ width: "60%" }}>Product</th>
            {!smMatch && <th>Price</th>}
            <th style={{ width: "2%" }}>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{TableBody}</tbody>
      </Table>
      <Text weight={600}>{total.toFixed(2)}$</Text>
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
