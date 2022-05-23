import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/NavComponents/Navbar";
import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
  MantineTheme,
  Paper,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import SingleItem from "./pages/SingleItem";
import Deals from "./pages/Deals";
import { useEffect, useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const location = useLocation();

  useEffect(() => {
    location.pathname.startsWith("/deals")
      ? setBgColor("#F6F6F6")
      : setBgColor("white");
  }, [location.pathname]);

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "color-scheme",
    defaultValue: "light",
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || colorScheme === "dark" ? "light" : "dark");
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, fontFamily: "Roboto, sans-serif" }}
        defaultProps={{
          Container: {
            sizes: {
              xs: 540,
              sm: 720,
              md: 960,
              lg: 1140,
              xl: 1250,
            },
          },
        }}
      >
        <Paper
          sx={(theme: MantineTheme) => ({
            backgroundColor: bgColor,
          })}
          p={5}
        >
          <Container size="xl" mt="sm" mx="auto">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:item" element={<SingleItem />} />
              <Route path="deals" element={<Deals />}>
                <Route path=":products" element={<Outlet />} />
              </Route>
            </Routes>
          </Container>
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
