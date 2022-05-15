import { Box, Group, MantineTheme } from "@mantine/core";

export default function RatingStar(props: {
  fontSize: string;
  marginRight: string;
  stars?: number;
}) {
  const stars = [{}, {}, {}, {}, {}];

  return (
    <div>
      <Group>
        {stars.map((_, i) => (
          <Box
            key={i}
            sx={(theme: MantineTheme) => ({
              backgroundColor: "transparent",
              color: props.stars
                ? props.stars > i
                  ? theme.colors.teal[4]
                  : theme.colors.gray[4]
                : theme.colors.teal[4],
              fontSize: props.fontSize,
              border: "none",
              outline: "none",
              width: "1px",
              marginRight: props.marginRight,
              marginLeft: i === 0 ? "-10px" : "",
            })}
          >
            &#9733;
          </Box>
        ))}
      </Group>
    </div>
  );
}
