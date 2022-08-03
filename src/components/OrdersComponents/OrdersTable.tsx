import { Text, Table, Button, Badge, Stack } from "@mantine/core";
import { createSearchParams, useNavigate } from "react-router-dom";
import Matches from "../../cors/MediaQuery";

export default function OrdersTable() {
  const smMatch = Matches().smMatches;
  var ID = function () {
    return "#" + Math.random().toString(36).substr(2, 9);
  };

  const navigate = useNavigate();

  const tableBody = [1, 2, 3, 4, 5].map((_, i) => (
    <tr>
      <td>
        <Stack>
          <Text weight="bold" size={smMatch ? "xs" : "sm"}>
            {ID().toUpperCase()}
          </Text>
          {smMatch && <Text size={smMatch ? "xs" : "sm"}>19.9.2022</Text>}
        </Stack>
      </td>
      {!smMatch && (
        <td>
          <Text>19 - 2 - 2022</Text>
        </td>
      )}
      <td>
        <Badge color="green">pending</Badge>
      </td>
      <td>
        <Text weight="bold" size="sm">
          199.99$
        </Text>
      </td>
      <td>
        <Button
          size="xs"
          radius="xl"
          onClick={() =>
            navigate({
              pathname: `/profile/orders/details`,
              search: createSearchParams({ id: ID() }).toString(),
            })
          }
        >
          View
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Table verticalSpacing="lg" striped fontSize={smMatch ? "xs" : "md"}>
        <thead>
          <tr>
            <th>Order id</th>
            {!smMatch && <th>Date</th>}
            <th>Status</th>
            <th>Total cost</th>
            <th style={{ width: "20%" }}></th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </Table>
    </div>
  );
}
