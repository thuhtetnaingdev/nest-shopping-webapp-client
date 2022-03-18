import { useMediaQuery } from "@mantine/hooks";
import { MatchesTypes } from "./types/matches.types";

const Matches = (): MatchesTypes => {
  const sdMatches = useMediaQuery("(max-width: 1080px)");
  const smMatches = useMediaQuery("(max-width: 590px)");
  const mdMatches: boolean = useMediaQuery("(max-width: 992px)");
  return { mdMatches, sdMatches, smMatches };
};

export default Matches;
