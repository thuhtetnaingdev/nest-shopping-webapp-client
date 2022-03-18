import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/HomeComponents/Navbar";
import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";

function App() {
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
        theme={{ colorScheme, fontFamily: "Fredoka, sans-serif" }}
      >
        <Container size="lg" mt="sm" mx="auto">
          <Paper>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Paper>
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
