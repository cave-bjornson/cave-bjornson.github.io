import { NavLink } from "react-router-dom";
import { BriefcaseIcon, FolderIcon, UserIcon } from "@heroicons/react/24/solid";
import {
  UserIcon as UserOutlineIcon,
  BriefcaseIcon as BriefCaseOutlineIcon,
  FolderIcon as FolderOutlineIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
export const Nav = () => {
  return (
    <>
      <nav>
        <ul className="lg:flex">
          <li>
            <NavLink to="/" className="flex">
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
          <li>
            <NavLink to="cv" className="flex">
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
          <li>
            <NavLink to="portfolio" className="flex">
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
      {isActive ? activeIcon : inActiveIcon}
      {text}
    </>
  );
};
