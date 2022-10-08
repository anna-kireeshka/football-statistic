type Plan = "TIER_FOUR" | "TIER_TWO" | "TIER_THREE" | "TIER_ONE";

export interface LeagueList {
  area: {
    name: string;
  };
  code: string;
  id: number;
  name: string;
  plan: Plan;
}

export interface TeamList {
  address: string;
  area: {
    id: number;
    name: string;
  };
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  phone: string;
  shortName: string;
  tla: string;
  venue: string;
  website: string;
}

export interface TeamCalendar {
  awayTeam: {
    id: number;
    name: string;
  };
  homeTeam: {
    id: number;
    name: string;
  };
  id: number;
  score: {
    fullTime: { homeTeam: number; awayTeam: number };
  };
  status: string;
  utcDate: string;
}

