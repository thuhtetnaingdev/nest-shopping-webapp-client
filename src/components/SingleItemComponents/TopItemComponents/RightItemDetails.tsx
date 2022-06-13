import {
  Box,
  MantineProvider,
  Group,
  Text,
  Button,
  useMantineTheme,
  Skeleton,
} from "@mantine/core";
import { useOs } from "@mantine/hooks";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { useSelector } from "react-redux";
import Matches from "../../../cors/MediaQuery";
import { RootState } from "../../../store";
import RatingStar from "../../RatingStarComponent/RatingStar";

function RightItemDetails() {
  const { item } = useSelector((value: RootState) => value.singleItemStore);
  const theme = useMantineTheme();

  const os = useOs();

  const match = Matches();
  return (
    <Box sx={{ marginTop: match.mdMatches ? -20 : "" }}>
      <Box ml={match.mdMatches ? 0 : "xl"}>
        <MantineProvider
          theme={{
            fontFamily: "DM Serif Display, serif",
          }}
        >
          {!item && <ContentSkeleton />}
          <Text
            weight={500}
            sx={{
              fontSize: "2.1rem",
            }}
          >
            {item?.title}
          </Text>
        </MantineProvider>
        <Text mt="sm" color={theme.colors.dark[3]}>
          {item?.description}
        </Text>
        <Group>
          <RatingStar
            fontSize="2.5rem"
            marginRight={os === "ios" ? "22px" : "14px"}
          />
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
            {item?.price}$
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

const ContentSkeleton = () => {
  return (
    <>
      <Skeleton height={30} />
      <Skeleton height={30} mt={10} />
      <Box mt={30}>
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
        <Skeleton height={8} mt={10} />
      </Box>
      <Box mt="lg">
        <Skeleton height={30} width={150} mt={10} />
        <Skeleton height={30} width={150} mt={50} />
        <Skeleton height={8} width={150} mt={10} />
      </Box>
    </>
  );
};

export default RightItemDetails;
