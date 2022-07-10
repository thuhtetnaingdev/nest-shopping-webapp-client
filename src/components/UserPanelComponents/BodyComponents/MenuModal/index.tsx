import { Modal } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddressOpened,
  setDeleteOpened,
  setModalOpened,
} from "../../../../features/addressSlice";
import { RootState } from "../../../../store";
import CreateAddressModal from "./CreateAddressModal";
import DeleteAddressModal from "./DeleteAddressModal";

export default function UserBodyMenuModal({}) {
  const { isModalOpened, isDeleteOpened, isAddressCreateOpened } = useSelector(
    (value: RootState) => value.addressCredentials
  );

  const dispatch = useDispatch();

  function handleOnClose() {
    dispatch(setModalOpened(false));
    isAddressCreateOpened && dispatch(setAddressOpened(false));
    isDeleteOpened && dispatch(setAddressOpened(false));
  }

  return (
    <Modal
      opened={isModalOpened}
      onClose={handleOnClose}
      title={
        (isDeleteOpened && "Confirmation") ||
        (isAddressCreateOpened && "Create New Address")
      }
      centered
    >
      {isDeleteOpened && <DeleteAddressModal />}
      {isAddressCreateOpened && <CreateAddressModal />}
    </Modal>
  );
}
