import { Box, Group, MantineTheme, Progress, Stack, Text } from "@mantine/core";
import RatingStar from "../RatingStarComponent/RatingStar";

const stars = [{}, {}, {}, {}, {}];
export default function Ratings() {
  return (
    <>
      <Text mt="lg" size="lg" weight={500}>
        Rating and Reviews of Upholstered Sofa
      </Text>
      <Group>
        <Box>
          <Text sx={{ fontSize: "4rem" }}>
            4.8
            <Text color="dimmed" sx={{ fontSize: "2rem", display: "inline" }}>
              /5
            </Text>
          </Text>
          <RatingStar marginRight="19px" fontSize="3rem" />
          <Text color="dimmed" size="xs">
            250 Ratings
          </Text>
        </Box>
        <RatingProgress />
      </Group>
    </>
  );
}

function RatingProgress() {
  return (
    <Stack
      spacing="sm"
      sx={{ width: "500px", marginLeft: "100px", marginTop: "-40px" }}
      justify="flex-start"
    >
      {stars.map((_, i) => (
        <Group sx={{ marginBottom: "-18px" }}>
          <RatingStar marginRight="1px" fontSize="1.5rem" stars={5 - i} />
          <Box sx={{ width: "50%" }} ml="md">
            <Progress size="md" value={90} />
          </Box>
          <Text color="dimmed">8</Text>
        </Group>
      ))}
    </Stack>
  );
}
