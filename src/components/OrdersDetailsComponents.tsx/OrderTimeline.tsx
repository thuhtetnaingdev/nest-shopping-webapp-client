import { Text, Timeline } from "@mantine/core";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import { BuildingWarehouse, TruckDelivery } from "tabler-icons-react";
import { SiHackthebox } from "react-icons/si";

export default function OrderTimeline() {
  return (
    <div>
      <Timeline active={1} bulletSize={24} lineWidth={3}>
        <Timeline.Item bullet={<FaMoneyBillWave />} title="Order Placed">
          <Text color="dimmed">We have recived your order</Text>
          <Text mt={4} size="sm">
            12:00 PM, July 4
          </Text>
        </Timeline.Item>
        <Timeline.Item bullet={<MdOutlineSchedule />} title="Order Confirmed">
          <Text color="dimmed">We have been confirmed on 10-9-2022.</Text>
          <Text mt={4} size="sm">
            12:00 PM, July 4
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Order Processed"
          bullet={<BuildingWarehouse size={15} strokeWidth={2} />}
        >
          <Text color="dimmed">We are preparing your order.</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<SiHackthebox />} title="Ready To Ship">
          <Text color="dimmed">Your order is ready for shipping.</Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<TruckDelivery size={15} strokeWidth={2} />}
          title="Out for Delivery"
        >
          <Text color="dimmed">Your order is out for delivery.</Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
