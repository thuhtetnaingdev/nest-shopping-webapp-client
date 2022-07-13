import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import OpenModal from "../../ModalComponent/OpenModal";
import Login from "./Login";
import Register from "./Register";

export function AuthModal() {
  const { type } = useSelector((value: RootState) => value.modalComponent);
  return (
    <>
      {type === "login" && (
        <OpenModal title="Login to your account">
          <Login />
        </OpenModal>
      )}
      {type === "register" && (
        <OpenModal title="Create your account">
          <Register />
        </OpenModal>
      )}
    </>
  );
}
