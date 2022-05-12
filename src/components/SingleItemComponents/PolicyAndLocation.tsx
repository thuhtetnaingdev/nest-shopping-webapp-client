import { Box, Grid, MantineProvider, MantineTheme, Text } from "@mantine/core";
import { Circle7, MapPin, Shield, TruckDelivery } from "tabler-icons-react";

export default function PolicyAndLocation() {
  return (
    <Grid>
      <Grid.Col span={3}>
        <Box
          sx={(theme: MantineTheme) => ({
            backgroundColor: theme.colors.gray[2],
            height: "100px",
            display: "flex",
            alignItems: "center",
          })}
        >
          <Box sx={{ width: "15%" }} ml="xl">
            <MapPin
              style={{ marginTop: "3px" }}
              size={30}
              strokeWidth={0.5}
              color={"black"}
            />
          </Box>
          <Box ml="sm">
            <Text weight={500}>Location</Text>
            <Text size="sm" color="gray">
              South Okkalapa, Yangon
            </Text>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <Box
          sx={(theme: MantineTheme) => ({
            backgroundColor: theme.colors.gray[2],
            height: "100px",
            display: "flex",
            alignItems: "center",
          })}
        >
          <Box sx={{ width: "15%" }} ml="xl">
            <TruckDelivery
              style={{ marginTop: "3px" }}
              size={30}
              strokeWidth={0.5}
              color={"black"}
            />
          </Box>
          <Box ml="sm">
            <Text weight={500}>Home Delivery Service</Text>
            <Text size="sm" color="gray">
              5 - 7 day(s)
            </Text>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <Box
          sx={(theme: MantineTheme) => ({
            backgroundColor: theme.colors.gray[2],
            height: "100px",
            display: "flex",
            alignItems: "center",
          })}
        >
          <Box sx={{ width: "15%" }} ml="xl">
            <Shield
              style={{ marginTop: "3px" }}
              size={30}
              strokeWidth={0.5}
              color={"black"}
            />
          </Box>
          <Box ml="sm">
            <Text weight={500}>Warranty</Text>
            <Text size="sm" color="gray">
              Warranty is not available
            </Text>
          </Box>
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <Box
          sx={(theme: MantineTheme) => ({
            backgroundColor: theme.colors.gray[2],
            height: "100px",
            display: "flex",
            alignItems: "center",
          })}
        >
          <Box sx={{ width: "15%" }} ml="xl">
            <Circle7 size={30} strokeWidth={0.5} color={"black"} />
          </Box>
          <Box ml="sm">
            <Text weight={500}>7 Days Returns</Text>
            <Text size="sm" color="gray">
              No hassel return policy
            </Text>
          </Box>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
