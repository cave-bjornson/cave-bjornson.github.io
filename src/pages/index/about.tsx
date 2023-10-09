import { PersonalInfo } from "../../components/PersonalInfo.tsx";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
import { useCvData } from "../../components/hooks.tsx";
import { ListBox } from "../../components/ListBox.tsx";

const About = () => {
  const { person } = useCvData();

  return (
    <>
      <aside className="lg:basis-1/3 bg-white h-fit mb-4 lg:mb-0">
        <PersonalInfo person={person} />
        <ListBox
          id="interests"
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

export default About;
