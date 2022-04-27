import {
  Anchor,
  Box,
  Button,
  InputWrapper,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "../../utilis/authHooks";
import { User, Lock } from "tabler-icons-react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utilis/gqlRequests/authRequests";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginOrRegister } from "../../features/auth/authSlice";
import { closeModel } from "../../features/auth/authModel";

export default function Login(props: { isClickedLogin: any }) {
  const dispatch = useDispatch();

  const { form } = useForm({
    username: "",
    password: "",
  });

  const [login, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    if (data) {
      dispatch(loginOrRegister(data.login));
      dispatch(closeModel());
    }
  }, [data]);

  return (
    <form
      onSubmit={form.onSubmit((value) =>
        login({
          variables: value,
        })
      )}
    >
      <LoadingOverlay visible={loading ? true : false} />
      <Box>
        <InputWrapper required error={error ? error.message : null}>
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
        </InputWrapper>
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
          <Button type="submit">Login</Button>
        </Box>
      </Box>
    </form>
  );
}
