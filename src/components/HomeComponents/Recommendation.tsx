import {
  Box,
  CSSObject,
  Grid,
  Text,
  useMantineTheme,
  Image,
} from "@mantine/core";
import { recommendationData } from "../../cors/data/recommand";
import Matches from "../../cors/MediaQuery";

export default function Recommendation() {
  const theme = useMantineTheme();

  const matches = Matches().sdMatches;

  const smMatches = Matches().smMatches;

  const gridStyle: CSSObject = {
    height: "90px",
    backgroundColor: theme.colors.orange[0],
    display: "flex",
  };

  const boxStyle: {
    leftBox: CSSObject;
    contextHeader: CSSObject;
  } = {
    leftBox: {
      width: "30%",
    },
    contextHeader: {
      fontWeight: "30px",
      fontSize: "1em",
    },
  };

  return (
    <Box mt="sm">
      <Grid>
        {recommendationData.map((data, i) => (
          <Grid.Col span={matches ? 6 : 3} key={i}>
            <Box sx={gridStyle}>
              <Box sx={boxStyle.leftBox} my="auto">
                <Image src={data.image} width={smMatches ? 50 : 60} ml="md" />
              </Box>
              <Box ml="lg" my="auto">
                <Text sx={boxStyle.contextHeader}>{data.title}</Text>
                <Text
                  weight={400}
                  sx={{ display: smMatches ? "none" : "block" }}
                  size="sm"
                >
                  {data.desc}
                </Text>
              </Box>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
