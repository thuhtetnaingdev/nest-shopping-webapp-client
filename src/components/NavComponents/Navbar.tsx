import {
  Anchor,
  Button,
  Center,
  CSSObject,
  Grid,
  Group,
  Input,
  MantineProvider,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useState } from "react";
import { Search } from "tabler-icons-react";
import AuthDrawer from "../AuthComponents/UserProfileDrawer";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AvatarComponent from "../HomeComponents/AvatarComponent";
import { useDispatch } from "react-redux";
import { openModel } from "../../features/auth/authModel";

export default function Navbar() {
  //Redux: User store
  const { user } = useSelector((value: RootState) => value.userCredentials);
  const dispatch = useDispatch();

  const theme = useMantineTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useClickOutside(() => setIsOpen(false));

  const display: CSSObject = {
    display: "none",
  };

  return (
    <Grid grow align="center" pb="md">
      <Grid.Col span={1}>
        <Center>
          <MantineProvider theme={{ fontFamily: "Sansita Swashed, cursive" }}>
            <Anchor variant="text" size="xl">
              JoyBox
            </Anchor>
          </MantineProvider>
        </Center>
      </Grid.Col>
      <MediaQuery smallerThan="md" styles={display}>
        <Grid.Col span={1}>
          <Center>
            <Anchor variant="text" px="sm">
              All
            </Anchor>
          </Center>
        </Grid.Col>
      </MediaQuery>
      <MediaQuery smallerThan="md" styles={display}>
        <Grid.Col span={1} px="md">
          <Center>
            <Anchor variant="text">Catagory</Anchor>
          </Center>
        </Grid.Col>
      </MediaQuery>
      <Grid.Col span={7}>
        <Group position="right" ref={ref}>
          <MediaQuery smallerThan="xl" styles={{ maxWidth: "70%" }}>
            <Input
              className="Inp"
              variant="unstyled"
              placeholder="Search"
              sx={{
                width: "50%",
                background: theme.colors.gray[2],
                borderRadius: "30px",
                display: isOpen ? "block" : "none",
              }}
              px="md"
            />
          </MediaQuery>
          <Button
            onClick={() => setIsOpen(true)}
            variant="subtle"
            sx={{ border: "none", outline: "none" }}
          >
            <Search size="20" />
          </Button>
          <MediaQuery smallerThan="xs" styles={display}>
            <Text onClick={() => setIsOpen(true)}>Search</Text>
          </MediaQuery>
        </Group>
      </Grid.Col>
      <Grid.Col span={1}>
        <Center>
          {!user ? (
            <>
              <Anchor variant="text" onClick={() => dispatch(openModel())}>
                Login
              </Anchor>
              <AuthDrawer />
            </>
          ) : (
            <AvatarComponent user={user} />
          )}
        </Center>
      </Grid.Col>
    </Grid>
  );
}
