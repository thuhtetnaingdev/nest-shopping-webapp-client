import {
  Box,
  PasswordInput,
  TextInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Lock, Mail, User } from "tabler-icons-react";

export default function Register(props: { isClickedLogin: any }) {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) => {
        console.log({ value, pass: values.password });
        return value !== values.password ? "Passwords did not match" : null;
      },
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form>
      <Box sx={{ display: "flex" }}>
        <TextInput
          label="First Name"
          required
          variant="default"
          placeholder="first name"
          sx={{ width: "47%" }}
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          required
          variant="default"
          placeholder="last name"
          sx={{ width: "47%", marginLeft: "auto" }}
          {...form.getInputProps("lastName")}
        />
      </Box>
      <TextInput
        icon={<User size={22} strokeWidth={1.5} color={"black"} />}
        label="Username"
        required
        mt="sm"
        variant="default"
        placeholder="Username"
        {...form.getInputProps("username")}
      />
      <TextInput
        icon={<Mail size={22} strokeWidth={1.5} color={"black"} />}
        label="Email"
        type="email"
        required
        mt="sm"
        variant="default"
        placeholder="Email"
        {...form.getInputProps("email")}
      />

      <PasswordInput
        icon={<Lock size={22} strokeWidth={1.5} color={"black"} />}
        mt="sm"
        placeholder="Password"
        label="Password"
        required
        {...form.getInputProps("password")}
      />

      <PasswordInput
        icon={<Lock size={22} strokeWidth={1.5} color={"black"} />}
        mt="sm"
        placeholder="Confirm Password"
        label="Confirm Password"
        required
        {...form.getInputProps("confirmPassword")}
      />
      <Checkbox mt="lg" label="I agree to sell my privacy" />
      <Box mt="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Anchor
            sx={{
              color: "inherit",
              fontSize: "0.9em",
              display: "inline-block",
            }}
            onClick={() => props.isClickedLogin(true)}
          >
            Have an account? Login
          </Anchor>
        </Box>
        <Button type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </Box>
    </form>
  );
}
