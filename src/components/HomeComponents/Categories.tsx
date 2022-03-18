import { Box, CSSObject, Grid } from "@mantine/core";
import ItemHeaderAnchor from "./ItemHeaderAnchor";
import Matches from "../../cors/MediaQuery";

export default function Categories() {
  type DataType = {
    image: any;
    catagory: string;
  };

  const matches = Matches().mdMatches;
  const CatagoryData: DataType[] = [
    {
      image: "",
      catagory: "Beauty picks",
    },
    {
      image: "",
      catagory: "Computer & Accessories",
    },
    {
      image: "",
      catagory: "Video Games",
    },
    {
      image: "",
      catagory: "Toys & Games",
    },
  ];
  const gridStyle = (theme: any): CSSObject => ({
    background: theme.colors.gray[2],
    height: "300px",
  });
  return (
    <Box mt="lg">
      <ItemHeaderAnchor
        text={matches ? "JoyBox Top Sellers" : "Shop by categories"}
      />
      <Grid mt="lg" sx={{ display: matches ? "none" : "" }}>
        {CatagoryData.map((item, i) => (
          <Grid.Col key={i} span={matches ? 6 : 3}>
            <Box sx={gridStyle}></Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
