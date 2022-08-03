import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import { RootState } from "../../store";

export default function OpenModal({
  children,
  title,
  header,
  cb,
  btnText,
  size,
}: {
  children?: ReactNode;
  title?: string;
  cb?: Function;
  header?: string;
  btnText?: string;
  size?: string;
}) {
  const { isOpen } = useSelector((value: RootState) => value.modalComponent);

  const dispatch = useDispatch();

  function handleConfirm() {
    cb && cb();
    dispatch(closeModal());
  }

  function handleCancel() {
    dispatch(closeModal());
  }

  return (
    <Modal
      opened={isOpen}
      title={title ? title : "Confirmation"}
      onClose={() => dispatch(closeModal())}
      centered
      size={size && size}
    >
      {children ? (
        children
      ) : (
        <Stack>
          <Text>{header}</Text>
          <Group position="right">
            <Button color="red" onClick={handleConfirm} name="submit">
              {btnText ? btnText : "Confirmation"}
            </Button>
            <Button
              color="red"
              variant="outline"
              name="cancel"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Group>
        </Stack>
      )}
    </Modal>
  );
}
