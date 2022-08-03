import {
  Text,
  Grid,
  MantineTheme,
  Stack,
  Group,
  Checkbox,
  Button,
  Box,
  Container,
  ActionIcon,
} from "@mantine/core";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import Matches from "../../cors/MediaQuery";

export default function TotalCash({ total }: { total?: number }) {
  const smMatch = Matches().smMatches;
  const mdMatch = Matches().mdMatches;
  const size = smMatch ? "sm" : "md";
  return (
    <Box
      sx={(theme: MantineTheme) => ({
        backgroundColor: theme.colors.yellow[2],
        width: "100vw",
        height: mdMatch ? "140px" : "170px",
        position: "fixed",
        bottom: 0,
        right: 0,
      })}
    >
      <Container>
        <Grid>
          {!smMatch && (
            <Grid.Col span={6} mt="md">
              <Stack>
                <Group spacing={2}>
                  <Text>Add Note</Text>
                  <ActionIcon variant="transparent">
                    <BiEdit size={15} />
                  </ActionIcon>
                </Group>
                <Group spacing={2}>
                  <Text>Calculate Shipping</Text>
                  <ActionIcon variant="transparent">
                    <FaShippingFast size={17} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Grid.Col>
          )}
          <Grid.Col span={smMatch ? 12 : 6} mt="md">
            <Stack>
              <Group>
                <Text size={size}>Subtotal:</Text>
                <Group>
                  <Text weight="bold" size={size}>
                    {total?.toFixed(2)}$
                  </Text>
                  <Text color="dimmed" size="sm">
                    include 5% tax
                  </Text>
                </Group>
              </Group>
              <Group>
                <Checkbox
                  label="I agree to Terms & Conditions"
                  size={smMatch ? "xs" : "sm"}
                />
              </Group>
              <Group position="right">
                <Button color="dark" radius={0} size={smMatch ? "sm" : "lg"}>
                  <Group spacing={6}>
                    <AiOutlineShoppingCart />
                    <Text size="sm">Checkout</Text>
                  </Group>
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
