import {
  ActionIcon,
  Anchor,
  CSSObject,
  Grid,
  Group,
  Input,
  MantineProvider,
  MantineTheme,
  MediaQuery,
  Text,
  useMantineTheme,
  Box,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Search } from "tabler-icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AvatarComponent from "./AvatarComponent";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { openModal, setType } from "../../features/modalSlice";
import { AuthModal } from "../AuthComponents/AuthModalComponents";
import Logout from "../AuthComponents/LogoutModal";

export default function Navbar() {
  //Redux: User store
  const { user } = useSelector((value: RootState) => value.userCredentials);
  const theme = useMantineTheme();
  const [bgColor, setBgColor] = useState("white");

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useClickOutside(() => setIsOpen(false));

  const location = useLocation();

  const display: CSSObject = {
    display: "none",
  };

  useEffect(() => {
    console.log("rendered");
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname.startsWith("/profile/") ||
      location.pathname.startsWith("/products")
    ) {
      setBgColor("white");
    } else {
      setBgColor(theme.colors.indigo[5]);
    }
  }, [location]);

  return (
    <Grid
      grow
      align="center"
      justify="center"
      sx={(theme: MantineTheme) => ({
        textAlign: "center",
        height: "4.2rem",
        backgroundColor: bgColor,
        color: bgColor === "white" ? "black" : "white",
        flexWrap: "nowrap",
      })}
    >
      <Grid.Col span={1}>
        <MantineProvider theme={{ fontFamily: "Sansita Swashed, cursive" }}>
          <Anchor ml="sm" component={Link} to="/" variant="text" size="xl">
            JoyBox
          </Anchor>
        </MantineProvider>
      </Grid.Col>
      <MediaQuery smallerThan="md" styles={display}>
        <Grid.Col span={1}>
          <Anchor variant="text" px="sm">
            All
          </Anchor>
        </Grid.Col>
      </MediaQuery>
      <MediaQuery smallerThan="md" styles={display}>
        <Grid.Col span={1} px="md">
          <Anchor variant="text">Catagory</Anchor>
        </Grid.Col>
      </MediaQuery>
      <Grid.Col span={7}>
        <Group position="right" ref={ref}>
          <MediaQuery smallerThan="xl" styles={{ maxWidth: "70%" }}>
            <Input
              className="Inp"
              variant="unstyled"
              placeholder="Search"
              sx={(theme: MantineTheme) => ({
                width: "70%",
                background: theme.colors.gray[2],
                borderRadius: "30px",
                display: isOpen ? "block" : "none",
              })}
              px="md"
            />
          </MediaQuery>
          <ActionIcon
            onClick={() => setIsOpen(true)}
            sx={{ border: "none", outline: "none" }}
            variant="transparent"
          >
            <Search size="20" color={bgColor === "white" ? "black" : "white"} />
          </ActionIcon>
          <MediaQuery smallerThan="xs" styles={display}>
            <Text onClick={() => setIsOpen(true)}>Search</Text>
          </MediaQuery>
        </Group>
      </Grid.Col>
      <Grid.Col span={1}>
        <Box mr="sm">
          {!user ? (
            <>
              <Anchor
                variant="text"
                onClick={() => {
                  dispatch(setType({ type: "login" }));
                  dispatch(openModal());
                }}
              >
                Login
              </Anchor>
              <AuthModal />
            </>
          ) : (
            <AvatarComponent />
          )}
          <Logout />
        </Box>
      </Grid.Col>
    </Grid>
  );
}
