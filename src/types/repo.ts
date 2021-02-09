export type RepoT = {
  html_url: string;
  name: string;
  language: string;
  description: string;
};

export type RepoData = {
  incomplete_results: boolean;
  items: RepoT[];
  total_count: number;
};
