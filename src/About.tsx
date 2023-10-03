import { ListBox, PersonalInfo } from "./PersonalInfo.tsx";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import { useCvData } from "./hooks.tsx";

export const About = () => {
  const { person } = useCvData();

  return (
    <>
      <aside>
        <PersonalInfo person={person} />
        <ListBox
          heading="Intressen"
          className="font-bold"
          skills={[
            "Film",
            "TV-Spel",
            "Brädspel",
            "Piano",
            "Orientering",
            "Baka",
            "Laga mat",
          ]}
          icon={<FaceSmileIcon className="h-6 w-6"></FaceSmileIcon>}
        />
      </aside>
      <main></main>
    </>
  );
};
