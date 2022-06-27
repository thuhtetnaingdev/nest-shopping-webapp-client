import { Text, Grid, Group, Stack, MantineTheme } from "@mantine/core";

export default function ChooseLocations() {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Locations choose />
      </Grid.Col>
      <Grid.Col span={6}>
        <Locations />
      </Grid.Col>
    </Grid>
  );
}

function Locations({ choose }: { choose?: boolean }) {
  return (
    <Group
      position="center"
      sx={(theme: MantineTheme) => ({
        backgroundColor: "white",
        borderRadius: "8px",
        border: choose ? `2px solid ${theme.colors.blue[4]}` : "none",
      })}
    >
      <Stack sx={{ width: "90%" }} py={30}>
        <Group>
          <Text>Name: </Text>
          <Text>Thu Htet Naing</Text>
        </Group>
        <Group>
          <Text>Phone: </Text>
          <Text>198273789</Text>
        </Group>
        <Group>
          <Text>City: </Text>
          <Text>Yangon</Text>
        </Group>
        <Group>
          <Text>Township: </Text>
          <Text>South Okkalapa</Text>
        </Group>
        <Group>
          <Text>Address: </Text>
          <Text>No.123, Oka Street, 99th Block, South Okkalapa, Yangon</Text>
        </Group>
      </Stack>
    </Group>
  );
}
