import { Circle7, MapPin, Shield, TruckDelivery } from "tabler-icons-react";
import Matches from "../../../cors/MediaQuery";
import PolicyComponentForDesktop from "./PolicyComponentForDesktop";
import PolicyComponentForMobile from "./PolicyComponentForMobile";

export interface SellerPolicy {
  title: string;
  content: string;
  icon: any;
}

export default function PolicyAndLocation() {
  const match = Matches();
  const iconStyle = {
    size: 30,
    strokeWidth: 0.5,
    color: "black",
  };
  const sellerPolicy: SellerPolicy[] = [
    {
      title: "Location",
      content: "SouthOkkalapa, Yangon",
      icon: () => <MapPin {...iconStyle} />,
    },
    {
      title: "Home Delivery Service",
      content: "5 - 7 days",
      icon: () => <TruckDelivery {...iconStyle} />,
    },
    {
      title: "Warranty",
      content: "Warranty is not availabe",
      icon: () => <Shield {...iconStyle} />,
    },
    {
      title: "7 Days Returns",
      content: "No hassel return policy",
      icon: () => <Circle7 {...iconStyle} />,
    },
  ];
  return (
    <>
      {!match.smMatches ? (
        <PolicyComponentForDesktop sellerPolicy={sellerPolicy} />
      ) : (
        <PolicyComponentForMobile sellerPolicy={sellerPolicy} />
      )}
    </>
  );
}
