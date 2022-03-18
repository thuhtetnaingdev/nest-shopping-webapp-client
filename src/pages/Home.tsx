import Categories from "../components/HomeComponents/Categories";
import ImageCarousel from "../components/HomeComponents/ImageCarousel";
import PopularItems from "../components/HomeComponents/PopularItems";
import Recommendation from "../components/HomeComponents/Recommendation";
import TodayDeals from "../components/HomeComponents/TodayDeals";

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <Recommendation />
      <Categories />
      <TodayDeals />
      <PopularItems />
    </>
  );
}
