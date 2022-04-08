import { Box, Grid, useMantineTheme, Text } from "@mantine/core";
import { useState } from "react";
import Matches from "../../cors/MediaQuery";

export default function PopularItems() {
  const [items, setItems] = useState([{}, {}, {}, {}, {}, {}]);

  const theme = useMantineTheme();
  const mdMatches = Matches().mdMatches;
  return (
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
          <Grid.Col key={i} span={mdMatches ? 5 : 2} sx={{ minWidth: 0 }}>
            <Box
              sx={{
                height: "250px",
                backgroundColor: theme.colors.gray[2],
              }}
            >
              <Text>{i}</Text>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
