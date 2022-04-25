import { Box, Grid, Image, Paper, useMantineTheme, Text } from "@mantine/core";
import ItemHeaderAnchor from "./ItemHeaderAnchor";
import Matches from "../../cors/MediaQuery";
import nivea from "../../public/images/nivea.png";
import macbook from "../../public/images/macbook.png";
import vr from "../../public/images/vr.png";
import panda from "../../public/images/panda.png";

export default function Categories() {
  type DataType = {
    image: any;
    catagory: string;
  };

  const theme = useMantineTheme();

  const matches = Matches().mdMatches;
  const CatagoryData: DataType[] = [
    {
      image: nivea,
      catagory: "Beauty picks",
    },
    {
      image: macbook,
      catagory: "Computer & Accessories",
    },
    {
      image: vr,
      catagory: "Video Games",
    },
    {
      image: panda,
      catagory: "Toys & Games",
    },
  ];

  return (
    <Box sx={{ display: matches ? "none" : "block" }} mt="lg">
      <ItemHeaderAnchor
        text={matches ? "JoyBox Top Sellers" : "Shop by categories"}
      />
      <Grid mt="xs">
        {CatagoryData.map((item, i) => (
          <Grid.Col span={matches ? 6 : 3} key={i}>
            <Box
              sx={{
                height: "350px",
                backgroundColor: theme.colors.gray[1],
                display: "flex",
                overflow: "hidden",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Box mt="lg" sx={{ width: "300px" }}>
                <img
                  style={{
                    width: "100%",
                    marginLeft: "110px",
                  }}
                  src={item.image}
                />
              </Box>
              <Text ml="xl">{item.catagory}</Text>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
