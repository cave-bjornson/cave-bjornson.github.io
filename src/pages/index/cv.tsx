import {
  CVBoxContent,
  CVBoxItem,
  LanguageBoxItem,
  ListBox,
  PersonalInfo,
} from "../../components/PersonalInfo.tsx";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  StarIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";
import { CVData, LanguageItem, useCvData } from "../../components/hooks.tsx";

const CV = () => {
  const cv: CVData = useCvData();

  return (
    <>
      <aside>
        <PersonalInfo person={cv.person} />
        <ListBox
          heading="Färdigheter"
          className="font-bold"
          skills={cv.techSkills}
          icon={<StarIcon className="h-6 w-6"></StarIcon>}
        />
        <ListBox
          heading="Språk"
          className="font-bold"
          skills={cv.languageSkills?.map((langItem: LanguageItem) => (
            <>
              <LanguageBoxItem language={langItem} />
            </>
          ))}
          icon={<GlobeAltIcon className="h-6 w-6" />}
        />
        <ListBox
          heading="Körkort"
          className="font-bold"
          skills={cv.drivingLicenses}
          icon={<TruckIcon className="h-6 w-6"></TruckIcon>}
        />
      </aside>
      <main>
        <ListBox
          heading="Arbetslivserfarenheter"
          className="font-bold text-2xl"
          skills={cv.workEntries?.map((work) => (
            <CVBoxItem
              heading={work.title}
              content={<CVBoxContent content={work} />}
            />
          ))}
          icon={<BriefcaseIcon className="h-12 w-12" />}
        />
        <ListBox
          heading="Utbildning"
          className="font-bold text-2xl"
          skills={cv.educations?.map((education) => (
            <CVBoxItem heading={education.school} content={education.course} />
          ))}
          icon={<AcademicCapIcon className="h-12 w-12" />}
        />
      </main>
    </>
  );
};

export default CV;
