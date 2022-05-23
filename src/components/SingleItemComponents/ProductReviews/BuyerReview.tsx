import { Box, Text, Group, Stack } from "@mantine/core";
import RatingStar from "../../RatingStarComponent/RatingStar";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"; //TODO:
import { useOs } from "@mantine/hooks";
import LikeButtton from "./LikeButtton";

export default function BuyerReviews() {
  const os = useOs();
  return (
    <Stack spacing="xs" mt="md">
      <Box>
        <Group position="apart">
          <Box sx={{ marginLeft: "5px" }}>
            <RatingStar
              marginRight={os === "ios" ? "7px" : "1px"}
              fontSize="1.5rem"
            />
          </Box>
          <Text color="gray" size="sm">
            25 Aug 2022
          </Text>
        </Group>
        <Text color="dimmed" size="sm">
          by jojo
        </Text>
      </Box>
      <Text size="sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        incidunt eius perspiciatis reiciendis. Ea necessitatibus non excepturi
        delectus dolores assumenda ratione, repudiandae natus doloribus
        provident eaque, quae error, magni molestiae!
      </Text>
      <LikeButtton />
    </Stack>
  );
}
