import { Divider, Skeleton, Tabs, Text } from "@mantine/core";
import { useOs } from "@mantine/hooks";
import Matches from "../../../cors/MediaQuery";
import CompanyInfo from "./CompanyInfo";

export default function ItemTabs() {
  const match = Matches()
  return (
    <>
      <Tabs variant="outline" tabPadding="xl" mt="xl">
        <Tabs.Tab label="Product Details" sx={{ fontSize: "1rem" }}>
          <Skeleton visible={false}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            cum tempore officia, ratione quis nam distinctio qui odio rem in
            culpa nulla quisquam, quidem, autem beatae voluptatibus. Natus
            eligendi eaque quod quisquam labore voluptatum impedit numquam
            eveniet maxime, est obcaecati quia, perspiciatis nam ut temporibus
            dolorum corrupti similique tempore neque odio ea saepe velit quasi?
            Dignissimos est quo explicabo iste, veritatis consectetur
          </Skeleton>
        </Tabs.Tab>
        <Tabs.Tab label="Company Info" sx={{ fontSize: "1rem" }}>
          <CompanyInfo />
        </Tabs.Tab>
      </Tabs>
      {!match.smMatches && <Divider mt="lg" />}
    </>
  );
}
