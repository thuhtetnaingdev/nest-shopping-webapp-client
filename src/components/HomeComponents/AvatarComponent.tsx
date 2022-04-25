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

export default function AvatarComponent(props: { user: UserState }) {
  const dispatch = useDispatch();
  return (
    <Menu control={<Avatar src={null} radius="xl" />} size="sm">
      <Menu.Label>{props.user.name}</Menu.Label>
      <Menu.Item
        icon={<UserCircle size={20} strokeWidth={1} color={"black"} />}
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
