import { Avatar, Divider, Menu } from "@mantine/core";
import {
  Logout,
  ShoppingCart,
  TruckDelivery,
  UserCircle,
} from "tabler-icons-react";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { UserState } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link, useNavigate } from "react-router-dom";

export default function AvatarComponent(props: { user: UserState }) {
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
        onClick={() => navigate("/user")}
      >
        Profile
      </Menu.Item>
      <Menu.Item
        icon={<ShoppingCart size={20} strokeWidth={1} color={"black"} />}
      >
        Cart
      </Menu.Item>
      <Menu.Item
        icon={<TruckDelivery size={20} strokeWidth={1} color={"black"} />}
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
