import { NavLink } from "react-router-dom";
import {
  BriefcaseIcon,
  FolderIcon,
  UserIcon,
  PencilSquareIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import {
  UserIcon as UserOutlineIcon,
  BriefcaseIcon as BriefCaseOutlineIcon,
  FolderIcon as FolderOutlineIcon,
  PencilSquareIcon as PencilSquareOutlineIcon,
  BeakerIcon as BeakerOutlineIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
export const Nav = () => {
  return (
    <>
      <nav className="flex flex-row justify-center bg-black p-2 text-white">
        <ul
          className="flex w-full max-w-5xl flex-col md:flex-row justify-between pl-4 text-2xl
        font-bold uppercase [&>li>a.active]:underline underline-offset-4"
        >
          <li className="pr-6">
            <NavLink to="about" className="flex items-center">
              {({ isActive }) => (
                <CVLink
                  text="Om Mig"
                  isActive={isActive}
                  activeIcon={<UserIcon className="h-6 w-6" />}
                  inActiveIcon={<UserOutlineIcon className="h-6 w-6" />}
                />
              )}
            </NavLink>
          </li>
          <li className="pr-6">
            <NavLink to="cv" className="flex items-center">
              {({ isActive }) => (
                <CVLink
                  text="CV"
                  isActive={isActive}
                  activeIcon={<BriefcaseIcon className="h-6 w-6" />}
                  inActiveIcon={<BriefCaseOutlineIcon className="h-6 w-6" />}
                />
              )}
            </NavLink>
          </li>
          <li className="pr-6">
            <NavLink to="portfolio" className="flex items-center">
              {({ isActive }) => (
                <CVLink
                  text="Portfolio"
                  isActive={isActive}
                  activeIcon={<FolderIcon className="h-6 w-6" />}
                  inActiveIcon={<FolderOutlineIcon className="h-6 w-6" />}
                />
              )}
            </NavLink>
          </li>
          <li className="pr-6">
            <NavLink to="filler" className="flex items-center">
              {({ isActive }) => (
                <CVLink
                  text="Duck"
                  isActive={isActive}
                  activeIcon={<BeakerIcon className="h-6 w-6" />}
                  inActiveIcon={<BeakerOutlineIcon className="h-6 w-6" />}
                />
              )}
            </NavLink>
          </li>
          <li className="pr-6">
            <NavLink to="blog" className="flex items-center">
              {({ isActive }) => (
                <CVLink
                  text="Blog"
                  isActive={isActive}
                  activeIcon={<PencilSquareIcon className="h-6 w-6" />}
                  inActiveIcon={<PencilSquareOutlineIcon className="h-6 w-6" />}
                />
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export const CVLink = ({
  text,
  isActive,
  activeIcon,
  inActiveIcon,
}: {
  text: string;
  isActive: boolean;
  activeIcon: ReactElement;
  inActiveIcon: ReactElement;
}) => {
  return (
    <>
      <span className="mr-2">{isActive ? activeIcon : inActiveIcon}</span>
      {text}
    </>
  );
};
