import { Box, Group, Text, Menu, MantineTheme } from "@mantine/core";
import { useState } from "react";
import { ArrowsUpDown } from "tabler-icons-react";
import BuyerReviews from "./BuyerReview";
import SellerReply from "./SellerReply";

export default function Reviews() {
  const [menuType, setMenuType] = useState<string>("Relevance");
  const menuItems = [
    "Relevance",
    "Recent",
    "Rating: High to Low",
    "Rating: Low to High",
  ];
  return (
    <Box mt="lg">
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
              <Group spacing={5}>
                <ArrowsUpDown size={25} strokeWidth={1} color={"black"} />
                <Text size="sm">Sort:</Text>
                <Text size="sm" color="gray">
                  {menuType}
                </Text>
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
      <BuyerReviews />
      <SellerReply />
    </Box>
  );
}
