import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { RootState } from "../../store";
import OpenModal from "../ModalComponent/OpenModal";

export default function Logout() {
  const dispatch = useDispatch();
  const { type } = useSelector((value: RootState) => value.modalComponent);

  return (
    <>
      {type === "logout" && (
        <OpenModal
          header="Are you sure want to logout"
          btnText="Logout"
          cb={() => dispatch(logout())}
        />
      )}
    </>
  );
}
