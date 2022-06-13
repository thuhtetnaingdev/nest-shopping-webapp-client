import { useMantineTheme } from "@mantine/core";
import UserTabs from "../components/UserPanelComponents/UserTabsComponents/UserTabs";
import { UserTopComponent } from "../components/UserPanelComponents/UserTopComponent";

export const UserPage = () => {
  const theme = useMantineTheme();
  return (
    <>
      <UserTopComponent />
      <UserTabs />
    </>
  );
};
