import { Box, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import LikeButtton from "./LikeButtton";

export default function SellerReply() {
  return (
    <Box
      mt="lg"
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[1],
      })}
    >
      <Stack sx={{ width: "95%", marginLeft: "auto" }} spacing="xs" py={15}>
        <Text
          sx={{ "&:hover": { textDecoration: "underline" } }}
          component={Link}
          to="/"
          size="sm"
          color="red"
        >
          Respond from seller
        </Text>
        <Text size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, culpa eius nemo nam suscipit tempore maxime modi ipsam
          quidem corrupti nisi temporibus quo. Nam distinctio corporis nihil
          facilis recusandae. Perspiciatis.
        </Text>
        <LikeButtton />
      </Stack>
    </Box>
  );
}
