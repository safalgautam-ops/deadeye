import { fetchPublic } from "./fetch-public";

const TEAM_ID = 437642;

export const CTFTIME_TEAM_URL = `https://ctftime.org/team/${TEAM_ID}`;

type TeamResponse = {
  name: string;
  rating: Record<string, { rating_place?: number; rating_points?: number; country_place?: number }>;
};

export type CtftimeStanding = {
  team: string;
  year: number;
  worldRank: number;
  countryRank: number | null;
  points: number;
};

export async function getCtftimeStanding(): Promise<CtftimeStanding | null> {
  const response = await fetchPublic(`https://ctftime.org/api/v1/teams/${TEAM_ID}/`, "ctftime");
  if (!response) return null;

  const team: TeamResponse = await response.json();
  const year = new Date().getFullYear();
  const season = team.rating[year];
  // Only a rated season has a world place; country places for unrated years are unreliable.
  if (!season?.rating_place || season.rating_points === undefined) return null;

  return {
    team: team.name,
    year,
    worldRank: season.rating_place,
    countryRank: season.country_place ?? null,
    points: season.rating_points,
  };
}
