import { Box, Image, Text } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

export default function ImageCarousel({
  autoplay,
  images,
  dots,
  scrollIndex,
  showCurrentPosition,
}: {
  autoplay: boolean;
  images: Array<string>;
  dots?: boolean;
  scrollIndex?: number;
  showCurrentPosition?: boolean;
}) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const nextScroll = (e: number) => {
    setCurrentSlide(e + 1);
  };
  const settings = {
    dots: dots !== undefined ? dots : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    afterChange: nextScroll,
  };
  const slider: any = useRef();

  useEffect(() => {
    scrollIndex === 0 && slider.current.slickGoTo(scrollIndex);
    scrollIndex && slider.current.slickGoTo(scrollIndex);
  }, [scrollIndex]);

  return (
    <Box
      sx={{
        width: `100%`,
        position: "relative",
      }}
      mb="xl"
    >
      <Slider ref={slider} {...settings}>
        {images.map((image, i) => (
          <Box key={i}>
            <Image src={image} />
          </Box>
        ))}
      </Slider>
      {showCurrentPosition && (
        <Text
          size="sm"
          color="white"
          sx={{ position: "absolute", zIndex: "1", bottom: 0, left: "50%" }}
        >
          {currentSlide}/{images.length}
        </Text>
      )}
    </Box>
  );
}
