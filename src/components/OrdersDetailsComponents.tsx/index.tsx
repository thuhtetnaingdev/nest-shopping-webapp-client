import { Box, Container, Grid, MantineTheme } from "@mantine/core";
import OrdersInformations from "./OrdersInformations";
import OrderTimeline from "./OrderTimeline";

export default function OrdersDetailsComponents() {
  return (
    <Container size="lg" mt="lg" mb='sm'>
      <Grid>
        <Grid.Col
          span={4}
          sx={(theme: MantineTheme) => ({
            backgroundColor: theme.colors.gray[1],
          })}
        >
          <Box ml="md" my={10}>
            <OrderTimeline />
          </Box>
        </Grid.Col>
        <Grid.Col span={8}>
          <Box ml="sm">
            <OrdersInformations />
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
