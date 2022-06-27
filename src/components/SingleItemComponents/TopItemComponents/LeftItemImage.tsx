import { Box, Grid, Group, Image, Skeleton } from "@mantine/core";
import { useState } from "react";
import ImageCarousel from "../../CarouselComponent/ImageCarousel";
import Matches from "../../../cors/MediaQuery";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ImageSkeleton } from "./PageSkeletonComponents/SinglePageSkeletons";

const LeftItemImage = ({ sofas }: { sofas: Array<string> }) => {
  const { item } = useSelector((value: RootState) => value.singleItemStore);
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
      {item ? (
        <>
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
        </>
      ) : (
        <ImageSkeleton />
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
