import { Box, Grid, useMantineTheme } from "@mantine/core";
import Matches from "../../cors/MediaQuery";

export default function TodayDeals() {
  const theme = useMantineTheme();
  const mdMatches = Matches().mdMatches;
  return (
    <Box mt="xs">
      <Grid>
        <Grid.Col span={mdMatches ? 12 : 6}>
          <Box
            sx={{
              height: mdMatches ? "100px" : "150px",
              backgroundColor: theme.colors.orange[0],
            }}
          ></Box>
        </Grid.Col>
        <Grid.Col span={mdMatches ? 12 : 6}>
          <Box
            sx={{
              height: mdMatches ? "100px" : "150px",
              backgroundColor: theme.colors.orange[0],
            }}
          ></Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
