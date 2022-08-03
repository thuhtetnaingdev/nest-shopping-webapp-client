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
import { useDispatch, useSelector } from "react-redux";
import { openModal, setType } from "../../features/modalSlice";
import { RootState } from "../../store";

export const UserTopComponent = () => {
  const { smMatches } = Matches();

  const { type } = useSelector((value: RootState) => value.modalComponent);

  const dispatch = useDispatch();

  return (
    <Box>
      <Group
        sx={{
          height: "250px",
          paddingBottom: "30px",
          background: "white",
        }}
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
            onClick={() => {
              dispatch(setType({ type: "logout" }));
              dispatch(openModal());
            }}
          >
            Sign Out
          </Button>
        )}
      </Group>
    </Box>
  );
};
