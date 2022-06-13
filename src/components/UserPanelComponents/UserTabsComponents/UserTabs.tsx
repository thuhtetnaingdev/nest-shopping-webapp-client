import { Tabs } from "@mantine/core";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";
import AddressTab from "./AddressTab";

enum TabsContent {
  PInfo = 0,
  Address = 1,
  Orders = 2,
  Wishlist = 3,
}
const TabsContentArray = ["info", "address", "orders", "wishlist"];
export default function UserTabs() {
  const [activeTab, setActiveTab] = useState<TabsContent>(TabsContent.PInfo);

  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();

  useEffect(() => {
    activeTab !== 0
      ? setSearchParams({ tab: TabsContentArray[activeTab] })
      : navigate("");
  }, [activeTab]);

  return (
    <Tabs
      variant="outline"
      orientation="horizontal"
      mt="md"
      active={activeTab}
      onTabChange={setActiveTab}
    >
      <Tabs.Tab label="Profile" icon={<AiOutlineUser size={19} />}>
        <PersonalInfo />
      </Tabs.Tab>
      <Tabs.Tab label="Address" icon={<FaRegAddressCard size={19} />}>
        <AddressTab />
      </Tabs.Tab>
      <Tabs.Tab label="Orders" icon={<BsListCheck size={19} />}>
        Orders
      </Tabs.Tab>
      <Tabs.Tab label="My Wishlist" icon={<AiOutlineHeart size={19} />}>
        My Wishlist
      </Tabs.Tab>
    </Tabs>
  );
}
