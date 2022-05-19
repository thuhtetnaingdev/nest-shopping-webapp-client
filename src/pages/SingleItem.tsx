import Item from "../components/SingleItemComponents/TopItemComponents";
import PolicyAndLocation from "../components/SingleItemComponents/PolicyAndLocation";
import ItemTabs from "../components/SingleItemComponents/ItemTabsDetails";
import { Box, MantineProvider } from "@mantine/core";
import Ratings from "../components/SingleItemComponents/Ratings";
import { useParams } from "react-router-dom";
import Reviews from "../components/SingleItemComponents/ProductReviews";
import Matches from "../cors/MediaQuery";

export default function SingleItem() {
  // const { item } = useParams(); //TODO:
  const match = Matches();
  return (
    <Box mb="lg">
      <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
        <Item />
        <PolicyAndLocation />
        <ItemTabs />
        {!match.smMatches && <Ratings />}
        <Reviews />
      </MantineProvider>
    </Box>
  );
}
