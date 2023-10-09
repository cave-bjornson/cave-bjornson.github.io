import { ReactElement } from "react";

export const ListBox = ({
  id,
  heading,
  className,
  skills,
  icon,
}: {
  id: string;
  heading: string;
  className: string;
  skills: Array<string | ReactElement | undefined> | undefined;
  icon?: ReactElement;
}) => {
  return (
    <div id={id} className="px-4 py-0.5 border-b border-black last:border-0">
      <div className="flex items-center my-2">
        <span className="mr-4">{icon}</span>
        <span className={className}>{heading}</span>
      </div>
      <ul className="space-y-4 my-4">
        {skills?.map((value, index) => (
          <li className="group" key={index}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
