import { Text, MantineTheme, Group, Menu, Box } from "@mantine/core";
import { useState } from "react";
import { ArrowsUpDown } from "tabler-icons-react";
import Reviews from "./ProductReviewsComponents";

export default function ProductReviewes() {
  const [menuType, setMenuType] = useState<string>("Relevance");
  const menuItems = [
    "Relevance",
    "Recent",
    "Rating: High to Low",
    "Rating: Low to High",
  ];

  return (
    <Box>
      <Group
        position="apart"
        mt="lg"
        sx={(theme: MantineTheme) => ({
          borderTop: `1px solid ${theme.colors.gray[5]}`,
          borderBottom: `1px solid ${theme.colors.gray[5]}`,
        })}
      >
        <Text my="md">Product Reviews</Text>
        <Group>
          <Menu
            control={
              <Group spacing="xs">
                <ArrowsUpDown size={25} strokeWidth={1} color={"black"} />
                <Text>Sort:</Text>
                <Text color="gray">{menuType}</Text>
              </Group>
            }
          >
            {menuItems.map((item, i) => (
              <Menu.Item key={i} onClick={(e: any) => setMenuType(item)}>
                {item}
              </Menu.Item>
            ))}
          </Menu>
        </Group>
      </Group>
      <Reviews />
    </Box>
  );
}
