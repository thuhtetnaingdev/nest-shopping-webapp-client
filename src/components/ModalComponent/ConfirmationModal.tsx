import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { FC, ReactNode, useState } from "react";

export default function ConfirmationModal({
  children,
  title,
  opened,
  setOpened,
}: {
  children?: ReactNode;
  title?: string;
  opened: boolean;
  setOpened: any;
}) {
  return (
    <Modal
      opened={opened}
      title={title ? title : "Confirmation"}
      onClose={() => setOpened(false)}
    >
      {children ? (
        children
      ) : (
        <Stack>
          <Text>Are you sure want to logout?</Text>
          <Group position="right">
            <Button color="red">Logout</Button>
            <Button color="red" variant="outline">
              Cancel
            </Button>
          </Group>
        </Stack>
      )}
    </Modal>
  );
}
