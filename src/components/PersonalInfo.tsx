import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Item, Person } from "./hooks.tsx";

export const PersonalInfo = ({ person }: { person: Person }) => {
  return (
    <div id="profile" className="border-b border-black">
      <div id="profile-pic-container" className="relative">
        <img
          src="https://placehold.co/500x333"
          alt=""
          className="w-full align-middle"
        />
        <span className="absolute bottom-4 left-4 font-semibold object-left-bottom text-3xl">
          {`${person.name[0]} ${person.name[1]}`}
        </span>
      </div>
      <div id="profile-info-container" className="h-fit px-4 py-0.5">
        <ul className="space-y-4 my-4">
          <li className="flex">
            <BriefcaseIcon className="h-6 w-6 mr-4" />
            <span className="icon-text">{person.occupation}</span>
          </li>
          <li className="flex">
            <HomeIcon className="h-6 w-6 mr-4" />
            <span className="icon-text">{person.location}</span>
          </li>
          <li className="flex">
            <EnvelopeIcon className="h-6 w-6 mr-4"></EnvelopeIcon>
            <span className="icon-text">
              <a href="mailto:bjorn.agnemo@gmail.com">{person.email}</a>
            </span>
          </li>
          <li className="flex">
            <PhoneIcon className="h-6 w-6 mr-4"></PhoneIcon>
            <span className="icon-text">{person.phone}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const CVBoxContent = ({ content }: { content: CVBItem }) => {
  if (content.items !== undefined && content.items?.length !== 0) {
    return <>{<div>{content.items[0].itemTitle}</div>}</>;
  } else if (content.str !== undefined) {
    return (
      <>
        {
          <ul>
            {content.str.map((val, index) => {
              return (
                <li key={index} className="list-inside list-disc">
                  {val}
                </li>
              );
            })}
          </ul>
        }
      </>
    );
  }
};

export interface CVBItem {
  title: string | undefined;
  items: Item[] | undefined;
  str: string[] | undefined;
}
