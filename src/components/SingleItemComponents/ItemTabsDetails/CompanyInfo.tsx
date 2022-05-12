import { Box, Group, Space, Text } from "@mantine/core";
import { BuildingStore, MapPin, Phone, Stars } from "tabler-icons-react";

export default function CompanyInfo() {
  return (
    <div>
      <Text weight={500}>Seller Overview</Text>
      <Space h="lg" />
      <Group position="apart">
        <Box>
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
        <Box>
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
        <Box>
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
        <Box>
          <Group>
            <Stars
              size={22}
              strokeWidth={1}
              color={"gray"}
              style={{ marginRight: "-9px", marginBottom: "5px" }}
            />
            <Text color="dimmed" size="sm">
              Ratings
            </Text>
          </Group>
          <Space h="xs" />
          <Text size="lg" color="gray">
            92% positive ratings
          </Text>
        </Box>
      </Group>
    </div>
  );
}
