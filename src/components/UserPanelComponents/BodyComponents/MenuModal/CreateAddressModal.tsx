import {
  Button,
  Group,
  InputWrapper,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../features/modalSlice";
import OpenModal from "../../../ModalComponent/OpenModal";

export default function CreateAddressModal() {
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      city: "Yangon",
      township: "",
      address: "",
    },
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(closeModal());
  }
  return (
    <OpenModal title="Create New Address">
      <form onSubmit={handleSubmit}>
        <InputWrapper required>
          <Stack>
            <TextInput
              required
              label="Name"
              placeholder="Input your name"
              {...form.getInputProps("name")}
            />
            <Group grow>
              <TextInput
                required
                type="number"
                label="Phone Number"
                placeholder="Phone Number"
                {...form.getInputProps("phone")}
              />
              <Select
                required
                label="City"
                data={["Yangon", "Mandalay"]}
                placeholder="City"
                {...form.getInputProps("city")}
              />
            </Group>
            <TextInput
              required
              label="Township"
              placeholder="Input your township"
              {...form.getInputProps("township")}
            />
            <Textarea
              required
              label="Address"
              placeholder="Input your full address"
              {...form.getInputProps("address")}
            />
            <Group position="right" mt="md">
              <Button type="submit">Add</Button>
              <Button
                variant="outline"
                onClick={() => {
                  dispatch(closeModal());
                }}
              >
                Cancel
              </Button>
            </Group>
          </Stack>
        </InputWrapper>
      </form>
    </OpenModal>
  );
}
