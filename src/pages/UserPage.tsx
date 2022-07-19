import { Box, Container } from "@mantine/core";
import UserBodyComponent from "../components/UserPanelComponents/BodyComponents";
import { UserTopComponent } from "../components/UserPanelComponents/UserTopComponent";

export const UserPage = () => {
  return (
    <Container size="lg" mt="sm" mx="auto">
      <UserTopComponent />
      <UserBodyComponent />
    </Container>
  );
};
