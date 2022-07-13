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
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import { Search } from "tabler-icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AvatarComponent from "./AvatarComponent";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal, setType } from "../../features/modalSlice";
import { AuthModal } from "../AuthComponents/AuthModalComponents";
import Logout from "../AuthComponents/LogoutModal";

export default function Navbar() {
  //Redux: User store
  const { user } = useSelector((value: RootState) => value.userCredentials);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useClickOutside(() => setIsOpen(false));

  const display: CSSObject = {
    display: "none",
  };

  return (
    <Grid
      grow
      align="center"
      justify="center"
      sx={(theme: MantineTheme) => ({
        textAlign: "center",
        height: "4.2rem",
        backgroundColor: location.pathname.startsWith("/products")
          ? ""
          : location.pathname === "/"
          ? ""
          : theme.colors.indigo[5],
        color: location.pathname.startsWith("/products")
          ? "black"
          : location.pathname === "/"
          ? "black"
          : "white",
      })}
    >
      <Grid.Col span={1}>
        <MantineProvider theme={{ fontFamily: "Sansita Swashed, cursive" }}>
          <Anchor component={Link} to="/" variant="text" size="xl">
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
                width: "50%",
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
            <Search
              size="20"
              color={
                location.pathname.startsWith("/products")
                  ? "black"
                  : location.pathname === "/"
                  ? "black"
                  : "white"
              }
            />
          </ActionIcon>
          <MediaQuery smallerThan="xs" styles={display}>
            <Text onClick={() => setIsOpen(true)}>Search</Text>
          </MediaQuery>
        </Group>
      </Grid.Col>
      <Grid.Col span={1}>
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
        {!location.pathname.startsWith("/profile") && <Logout />}
      </Grid.Col>
    </Grid>
  );
}
