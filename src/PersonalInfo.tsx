import {
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { ReactElement } from "react";

export interface Person {
  name: string;
  occupation: string;
  location: string;
  email: string;
  github: string;
  phone: string;
}

export const PersonalInfo = ({
  email,
  location,
  name,
  occupation,
  phone,
}: Person) => {
  return (
    <div>
      <div className="profile-pic-container">
        <img src="https://placehold.co/500x333" alt="" />
        <h2 className="profile-caption">{name}</h2>
      </div>
      <div>
        <ul>
          <li className="flex">
            <BriefcaseIcon className="h-6 w-6" />
            <span className="icon-text">{occupation}</span>
          </li>
          <li className="flex">
            <HomeIcon className="h-6 w-6" />
            <span className="icon-text">{location}</span>
          </li>
          <li className="flex">
            <EnvelopeIcon className="h-6 w-6"></EnvelopeIcon>
            <span className="icon-text">
              <a href="mailto:bjorn.agnemo@gmail.com">{email}</a>
            </span>
          </li>
          <li className="flex">
            <PhoneIcon className="h-6 w-6"></PhoneIcon>
            <span className="icon-text">{phone}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ListBox = ({
  heading,
  skills,
  icon,
}: {
  heading: string;
  skills: Array<string | ReactElement>;
  icon?: ReactElement;
}) => {
  return (
    <div>
      <div className="flex">
        {icon}
        <span className="icon-text">{heading}</span>
      </div>
      <ul>
        {skills.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export const LanguageBoxItem = ({
  language,
  max,
  value,
}: {
  language: string;
  max: number;
  value: number;
}) => {
  return (
    <>
      <span className="block">{language}</span>
      <progress max={max} value={value}></progress>
    </>
  );
};
