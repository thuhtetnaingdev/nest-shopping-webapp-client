import {
  Avatar,
  Box,
  Button,
  Group,
  MantineTheme,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { MdLocationPin } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Matches from "../../cors/MediaQuery";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

export const UserTopComponent = () => {
  const { smMatches } = Matches();

  const dispatch = useDispatch();

  return (
    <Box>
      <Group
        sx={(theme: MantineTheme) => ({
          height: "250px",
          paddingBottom: "30px",
          background: "white",
        })}
        position="apart"
        align="flex-end"
      >
        <Stack ml={30}>
          <Avatar size="xl" radius="xl" color="gray" alt="Profile Image" />

          <Group>
            <Title order={1}>John Doe</Title>
            <Tooltip color="gray" label="edit user info" withArrow>
              <BiEdit style={{ color: "gray" }} />
            </Tooltip>
          </Group>
          <Group spacing={5}>
            <MdLocationPin style={{ marginBottom: "4px" }} />
            <Text>South Okkalapa, Yangon</Text>
          </Group>
        </Stack>
        {!smMatches && (
          <Button
            variant="outline"
            color="gray"
            mr={30}
            onClick={() => dispatch(logout())}
          >
            Sign Out
          </Button>
        )}
      </Group>
    </Box>
  );
};
