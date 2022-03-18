import { Anchor, Box, Text } from "@mantine/core";

export default function ItemHeaderAnchor(props: { text: string }) {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Text>{props.text}</Text>
      <Anchor
        variant="text"
        sx={{
          "&:hover": {
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
        ml="auto"
      >
        All Departments &#10141;
      </Anchor>
    </Box>
  );
}
