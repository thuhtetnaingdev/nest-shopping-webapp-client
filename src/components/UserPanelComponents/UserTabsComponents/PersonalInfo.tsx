import {
  Button,
  Group,
  MantineTheme,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import Matches from "../../../cors/MediaQuery";

export default function PersonalInfo() {
  const { mdMatches } = Matches();

  const [value, setValue] = useState("male");
  return (
    <form>
      <Stack
        sx={(theme: MantineTheme) => ({
          width: mdMatches ? "100%" : "60%",
          backgroundColor: theme.colors.gray[1],
          padding: "20px",
        })}
        mt="md"
      >
        <Group grow>
          <TextInput placeholder="first name" label="First Name" />
          <TextInput placeholder="last name" label="First Name" />
        </Group>
        <Group grow>
          <TextInput placeholder="email" label="Email Address" />
          <TextInput placeholder="phone number" label="Phone Number" />
        </Group>
        <Select
          label="Gender"
          sx={{ width: "49%" }}
          value={value}
          data={[
            { value: "male", label: "male" },
            { value: "female", label: "female" },
          ]}
          onChange={(e: string) => setValue(e)}
        />
        <Group position="right">
          <Button color="dark" sx={{ width: "100px" }}>
            save
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
