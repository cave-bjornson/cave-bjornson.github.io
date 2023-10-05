import {
  CVBoxContent,
  CVBoxItem,
  LanguageBoxItem,
  ListBox,
  Person,
  PersonalInfo,
} from "../../components/PersonalInfo.tsx";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import { useCvData } from "../../components/hooks.tsx";

const CV = () => {
  const {
    person,
    drivingLicenses,
    techSkills,
    languageSkills,
    educations,
    workEntries,
  } = useCvData();

  return (
    <>
      <aside>
        <PersonalInfo person={person} />
        <ListBox
          heading="Färdigheter"
          className="font-bold"
          skills={techSkills}
          icon={<StarIcon className="h-6 w-6"></StarIcon>}
        />
        <ListBox
          heading="Språk"
          className="font-bold"
          skills={Object.entries(languageSkills).map((language) => (
            <LanguageBoxItem language={language} />
          ))}
          icon={<GlobeAltIcon className="h-6 w-6" />}
        />
        <ListBox
          heading="Körkort"
          className="font-bold"
          skills={drivingLicenses}
          icon={<TruckIcon className="h-6 w-6"></TruckIcon>}
        />
      </aside>
      <main>
        <ListBox
          heading="Arbetslivserfarenheter"
          className="font-bold text-2xl"
          skills={workEntries.map((work) => (
            <CVBoxItem
              heading={work.entryTitle}
              content={<CVBoxContent items={work.items} />}
            />
          ))}
          icon={<BriefcaseIcon className="h-12 w-12" />}
        />
        <ListBox
          heading="Utbildning"
          className="font-bold text-2xl"
          skills={educations.map((education) => (
            <CVBoxItem heading={education.school} content={education.course} />
          ))}
          icon={<AcademicCapIcon className="h-12 w-12" />}
        />
      </main>
    </>
  );
};

export default CV;
