import { Group, Text } from "@mantine/core";
import { FaRegThumbsUp } from "react-icons/fa";
import React from "react";

export default function LikeButtton() {
  return (
    <Group>
      <FaRegThumbsUp size={14} style={{ marginBottom: "4px" }} />
      <Text size="sm" color="dimmed">
        9
      </Text>
    </Group>
  );
}
