import {
  Box,
  Button,
  Grid,
  Group,
  Image,
  MantineProvider,
  Text,
  useMantineTheme,
} from "@mantine/core";
import sofa1 from "../../public/images/sofa1.webp";

export default function Item() {
  const theme = useMantineTheme();
  const stars = [{}, {}, {}, {}, {}];
  return (
    <Grid>
      <Grid.Col span={6}>
        <Box sx={{ height: "500px" }}>
          <Image src={sofa1} />
          <Grid mt="md">
            <Grid.Col span={3}>
              <Box sx={{ height: "90px" }}>
                <Image src={sofa1} />
              </Box>
            </Grid.Col>
            <Grid.Col span={3}>
              <Box sx={{ height: "90px" }}>
                <Image src={sofa1} />
              </Box>
            </Grid.Col>
            <Grid.Col span={3}>
              <Box sx={{ height: "90px" }}>
                <Image src={sofa1} />
              </Box>
            </Grid.Col>
            <Grid.Col span={3}>
              <Box sx={{ height: "90px" }}>
                <Image src={sofa1} />
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box ml="sm">
          <Box sx={{ height: "500px" }} ml="xl">
            <MantineProvider theme={{ fontFamily: "DM Serif Display, serif" }}>
              <Text weight={500} sx={{ fontSize: "2.1rem" }}>
                Upholstered Sofa
              </Text>
              <Text mt="md" weight={500}>
                Kyara Upholstered Standard Bed by Zipcode Design
              </Text>
            </MantineProvider>
            <Text
              mt="sm"
              color={theme.colors.dark[3]}
              sx={{ textAlign: "justify" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias, fugiat. Quasi blanditiis dolore recusandae voluptatem
              ut quibusdam adipisci, quaerat ea omnis culpa ducimus fugit,
              dolorem ab. Quam voluptatem cumque quos.
            </Text>
            <Group>
              {stars.map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    backgroundColor: "transparent",
                    color: theme.colors.teal[4],
                    fontSize: "2.5rem",
                    border: "none",
                    outline: "none",
                    width: "1px",
                    marginRight: "14px",
                    marginLeft: i === 0 ? "-10px" : "",
                  }}
                >
                  &#9733;
                </Box>
              ))}
            </Group>
            <MantineProvider theme={{ fontFamily: "DM Serif Display, serif" }}>
              <Text weight={500} sx={{ fontSize: "2rem" }} mt="lg">
                $560
              </Text>
            </MantineProvider>
            <Text size="sm">
              <Text variant="link" component="a">
                5.0
              </Text>{" "}
              review based on 250
            </Text>
            <Text color="dimmed" size="sm" mt="lg">
              &#9202; Dispatched in 7 working days
            </Text>
            <Group grow sx={{ width: "400px" }} mt="sm">
              <Button radius={0} color="dark" uppercase size="lg">
                <Text size="sm">add to cart</Text>
              </Button>
              <Button
                variant="outline"
                size="lg"
                color="dark"
                radius={0}
                uppercase
              >
                <Text size="sm">add to white list</Text>
              </Button>
            </Group>
          </Box>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
