import {
  Grid,
  Group,
  MantineProvider,
  MantineTheme,
  Stack,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import Matches from "../../../cors/MediaQuery";
import {
  $updateColor,
  UserOrderBuilder,
  UserOrdersGenerator,
} from "../../../utilis/userOrdersObject";
export default function OrdersQuantity() {
  const [ordersQuantities, setOrdersQuantities] = useState<UserOrderBuilder[]>(
    []
  );
  const smMatches = Matches().smMatches;
  useEffect(() => {
    let cleanup = false;
    const userOrdersGenerator = new UserOrdersGenerator();

    const pending = new UserOrderBuilder("Orders Pending", 2);
    const cart = new UserOrderBuilder("Cart", 12);
    const recived = new UserOrderBuilder("Recived Items", 10);
    const followed = new UserOrderBuilder("Followed Shops", 73);
    const shipping = new UserOrderBuilder("Shipping", 3);
    const comments = new UserOrderBuilder("Coupons", 3);

    userOrdersGenerator.add(pending);
    userOrdersGenerator.add(cart);
    userOrdersGenerator.add(recived);
    userOrdersGenerator.add(followed);
    userOrdersGenerator.add(shipping);
    userOrdersGenerator.add(comments);

    const $observer = $updateColor(userOrdersGenerator.ordersQuantity);
    let ob: UserOrderBuilder[] = [];
    $observer.subscribe((x) => ob.push(x));

    setOrdersQuantities(ob);
    return () => {
      cleanup = true;
    };
  }, []);

  return (
    <MantineProvider theme={{ fontFamily: "Raleway, sans-serif" }}>
      <Grid>
        {ordersQuantities.map((order, i) => (
          <Grid.Col key={i} span={smMatches ? 6 : 4}>
            <OrdersCard
              color={order.color}
              quantity={order.quantity}
              title={order.title}
            />
          </Grid.Col>
        ))}
      </Grid>
    </MantineProvider>
  );
}

function OrdersCard({
  color,
  quantity,
  title,
}: {
  color: string;
  quantity: number;
  title: string;
}) {
  const mdMatches = Matches().mdMatches;
  return (
    <Group
      position="center"
      sx={(theme: MantineTheme) => ({
        borderRadius: "8px",
        height: "90px",
        background:
          color === "white"
            ? "white"
            : `linear-gradient(to bottom right,${theme.colors[color][9]}, ${theme.colors[color][4]})`,
      })}
    >
      <Stack
        sx={{ width: "80%", color: color === "white" ? "black" : "white" }}
      >
        <Text size={mdMatches ? "sm" : "md"}>{title}</Text>
        <Text size="xl" weight={600}>
          {quantity}
        </Text>
      </Stack>
    </Group>
  );
}
