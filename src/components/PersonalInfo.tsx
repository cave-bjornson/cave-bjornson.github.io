import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { languageTuple, Person } from "./hooks.tsx";

export const PersonalInfo = ({ person }: { person: Person }) => {
  return (
    <div>
      <div className="relative">
        <img src="https://placehold.co/500x333" alt="" />
        <span className="absolute object-left-bottom bottom-1 text-3xl">
          {person.name}
        </span>
      </div>
      <div>
        <ul>
          <li className="flex">
            <BriefcaseIcon className="h-6 w-6" />
            <span className="icon-text">{person.occupation}</span>
          </li>
          <li className="flex">
            <HomeIcon className="h-6 w-6" />
            <span className="icon-text">{person.location}</span>
          </li>
          <li className="flex">
            <EnvelopeIcon className="h-6 w-6"></EnvelopeIcon>
            <span className="icon-text">
              <a href="mailto:bjorn.agnemo@gmail.com">{person.email}</a>
            </span>
          </li>
          <li className="flex">
            <PhoneIcon className="h-6 w-6"></PhoneIcon>
            <span className="icon-text">{person.phone}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ListBox = ({
  heading,
  className,
  skills,
  icon,
}: {
  heading: string;
  className: string;
  skills: Array<string | ReactElement>;
  icon?: ReactElement;
}) => {
  return (
    <div>
      <div className="flex items-center">
        {icon}
        <span className={className}>{heading}</span>
      </div>
      <ul>
        {skills.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export const LanguageBoxItem = ([name, value]: languageTuple) => {
  return (
    <>
      <span className="block">{name}</span>
      <progress max={4} value={value}></progress>
    </>
  );
};

export const CVBoxItem = ({
  heading,
  content,
}: {
  heading: string;
  content: string | ReactElement;
}) => {
  return (
    <>
      <div className="font-bold">{heading}</div>
      <div>{content}</div>
    </>
  );
};

export const CVBoxContent = ({ items }) => {
  return (
    <>
      {items.length === 1 ? (
        <div>{items[0].itemTitle}</div>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index} className="list-inside list-disc">
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
