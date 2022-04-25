import { useForm as MantineForm } from "@mantine/form";

interface formType {
  firstName?: string;
  lastName?: string;
  username: string;
  phone?: string;
  email?: string;
  dateOfBirth?: string;
  gender?: string;
  password: string;
  confirmPassword?: string;
}

export const useForm = (initialState: formType) => {
  const form = MantineForm({
    initialValues: initialState,
  });

  return {
    form,
  };
};
