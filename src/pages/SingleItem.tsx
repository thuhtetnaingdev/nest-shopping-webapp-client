import Item from "../components/SingleItemComponents/TopItemComponents";
import PolicyAndLocation from "../components/SingleItemComponents/PolicyAndLocation";
import ItemTabs from "../components/SingleItemComponents/ItemTabsDetails";
import { Box, MantineProvider } from "@mantine/core";
import Ratings from "../components/SingleItemComponents/Ratings";
import { useParams } from "react-router-dom";
import Reviews from "../components/SingleItemComponents/ProductReviews";
import Matches from "../cors/MediaQuery";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cleanStore, setItem } from "../features/singleItemSlice";

export default function SingleItem() {
  const dispatch = useDispatch();

  const { item } = useParams(); //TODO:
  const match = Matches();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${item}`
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
