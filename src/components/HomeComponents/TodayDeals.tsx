import {
  Box,
  Grid,
  useMantineTheme,
  Text,
  Anchor,
  MantineProvider,
} from "@mantine/core";
import Matches from "../../cors/MediaQuery";
import xbox from "../../public/images/xbox.png";
import clock from "../../public/images/clock.png";
import { Link } from "react-router-dom";

export default function TodayDeals() {
  const DealsData = [
    {
      header: "JoyBox Basics",
      body: "Shop Today's Deals, Lightning Deals and limited-time discount",
      image: xbox,
    },
    {
      header: "JoyBox Basics",
      body: "Shop Today's Deals, Lightning Deals and limited-time discount",
      image: clock,
    },
  ];

  const theme = useMantineTheme();
  const mdMatches = Matches().mdMatches;
  return (
    <Box mt="xs" sx={{ display: mdMatches ? "none" : "block" }}>
      <Grid>
        {DealsData.map((item, i) => (
          <Grid.Col span={6} key={i}>
            <Box
              sx={{
                height: mdMatches ? "150px" : "180px",
                backgroundColor: theme.colors.orange[0],
                display: "flex",
                overflow: "hidden",
              }}
            >
              <Box sx={{ width: "60%" }}>
                <Box sx={{ marginLeft: "2rem" }} mt="lg">
                  <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
                    <Text size="lg" weight={600}>
                      {item.header}
                    </Text>
                  </MantineProvider>
                  <Text>{item.body}</Text>
                  <Box sx={{ marginTop: "1.5rem" }}>
                    <Anchor color="gray" component={Link} to="/deals">
                      See more &#10141;
                    </Anchor>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: "27%" }}>
                <img
                  style={{
                    width: "100%",
                    marginLeft: "90px",
                    marginTop: "0.7rem",
                  }}
                  src={item.image}
                />
              </Box>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
