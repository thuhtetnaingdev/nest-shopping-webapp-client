import { Text, Grid, Stack } from "@mantine/core";
import Matches from "../../../cors/MediaQuery";
import ChooseLocations from "./ChooseLocations";
import OrdersQuantity from "./OrdersQuantity";
import OrdersRightDetails from "./OrdersRightDetails";

export default function UserBodyComponent() {
  const smMatches = Matches().smMatches;
  return (
    <Stack mt="md">
      <Text size="xl" color="gray" weight={300}>
        User's Dashboard
      </Text>
      <Grid>
        <Grid.Col span={smMatches ? 12 : 6}>
          <OrdersQuantity />
        </Grid.Col>
        <Grid.Col span={smMatches ? 12 : 6}>
          <OrdersRightDetails />
        </Grid.Col>
      </Grid>
      <ChooseLocations />
    </Stack>
  );
}
