import { Grid } from "@mantine/core";
import Matches from "../../../cors/MediaQuery";
import sofa1 from "../../../public/images/sofa1.webp";
import sofa2 from "../../../public/images/sofa2.webp";
import sofa3 from "../../../public/images/sofa3.webp";
import sofa4 from "../../../public/images/sofa4.webp";
import LeftItemImage from "./LeftItemImage";
import RightItemDetails from "./RightItemDetails";

export default function Item() {
  const sofas = [sofa1, sofa2, sofa3, sofa4];

  const match = Matches();

  return (
    <Grid gutter="xl">
      <Grid.Col span={match.mdMatches ? 12 : 6}>
        <LeftItemImage sofas={sofas} />
      </Grid.Col>
      <Grid.Col span={match.mdMatches ? 12 : 6}>
        <RightItemDetails />
      </Grid.Col>
    </Grid>
  );
}
