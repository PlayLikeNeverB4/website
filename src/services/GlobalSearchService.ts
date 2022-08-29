import { API_URL } from "@/main";
import { PlayerSearchData } from "@/store/globalSearch/types";

export default class GlobalSearchService {
  public async search(search: string): Promise<PlayerSearchData[]> {
    const url = `${API_URL}api/players/global_search?search=${encodeURIComponent(search)}`;

    const players = await fetch(url)
      .then(response => response.json())
      .then(players => players.map((player: any) => ({
        id: player.battleTag,
        name: player.name,
        seasons: player.participatedInSeasons.slice(0, 3),
        personalSetting: player.personalSettings[0],
      })));

    return await players;
  }
}
