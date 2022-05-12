import Item from "../components/SingleItemComponents/TopItemComponent";
import PolicyAndLocation from "../components/SingleItemComponents/PolicyAndLocation";
import ItemTabs from "../components/SingleItemComponents/ItemTabs";
import { Box, MantineProvider } from "@mantine/core";

export default function SingleItem() {
  return (
    <Box mb="lg">
      <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
        <Item />
        <PolicyAndLocation />
        <ItemTabs />
      </MantineProvider>
    </Box>
  );
}
