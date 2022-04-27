import { Modal, Box } from "@mantine/core";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useDispatch } from "react-redux";
import { closeModel } from "../../features/auth/authModel";

export default function AuthDrawer() {
  //Redux: Open Model
  const { isModelOpen } = useSelector((value: RootState) => value.authModel);
  const dispatch = useDispatch();

  const [clickedLogin, isClickedLogin] = useState<boolean>(true);
  return (
    <Box>
      <Box>
        <Modal
          centered
          size={!clickedLogin ? "lg" : "sm"}
          opened={isModelOpen}
          onClose={() => dispatch(closeModel())}
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
