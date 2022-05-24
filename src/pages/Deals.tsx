import { MantineProvider, Pagination, Stack, Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ItemsList from "../components/DealsComponents/ItemsList";
import Matches from "../cors/MediaQuery";

export default function Deals() {
  const { smMatches } = Matches();
  const [activeTab, setActiveTab] = useState(0);

  const [activePage, setActivePage] = useState(1);
  const [_, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const { products } = useParams(); //TODO:

  const onChange = (active: number, tabKey: string) => {
    setActiveTab(active);
    navigate(`${tabKey === "featured" ? "" : tabKey}`);
  };

  useEffect(() => {
    activePage !== 1
      ? setSearchParams({ page: activePage.toString() })
      : navigate(`${products}`);
  }, [activePage]);

  return (
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <Stack align="center" mb="lg">
        {/**more tabs need to add TODO: */}
        <Tabs active={activeTab} position="right" onTabChange={onChange}>
          <Tabs.Tab label="Featured" tabKey="featured">
            <ItemsList />
          </Tabs.Tab>
          <Tabs.Tab label="Tech" tabKey="tech">
            <ItemsList />
          </Tabs.Tab>
        </Tabs>
        <Pagination
          size={smMatches ? "sm" : "md"}
          sx={{ minWidth: "200px" }}
          total={10}
          siblings={1}
          initialPage={10}
          page={activePage}
          onChange={setActivePage}
        />
      </Stack>
    </MantineProvider>
  );
}
