import HeadPhone from "../../public/images/headphones.png";
import Cooker from "../../public/images/cooker.png";
import Cloth from "../../public/images/cloth.png";
import Coupon from "../../public/images/coupon.png";

type recommendationDataType = {
  image: string;
  title: string;
  desc: string;
};

export const recommendationData: recommendationDataType[] = [
  {
    image: Coupon,
    title: "Promotions",
    desc: "Big Sales 30%",
  },
  {
    image: HeadPhone,
    title: "Electronics",
    desc: "Big Sales 30%",
  },
  {
    image: Cooker,
    title: "Home and Kitchen",
    desc: "Big Sales 30%",
  },
  {
    image: Cloth,
    title: "Accessories & Clothes",
    desc: "Big Sales 30%",
  },
];
