import {
  Box,
  Grid,
  useMantineTheme,
  Text,
  Anchor,
  Image,
  Group,
  Stack,
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
  const { mdMatches, smMatches } = Matches();
  return (
    <Grid>
      {DealsData.map((item, i) => (
        <Grid.Col key={i} span={smMatches ? 12 : 6}>
          <Box
            sx={(theme) => ({
              height: "180px",
              backgroundColor: theme.colors.orange[0],
              display: "flex",
              justifyContent: "center",
            })}
          >
            <Group
              sx={{
                position: "relative",
                width: "92%",
                height: "100%",
                flexWrap: "nowrap",
              }}
            >
              <Stack spacing={0}>
                <Text weight={500} size="lg">
                  {item.header}
                </Text>
                <Text color={"gray"}>{item.body}</Text>
                <Anchor
                  component={Link}
                  to="/deals"
                  mt={smMatches ? 0 : "md"}
                  color="gray"
                >
                  see more &#8594;
                </Anchor>
              </Stack>
              <Image width={140} src={item.image} />
            </Group>
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
}
