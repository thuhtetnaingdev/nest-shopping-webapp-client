import {
  Box,
  PasswordInput,
  TextInput,
  Checkbox,
  Anchor,
  Button,
  Select,
  Group,
  InputWrapper,
  LoadingOverlay,
} from "@mantine/core";
import { useForm } from "../../../utilis/authHooks";
import { DatePicker } from "@mantine/dates";
import { Lock, Mail, Phone, User } from "tabler-icons-react";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../utilis/gqlRequests/authRequests";
import { useDispatch } from "react-redux";
import { loginOrRegister } from "../../../features/auth/authSlice";
import { closeModal, setType } from "../../../features/modalSlice";

export default function Register() {
  const [isError, setIsError] = useState(true);

  //checkbox
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const { form } = useForm({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [register, { data, loading, error }] = useMutation(REGISTER);

  useEffect(() => {
    if (data) {
      dispatch(loginOrRegister(data.register));
      dispatch(closeModal());
    }
  }, [data]);
  useEffect(() => {
    try {
      Object.values(form.values).map((val) => {
        if ((val !== null && val.length === 0) || !isChecked) {
          throw new Error();
        }
        setIsError(false);
      });
    } catch (_err) {
      setIsError(true);
    }
  }, [form.values, isChecked, data]);

  return (
    <form onSubmit={form.onSubmit((value) => register({ variables: value }))}>
      <LoadingOverlay visible={loading ? true : false} />

      <InputWrapper required error={error ? error.message : null}>
        <Group position="apart" spacing="xl" grow>
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
        </Group>
        <Group mt="sm" position="apart" spacing="xl" grow>
          <TextInput
            icon={<User size={22} strokeWidth={1.5} color={"black"} />}
            label="Username"
            required
            variant="default"
            placeholder="Username"
            {...form.getInputProps("username")}
          />
          <TextInput
            icon={<Phone size={22} strokeWidth={1} color={"black"} />}
            placeholder="Phone Number"
            label="Phone Number"
            required
            {...form.getInputProps("phone")}
          />
        </Group>
        <TextInput
          icon={<Mail size={22} strokeWidth={1} color={"black"} />}
          label="Email"
          type="email"
          required
          mt="sm"
          variant="default"
          placeholder="Email"
          {...form.getInputProps("email")}
        />

        <Group mt="sm" position="apart" spacing="xl" grow>
          <DatePicker
            placeholder="Pick date"
            label="Date of birth"
            required
            onChange={(e: any) =>
              form.setFieldValue("dateOfBirth", e.toISOString())
            }
          />
          <Select
            required
            label="Gender"
            placeholder="Pick gender"
            data={[
              { value: "male", label: "male" },
              { value: "female", label: "female" },
            ]}
            value={form.values.gender}
            onChange={(e: any) => form.setFieldValue("gender", e)}
          />
        </Group>

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
      </InputWrapper>

      <Checkbox
        checked={isChecked}
        onChange={(e: any) => setIsChecked(e.currentTarget.checked)}
        mt="lg"
        label="I agree to sell my privacy"
      />
      <Box mt="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Anchor
            sx={{
              color: "inherit",
              fontSize: "0.9em",
              display: "inline-block",
            }}
            onClick={() => dispatch(setType({ type: "login" }))}
          >
            Have an account? Login
          </Anchor>
        </Box>
        <Button disabled={isError} type="submit">
          Register
        </Button>
      </Box>
    </form>
  );
}
