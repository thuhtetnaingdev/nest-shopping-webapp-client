import { Modal, Box } from "@mantine/core";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function AuthDrawer(props: {
  openedModel: boolean;
  setOpenedModel: any;
}) {
  const [clickedLogin, isClickedLogin] = useState<boolean>(true);
  return (
    <Box>
      <Box>
        <Modal
          centered
          size={!clickedLogin ? "lg" : "sm"}
          opened={props.openedModel}
          onClose={() => props.setOpenedModel(false)}
          title={!clickedLogin ? "Create new account" : "Login your account"}
        >
          {!clickedLogin ? (
            <Register isClickedLogin={isClickedLogin} />
          ) : (
            <Login isClickedLogin={isClickedLogin} />
          )}
        </Modal>
      </Box>
    </Box>
  );
}
