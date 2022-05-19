import { Box, Group, Progress, Stack, Text } from "@mantine/core";
import RatingStar from "../../RatingStarComponent/RatingStar";

const stars = [1, 2, 3, 4, 5];

export function RatingProgress() {
  return (
    <Stack
      spacing="sm"
      sx={{ width: "300px", marginTop: "-40px" }}
      justify="flex-start"
      ml={30}
    >
      {stars.map((_, i) => (
        <Group key={i} sx={{ marginBottom: "-18px" }}>
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
