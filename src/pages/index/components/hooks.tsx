import {
  GithubRepo,
  //useFakeOctokit,
  useOctokit,
} from "../../../components/hooks.tsx";
import portfolio_json from "../../../assets/portfolio.json";
import gh_pictures_json from "../../../assets/gh_pictures.json";
import gh_alias_json from "../../../assets/gh_aliases.json";
export const useGetPortFolioItems = (): Array<PortfolioItem> => {
  const portfolioItems = portfolio_json as Array<PortfolioItem>;
  // const githubRepos = useFakeOctokit();
  const { repos, loading } = useOctokit();
  const githubPictures = gh_pictures_json as Array<string>;
  const githubAliases = gh_alias_json as unknown as {
    [index: string]: { [index: string]: string };
  };

  const repoPortfolioItems: Array<PortfolioItem> = repos.map((repo) => ({
    id: repo.id,
    title:
      repo.name in githubAliases
        ? githubAliases[repo.name].repoTitle
        : repo.name,
    imgUrl: githubPictures.includes(repo.name)
      ? `${repo.name}.png`
      : `https://opengraph.githubassets.com/${1}/cave-bjornson/${repo.name}`,
    description: repo.description ?? "No description",
  }));

  return loading ? [] : [...repoPortfolioItems, ...portfolioItems];
};

export interface PortfolioItem {
  id?: number;
  title: string;
  imgUrl?: string | undefined;
  repo?: GithubRepo | undefined;
  description?: string;
}
