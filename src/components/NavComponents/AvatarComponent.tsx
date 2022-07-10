import { Avatar, Divider, Menu } from "@mantine/core";
import {
  Logout,
  ShoppingCart,
  TruckDelivery,
  UserCircle,
} from "tabler-icons-react";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../ModalComponent/ConfirmationModal";
import { useState } from "react";

export default function AvatarComponent() {
  const [isOpened, setIsOpened] = useState(false);
  const userDetails = useSelector((value: RootState) => value.userCredentials);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Menu
      control={
        <Avatar src={null} radius="xl" color="cyan">
          {userDetails.user?.firstName[0]}
          {userDetails.user?.lastName[0]}
        </Avatar>
      }
      size="sm"
    >
      <Menu.Label>
        {userDetails.user?.firstName + " " + userDetails.user?.lastName}
      </Menu.Label>
      <Menu.Item
        icon={<UserCircle size={20} strokeWidth={1} color={"black"} />}
        onClick={() => navigate("/profile")}
      >
        Profile
      </Menu.Item>
      <Menu.Item
        icon={<ShoppingCart size={20} strokeWidth={1} color={"black"} />}
        onClick={() => navigate("/user/cart")}
      >
        Cart
      </Menu.Item>
      <Menu.Item
        icon={<TruckDelivery size={20} strokeWidth={1} color={"black"} />}
        onClick={() => navigate("/user/orders")}
      >
        Orders
      </Menu.Item>
      <Divider />
      <Menu.Item
        color="red"
        icon={<Logout size={20} strokeWidth={1} color={"black"} />}
        onClick={() => dispatch(logout())}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
}