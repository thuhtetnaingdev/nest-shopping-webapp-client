import { Box, Button, CSSObject, Group, Space, Text } from "@mantine/core";
import { BuildingStore, MapPin, Phone, Stars } from "tabler-icons-react";
import { RiMessage2Line } from "react-icons/ri";

export default function CompanyInfo() {
  const flexBoxSize: CSSObject = {
    width: "45%",
    height: "90px",
  };
  return (
    <div>
      <Text weight={500}>Seller Overview</Text>
      <Space h="lg" />
      <Group position="apart">
        <Box sx={flexBoxSize}>
          <Group>
            <BuildingStore
              size={22}
              strokeWidth={1}
              color={"gray"}
              style={{ marginRight: "-9px", marginBottom: "5px" }}
            />
            <Text color="dimmed" size="sm">
              Sold By
            </Text>
          </Group>
          <Space h="xs" />
          <Text size="lg" color="gray">
            Joy Box Myanmar
          </Text>
        </Box>
        <Box sx={flexBoxSize}>
          <Group>
            <Phone
              size={22}
              strokeWidth={1}
              color={"gray"}
              style={{ marginRight: "-9px", marginBottom: "5px" }}
            />
            <Text color="dimmed" size="sm">
              Phone Number
            </Text>
          </Group>
          <Space h="xs" />
          <Text size="lg" color="gray">
            09-123456789
          </Text>
        </Box>
        <Box sx={flexBoxSize}>
          <Group>
            <MapPin
              size={22}
              strokeWidth={1}
              color={"gray"}
              style={{ marginRight: "-9px", marginBottom: "5px" }}
            />
            <Text color="dimmed" size="sm">
              Location
            </Text>
          </Group>
          <Space h="xs" />
          <Text size="lg" color="gray">
            Yangon, South Okkalapa
          </Text>
        </Box>
        <Box sx={flexBoxSize}>
          <Group>
            <Stars
              size={22}
              strokeWidth={1}
              color={"gray"}
              style={{ marginRight: "-9px", marginBottom: "5px" }}
            />
            <Text color="dimmed" size="sm">
              Seller's Ratings
            </Text>
          </Group>
          <Space h="xs" />
          <Text size="lg" color="gray">
            92% positive ratings
          </Text>
        </Box>
      </Group>
      <Button
        leftIcon={<RiMessage2Line size="22" />}
        variant="outline"
        color="gray"
        radius={0}
        size="md"
        mt="lg"
      >
        Connect to seller
      </Button>
    </div>
  );
}
