import { Divider, Skeleton, Tabs } from "@mantine/core";
import CompanyInfo from "./ItemTabsDetails/CompanyInfo";

export default function ItemTabs() {
  const skeleton = [1, 2, 3, 4, 5, 6, 7];
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
            exercitationem necessitatibus aliquam hic deleniti aperiam
            cupiditate rerum maxime, quaerat accusantium eum dolorum assumenda
            commodi et harum eaque quidem dicta possimus soluta. Adipisci, aut
            nisi. Adipisci architecto repudiandae nihil officia voluptas
            possimus libero asperiores ex. Adipisci, quaerat quasi, voluptatum
            quibusdam et necessitatibus hic dolores
          </Skeleton>
        </Tabs.Tab>
        <Tabs.Tab label="Company Info" sx={{ fontSize: "1rem" }}>
          <CompanyInfo />
        </Tabs.Tab>
      </Tabs>
      <Divider mt="lg" />
    </>
  );
}
