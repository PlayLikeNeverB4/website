import { EGameMode } from "@/store/typings";
import { Match, MatchDetail } from "../typings";

export type MatchState = {
  matches: Match[];
  allOngoingMatches: Match[];
  matchDetail: MatchDetail;
  page: number;
  totalMatches: number;
  loadingMatchDetail: boolean;
  status: MatchStatus;
  gameMode: EGameMode;
  map: string;
  mmr: number[];
  sort: string;
};

export enum MatchStatus {
  onGoing = "onGoing",
  past = "past",
}

export enum SortMode {
  startTimeDescending = "startTimeDescending",
  mmrDescending = "mmrDescending",
}
