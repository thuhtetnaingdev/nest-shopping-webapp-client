import { map, from } from "rxjs";

export class UserOrderBuilder {
  title: string;
  quantity: number;
  color: string;

  constructor(title: string, quantity: number) {
    this.title = title;
    this.quantity = quantity;
    this.color = "white";
  }
}

export class UserOrdersGenerator {
  readonly ordersQuantity: UserOrderBuilder[] = [];
  constructor() {}

  add(createOrdersQuantity: UserOrderBuilder) {
    this.ordersQuantity.push(createOrdersQuantity);
    return this.ordersQuantity;
  }
}

export function $updateColor(userOrderBuilder: UserOrderBuilder[]) {
  const $observer = from(userOrderBuilder).pipe(
    map((order) => {
      switch (order.title) {
        case "Orders Pending":
          order.color = "indigo";
          break;

        case "Cart":
          order.color = "orange";
          break;

        case "Recived Items":
          order.color = "blue";
          break;
      }
      return order;
    })
  );
  return $observer;
}
