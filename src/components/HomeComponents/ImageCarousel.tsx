import { Box, Image } from "@mantine/core";
import Iu from "../../public/images/iu.png";
import Iu2 from "../../public/images/iu2.jpg";
import Iu3 from "../../public/images/iu3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
      mb="xl"
    >
      <div>
        <Slider {...settings}>
          <Box>
            <Image src={Iu} />
          </Box>
          <Box>
            <Image src={Iu2} />
          </Box>
          <Box>
            <Image src={Iu3} />
          </Box>
        </Slider>
      </div>
    </Box>
  );
}
