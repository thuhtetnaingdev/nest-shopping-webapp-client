import { MantineProvider, Pagination, Stack, Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ItemsList from "../components/DealsComponents/ItemsList";

export default function Deals() {
  const [activeTab, setActiveTab] = useState(0);

  const [activePage, setActivePage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const { products } = useParams(); //TODO:

  const onChange = (active: number, tabKey: string) => {
    setActiveTab(active);
    navigate(`${tabKey === "featured" ? "" : tabKey}`);
  };

  useEffect(() => {
    setSearchParams({ page: activePage.toString() });
  }, [activePage, activeTab]);

  return (
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <Stack align="center" mb="lg">
        {/**Tabs need to add more TODO: */}
        <Tabs active={activeTab} position="right" onTabChange={onChange}>
          <Tabs.Tab label="Featured" tabKey="featured">
            <ItemsList />
          </Tabs.Tab>
          <Tabs.Tab label="Tech" tabKey="tech">
            <ItemsList />
          </Tabs.Tab>
        </Tabs>
        <Pagination
          total={10}
          siblings={3}
          initialPage={10}
          page={activePage}
          onChange={setActivePage}
        />
      </Stack>
    </MantineProvider>
  );
}
