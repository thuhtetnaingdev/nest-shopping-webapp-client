import { Box, CSSObject, Grid, Image } from "@mantine/core";
import ItemHeaderAnchor from "./ItemHeaderAnchor";
import Matches from "../../cors/MediaQuery";
import beauty from "../../public/images/beauty.png";

export default function Categories() {
  type DataType = {
    image: any;
    catagory: string;
  };

  const matches = Matches().mdMatches;
  const CatagoryData: DataType[] = [
    {
      image: beauty,
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
            <Box sx={gridStyle}>
              <Box>
                <Image
                  src={item.image}
                  width={160}
                  sx={{
                    marginLeft: "110px",
                    overflow: "hidden",
                  }}
                />
              </Box>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
