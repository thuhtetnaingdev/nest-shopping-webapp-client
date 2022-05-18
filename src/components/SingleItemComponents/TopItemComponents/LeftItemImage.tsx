import { Box, Grid, Image } from "@mantine/core";
import { useState } from "react";
import ImageCarousel from "../../CarouselComponent/ImageCarousel";
import Matches from "../../../cors/MediaQuery";

const LeftItemImage = ({ sofas }: { sofas: Array<string> }) => {
  const [mainImage, setMainImage] = useState<number>(0);

  const match = Matches();
  const carouselHandler = (i: number) => {
    return () => setMainImage(i);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <ImageCarousel
        autoplay={false}
        images={sofas}
        dots={match.mdMatches}
        scrollIndex={mainImage}
        showCurrentPosition={!match.mdMatches}
      />
      {!match.mdMatches && (
        <MultipleImages items={sofas} carouselHandler={carouselHandler} />
      )}
    </Box>
  );
};

function MultipleImages({
  items,
  carouselHandler,
}: {
  items: Array<string>;
  carouselHandler: Function;
}) {
  return (
    <Grid
      mt="xs"
      sx={{
        userSelect: "none",
      }}
    >
      {items.map((item, i) => (
        <Grid.Col span={3} key={i}>
          <Box
            sx={{
              height: "90px",
              width: "100%",
            }}
          >
            <Box>
              <Image
                sx={{
                  width: "100%",
                }}
                height={80}
                src={item}
                onClick={carouselHandler(i)}
              />
            </Box>
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default LeftItemImage;
