import {
  Container,
  MantineProvider,
  Pagination,
  Stack,
  Tabs,
} from "@mantine/core";
import { useEffect, useState } from "react";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ItemsList from "../components/ItemsList/ItemsList";
import Matches from "../cors/MediaQuery";
import axios from "axios";
import { RootObject } from "../cors/types/ItemTypes";

export default function Deals() {
  const { smMatches } = Matches();

  //products item
  const [productsData, setProductsData] = useState<RootObject[]>([]);

  enum TabsKey {
    featured = 0,
    tech = 1,
  }

  //loading hook
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState(TabsKey.featured);
  const [activePage, setActivePage] = useState(1);

  // ---------react router hooks--------------
  const navigate = useNavigate();
  const [_, setSearchParams] = useSearchParams();
  const { products } = useParams();
  const location = useLocation();
  //-------------------------------------------

  //page number from location
  const query = location.search.slice(6);

  //fetch data from fake store api
  const fetchData = async () => {
    console.log("fetch");
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
  };

  //Change tab function
  const onTabChange = (active: number, tabKey: string) => {
    setActiveTab(active);
    setActivePage(1);
    fetchData(); //TODO:
    navigate(tabKey !== "featured" ? tabKey : "");
  };

  //Change page function
  const changeActivePage = (e: number) => {
    setActivePage(e);
    if (e === 1) {
      navigate(activeTab === 0 ? "" : "tech");
    } else {
      const searchParam = createSearchParams({ page: e.toString() });
      setSearchParams(searchParam);
      fetchData(); //TODO:
    }
  };

  //set page with query and page
  useEffect(() => {
    //change query string to number type
    const queryToNum: number = query ? parseInt(query) : 1;

    let tabName: number = products ? 1 : 0;

    setActiveTab(tabName);
    setActivePage(queryToNum);

    fetchData(); //TODO:

    return function () {
      tabName = 0;
    };
  }, []);

  return (
    <MantineProvider theme={{ fontFamily: "Roboto, sans-serif" }}>
      <Container size="xl" mt="sm">
        <Stack align="center" mb="lg">
          {/**need to add more tabs TODO: */}
          <Tabs active={activeTab} position="right" onTabChange={onTabChange}>
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
            onChange={changeActivePage}
          />
        </Stack>
      </Container>
    </MantineProvider>
  );
}
