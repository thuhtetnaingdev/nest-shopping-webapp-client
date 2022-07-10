import { Stack, Text, Button, Group } from "@mantine/core";
import { useDispatch } from "react-redux";
import {
  setDeleteOpened,
  setModalOpened,
} from "../../../../features/addressSlice";

export default function DeleteAddressModal() {
  const dispatch = useDispatch();
  function handleButton() {
    dispatch(setModalOpened(false));
    dispatch(setDeleteOpened(false));
  }
  return (
    <Stack>
      <Text>Are you sure want to delete?</Text>
      <Group position="right">
        <Button color="red" name="confirm" onClick={handleButton}>
          Confirm
        </Button>
        <Button
          variant="outline"
          color="red"
          name="cancel"
          onClick={handleButton}
        >
          Cancel
        </Button>
      </Group>
    </Stack>
  );
}
