import { UserShortT } from "./user";

export type SearchQueryType = { search: string };

export interface HomeData {
  incomplete_results: boolean;
  items: UserShortT[];
  total_count: number;
}
