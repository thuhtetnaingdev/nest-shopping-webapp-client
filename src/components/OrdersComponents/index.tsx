import { Container } from "@mantine/core";
import OrdersTable from "./OrdersTable";

export default function OrdersComponent() {
  return (
    <Container size="lg">
      <OrdersTable />
    </Container>
  );
}
