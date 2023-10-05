import cv_data from "../assets/cv_bjorn_agnemo.json";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import gh_json from "../assets/gh.json";
import routes from "~react-pages";

export interface Root {
  person: Person;
  content: Section[];
}

export interface Person {
  email: string;
  github: string;
  location: string;
  name: string[];
  occupation: string;
  phone: string;
}

export interface Section {
  sectionTitle: string;
  items?: Item[];
  entries?: Entry[];
}

export interface Item {
  itemTitle: string;
  itemSideText?: string;
}

export interface Entry {
  entryTitle: string;
  items: string[] | object;
}

export type languageTuple = [string, number];

export const useCvData = () => {
  const cv = cv_data as unknown as Root;
  const { person, content }: { person: Person; content: Section[] } = cv;

  const skillSection = content.find(
    (section) => section.sectionTitle === "Färdigheter"
  );

  const drivingLicenseItem = skillSection?.items?.find(
    (item) => item.itemSideText === "Körkort"
  );

  const drivingLicenses = drivingLicenseItem?.itemTitle.split(", ");

  const techSkills = skillSection?.items
    ?.find((item) => item.itemSideText === "IT")
    ?.itemTitle.split(", ");

  const languageSkills = skillSection?.items
    ?.find((item) => item.itemSideText === "Språk")
    ?.itemTitle.split(", ")
    .map((language) => language.split(" "))
    .reduce((acc, key) => {
      return { ...acc, [key[0]]: key[1] };
    }, {});

  const educations = cv.content
    .find((section) => section.sectionTitle === "Utbildning")
    ?.items?.map((item) => {
      const [course, school] = item.itemTitle.split(" -- ");
      return { course, school };
    });

  const workEntries = cv.content.find(
    (section) => section.sectionTitle === "Arbetslivserfarenheter"
  )?.entries;

  return {
    person,
    drivingLicenses,
    techSkills,
    languageSkills,
    educations,
    workEntries,
  };
};

export const octokit = new Octokit();

// export const useOctokit = () => {
//   const [repos, setRepos] = useState([]);
//
//   useEffect(() => {
//     (async function onLoad() {
//       await octokit.rest.repos
//         .listForUser({ username: "cave-bjornson", sort: "created" })
//         .then((res) => {
//           const filtered = res.data.filter((repo) =>
//             repo.topics?.includes("portfolio")
//           );
//           setRepos(filtered);
//         })
//         .catch((err) => console.log(err));
//     })();
//   }, []);
//
//   return { repos };
// };

export const useFakeOctokit = (): Array<GithubRepo> => {
  const [repos, setRepos] = useState(Array<GithubRepo>);

  const gh = gh_json as Array<unknown> as Array<GithubRepo>;

  useEffect(() => {
    const filtered: Array<GithubRepo> = gh.filter(
      (repo: { topics: string | string[] }) => repo.topics.includes("portfolio")
    );
    setRepos(filtered);
  }, []);

  return repos;
};

export const useLinks = () => {
  const blogRoot = routes[0].children?.find((item) => item.path === "blog");

  // console.log(blogRoot);

  return blogRoot?.children;
};

// export const useFetchPostInfo = () => {
//   const [posts, setPosts] = useState([]);
//   const blogRoot = useLinks();
//
//   useEffect(() => {
//     (async function onLoad() {
//       const postPaths = blogRoot.filter((item) => item.path.length > 0);
//       console.log(postPaths);
//       await Promise.all(
//         postPaths.map((path) => {
//           import("./" `${path.path}.mdx`).then((res) => {
//             console.log(res.title);
//             setPosts([...posts, res.title]);
//           });
//           // .then((res) => {
//           //   //console.log(...posts);
//           //   setPosts([res.title, ...posts]);
//           //})
//           //.catch((err) => console.log(err));
//         })
//       );
//       //console.log(posts);
//     })();
//   }, []);
//
//   return { posts };
//};

interface GithubRepo {
  id: number;
  name: string;
  topics: Array<string>;
}
