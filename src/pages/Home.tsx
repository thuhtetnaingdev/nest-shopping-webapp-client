import Categories from "../components/HomeComponents/Categories";
import ImageCarousel from "../components/CarouselComponent/ImageCarousel";
import PopularItems from "../components/HomeComponents/PopularItems";
import Recommendation from "../components/HomeComponents/Recommendation";
import TodayDeals from "../components/HomeComponents/TodayDeals";
import Iu from "../public/images/iu.png";
import Iu2 from "../public/images/iu2.jpg";
import Iu3 from "../public/images/iu3.jpg";

export default function Home() {
  const images = [Iu, Iu2, Iu3];
  return (
    <>
      <ImageCarousel autoplay={true} images={images} />
      <Recommendation />
      <Categories />
      <TodayDeals />
      <PopularItems />
    </>
  );
}
