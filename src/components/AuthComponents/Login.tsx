import { Anchor, Box, Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { User, Lock } from "tabler-icons-react";

export default function Login(props: { isClickedLogin: any }) {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div>
      <Box>
        <TextInput
          icon={<User size={22} strokeWidth={1.5} color={"black"} />}
          label="Username"
          required
          mt="sm"
          variant="default"
          placeholder="Username"
          {...form.getInputProps("username")}
        />
        <PasswordInput
          icon={<Lock size={22} strokeWidth={1.5} color={"black"} />}
          mt="sm"
          placeholder="Password"
          label="Password"
          required
          {...form.getInputProps("password")}
        />
        <Anchor
          mt="sm"
          sx={{
            color: "inherit",
            fontSize: "0.9em",
            display: "inline-block",
          }}
        >
          Forget password?
        </Anchor>
        <Box mt="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Anchor
              sx={{
                color: "inherit",
                fontSize: "0.9em",
                display: "inline-block",
              }}
              onClick={() => props.isClickedLogin(false)}
            >
              Haven't account? Register.
            </Anchor>
          </Box>
          <Button onClick={handleSubmit}>Login</Button>
        </Box>
      </Box>
    </div>
  );
}
