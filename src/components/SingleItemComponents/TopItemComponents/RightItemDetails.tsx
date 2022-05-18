import {
  Box,
  MantineProvider,
  Group,
  Text,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import Matches from "../../../cors/MediaQuery";

function RightItemDetails() {
  const theme = useMantineTheme();
  const stars = [{}, {}, {}, {}, {}];

  const match = Matches();
  return (
    <Box sx={{ marginTop: match.mdMatches ? -20 : "" }}>
      <Box ml={match.mdMatches ? 0 : "xl"}>
        <MantineProvider
          theme={{
            fontFamily: "DM Serif Display, serif",
          }}
        >
          <Text
            weight={500}
            sx={{
              fontSize: "2.1rem",
            }}
          >
            Upholstered Sofa
          </Text>
          <Text mt="md" weight={500}>
            Kyara Upholstered Standard Bed by Zipcode Design
          </Text>
        </MantineProvider>
        <Text
          mt="sm"
          color={theme.colors.dark[3]}
          sx={{
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          fugiat. Quasi blanditiis dolore recusandae voluptatem ut quibusdam
          adipisci, quaerat ea omnis culpa ducimus fugit, dolorem ab. Quam
          voluptatem cumque quos.
        </Text>
        <Group>
          {stars.map((_, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "transparent",
                color: theme.colors.teal[4],
                fontSize: "2.5rem",
                border: "none",
                outline: "none",
                width: "1px",
                marginRight: "14px",
                marginLeft: i === 0 ? "-10px" : "",
              }}
            >
              &#9733;
            </Box>
          ))}
        </Group>
        <MantineProvider
          theme={{
            fontFamily: "DM Serif Display, serif",
          }}
        >
          <Text
            weight={500}
            sx={{
              fontSize: "2rem",
            }}
            mt={match.mdMatches ? "" : "lg"}
          >
            $560
          </Text>
        </MantineProvider>
        <Text size="sm">
          <Text variant="link" component="a">
            5.0
          </Text>{" "}
          review based on 250
        </Text>
        <Text color="dimmed" size="sm" mt={match.mdMatches ? "xs" : "lg"}>
          &#9202; Dispatched in 7 working days
        </Text>
        <Group
          grow
          sx={{
            maxWidth: match.mdMatches ? "100%" : "500px",
          }}
          mt="sm"
        >
          <Button
            leftIcon={
              !match.smMatches && (
                <BsCashCoin style={{ marginTop: "-1px" }} size="20" />
              )
            }
            radius={0}
            color="dark"
            uppercase
            size="lg"
          >
            <Text size="sm">buy now</Text>
          </Button>
          <Button
            leftIcon={
              !match.smMatches && (
                <AiOutlineShoppingCart
                  style={{ marginTop: "-4px" }}
                  size="20"
                />
              )
            }
            variant="outline"
            size="lg"
            color="dark"
            radius={0}
            uppercase
          >
            <Text size="sm">add to cart</Text>
          </Button>
        </Group>
      </Box>
    </Box>
  );
}

export default RightItemDetails;
