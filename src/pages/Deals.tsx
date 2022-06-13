import { MantineProvider, Pagination, Stack, Tabs } from "@mantine/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ItemsList from "../components/DealsComponents/ItemsList";
import Matches from "../cors/MediaQuery";
import axios from "axios";
import { RootObject } from "../cors/types/ItemTypes";

export default function Deals() {
  const { smMatches } = Matches();
  const [activeTab, setActiveTab] = useState(0);

  //products item
  const [productsData, setProductsData] = useState<RootObject[]>([]);

  //loading hook
  const [loading, setLoading] = useState(true);

  const [activePage, setActivePage] = useState(1);
  const [_, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const { products } = useParams(); //TODO:

  const onChange = (active: number, tabKey: string) => {
    setActiveTab(active);
    navigate(`${tabKey === "featured" ? "" : tabKey}`);
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://fakestoreapi.com/products/`);
      setProductsData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setProductsData([]);
    }
  }, [activePage, activeTab]);

  useEffect(() => {
    activePage !== 1
      ? setSearchParams({ page: activePage.toString() })
      : navigate(`${products ? products : ""}`);

    fetchData();
    return () => setProductsData([]);
  }, [activePage]);

  return (
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <Stack align="center" mb="lg">
        {/**need to add more tabs TODO: */}
        <Tabs active={activeTab} position="right" onTabChange={onChange}>
          <Tabs.Tab label="Featured" tabKey="featured">
            <ItemsList loading={loading} data={productsData} />
          </Tabs.Tab>
          <Tabs.Tab label="Tech" tabKey="tech">
            <ItemsList loading={loading} data={productsData} />
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
