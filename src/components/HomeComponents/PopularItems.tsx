import {
  Box,
  Grid,
  useMantineTheme,
  Text,
  MantineProvider,
  Group,
  Stack,
} from "@mantine/core";
import { useState } from "react";
import airdots from "../../public/images/airdots.png";
import Matches from "../../cors/MediaQuery";
import { Link } from "react-router-dom";
import RatingStar from "../RatingStarComponent/RatingStar";

export default function PopularItems() {
  const [items, setItems] = useState([{}, {}, {}, {}, {}, {}]);
  const stars = [{}, {}, {}, {}, {}];

  const theme = useMantineTheme();
  const ipadAir = Matches().ipadAir;
  const smMatches = Matches().smMatches;
  return (
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <Box>
        <Grid
          columns={10}
          sx={{
            height: "",
            display: "flex",
            flexWrap: "nowrap",
            overflow: "auto",
          }}
        >
          {items.map((item, i) => (
            <Grid.Col
              key={i}
              span={smMatches ? 5 : ipadAir ? 3 : 2}
              sx={{ minWidth: 0 }}
            >
              <Box
                py={20}
                sx={{
                  backgroundColor: theme.colors.gray[2],
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: "150px",
                      height: ipadAir ? "170px" : "150px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <img style={{ width: "100%" }} src={airdots} />
                  </Box>
                  <Stack mx="lg" spacing={0}>
                    <Text size="xs" color="dimmed">
                      Ship to Myanmar
                    </Text>
                    <Text
                      weight={700}
                      component={Link}
                      to={`/products/${i + 1}`}
                    >
                      Headphones wireless TWS Xiaomi Mi True
                    </Text>
                    <Group spacing="xl">
                      <Box ml={5}>
                        <RatingStar fontSize="1.3rem" marginRight="0px" />
                      </Box>
                      <Text size="xs" color="dimmed">
                        10000 reviewes
                      </Text>
                    </Group>
                    <Group>
                      <Text size="lg" weight={700} mt="sm">
                        $79.99
                        <Text
                          sx={{ display: "inline" }}
                          ml="md"
                          size="xs"
                          color="dimmed"
                        >
                          <s>$100.99</s>
                        </Text>
                      </Text>
                    </Group>
                  </Stack>
                </Box>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </MantineProvider>
  );
}
