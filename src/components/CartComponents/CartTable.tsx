import {
  ActionIcon,
  Anchor,
  Box,
  Group,
  Image,
  Table,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Matches from "../../cors/MediaQuery";
import { CartData, Product } from "../../cors/types/CartType";
import { openModal, setType } from "../../features/modalSlice";
import { RootState } from "../../store";
import { IncDec$, remove$ } from "../../utilis/rxjs/cartRxStore";
import OpenModal from "../ModalComponent/OpenModal";

export default function CartTable({ value }: { value: CartData }) {
  const [removeItem, setRemoveItem] = useState<number>(0);

  const { type } = useSelector((value: RootState) => value.modalComponent);
  const dispatch = useDispatch();
  const smMatch = Matches().smMatches;

  const mdMatch = Matches().mdMatches;

  function updateQuantity(productId: number, quantity: number) {
    const initialVal = IncDec$.value;
    const findVal = IncDec$.value.find((prod) => prod.productId === productId);
    if (findVal) {
      const getIndex = IncDec$.value.findIndex(
        (prod) => prod.productId === productId
      );
      initialVal[getIndex].quantity = quantity;
      IncDec$.next(initialVal);
    } else {
      IncDec$.next([...IncDec$.value, { productId, quantity }]);
    }
  }

  function removeHandler() {
    remove$.next([...remove$.value, removeItem]);
  }

  const TableBody =
    value.products &&
    value.products.map((value: Product) => (
      <tr key={value.productId} style={{ flexWrap: "nowrap" }}>
        <td>
          <Image width={smMatch ? 30 : 70} src={value.img} />
        </td>
        <td>
          <Anchor
            weight="bold"
            size="sm"
            color="dark"
            lineClamp={2}
            component={Link}
            to={`/products/${value.productId}`}
          >
            {value.title}
          </Anchor>
          <Text lineClamp={2} size="xs">
            {value.description}
          </Text>
          {mdMatch && (
            <Text size="xs" color="orange">
              {value.price}$
            </Text>
          )}
        </td>
        {!mdMatch && (
          <td>
            <Text weight={600} size="sm">
              {value.price}$
            </Text>
          </td>
        )}
        <td>
          <IncDecBtn
            quantity={value.quantity}
            productId={value.productId}
            updateQuantity={updateQuantity}
          />
        </td>
        <td>
          <Text weight={600} size="sm">
            {value.total?.toFixed(2)}$
          </Text>
        </td>
        <td>
          <ActionIcon
            variant="transparent"
            onClick={() => {
              setRemoveItem(value.productId);
              dispatch(setType({ type: "cartRemove" }));
              dispatch(openModal());
            }}
          >
            <MdOutlineCancel color="red" size={smMatch ? 15 : 20} />
          </ActionIcon>
        </td>
      </tr>
    ));
  return (
    <Box>
      {type === "cartRemove" && (
        <OpenModal
          header="Are you sure sure want to remove this item from your cart?"
          cb={() => removeHandler()}
          btnText="Confirm"
          size="sm"
        />
      )}
      <Table
        horizontalSpacing={smMatch ? "xs" : "xl"}
        fontSize={smMatch ? "xs" : "sm"}
      >
        <thead>
          <tr style={{ flexWrap: "nowrap" }}>
            <th style={{ width: "10%" }}>Image</th>
            <th style={{ width: "40%" }}>Product</th>
            {!mdMatch && <th>Price</th>}
            <th style={{ width: "10%" }}>Quantity</th>
            <th style={{ width: "10%" }}>Total</th>
            <th></th>
          </tr>
        </thead>
        {value.products && <tbody>{TableBody}</tbody>}
      </Table>
    </Box>
  );
}

function IncDecBtn({
  quantity,
  productId,
  updateQuantity,
}: {
  quantity: number;
  productId: number;
  updateQuantity: Function;
}) {
  const smMatch = Matches().smMatches;
  return (
    <Box sx={{ position: "relative" }}>
      <Group
        sx={{
          flexWrap: "nowrap",
          position: "relative",
        }}
        spacing={smMatch ? 3 : 10}
      >
        <ActionIcon
          variant="transparent"
          color="dark"
          size={smMatch ? "xs" : "md"}
          onClick={() =>
            updateQuantity(productId, quantity > 1 ? quantity - 1 : quantity)
          }
        >
          -
        </ActionIcon>
        <Text size="sm">{quantity}</Text>
        <ActionIcon
          variant="transparent"
          color="dark"
          size={smMatch ? "xs" : "md"}
          onClick={() => updateQuantity(productId, quantity + 1)}
        >
          +
        </ActionIcon>
      </Group>
    </Box>
  );
}
