import Item from "../components/SingleItemComponents/TopItemComponent";
import PolicyAndLocation from "../components/SingleItemComponents/PolicyAndLocation";
import ItemTabs from "../components/SingleItemComponents/ItemTabs";
import { Box, MantineProvider } from "@mantine/core";
import Ratings from "../components/SingleItemComponents/Ratings";
import ProductReviewes from "../components/SingleItemComponents/ProductReviews";
import { useParams } from "react-router-dom";

export default function SingleItem() {
  const { item } = useParams();
  console.log(item);
  return (
    <Box mb="lg">
      <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
        <Item />
        <PolicyAndLocation />
        <ItemTabs />
        <Ratings />
        <ProductReviewes />
      </MantineProvider>
    </Box>
  );
}
