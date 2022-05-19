import { Box, Group, Text } from "@mantine/core";
import RatingStar from "../../RatingStarComponent/RatingStar";
import { RatingProgress } from "./RatingProgress";

export default function Ratings() {
  return (
    <>
      <Text mt="lg" size="lg" weight={500}>
        Rating and Reviews of Upholstered Sofa
      </Text>
      <Group>
        <Box sx={{ width: "200px" }}>
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
