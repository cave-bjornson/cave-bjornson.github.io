import cv_data from "./assets/cv_bjorn_agnemo.json";
import { Person } from "./PersonalInfo.tsx";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import gh_data from "./assets/gh.json";

export interface Root {
  name: string[];
  occupation: string;
  location: string;
  email: string;
  github: string;
  phone: string;
  content: Section[];
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
  const cv: Root = cv_data;

  const person: Person = {
    email: cv.email,
    github: cv.github,
    location: cv.location,
    name: cv.name.join(" "),
    occupation: cv.occupation,
    phone: cv.phone,
  };

  const skillSection = cv.content.find(
    (section) => section.sectionTitle === "Färdigheter"
  );

  const drivingLicenseItem = skillSection.items?.find(
    (item) => item.itemSideText === "Körkort"
  );

  const drivingLicenses = drivingLicenseItem.itemTitle.split(", ");

  const techSkills = skillSection.items
    .find((item) => item.itemSideText === "IT")
    .itemTitle.split(", ");

  const languageSkills = skillSection.items
    ?.find((item) => item.itemSideText === "Språk")
    .itemTitle.split(", ")
    .map((language) => language.split(" "))
    .reduce((acc, key) => {
      return { ...acc, [key[0]]: key[1] };
    }, {});

  const educations = cv.content
    .find((section) => section.sectionTitle === "Utbildning")
    .items.map((item) => {
      const [course, school] = item.itemTitle.split(" -- ");
      return { course, school };
    });

  const workEntries = cv.content.find(
    (section) => section.sectionTitle === "Arbetslivserfarenheter"
  ).entries;

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

export const useOctokit = () => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    (async function onLoad() {
      await octokit.rest.repos
        .listForUser({ username: "cave-bjornson", sort: "created" })
        .then((res) => {
          const filtered = res.data.filter((repo) =>
            repo.topics?.includes("portfolio")
          );
          setRepos(filtered);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return { repos };
};

export const useFakeOctokit = () => {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const filtered = gh_data.filter((repo) =>
      repo.topics?.includes("portfolio")
    );
    setRepos(filtered);
  }, []);

  return { repos };
};
