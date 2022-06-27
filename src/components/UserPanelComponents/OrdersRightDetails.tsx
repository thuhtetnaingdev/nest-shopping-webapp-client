import { Text, Group, Stack, Progress, Tooltip } from "@mantine/core";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function OrdersRightDetails() {
  return (
    <Stack>
      <Group
        position="center"
        sx={{ height: "90px", background: "white", borderRadius: "8px" }}
      >
        <Stack sx={{ width: "90%" }}>
          <Group position="apart">
            <Group spacing={4}>
              <Text>Total Spend</Text>
              <Tooltip label="Lorem">
                <AiOutlineExclamationCircle style={{ opacity: "0.7" }} />
              </Tooltip>
            </Group>
            <Group spacing={10}>
              <Text size="sm" color="dimmed">
                100/500$
              </Text>
              <Text weight={600}>20%</Text>
            </Group>
          </Group>
          <Progress value={50} />
        </Stack>
      </Group>
      <Group
        position="center"
        sx={{ height: "90px", background: "white", borderRadius: "8px" }}
      >
        <Stack sx={{ width: "90%" }}>
          <Group position="apart">
            <Group spacing={4}>
              <Text>Total Refers</Text>
              <Tooltip label="Lorem">
                <AiOutlineExclamationCircle style={{ opacity: "0.7" }} />
              </Tooltip>
            </Group>
            <Group spacing={10}>
              <Text size="sm" color="dimmed">
                14/100
              </Text>
              <Text weight={600}>14%</Text>
            </Group>
          </Group>
          <Progress value={14} />
        </Stack>
      </Group>
    </Stack>
  );
}
