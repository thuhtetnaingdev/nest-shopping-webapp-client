import { Box } from "@mantine/core";
import UserBodyComponent from "../components/UserPanelComponents/BodyComponents";
import { UserTopComponent } from "../components/UserPanelComponents/UserTopComponent";

export const UserPage = () => {
  return (
    <Box mt="lg">
      <UserTopComponent />
      <UserBodyComponent />
    </Box>
  );
};
