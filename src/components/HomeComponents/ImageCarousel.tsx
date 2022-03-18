import { useState } from "react";
import { Box, Image, MediaQuery } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "./imageCarousel.css";

export default function ImageCarousel() {
  const matches = useMediaQuery("(max-width: 600px)");
  const [slide, setSlide] = useState<number>(1);
  const showSlides = () => {
    if (slide === 2) {
      return setSlide(1);
    } else {
      return setSlide(slide + 1);
    }
  };
  return (
    <Box sx={{ width: "100%", position: "relative" }} mx="auto">
      <div className="sideshow-container">
        <div
          className="mySlides fade"
          style={{ display: slide === 1 ? "block" : "none" }}
        >
          <Image
            width="100%"
            height={matches ? "200px" : "400px"}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.k-popmag.com%2Fcontent%2Fimages%2F2019%2F11%2Fhdl.jpeg&f=1&nofb=1"
          />
        </div>

        <div
          className="mySlides fade"
          style={{ display: slide === 2 ? "block" : "none" }}
        >
          <Image
            width="100%"
            height={matches ? "200px" : "400px"}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.billboard.com%2Ffiles%2F2020%2F05%2Fiu-feb-2020-billboard-1548-1589305869-1024x677.jpg&f=1&nofb=1"
          />
        </div>
        <div className="prev" onClick={showSlides}>
          &#10094;
        </div>
        <div className="next" onClick={showSlides}>
          &#10095;
        </div>
      </div>
    </Box>
  );
}
