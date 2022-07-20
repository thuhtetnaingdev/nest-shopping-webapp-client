import Item from "../components/SingleItemComponents/TopItemComponents";
import PolicyAndLocation from "../components/SingleItemComponents/PolicyAndLocation";
import ItemTabs from "../components/SingleItemComponents/ItemTabsDetails";
import { Box, Container, MantineProvider } from "@mantine/core";
import Ratings from "../components/SingleItemComponents/Ratings";
import { useParams } from "react-router-dom";
import Reviews from "../components/SingleItemComponents/ProductReviews";
import Matches from "../cors/MediaQuery";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cleanStore, setItem } from "../features/singleItemSlice";
import { RootState } from "../store";

export default function SingleItem() {
  const { item } = useSelector((value: RootState) => value.singleItemStore);

  const dispatch = useDispatch();

  const { item: products } = useParams(); //TODO:
  const match = Matches();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${products}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData().then((data) => dispatch(setItem(data)));

    return function () {
      dispatch(cleanStore());
    };
  }, []);

  return (
    <Container size="lg" mt="sm">
      <Box mb="lg">
        <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
          <Item />
          {item && (
            <>
              <PolicyAndLocation />
              <ItemTabs />
              {!match.smMatches && <Ratings />}
              <Reviews />
            </>
          )}
        </MantineProvider>
      </Box>
    </Container>
  );
}
