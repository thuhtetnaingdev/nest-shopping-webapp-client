import { Box, Grid, MantineTheme, Text } from "@mantine/core";
import { SellerPolicy } from ".";
import Matches from "../../../cors/MediaQuery";

export default function PolicyComponentForDesktop({
  sellerPolicy,
}: {
  sellerPolicy: SellerPolicy[];
}) {
  const match = Matches();
  return (
    <>
      <Grid mt="md">
        {sellerPolicy.map((p, i) => (
          <Grid.Col key={i} span={match.mdMatches ? 6 : 3}>
            <Box
              sx={(theme: MantineTheme) => ({
                backgroundColor: theme.colors.gray[2],
                height: "100px",
                display: "flex",
                alignItems: "center",
              })}
            >
              <Box sx={{ width: "15%" }} ml="xl">
                {p.icon()}
              </Box>
              <Box ml={match.smMatches ? 0 : "sm"}>
                <Box mx="auto">
                  <Text weight={500}>{p.title}</Text>
                  <Text size="sm" color="gray">
                    {p.content}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
