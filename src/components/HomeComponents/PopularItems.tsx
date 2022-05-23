import {
  Box,
  Grid,
  useMantineTheme,
  Text,
  MantineProvider,
  Group,
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
                sx={{
                  backgroundColor: theme.colors.gray[2],
                  display: "flex",
                  flexWrap: "wrap",
                  paddingBottom: "17px",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: "150px",
                      height: ipadAir ? "170px" : "150px",
                      margin: "30px auto 0",
                    }}
                  >
                    <img style={{ width: "100%" }} src={airdots} />
                  </Box>
                  <Box mx="lg">
                    <Text size="xs" color="dimmed">
                      Ship to Myanmar
                    </Text>
                    <Text weight={700} component={Link} to={`/products/name`}>
                      Headphones wireless TWS Xiaomi Mi True
                    </Text>
                    <Group spacing="xs">
                      {stars.map((_, i) => (
                        <Box
                          key={i}
                          sx={{
                            backgroundColor: "transparent",
                            color: theme.colors.yellow[7],
                            fontSize: "1rem",
                            border: "none",
                            outline: "none",
                            width: "1px",
                            marginLeft: i === 0 ? "-2px" : "",
                            marginRight:
                              i === stars.length - 1
                                ? smMatches
                                  ? "4rem"
                                  : "1rem"
                                : "",
                          }}
                        >
                          &#9733;
                        </Box>
                      ))}
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
                  </Box>
                </Box>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </MantineProvider>
  );
}
