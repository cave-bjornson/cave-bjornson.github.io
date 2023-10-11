import cv_json from "../assets/cv_bjorn_agnemo.json";
import { useEffect, useState } from "react";
// import { Octokit } from "@octokit/rest";
import gh_json from "../assets/gh.json";
import routes from "~react-pages";
import { CVBItem } from "./PersonalInfo.tsx";
import { Octokit } from "@octokit/rest";

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
  items: string[] | Item[] | undefined;
}

export interface CVData {
  person: Person;
  drivingLicenses: string[] | undefined;
  techSkills: string[] | undefined;
  languageSkills: LanguageItem[] | undefined;
  educations: EducationItem[] | undefined;
  workEntries: CVBItem[] | undefined;
}

export interface EducationItem {
  school: string;
  course: string;
}

export interface LanguageItem {
  name: string;
  value: number;
  language: null;
}

export type languageTuple = [string, number];

export const useCvData = (): CVData => {
  const cv = cv_json as unknown as Root;
  const person = cv.person;
  const content = cv.content;

  //console.log(cv);

  const cvData: CVData = {
    drivingLicenses: [],
    educations: [],
    languageSkills: [],
    person: person,
    techSkills: [],
    workEntries: [],
  };

  const skillSection = content.find(
    (section) => section.sectionTitle === "Färdigheter"
  );

  const drivingLicenseItem = skillSection?.items?.find(
    (item) => item.itemSideText === "Körkort"
  );

  cvData.drivingLicenses = drivingLicenseItem?.itemTitle.split(", ");

  cvData.techSkills = skillSection?.items
    ?.find((item) => item.itemSideText === "IT")
    ?.itemTitle.split(", ");

  cvData.languageSkills = skillSection?.items
    ?.find((item) => item.itemSideText === "Språk")
    ?.itemTitle.split(", ")
    .map((language): LanguageItem => {
      const split = language.split(" ");
      return {
        name: split[0] as string,
        value: split[1] as unknown as number,
      } as LanguageItem;
    });

  cvData.educations = cv.content
    .find((section) => section.sectionTitle === "Utbildning")
    ?.items?.map((item) => {
      const split = item.itemTitle.split(" -- ");
      const educationItem: EducationItem = {
        course: split[0],
        school: split[1],
      };
      return educationItem;
    });

  const workEntries = cv.content.find(
    (section) => section.sectionTitle === "Arbetslivserfarenheter"
  )?.entries;

  cvData.workEntries = workEntries?.map((entry) => {
    const cvbItem: CVBItem = {
      items: undefined,
      str: undefined,
      title: undefined,
    };
    cvbItem.title = entry.entryTitle;
    if (entry.items?.length === 1) {
      cvbItem.items = entry.items as Item[];
    } else {
      cvbItem.str = entry.items as string[];
    }
    return cvbItem;
  });

  return cvData;
};

export const octokit = new Octokit();

export const useOctokit = (): {
  repos: Array<GithubRepo>;
  loading: boolean;
} => {
  const [repos, setRepos] = useState<Array<GithubRepo>>([]);
  const [ghLoading, setGhLoading] = useState(false);

  useEffect(() => {
    setGhLoading(true);
    (async function onLoad() {
      await octokit.rest.repos
        .listForUser({ username: "cave-bjornson", sort: "created" })
        .then((res) => {
          const filtered = res.data.filter((repo) =>
            repo.topics?.includes("portfolio")
          ) as Array<unknown> as Array<GithubRepo>;
          setRepos(filtered);
          setGhLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setGhLoading(false);
        });
    })();
  }, []);

  return { repos: repos, loading: ghLoading };
};

export const useFakeOctokit = (): Array<GithubRepo> => {
  const [repos, setRepos] = useState<Array<GithubRepo>>([]);

  const gh = gh_json as Array<unknown> as Array<GithubRepo>;

  useEffect(() => {
    const filtered: Array<GithubRepo> = gh.filter(
      (repo: { topics: string | string[] }) => repo.topics.includes("portfolio")
    );
    setRepos(filtered);
  }, [gh]);

  return repos;
};

export const useLinks = () => {
  const blogRoot = routes[0].children?.find((item) => item.path === "blog");

  // console.log(blogRoot);

  return blogRoot?.children;
};

export interface GithubRepo {
  id: number;
  name: string;
  topics: Array<string>;
  description: string;
  html_url: string;
  language: string;
}
