import { Box, Button, Grid, useMantineTheme, Text, Paper } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { useState, useRef } from "react";
import Matches from "../../cors/MediaQuery";

export default function PopularItems() {
  const [items, setItems] = useState([{}, {}, {}, {}, {}]);

  const theme = useMantineTheme();
  const mdMatches = Matches().mdMatches;
  return (
    <Box>
      <Grid
        columns={10}
        sx={{
          height: "",
        }}
      >
        {items.map((item, i) => (
          <Grid.Col key={i} span={mdMatches ? 5 : 2} sx={{ minWidth: 0 }}>
            <Box
              sx={{
                width: "100%",
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
