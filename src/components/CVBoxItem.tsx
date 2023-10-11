import { ReactElement } from "react";

export const CVBoxItem = ({
  heading,
  content,
}: {
  heading: string | undefined;
  content: string | ReactElement;
}) => {
  return (
    <div className=" border-b border-black group-last:border-0">
      <div className="font-bold">{heading?.replace("--", "\u2014")}</div>
      <div className="my-4">{content}</div>
    </div>
  );
};
