import { Box, Text, Grid, Group, Anchor, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import Matches from "../../cors/MediaQuery";
import bed from "../../public/images/bed.jpg";

export default function ItemsList() {
  const itemDemoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { mdMatches, smMatches } = Matches();
  return (
    <Grid gutter="xs">
      {itemDemoArray.map((_, i) => (
        <Grid.Col span={smMatches ? 12 : mdMatches ? 6 : 4} key={i}>
          <Box
            sx={(theme) => ({
              height: "150px",
              border: `1px solid ${theme.colors.gray[4]}`,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            })}
          >
            <Box sx={{ width: "95%" }}>
              <Group sx={{ maxWidth: "100%", flexWrap: "nowrap" }} spacing={10}>
                <Image src={bed} width={130} />
                <Box sx={{ width: "50%" }}>
                  <Anchor component={Link} to="/products/name" color="dark">
                    Intelligent Design Clara Comforter Set
                  </Anchor>
                  <Text size="xl" weight={700}>
                    $18.04
                  </Text>
                  <Group>
                    <Text color="gray" size="sm">
                      <s>$227.37</s>
                    </Text>
                    <Text size="sm" weight={500}>
                      92% OFF
                    </Text>
                  </Group>
                </Box>
              </Group>
            </Box>
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
}
