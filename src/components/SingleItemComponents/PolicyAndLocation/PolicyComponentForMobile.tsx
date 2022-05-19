import { SellerPolicy } from "./index";
import { Box, Grid, Space, Text } from "@mantine/core";
import moment from "moment";
import { useState } from "react";

export default function PolicyComponentForMobile({
  sellerPolicy,
}: {
  sellerPolicy: SellerPolicy[];
}) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const nowDate = new Date();
  const addDate = (toAdd: number) => {
    const currentDate = new Date();
    const addToDate = currentDate.setDate(currentDate.getDate() + toAdd);
    const newDate = new Date(addToDate);
    return {
      getDay: newDate.toLocaleString("en-Us", { weekday: "short" }),
      getMonth: monthNames[newDate.getMonth()],
      getDate: newDate.getDate(),
    };
  };
  const newDate = addDate(7);
  return (
    <Box mt="sm">
      <Text weight={700} size="xl">
        Shipping and Returns
      </Text>
      <Grid mt={2}>
        <Grid.Col span={5}>
          <Box sx={{ height: "80px" }}>
            <Text size="sm" color="gray">
              Est. delivery
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={7}>
          <Box sx={{ height: "80px" }}>
            <Box sx={{ display: "flex" }}>
              <Text size="sm">
                {nowDate.toLocaleDateString("en-US", { weekday: "short" })}
                {", "}
                {monthNames[nowDate.getMonth()]} {nowDate.getDate()}
              </Text>
              <Box mx={7}>-</Box>
              <Text size="sm">
                {newDate.getDay}
                {", "}
                {newDate.getMonth} {newDate.getDate}
              </Text>
            </Box>
            <Text size="sm" color="gray">
              From {sellerPolicy[0].content}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={5}>
          <Box sx={{ height: "80px" }}>
            <Text size="sm" color="gray">
              Returns
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={7}>
          <Box sx={{ height: "80px" }}>
            <Text size="sm">{sellerPolicy[3].content}</Text>
            <Text size="sm" color="gray">
              {sellerPolicy[2].content}
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
