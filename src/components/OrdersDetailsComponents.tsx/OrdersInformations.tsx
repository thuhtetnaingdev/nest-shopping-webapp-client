import {
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Image,
  Badge,
  Box,
  Anchor,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function OrdersInformations() {
  return (
    <Stack>
      <OrderInfoHeader />
      {[1, 2, 3].map((_, i) => (
        <Box key={i}>
          <SingleOrderItem />
        </Box>
      ))}
    </Stack>
  );
}

function OrderInfoHeader() {
  return (
    <div>
      <Group position="apart">
        <Stack spacing="xs">
          <Text weight="bold" size="lg">
            Purchased Items
          </Text>
          <Group spacing={8}>
            <Text color="dimmed" size="sm">
              Total:
            </Text>
            <Text color="dimmed" size="sm">
              399.23$
            </Text>
          </Group>
        </Stack>
        <Stack spacing="sm">
          <Text color="dimmed" size="sm">
            Order #123198239128
          </Text>
          <Text color="dimmed" size="sm">
            Ship to Yangon, South Okkalapa
          </Text>
        </Stack>
      </Group>
    </div>
  );
}

function SingleOrderItem() {
  return (
    <>
      <Divider />

      <Grid mt="sm">
        <Grid.Col span={2}>
          <Image src="https://e7.pngegg.com/pngimages/389/698/png-clipart-t-shirt-top-sleeve-clothing-black-t-shirt-white-crew-neck-t-shirt-tshirt-angle.png" />
        </Grid.Col>
        <Grid.Col span={10}>
          <Stack spacing={2}>
            <Anchor
              component={Link}
              to={`/products/1`}
              weight="bold"
              color="dark"
            >
              Lorem ipsum dolor sit amet.
            </Anchor>
            <Text lineClamp={3} size="sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, sed. Hic ex dolore dolores velit culpa fugit quis
              repudiandae? Ratione laborum quae cum id. Ducimus aperiam repellat
              possimus sapiente accusamus.
            </Text>
          </Stack>
          <Stack mt={4} spacing={3}>
            <Group>
              <Text sx={{ fontStyle: "italic" }} color="dimmed" size="sm">
                price: 18$
              </Text>
              <Text sx={{ fontStyle: "italic" }} color="dimmed" size="sm">
                quantity: 3
              </Text>
            </Group>
            <Group>
              <Text sx={{ fontStyle: "italic" }} color="dimmed" size="sm">
                total: 54$
              </Text>
              <Group spacing={6}>
                <Text sx={{ fontStyle: "italic" }} color="dimmed" size="sm">
                  status:{" "}
                </Text>
                <Badge color="gray">pending</Badge>
              </Group>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
}
