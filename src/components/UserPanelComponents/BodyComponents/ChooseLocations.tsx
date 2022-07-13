import {
  Text,
  Grid,
  Group,
  Stack,
  MantineTheme,
  Button,
  Checkbox,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { BiEdit, BiMenu, BiPlus, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Matches from "../../../cors/MediaQuery";
import { closeModal, openModal, setType } from "../../../features/modalSlice";
import { RootState } from "../../../store";
import OpenModal from "../../ModalComponent/OpenModal";
import CreateAddressModal from "./MenuModal/CreateAddressModal";

export default function ChooseLocations() {
  const smMatches = Matches().smMatches;

  const { type } = useSelector((value: RootState) => value.modalComponent);

  const dispatch = useDispatch();

  function handleDeleteButton() {
    dispatch(openModal());
  }

  function handleCancelButton() {
    dispatch(closeModal());
  }
  return (
    <>
      {type === "deleteAddress" && (
        <OpenModal
          header="Are you sure want to delete"
          btnText="Delete"
        />
      )}

      {/* Create Address Modal */}
      {type === "createAddress" && <CreateAddressModal />}
      <Group mt="md" position="apart">
        <Text size="xl" color="gray" weight={300}>
          Locations
        </Text>
        {type === "createAddress" || type === "deleteAddress" || (
          <Menu
            control={
              <ActionIcon>
                <BiMenu size="30" color="gray" />
              </ActionIcon>
            }
          >
            <Menu.Item
              icon={<BiPlus size="20" />}
              onClick={() => {
                dispatch(setType({ type: "createAddress" }));
                dispatch(openModal());
              }}
            >
              Create new address
            </Menu.Item>
            <Menu.Item
              icon={<BiTrash size="20" />}
              onClick={() => dispatch(setType({ type: "deleteAddress" }))}
            >
              Delete
            </Menu.Item>
          </Menu>
        )}
      </Group>
      <Grid>
        <Grid.Col span={smMatches ? 12 : 6}>
          <Locations isDeleteOpened={type === "deleteAddress"} />
        </Grid.Col>
        <Grid.Col span={smMatches ? 12 : 6}>
          <Locations isDeleteOpened={type === "deleteAddress"} />
        </Grid.Col>
      </Grid>
      {/* Delete Button */}
      {type === "deleteAddress" && (
        <Group position="right">
          <Button
            onClick={handleDeleteButton}
            leftIcon={<BiTrash size="20" />}
            color={type !== "deleteAddress" ? "gray" : "red"}
            variant={type !== "deleteAddress" ? "outline" : "filled"}
          >
            Delete
          </Button>

          <Button variant="outline" color="gray" onClick={handleCancelButton}>
            Cancel
          </Button>
        </Group>
      )}
    </>
  );
}

function Locations({
  choose,
  isDeleteOpened,
}: {
  choose?: boolean;
  isDeleteOpened?: boolean;
}) {
  return (
    <Group
      position="center"
      sx={(theme: MantineTheme) => ({
        position: "relative",
        backgroundColor: "white",
        borderRadius: "8px",
        border: choose ? `2px solid ${theme.colors.blue[4]}` : "none",
      })}
    >
      <Stack sx={{ width: "90%" }} py={30}>
        {isDeleteOpened ? (
          <Checkbox style={{ position: "absolute", top: 30, right: 40 }} />
        ) : (
          <BiEdit
            size={20}
            color="gray"
            style={{ position: "absolute", top: 30, right: 40 }}
          />
        )}
        <Group>
          <Text>Name: </Text>
          <Text>Thu Htet Naing</Text>
        </Group>
        <Group>
          <Text>Phone: </Text>
          <Text>198273789</Text>
        </Group>
        <Group>
          <Text>City: </Text>
          <Text>Yangon</Text>
        </Group>
        <Group>
          <Text>Township: </Text>
          <Text>South Okkalapa</Text>
        </Group>
        <Group sx={{ flexWrap: "nowrap", alignItems: "flex-start" }}>
          <Text>Address: </Text>
          <Text>No.123, Oka Street, 99th Block, South Okkalapa, Yangon</Text>
        </Group>
      </Stack>
    </Group>
  );
}
