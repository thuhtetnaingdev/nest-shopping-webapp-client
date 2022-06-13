import {
  Box,
  Text,
  Grid,
  Group,
  Anchor,
  Image,
  LoadingOverlay,
} from "@mantine/core";
import { Link } from "react-router-dom";
import Matches from "../../cors/MediaQuery";
import { RootObject } from "../../cors/types/ItemTypes";

export default function ItemsList({
  data,
  loading,
}: {
  data: RootObject[];
  loading: boolean;
}) {
  const { mdMatches, smMatches } = Matches();
  return (
    <Grid gutter="xs" sx={{ minHeight: "50vh", width: "100%" }}>
      <LoadingOverlay visible={loading} />
      {data.map((item, i) => (
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
                <Image src={item.image} width={70} />
                <Box sx={{ width: "50%" }} ml="sm">
                  <Anchor
                    component={Link}
                    lineClamp={2}
                    to={`/products/${item.id}`}
                    color="dark"
                  >
                    {item.title}
                  </Anchor>
                  <Text size="xl" weight={700}>
                    {item.price}
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
