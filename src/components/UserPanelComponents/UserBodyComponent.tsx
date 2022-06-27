import { Text, Grid, Box, Stack } from "@mantine/core";
import ChooseLocations from "./ChooseLocations";
import OrdersQuantity from "./OrdersQuantity";
import OrdersRightDetails from "./OrdersRightDetails";

export default function UserBodyComponent() {
  return (
    <Stack mt="md">
      <Text size="xl" color="gray" weight={300}>
        User's Dashboard
      </Text>
      <Grid>
        <Grid.Col span={6}>
          <OrdersQuantity />
        </Grid.Col>
        <Grid.Col span={6}>
          <OrdersRightDetails />
        </Grid.Col>
      </Grid>
      <Text mt="md" size="xl" color="gray" weight={300}>
        Locations
      </Text>
      <ChooseLocations />
    </Stack>
  );
}
