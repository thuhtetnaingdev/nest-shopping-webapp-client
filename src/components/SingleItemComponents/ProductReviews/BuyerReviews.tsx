import { Box, Text, Group } from "@mantine/core";
import RatingStar from "../../RatingStarComponent/RatingStar";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"; //TODO:

export default function BuyerReviews() {
  return (
    <Box mt="md">
      <Group position="apart">
        <Box sx={{ marginLeft: "5px" }}>
          <RatingStar marginRight="1px" fontSize="1.5rem" />
        </Box>
        <Text color="gray" size="sm">
          25 Aug 2022
        </Text>
      </Group>
      <Text color="dimmed" size="sm">
        by jojo
      </Text>
      <Text mt="lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
        incidunt eius perspiciatis reiciendis. Ea necessitatibus non excepturi
        delectus dolores assumenda ratione, repudiandae natus doloribus
        provident eaque, quae error, magni molestiae!
      </Text>
      <Group mt="sm">
        <FaRegThumbsUp />
        <Text color="dimmed">9</Text>
      </Group>
    </Box>
  );
}
